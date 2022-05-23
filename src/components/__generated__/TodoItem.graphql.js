/**
 * @generated SignedSource<<413c54698b7d505b278749d32fe76051>>
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
          "alias": null,
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

node.hash = "8517b47725e3419758f9773054e4a69a";

module.exports = node;
