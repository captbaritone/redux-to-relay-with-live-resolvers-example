import graphql from "babel-plugin-relay/macro";
import useFragment from "react-relay/lib/relay-hooks/useFragment";
import Link from "./Link";

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
    <Link setFilter={setFilter} active={data.visibility_filter === filter}>
      {children}
    </Link>
  );
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export default connect(null, mapDispatchToProps)(FilterLink);
