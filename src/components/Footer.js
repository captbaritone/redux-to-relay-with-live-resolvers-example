import React from "react";
import FilterLink from "./FilterLink";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from "../constants/TodoFilters";
import graphql from "babel-plugin-relay/macro";
import useFragment from "react-relay/lib/relay-hooks/useFragment";

const FILTER_TITLES = {
  [SHOW_ALL]: "All",
  [SHOW_ACTIVE]: "Active",
  [SHOW_COMPLETED]: "Completed",
};

const Footer = ({ onClearCompleted, query: queryKey }) => {
  const data = useFragment(
    graphql`
      fragment Footer on Root {
        todos_count
        completed_todos_count
        ...FilterLink
      }
    `,
    queryKey
  );
  const activeCount = data.todos_count - data.completed_todos_count;
  const itemWord = activeCount === 1 ? "item" : "items";
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || "No"}</strong> {itemWord} left
      </span>
      <ul className="filters">
        {Object.keys(FILTER_TITLES).map((filter) => (
          <li key={filter}>
            <FilterLink filter={filter} query={data}>
              {FILTER_TITLES[filter]}
            </FilterLink>
          </li>
        ))}
      </ul>
      {!!data.completed_todos_count && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;
