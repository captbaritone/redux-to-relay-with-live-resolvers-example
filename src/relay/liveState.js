import store from "../store";

// A utility for mapping a Redux selector to a Relay Live Resolver
// LiveState value.
export function selectLiveState(selector) {
  function read() {
    return selector(store.getState());
  }
  function subscribe(cb) {
    let prevValue = read();
    return store.subscribe(() => {
      const newValue = read();
      if (newValue !== prevValue) {
        prevValue = newValue;
        cb();
      }
    });
  }
  return { read, subscribe };
}
