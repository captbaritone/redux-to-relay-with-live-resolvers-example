/**
 * @generated SignedSource<<44d9cb64dc91f7f9a0de3fb97a74d9d7>>
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "VisibleTodoList"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Footer"
    },
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": "todosCount",
          "args": null,
          "fragment": null,
          "kind": "RelayLiveResolver",
          "name": "todos_count",
          "resolverModule": require('./../../relay/resolvers/RootTodosCountResolver.js'),
          "path": "todosCount"
        },
        {
          "alias": "completedCount",
          "args": null,
          "fragment": null,
          "kind": "RelayLiveResolver",
          "name": "completed_todos_count",
          "resolverModule": require('./../../relay/resolvers/RootCompletedTodosCountResolver.js'),
          "path": "completedCount"
        }
      ]
    }
  ],
  "type": "Root",
  "abstractKey": null
};

node.hash = "af8d2da75165661d5831c14de2a8ce7c";

module.exports = node;
