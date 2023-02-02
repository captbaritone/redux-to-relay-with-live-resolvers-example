/**
 * @generated SignedSource<<4ffd56dbc17bf09ac79cb24c7af4adc5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "filter",
    "value": "COMPLETED"
  }
],
v1 = {
  "concreteType": "TodoConnection",
  "plural": false,
  "normalizationNode": require('./../../relay/resolvers/__generated__/Root__todos$normalization.graphql')
},
v2 = [
  {
    "alias": null,
    "args": null,
    "fragment": {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TodoConnection____relay_model_instance"
    },
    "kind": "RelayLiveResolver",
    "name": "count",
    "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./../../relay/resolvers/__generated__/TodoConnection____relay_model_instance.graphql'), require('./../../relay/resolvers/TodoConnection').count, '__relay_model_instance', false),
    "path": "count"
  }
],
v3 = [
  {
    "kind": "Literal",
    "name": "filter",
    "value": "ACTIVE"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "hasClientEdges": true
  },
  "name": "Footer",
  "selections": [
    {
      "kind": "ClientEdgeToClientObject",
      "concreteType": "TodoConnection",
      "backingField": {
        "alias": "completed_todos",
        "args": (v0/*: any*/),
        "fragment": null,
        "kind": "RelayResolver",
        "name": "todos",
        "resolverModule": require('relay-runtime/experimental').weakObjectWrapper(require('./../../relay/resolvers/Root').todos, '__relay_model_instance', false),
        "path": "completed_todos",
        "normalizationInfo": (v1/*: any*/)
      },
      "linkedField": {
        "alias": "completed_todos",
        "args": (v0/*: any*/),
        "concreteType": "TodoConnection",
        "kind": "LinkedField",
        "name": "todos",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": "todos(filter:\"COMPLETED\")"
      }
    },
    {
      "kind": "ClientEdgeToClientObject",
      "concreteType": "TodoConnection",
      "backingField": {
        "alias": "active_todos",
        "args": (v3/*: any*/),
        "fragment": null,
        "kind": "RelayResolver",
        "name": "todos",
        "resolverModule": require('relay-runtime/experimental').weakObjectWrapper(require('./../../relay/resolvers/Root').todos, '__relay_model_instance', false),
        "path": "active_todos",
        "normalizationInfo": (v1/*: any*/)
      },
      "linkedField": {
        "alias": "active_todos",
        "args": (v3/*: any*/),
        "concreteType": "TodoConnection",
        "kind": "LinkedField",
        "name": "todos",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": "todos(filter:\"ACTIVE\")"
      }
    }
  ],
  "type": "Root",
  "abstractKey": null
};
})();

node.hash = "6426810e89db6ae8832f3dc6d152e4e6";

module.exports = node;
