import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

function db(state = { tick: 0 }, action) {
  switch (action.type) {
    case "TICK":
      return { tick: state.tick + 1 };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  db,
});

export default rootReducer;
