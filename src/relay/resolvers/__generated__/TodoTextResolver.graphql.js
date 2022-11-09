/**
 * @generated SignedSource<<76d342d472c9c89b4df4ef4a07084340>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoTextResolver",
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

node.hash = "4ca2a9f7428636f8e5db4a69f4ca7341";

module.exports = node;
