/**
 * @generated SignedSource<<2334c5d5f4f54b83664c82e32c5d9d85>>
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
  "name": "visibility_filter",
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "completed",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": {
      "hasClientEdges": true
    },
    "name": "storeStateQuery",
    "selections": [
      {
        "kind": "InlineDataFragmentSpread",
        "name": "selectorsGetVisibilityFilter",
        "selections": [
          {
            "kind": "ClientExtension",
            "selections": [
              (v0/*: any*/)
            ]
          }
        ]
      },
      {
        "kind": "InlineDataFragmentSpread",
        "name": "selectorsGetVisibleTodos",
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
                "name": "RootVisibleTodosResolver"
              },
              "kind": "RelayResolver",
              "name": "visible_todos",
              "resolverModule": require('./../relay/resolvers/RootVisibleTodosResolver.js'),
              "path": "visible_todos"
            },
            "linkedField": {
              "alias": null,
              "args": null,
              "concreteType": "Todo",
              "kind": "LinkedField",
              "name": "visible_todos",
              "plural": true,
              "selections": [
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "text",
                  "storageKey": null
                },
                (v2/*: any*/)
              ],
              "storageKey": null
            }
          }
        ]
      },
      {
        "kind": "InlineDataFragmentSpread",
        "name": "selectorsGetCompletedTodoCount",
        "selections": [
          {
            "alias": null,
            "args": null,
            "fragment": {
              "args": null,
              "kind": "FragmentSpread",
              "name": "RootCompletedTodosCountResolver"
            },
            "kind": "RelayResolver",
            "name": "completed_todos_count",
            "resolverModule": require('./../relay/resolvers/RootCompletedTodosCountResolver.js'),
            "path": "completed_todos_count"
          }
        ]
      },
      {
        "kind": "InlineDataFragmentSpread",
        "name": "selectorsGetTodoCount",
        "selections": [
          {
            "alias": null,
            "args": null,
            "fragment": {
              "args": null,
              "kind": "FragmentSpread",
              "name": "RootTodosCountResolver"
            },
            "kind": "RelayResolver",
            "name": "todos_count",
            "resolverModule": require('./../relay/resolvers/RootTodosCountResolver.js'),
            "path": "todos_count"
          }
        ]
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "storeStateQuery",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "all_todos",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
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
        ]
      }
    ]
  },
  "params": {
    "cacheID": "45b902dadb3555c469df635a325839ca",
    "id": null,
    "metadata": {},
    "name": "storeStateQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

node.hash = "df1e64577d74a936e4f38a7cda437222";

module.exports = node;
