/**
 * @generated SignedSource<<a9da6f01950970227a07ffd19d4cd3fc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Footer",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FilterLink"
    },
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "fragment": null,
          "kind": "RelayLiveResolver",
          "name": "todos_count",
          "resolverModule": require('./../../relay/resolvers/RootTodosCountResolver.js'),
          "path": "todos_count"
        },
        {
          "alias": null,
          "args": null,
          "fragment": null,
          "kind": "RelayLiveResolver",
          "name": "completed_todos_count",
          "resolverModule": require('./../../relay/resolvers/RootCompletedTodosCountResolver.js'),
          "path": "completed_todos_count"
        }
      ]
    }
  ],
  "type": "Root",
  "abstractKey": null
};

node.hash = "535026557265b81bdd542813ec09aff9";

module.exports = node;
