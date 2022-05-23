import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import { getVisibilityFilter } from "../selectors";

const Link = ({ active, children, setFilter }) => {
  return (
    // eslint-disable jsx-a11y/anchor-is-valid
    <a
      className={classnames({ selected: active })}
      style={{ cursor: "pointer" }}
      onClick={() => setFilter()}
    >
      {children}
    </a>
  );
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === getVisibilityFilter(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
