/**
 * @generated SignedSource<<e2b76ba916fc98496bc5fc56eb65f083>>
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
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RootTodosCountResolver"
      },
      "kind": "RelayResolver",
      "name": "todos_count",
      "resolverModule": require('./../../relay/resolvers/RootTodosCountResolver.js'),
      "path": "todos_count"
    },
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RootCompletedTodosCountResolver"
      },
      "kind": "RelayResolver",
      "name": "completed_todos_count",
      "resolverModule": require('./../../relay/resolvers/RootCompletedTodosCountResolver.js'),
      "path": "completed_todos_count"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FilterLink"
    }
  ],
  "type": "Root",
  "abstractKey": null
};

node.hash = "535026557265b81bdd542813ec09aff9";

module.exports = node;
