import {
  Environment,
  Network,
  RecordSource,
  RelayFeatureFlags,
} from "relay-runtime";
import fetchGraphQL from "./fetchGraphQL";
import LiveResolverStore from "relay-runtime/lib/store/experimental-live-resolvers/LiveResolverStore";

RelayFeatureFlags.ENABLE_CLIENT_EDGES = true;
RelayFeatureFlags.ENABLE_RELAY_RESOLVERS = true;

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
  store: new LiveResolverStore(new RecordSource()),
  requiredFieldLogger(e) {
    console.warn(e);
  },
  log: console.log.bind(console),
});

window.RelayEnvironment = env;

export default env;
