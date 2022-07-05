import React, { useState } from "react";
import { render } from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import App from "./components/App";
import LegacyApp from "./legacyComponents/App";
import "todomvc-app-css/index.css";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import RelayEnvironment from "./relay/RelayEnvironment";

function Root() {
  const [legacy, setLegacy] = useState(false);
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <React.Suspense fallback={"Loading..."}>
        <Provider store={store}>
          {legacy ? <LegacyApp /> : <App />}
          <div style={{ paddingTop: 100 }}>
            <label>
              Legacy:{" "}
              <input
                type="checkbox"
                onChange={(e) => setLegacy(e.target.checked)}
              />
            </label>
          </div>
        </Provider>
      </React.Suspense>
    </RelayEnvironmentProvider>
  );
}

render(<Root />, document.getElementById("root"));
