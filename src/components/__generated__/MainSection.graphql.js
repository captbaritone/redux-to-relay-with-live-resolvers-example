/**
 * @generated SignedSource<<a239ac1428dd81df0268516859a8f8e3>>
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
          "resolverModule": require('./../../relay/resolvers/Root').todos_count,
          "path": "todosCount"
        },
        {
          "alias": "completedCount",
          "args": null,
          "fragment": null,
          "kind": "RelayLiveResolver",
          "name": "completed_todos_count",
          "resolverModule": require('./../../relay/resolvers/Root').completed_todos_count,
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
