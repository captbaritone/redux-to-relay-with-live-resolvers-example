/**
 * @generated SignedSource<<12e8316fa51b2fa987ec855d3d7d7b60>>
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
    "name": "storeCompleteAllQuery",
    "selections": [
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
                "name": "completed",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "UpdatableQuery"
};

node.hash = "ec8efd108980d0d1c6c1d51277ea3d95";

module.exports = node;
