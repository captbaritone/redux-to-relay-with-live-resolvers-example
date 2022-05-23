/**
 * @generated SignedSource<<a72fe0050339478f5409fb1041aaace3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "dummy_server_field",
    "storageKey": null
  },
  {
    "kind": "ClientExtension",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "FLUXTodo",
        "kind": "LinkedField",
        "name": "FLUX_all_todos",
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
            "kind": "ScalarField",
            "name": "text",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "completed",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "FLUX_visibility_filter",
        "storageKey": null
      }
    ]
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "storeStateQuery",
    "selections": (v0/*: any*/),
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "storeStateQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "32630ca76c17fb27a075c9c7cc6171bd",
    "id": null,
    "metadata": {},
    "name": "storeStateQuery",
    "operationKind": "query",
    "text": "query storeStateQuery {\n  dummy_server_field\n}\n"
  }
};
})();

node.hash = "c33126594eaf9c149daf5d0fcf60eff5";

module.exports = node;
