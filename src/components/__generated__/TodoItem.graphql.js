/**
 * @generated SignedSource<<757e12b797f08e54bba21818a1858bfb>>
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
      "resolverModule": require('./../../relay/resolvers/Todo').completed,
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
      "resolverModule": require('./../../relay/resolvers/Todo').text,
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
