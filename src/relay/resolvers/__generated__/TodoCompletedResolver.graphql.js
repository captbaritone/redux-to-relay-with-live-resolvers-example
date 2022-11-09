/**
 * @generated SignedSource<<72655a1df6a0e9c8451fd3be6f5b6239>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoCompletedResolver",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TodoSelfResolver"
      },
      "kind": "RelayLiveResolver",
      "name": "self",
      "resolverModule": require('./../Todo').self,
      "path": "self"
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

node.hash = "6c5e6dadab613171745dc79abb8a0622";

module.exports = node;
