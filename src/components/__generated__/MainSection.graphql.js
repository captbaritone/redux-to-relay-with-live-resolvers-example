/**
 * @generated SignedSource<<cfa906714d58f571a86ace2aa5abced6>>
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
      "kind": "RelayLiveResolver",
      "name": "completed_todos_count",
      "resolverModule": require('./../../relay/resolvers/RootCompletedTodosCountResolver.js'),
      "path": "completedCount"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TodoList"
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

node.hash = "80ec239c757f3bd401265cd7fed958f4";

module.exports = node;
