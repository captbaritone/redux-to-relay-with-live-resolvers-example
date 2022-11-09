/**
 * @generated SignedSource<<250a2626a0f2b82579296ee1f6a3f9bc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "name": "visibility_filter",
  "args": null,
  "fragment": null,
  "kind": "RelayResolver",
  "storageKey": null
},
v1 = {
  "name": "todos_count",
  "args": null,
  "fragment": null,
  "kind": "RelayResolver",
  "storageKey": null
},
v2 = {
  "name": "completed_todos_count",
  "args": null,
  "fragment": null,
  "kind": "RelayResolver",
  "storageKey": null
};
return {
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
        "name": "visible_todos",
        "args": null,
        "fragment": {
          "kind": "InlineFragment",
          "selections": [
            {
              "kind": "ClientExtension",
              "selections": [
                {
                  "name": "all_todos",
                  "args": null,
                  "fragment": null,
                  "kind": "RelayResolver",
                  "storageKey": null
                },
                (v0/*: any*/)
              ]
            }
          ],
          "type": "Root",
          "abstractKey": null
        },
        "kind": "RelayResolver",
        "storageKey": null
      },
      {
        "kind": "ClientExtension",
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "cacheID": "a86e1a5d02417cf3a1573ede6b647853",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

node.hash = "c2ffb49598436a136b1be75ca1c203a7";

module.exports = node;
