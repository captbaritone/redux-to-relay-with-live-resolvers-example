import { Environment, Network, RecordSource } from "relay-runtime";
import fetchGraphQL from "./fetchGraphQL";
import { Store } from "relay-runtime";

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay(params, variables) {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  return fetchGraphQL(params.text, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
const env = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
  relayFieldLogger(e) {
    console.warn(e);
  },
  log: console.log.bind(console),
});

window.RelayEnvironment = env;

export default env;
