/**
 * @generated SignedSource<<9a1de6a31e4be006e22bbe70fc4eabb3>>
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
  "name": "__id",
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
      (v0/*: any*/),
      {
        "kind": "ClientExtension",
        "selections": [
          (v1/*: any*/),
          (v1/*: any*/),
          (v1/*: any*/),
          (v1/*: any*/),
          (v1/*: any*/),
          (v1/*: any*/)
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
