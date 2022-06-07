/**
 * @generated SignedSource<<5a9ce4e5fa4ea9de8cde8f93659e80da>>
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
      "kind": "RelayLiveResolver",
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
