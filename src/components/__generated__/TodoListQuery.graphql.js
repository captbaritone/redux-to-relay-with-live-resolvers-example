/**
 * @generated SignedSource<<87a6cb941c517ec011c04761e1602bb9>>
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
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListQuery",
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
          "kind": "RelayLiveResolver",
          "name": "visible_todos",
          "resolverModule": require('./../../relay/resolvers/RootVisibleTodosResolver.js'),
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
            (v0/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "TodoItem"
            }
          ],
          "storageKey": null
        }
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoListQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "id",
            "value": "NOPE"
          }
        ],
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": "node(id:\"NOPE\")"
      }
    ]
  },
  "params": {
    "cacheID": "50fa0f7eb8a83535127e7457ab5e430f",
    "id": null,
    "metadata": {},
    "name": "TodoListQuery",
    "operationKind": "query",
    "text": "query TodoListQuery {\n  ...RootVisibleTodosResolver\n}\n\nfragment RootVisibleTodosResolver on Root {\n  node(id: \"NOPE\") {\n    __typename\n    id\n  }\n}\n"
  }
};
})();

node.hash = "d03e70b329f9428b2e2ee60640589bd8";

module.exports = node;
