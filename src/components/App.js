import React from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import useLazyLoadQuery from "react-relay/lib/relay-hooks/useLazyLoadQuery";
import graphql from "babel-plugin-relay/macro";
import { onReady, DB } from "../db";

function useDb() {
  if (DB == null) {
    throw onReady;
  }
  return DB;
}

function App() {
  useDb();
  const query = useLazyLoadQuery(
    graphql`
      query AppQuery {
        # Make Relay happy by adding at least one
        # server field.
        dummy_server_field
        ...MainSection
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
