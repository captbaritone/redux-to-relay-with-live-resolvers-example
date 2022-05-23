/**
 * @generated SignedSource<<458472d98ee8c402ea23bbc898fa0874>>
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
      (v0/*: any*/)
    ]
  },
  "params": {
    "cacheID": "9c8a2a234e3f29a99027bd93cb8d7f4f",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  dummy_server_field\n  ...MainSection\n}\n\nfragment FilterLink on Root {\n  ...RootVisibilityFilterResolver\n}\n\nfragment Footer on Root {\n  ...RootTodosCountResolver\n  ...RootCompletedTodosCountResolver\n  ...FilterLink\n}\n\nfragment MainSection on Root {\n  ...RootTodosCountResolver\n  ...RootCompletedTodosCountResolver\n  ...VisibleTodoList\n  ...Footer\n}\n\nfragment RootCompletedTodosCountResolver on Root {\n  dummy_server_field\n}\n\nfragment RootTodosCountResolver on Root {\n  dummy_server_field\n}\n\nfragment RootVisibilityFilterResolver on Root {\n  dummy_server_field\n}\n\nfragment RootVisibleTodosResolver on Root {\n  dummy_server_field\n}\n\nfragment VisibleTodoList on Root {\n  ...RootVisibleTodosResolver\n}\n"
  }
};
})();

node.hash = "069a6feda633afa384ccddde43b0c2f5";

module.exports = node;
