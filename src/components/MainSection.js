import React from "react";
import Footer from "./Footer";
import VisibleTodoList from "./VisibleTodoList";
import { connect } from "react-redux";
import * as TodoActions from "../actions";
import { bindActionCreators } from "redux";
import { getCompletedTodoCount } from "../selectors";

const MainSection = ({ todosCount, completedCount, actions }) => {
  return (
    <section className="main">
      {!!todosCount && (
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todosCount}
            readOnly
          />
          <label onClick={actions.completeAllTodos} />
        </span>
      )}
      <VisibleTodoList />
      {!!todosCount && (
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={actions.clearCompleted}
        />
      )}
    </section>
  );
};

const mapStateToProps = (state) => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
