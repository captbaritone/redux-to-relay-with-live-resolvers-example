/**
 * @generated SignedSource<<bf50596bc7a5b31d178cb797c57782f1>>
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
        "name": "TodoReduxIdResolver"
      },
      "kind": "RelayResolver",
      "name": "redux_id",
      "resolverModule": require('./../../relay/resolvers/TodoReduxIdResolver.js'),
      "path": "redux_id"
    },
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
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

node.hash = "971743ba8a1710896589e456511374c1";

module.exports = node;
