/**
 * @generated SignedSource<<055963650afd69f2b1750c509ddfce8b>>
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
    "name": "storeClearCompletedQuery",
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

node.hash = "c65fabc32a97249a72c6289851b33051";

module.exports = node;
