/**
 * @generated SignedSource<<c702288c54a8cb4a7cb65f9c9b0c34a9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RootVisibleTodosResolver",
  "selections": [
    {
      "kind": "ClientEdgeToClientObject",
      "concreteType": "Todo",
      "backingField": {
        "alias": null,
        "args": null,
        "fragment": {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RootAllTodosResolver"
        },
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
    },
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RootVisibilityFilterResolver"
      },
      "kind": "RelayLiveResolver",
      "name": "visibility_filter",
      "resolverModule": require('./../RootVisibilityFilterResolver.js'),
      "path": "visibility_filter"
    }
  ],
  "type": "Root",
  "abstractKey": null
};

node.hash = "036ad2306f11cb8b03d565f875040413";

module.exports = node;
