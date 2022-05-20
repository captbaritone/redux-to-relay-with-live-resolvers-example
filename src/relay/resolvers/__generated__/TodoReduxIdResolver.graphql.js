/**
 * @generated SignedSource<<e608c79734e7148f97bc2a7360cc62b1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoReduxIdResolver",
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

node.hash = "15e354633efb6674f75eb99529490bcb";

module.exports = node;
