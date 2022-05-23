/**
 * @generated SignedSource<<d3814d700270ef3ec96b4fe9271eb669>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoItem",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TodoCompletedResolver"
      },
      "kind": "RelayResolver",
      "name": "completed",
      "resolverModule": require('./../../relay/resolvers/TodoCompletedResolver.js'),
      "path": "completed"
    },
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TodoTextResolver"
      },
      "kind": "RelayResolver",
      "name": "text",
      "resolverModule": require('./../../relay/resolvers/TodoTextResolver.js'),
      "path": "text"
    },
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": "redux_id",
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

node.hash = "044b9dbef6b68d05fd7a8bbefb9c18db";

module.exports = node;
