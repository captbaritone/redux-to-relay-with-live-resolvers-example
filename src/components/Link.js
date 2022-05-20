import React from "react";
import classnames from "classnames";

const Link = ({ active, children, setFilter }) => (
  // eslint-disable jsx-a11y/anchor-is-valid
  <a
    className={classnames({ selected: active })}
    style={{ cursor: "pointer" }}
    onClick={() => setFilter()}
  >
    {children}
  </a>
);

export default Link;
