/**
 * @generated SignedSource<<2181dbe32095a37262ee0830f55f56f6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoItemQuery",
    "selections": [
      {
        "kind": "ClientEdgeToClientObject",
        "concreteType": "Todo",
        "backingField": {
          "alias": null,
          "args": (v1/*: any*/),
          "fragment": {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RootTodoResolver"
          },
          "kind": "RelayResolver",
          "name": "todo",
          "resolverModule": require('./../../relay/resolvers/RootTodoResolver.js'),
          "path": "todo"
        },
        "linkedField": {
          "alias": null,
          "args": (v1/*: any*/),
          "concreteType": "Todo",
          "kind": "LinkedField",
          "name": "todo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "fragment": {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TodoReduxIdResolver"
              },
              "kind": "RelayResolver",
              "name": "redux_id",
              "resolverModule": require('./../../relay/resolvers/TodoReduxIdResolver.js'),
              "path": "redux_id"
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
              "resolverModule": require('./../../relay/resolvers/TodoCompletedResolver.js'),
              "path": "completed"
            },
            {
              "alias": null,
              "args": null,
              "fragment": {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TodoTextResolver"
              },
              "kind": "RelayResolver",
              "name": "text",
              "resolverModule": require('./../../relay/resolvers/TodoTextResolver.js'),
              "path": "text"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoItemQuery",
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "node(id:\"NOPE\")"
      }
    ]
  },
  "params": {
    "cacheID": "f80a261a4380c89b47a30e5ac329cfcd",
    "id": null,
    "metadata": {},
    "name": "TodoItemQuery",
    "operationKind": "query",
    "text": "query TodoItemQuery {\n  ...RootTodoResolver\n}\n\nfragment RootTodoResolver on Root {\n  node(id: \"NOPE\") {\n    __typename\n    id\n  }\n}\n"
  }
};
})();

node.hash = "e048f486e572df297805ad1953732545";

module.exports = node;
