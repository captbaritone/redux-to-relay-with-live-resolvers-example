import React from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import useLazyLoadQuery from "react-relay/lib/relay-hooks/useLazyLoadQuery";
import graphql from "babel-plugin-relay/macro";
import { onReady, DB } from "../db";

function App() {
  useDb();
  const [todoFilter, setActiveFilter] = React.useState("ALL");
  const query = useLazyLoadQuery(
    graphql`
      query AppQuery($todoFilter: String!) {
        ...MainSection
      }
    `,
    { todoFilter }
  );
  return (
    <div>
      <Header />
      <MainSection
        query={query}
        activeFilter={todoFilter}
        setActiveFilter={setActiveFilter}
      />
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
