import React from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import useLazyLoadQuery from "react-relay/lib/relay-hooks/useLazyLoadQuery";
import graphql from "babel-plugin-relay/macro";
import { onReady, DB } from "../db";
function App() {
  useDb();
  const query = useLazyLoadQuery(
    graphql`
      query AppQuery {
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

// Suspend until the database is ready.
function useDb() {
  if (DB == null) {
    throw onReady;
  }
  return DB;
}

export default App;
