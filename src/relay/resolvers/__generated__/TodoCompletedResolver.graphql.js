/**
 * @generated SignedSource<<a695197c2c433b397f37d601a2a635a4>>
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
      "resolverModule": require('./../TodoSelfResolver.js'),
      "path": "self"
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

node.hash = "6c5e6dadab613171745dc79abb8a0622";

module.exports = node;
