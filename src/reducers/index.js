// We don't have a reactive database. Instead we fake it with state that
// increments a counter every time a new message is added. Each SQL query
// is then recomputed on each state change.
function reducer(state = { tick: 0 }, action) {
  switch (action.type) {
    case "TICK":
      return { tick: state.tick + 1 };
    default:
      return state;
  }
}
export default reducer;
