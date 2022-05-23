/**
 * @generated SignedSource<<3a4137786ce6e6487f661998b5b06b93>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "hasClientEdges": true
  },
  "name": "RootCompletedTodosCountResolver",
  "selections": [
    {
      "kind": "ClientEdgeToClientObject",
      "concreteType": "Todo",
      "backingField": {
        "alias": null,
        "args": null,
        "fragment": null,
        "kind": "RelayLiveResolver",
        "name": "all_todos",
        "resolverModule": require('./../RootAllTodosResolver.js'),
        "path": "all_todos"
      },
      "linkedField": {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "all_todos",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "fragment": {
              "args": null,
              "kind": "FragmentSpread",
              "name": "TodoCompletedResolver"
            },
            "kind": "RelayResolver",
            "name": "completed",
            "resolverModule": require('./../TodoCompletedResolver.js'),
            "path": "completed"
          }
        ],
        "storageKey": null
      }
    }
  ],
  "type": "Root",
  "abstractKey": null
};

node.hash = "27e77428f6fe95c4837bf1b9f1cc87fa";

module.exports = node;
