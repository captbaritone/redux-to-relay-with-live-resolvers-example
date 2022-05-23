import React from "react";
import { render } from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import App from "./components/App";
import "todomvc-app-css/index.css";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import RelayEnvironment from "./relay/RelayEnvironment";

render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <React.Suspense fallback={"Loading..."}>
      <Provider store={store}>
        <App />
      </Provider>
    </React.Suspense>
  </RelayEnvironmentProvider>,
  document.getElementById("root")
);
