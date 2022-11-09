import React from "react";
import FilterLink from "./FilterLink";
import graphql from "babel-plugin-relay/macro";
import useFragment from "react-relay/lib/relay-hooks/useFragment";

const FILTER_TITLES = {
  ALL: "All",
  ACTIVE: "Active",
  COMPLETED: "Completed",
};

const Footer = ({
  activeFilter,
  setActiveFilter,
  onClearCompleted,
  query: queryKey,
}) => {
  const data = useFragment(
    graphql`
      fragment Footer on Root {
        completed_todos: todos(filter: "COMPLETED") {
          count
        }
        active_todos: todos(filter: "ACTIVE") {
          count
        }
      }
    `,
    queryKey
  );
  const activeCount = data.active_todos.count;
  const itemWord = activeCount === 1 ? "item" : "items";
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || "No"}</strong> {itemWord} left
      </span>
      <ul className="filters">
        {Object.keys(FILTER_TITLES).map((filter) => (
          <li key={filter}>
            <FilterLink
              setActiveFilter={setActiveFilter}
              activeFilter={activeFilter}
              filter={filter}
            >
              {FILTER_TITLES[filter]}
            </FilterLink>
          </li>
        ))}
      </ul>
      {!!data.completed_todos.count && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;
