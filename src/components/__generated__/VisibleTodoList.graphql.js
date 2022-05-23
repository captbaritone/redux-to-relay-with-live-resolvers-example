/**
 * @generated SignedSource<<76b77cef5b8d158e42167b6abaa7118c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "hasClientEdges": true
  },
  "name": "VisibleTodoList",
  "selections": [
    {
      "kind": "ClientEdgeToClientObject",
      "concreteType": "Todo",
      "backingField": {
        "alias": "filteredTodos",
        "args": null,
        "fragment": null,
        "kind": "RelayLiveResolver",
        "name": "visible_todos",
        "resolverModule": require('./../../relay/resolvers/RootVisibleTodosResolver.js'),
        "path": "filteredTodos"
      },
      "linkedField": {
        "alias": "filteredTodos",
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "visible_todos",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TodoItem"
          }
        ],
        "storageKey": null
      }
    }
  ],
  "type": "Root",
  "abstractKey": null
};

node.hash = "8c590cbeec14baf1e51f66fbce780f5f";

module.exports = node;
