/**
 * @generated SignedSource<<1ea387175f278dcc1857cf615f846817>>
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

node.hash = "d4a294ea5c5d19532d2ef1072d1143aa";

module.exports = node;
