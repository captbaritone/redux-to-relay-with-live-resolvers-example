/**
 * @generated SignedSource<<4bd226ddbfbf7f7c68dc3daf72a858d4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
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
    "cacheID": "45b902dadb3555c469df635a325839ca",
    "id": null,
    "metadata": {},
    "name": "storeStateQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

node.hash = "03a077b6e67031b2a3f566573cfd60c5";

module.exports = node;
