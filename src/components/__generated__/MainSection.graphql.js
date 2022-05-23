/**
 * @generated SignedSource<<0bf596893f9ffc7a38dca79d9b05a510>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MainSection",
  "selections": [
    {
      "alias": "todosCount",
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RootTodosCountResolver"
      },
      "kind": "RelayResolver",
      "name": "todos_count",
      "resolverModule": require('./../../relay/resolvers/RootTodosCountResolver.js'),
      "path": "todosCount"
    },
    {
      "alias": "completedCount",
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RootCompletedTodosCountResolver"
      },
      "kind": "RelayResolver",
      "name": "completed_todos_count",
      "resolverModule": require('./../../relay/resolvers/RootCompletedTodosCountResolver.js'),
      "path": "completedCount"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "VisibleTodoList"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Footer"
    }
  ],
  "type": "Root",
  "abstractKey": null
};

node.hash = "af8d2da75165661d5831c14de2a8ce7c";

module.exports = node;
