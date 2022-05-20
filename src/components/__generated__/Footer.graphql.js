/**
 * @generated SignedSource<<42aa72459e0524783038c58aa94336e9>>
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
      "kind": "RelayLiveResolver",
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
