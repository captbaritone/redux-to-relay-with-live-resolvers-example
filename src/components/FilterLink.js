import graphql from "babel-plugin-relay/macro";
import useFragment from "react-relay/lib/relay-hooks/useFragment";
import classnames from "classnames";

import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";

function FilterLink({ query: queryKey, filter, children, setFilter }) {
  const data = useFragment(
    graphql`
      fragment FilterLink on Root {
        visibility_filter
      }
    `,
    queryKey
  );
  return (
    // eslint-disable jsx-a11y/anchor-is-valid
    <a
      className={classnames({ selected: data.visibility_filter === filter })}
      style={{ cursor: "pointer" }}
      onClick={() => setFilter()}
    >
      {children}
    </a>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export default connect(null, mapDispatchToProps)(FilterLink);
