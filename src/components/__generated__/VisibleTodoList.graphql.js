/**
 * @generated SignedSource<<1630994a0a8a1ef32450a49f054a3cd9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "todoFilter"
  }
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "todoFilter"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "hasClientEdges": true
  },
  "name": "VisibleTodoList",
  "selections": [
    {
      "kind": "ClientEdgeToClientObject",
      "concreteType": "TodoConnection",
      "backingField": {
        "alias": null,
        "args": (v0/*: any*/),
        "fragment": null,
        "kind": "RelayResolver",
        "name": "todos",
        "resolverModule": require('relay-runtime/experimental').weakObjectWrapper(require('./../../relay/resolvers/Root').todos, '__relay_model_instance', false),
        "path": "todos",
        "normalizationInfo": {
          "concreteType": "TodoConnection",
          "plural": false,
          "normalizationNode": require('./../../relay/resolvers/__generated__/Root__todos$normalization.graphql')
        }
      },
      "linkedField": {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "TodoConnection",
        "kind": "LinkedField",
        "name": "todos",
        "plural": false,
        "selections": [
          {
            "kind": "ClientEdgeToClientObject",
            "concreteType": "TodoEdge",
            "backingField": {
              "alias": null,
              "args": null,
              "fragment": {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TodoConnection____relay_model_instance"
              },
              "kind": "RelayLiveResolver",
              "name": "edges",
              "resolverModule": require('relay-runtime/experimental').weakObjectWrapperLive(require('relay-runtime/experimental').resolverDataInjector(require('./../../relay/resolvers/__generated__/TodoConnection____relay_model_instance.graphql'), require('./../../relay/resolvers/TodoConnection').edges, '__relay_model_instance', false), '__relay_model_instance', true),
              "path": "edges",
              "normalizationInfo": {
                "concreteType": "TodoEdge",
                "plural": true,
                "normalizationNode": require('./../../relay/resolvers/__generated__/TodoConnection__edges$normalization.graphql')
              }
            },
            "linkedField": {
              "alias": null,
              "args": null,
              "concreteType": "TodoEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "kind": "ClientEdgeToClientObject",
                  "concreteType": "Todo",
                  "backingField": {
                    "alias": null,
                    "args": null,
                    "fragment": {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "TodoEdge____relay_model_instance"
                    },
                    "kind": "RelayResolver",
                    "name": "node",
                    "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./../../relay/resolvers/__generated__/TodoEdge____relay_model_instance.graphql'), require('./../../relay/resolvers/TodoEdge').node, '__relay_model_instance', false),
                    "path": "node"
                  },
                  "linkedField": {
                    "alias": null,
                    "args": null,
                    "concreteType": "Todo",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
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
              "storageKey": null
            }
          }
        ],
        "storageKey": null
      }
    }
  ],
  "type": "Root",
  "abstractKey": null
};
})();

node.hash = "d166dd0744188a6a46b14e38df86ccf2";

module.exports = node;
