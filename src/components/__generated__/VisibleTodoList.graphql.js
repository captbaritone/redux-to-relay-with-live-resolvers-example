/**
 * @generated SignedSource<<e03bab25ee8b33c1b2718cbb5706f2b0>>
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
      "modelResolvers": {
        "Todo": {
          "alias": null,
          "args": null,
          "fragment": {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Todo__id"
          },
          "kind": "RelayLiveResolver",
          "name": "visible_todos",
          "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./../../relay/resolvers/__generated__/Todo__id.graphql'), require('./../../relay/resolvers/Todo').Todo, 'id', true),
          "path": "filteredTodos.__relay_model_instance"
        }
      },
      "backingField": {
        "alias": "filteredTodos",
        "args": null,
        "fragment": null,
        "kind": "RelayLiveResolver",
        "name": "visible_todos",
        "resolverModule": require('./../../relay/resolvers/Root').visible_todos,
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
