/**
 * @generated SignedSource<<2ee8dc0a1b96673dd0575bc310f325a2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dummy_server_field",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "name": "__relay_model_instance",
      "args": null,
      "fragment": {
        "kind": "InlineFragment",
        "selections": [
          (v1/*: any*/)
        ],
        "type": "Todo",
        "abstractKey": null
      },
      "kind": "RelayResolver",
      "storageKey": null,
      "isOutputType": false
    }
  ],
  "type": "Todo",
  "abstractKey": null
},
v3 = {
  "name": "todos_count",
  "args": null,
  "fragment": null,
  "kind": "RelayResolver",
  "storageKey": null,
  "isOutputType": true
},
v4 = {
  "name": "completed_todos_count",
  "args": null,
  "fragment": null,
  "kind": "RelayResolver",
  "storageKey": null,
  "isOutputType": true
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      (v0/*: any*/),
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "MainSection"
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      (v0/*: any*/),
      {
        "kind": "ClientEdgeToClientObject",
        "backingField": {
          "name": "visible_todos",
          "args": null,
          "fragment": null,
          "kind": "RelayResolver",
          "storageKey": null,
          "isOutputType": false
        },
        "linkedField": {
          "alias": "filteredTodos",
          "args": null,
          "concreteType": "Todo",
          "kind": "LinkedField",
          "name": "visible_todos",
          "plural": true,
          "selections": [
            (v1/*: any*/),
            {
              "name": "redux_id",
              "args": null,
              "fragment": (v2/*: any*/),
              "kind": "RelayResolver",
              "storageKey": null,
              "isOutputType": true
            },
            {
              "name": "completed",
              "args": null,
              "fragment": (v2/*: any*/),
              "kind": "RelayResolver",
              "storageKey": null,
              "isOutputType": true
            },
            {
              "name": "text",
              "args": null,
              "fragment": (v2/*: any*/),
              "kind": "RelayResolver",
              "storageKey": null,
              "isOutputType": true
            }
          ],
          "storageKey": null
        }
      },
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "name": "visibility_filter",
            "args": null,
            "fragment": null,
            "kind": "RelayResolver",
            "storageKey": null,
            "isOutputType": true
          },
          (v3/*: any*/),
          (v4/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "cacheID": "9d0d08595f50379b1babb89705141ecc",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  dummy_server_field\n}\n"
  }
};
})();

node.hash = "069a6feda633afa384ccddde43b0c2f5";

module.exports = node;
