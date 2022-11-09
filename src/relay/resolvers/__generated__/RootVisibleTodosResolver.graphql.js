/**
 * @generated SignedSource<<6b1376febc307d763836c3fec111b61a>>
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
  "name": "RootVisibleTodosResolver",
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
        "resolverModule": require('./../Root').all_todos,
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
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "fragment": {
              "args": null,
              "kind": "FragmentSpread",
              "name": "Todo____relay_model_instance"
            },
            "kind": "RelayResolver",
            "name": "completed",
            "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./Todo____relay_model_instance.graphql'), require('./../Todo').completed, '__relay_model_instance', false),
            "path": "completed"
          }
        ],
        "storageKey": null
      }
    },
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "fragment": null,
          "kind": "RelayLiveResolver",
          "name": "visibility_filter",
          "resolverModule": require('./../Root').visibility_filter,
          "path": "visibility_filter"
        }
      ]
    }
  ],
  "type": "Root",
  "abstractKey": null
};

node.hash = "036ad2306f11cb8b03d565f875040413";

module.exports = node;
