/**
 * @generated SignedSource<<5c758c0ef55f80073d15bea70000310d>>
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
    "cacheID": "8be123c902b48b9d0c836280823a460d",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  dummy_server_field\n  ...MainSection\n}\n\nfragment FilterLink on Root {\n  ...RootVisibilityFilterResolver\n}\n\nfragment Footer on Root {\n  ...RootTodosCountResolver\n  ...RootCompletedTodosCountResolver\n  ...FilterLink\n}\n\nfragment MainSection on Root {\n  ...RootTodosCountResolver\n  ...RootCompletedTodosCountResolver\n  ...VisibleTodoList\n  ...Footer\n}\n\nfragment RootAllTodosResolver on Root {\n  dummy_server_field\n}\n\nfragment RootCompletedTodosCountResolver on Root {\n  ...RootAllTodosResolver\n}\n\nfragment RootTodosCountResolver on Root {\n  ...RootAllTodosResolver\n}\n\nfragment RootVisibilityFilterResolver on Root {\n  dummy_server_field\n}\n\nfragment RootVisibleTodosResolver on Root {\n  ...RootAllTodosResolver\n  ...RootVisibilityFilterResolver\n}\n\nfragment VisibleTodoList on Root {\n  ...RootVisibleTodosResolver\n}\n"
  }
};
})();

node.hash = "069a6feda633afa384ccddde43b0c2f5";

module.exports = node;
