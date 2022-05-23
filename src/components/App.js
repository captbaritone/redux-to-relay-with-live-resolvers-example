import React from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import useLazyLoadQuery from "react-relay/lib/relay-hooks/useLazyLoadQuery";
import graphql from "babel-plugin-relay/macro";

function App() {
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

export default App;
