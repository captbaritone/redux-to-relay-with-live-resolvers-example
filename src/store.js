import { commitLocalUpdate } from "relay-runtime";
import graphql from "babel-plugin-relay/macro";
import RelayEnvironment from "./relay/RelayEnvironment";
import { SHOW_ALL } from "./constants/TodoFilters";
import {
  ADD_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
  SET_VISIBILITY_FILTER,
  DELETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED,
} from "./constants/ActionTypes";
import { createOperationDescriptor } from "relay-runtime";

const STATE_QUERY = graphql`
  query storeStateQuery {
    FLUX_all_todos {
      id
      text
      completed
    }
    FLUX_visibility_filter
  }
`;

// Implements the Redux store interface, but reads/writes/subscribes to the Relay
// store.
class CompatibilityStore {
  constructor() {
    this._callbacks = [];

    // Relay does not yet have an API for innitializing the default
    // value in client schema extensions, so we'll set the default values
    // using actions:
    this.dispatch({ type: SET_VISIBILITY_FILTER, filter: SHOW_ALL });
    this.dispatch({ type: ADD_TODO, text: "Use R̵e̵d̵u̵x̵ Relay" });

    const operation = createOperationDescriptor(STATE_QUERY, {});
    const snapshot = RelayEnvironment.lookup(operation.fragment);

    // Set initial state
    this._state = this._stateFromQuery(snapshot.data);

    // Subscribe to future states
    this._dispose = RelayEnvironment.subscribe(snapshot, (next) => {
      this._state = this._stateFromQuery(next.data);
      for (const callback of this._callbacks) {
        callback();
      }
    });
  }

  getState = () => {
    return this._state;
  };

  subscribe = (listener) => {
    this._callbacks.push(listener);
    return () => {
      this._callbacks = this._callbacks.filter((cb) => cb !== listener);
    };
  };

  dispatch = (action) => {
    switch (action.type) {
      case SET_VISIBILITY_FILTER: {
        setVisibilityFilter(action.filter);
        break;
      }
      case ADD_TODO: {
        addTodo(action.text);
        break;
      }
      case DELETE_TODO: {
        deleteTodo(action.id);
        break;
      }
      case EDIT_TODO: {
        editTodo(action.id, action.text);
        break;
      }
      case COMPLETE_TODO: {
        completeTodo(action.id);
        break;
      }
      case COMPLETE_ALL_TODOS: {
        completeAllTodos();
        break;
      }
      case CLEAR_COMPLETED: {
        clearCompleted();
        break;
      }
    }
  };

  // Maps a Relay query to the legacy Redux state object
  // shape.
  _stateFromQuery(data) {
    return {
      todos: data.FLUX_all_todos.map((todo) => ({
        text: todo.text,
        id: relayIdToReduxId(todo.id),
        completed: todo.completed,
      })),
      visibilityFilter: data.FLUX_visibility_filter,
    };
  }
}

function relayIdToReduxId(id) {
  // This is to work around the fact that Relay resolvers to client types
  // namespace their IDs. Here we un-prefix them. We need to find a fix for
  // this is Relay itself.
  const regex = /^client:FLUXTodo:(.*)$/;
  if (!regex.test(id)) {
    throw new Error("Expected special client id syntax.");
  }
  return id.replace(regex, "$1");
}

function reduxIdToRelayId(id) {
  return `client:FLUXTodo:${id}`;
}

function setVisibilityFilter(filter) {
  commitLocalUpdate(RelayEnvironment, (store) => {
    const { updatableData } = store.readUpdatableQuery_EXPERIMENTAL(
      graphql`
        query storeVisibilityFilterUpdaterQuery @updatable {
          FLUX_visibility_filter
        }
      `,
      {}
    );
    updatableData.FLUX_visibility_filter = filter;
  });
}

let nextID = 0;

function addTodo(text) {
  commitLocalUpdate(RelayEnvironment, (store) => {
    // readUpdatableQuery_EXPERIMENTAL Does not yet support creating new nodes.
    const root = store.getRoot();
    const dataID = reduxIdToRelayId(String(nextID++));
    const newTodo = store.create(dataID, "FLUXTodo");
    newTodo.setValue(text, "text");
    newTodo.setValue(dataID, "id");
    newTodo.setValue(false, "completed");
    const todos = root.getLinkedRecords("FLUX_all_todos") ?? [];
    root.setLinkedRecords([...todos, newTodo], "FLUX_all_todos");
  });
}

function deleteTodo(id) {
  commitLocalUpdate(RelayEnvironment, (store) => {
    const relayId = reduxIdToRelayId(id);
    const root = store.getRoot();
    const todos = root.getLinkedRecords("FLUX_all_todos") ?? [];
    const newTodos = todos.filter((todo) => todo.getDataID() !== relayId);
    root.setLinkedRecords(newTodos, "FLUX_all_todos");
    store.delete(relayId);
  });
}

// TODO: Should we use an updatable fragment here?
function editTodo(id, text) {
  commitLocalUpdate(RelayEnvironment, (store) => {
    const todo = store.get(id);
    if (todo == null) {
      throw new Error("Tried to reference a non-existent todo");
    }
    todo.setValue(text, "text");
  });
}

// TODO: Should we use an updatable fragment here?
function completeTodo(id) {
  commitLocalUpdate(RelayEnvironment, (store) => {
    const relayId = reduxIdToRelayId(id);
    const todo = store.get(relayId);
    if (todo == null) {
      throw new Error("Tried to reference a non-existent todo");
    }
    const prev = todo.getValue("completed");
    todo.setValue(!prev, "completed");
  });
}

function completeAllTodos(id) {
  commitLocalUpdate(RelayEnvironment, (store) => {
    const { updatableData } = store.readUpdatableQuery_EXPERIMENTAL(
      graphql`
        query storeCompleteAllQuery @updatable {
          FLUX_all_todos {
            completed
          }
        }
      `,
      {}
    );
    const areAllMarked = updatableData.FLUX_all_todos.every(
      (todo) => todo.completed
    );

    for (const todo of updatableData.FLUX_all_todos) {
      todo.completed = !areAllMarked;
    }
  });
}

function clearCompleted(id) {
  commitLocalUpdate(RelayEnvironment, (store) => {
    const { updatableData } = store.readUpdatableQuery_EXPERIMENTAL(
      graphql`
        query storeClearCompletedQuery @updatable {
          FLUX_all_todos {
            completed
          }
        }
      `,
      {}
    );

    // TODO: Delete the records for the completed todos from the store.
    updatableData.FLUX_all_todos = updatableData.FLUX_all_todos.filter(
      (todo) => !todo.completed
    );
  });
}

const store = new CompatibilityStore();

export default store;
