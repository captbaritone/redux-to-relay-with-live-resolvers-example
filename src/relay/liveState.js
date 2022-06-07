import store from "../store";
import DB from "../db";

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

// A utility for mapping a Redux selector to a Relay Live Resolver
// LiveState value.
export function selectLiveDB(readDb) {
  function read() {
    return readDb();
  }
  function subscribe(cb) {
    let prev = store.getState().db.tick;
    return store.subscribe(() => {
      const current = store.getState().db.tick;
      if (current !== prev) {
        prev = current;
        cb();
      }
    });
  }
  return { read, subscribe };
}
