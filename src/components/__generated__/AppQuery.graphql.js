/**
 * @generated SignedSource<<c346f30c7411cba4098e7f9e0313e6c1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
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
    "cacheID": "f52197fe8c83b44e9b36dfa7ed0d7d7c",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  ...MainSection\n}\n\nfragment FilterLink on Root {\n  ...RootVisibilityFilterResolver\n}\n\nfragment Footer on Root {\n  ...RootTodosCountResolver\n  ...RootCompletedTodosCountResolver\n  ...FilterLink\n}\n\nfragment MainSection on Root {\n  ...RootTodosCountResolver\n  ...RootCompletedTodosCountResolver\n  ...TodoList\n  ...Footer\n}\n\nfragment RootAllTodosResolver on Root {\n  node(id: \"NOPE\") {\n    __typename\n    id\n  }\n}\n\nfragment RootCompletedTodosCountResolver on Root {\n  ...RootAllTodosResolver\n}\n\nfragment RootTodosCountResolver on Root {\n  ...RootAllTodosResolver\n}\n\nfragment RootVisibilityFilterResolver on Root {\n  ...RootAllTodosResolver\n}\n\nfragment RootVisibleTodosResolver on Root {\n  node(id: \"NOPE\") {\n    __typename\n    id\n  }\n}\n\nfragment TodoList on Root {\n  ...RootVisibleTodosResolver\n}\n"
  }
};

node.hash = "c2ffb49598436a136b1be75ca1c203a7";

module.exports = node;
