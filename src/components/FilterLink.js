import classnames from "classnames";

export default function FilterLink({
  activeFilter,
  filter,
  children,
  setActiveFilter,
}) {
  return (
    // eslint-disable jsx-a11y/anchor-is-valid
    <a
      className={classnames({ selected: activeFilter === filter })}
      style={{ cursor: "pointer" }}
      onClick={() => setActiveFilter(filter)}
    >
      {children}
    </a>
  );
}
