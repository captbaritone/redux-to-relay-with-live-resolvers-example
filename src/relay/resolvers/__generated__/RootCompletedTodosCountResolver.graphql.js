/**
 * @generated SignedSource<<b84c65c5541289973d128fc65470a5dc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RootCompletedTodosCountResolver",
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
            "name": "__typename",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    }
  ],
  "type": "Root",
  "abstractKey": null
};

node.hash = "cd8ec0a1583e7cbb1c1266750b57c8b0";

module.exports = node;
