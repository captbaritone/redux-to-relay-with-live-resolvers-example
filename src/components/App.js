import React from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import useLazyLoadQuery from "react-relay/lib/relay-hooks/useLazyLoadQuery";
import graphql from "babel-plugin-relay/macro";

function App() {
  const query = useLazyLoadQuery(
    graphql`
      query AppQuery {
        # Make Relay happy by adding at least one
        # server field.
        dummy_server_field

        # TODO: Start reading data from Relay
      }
    `
  );
  return (
    <div>
      <Header />
      <MainSection query={query} />
    </div>
  );
}

export default App;
