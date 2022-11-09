/**
 * @generated SignedSource<<04ffd36f8b2bc2800dcc1cf08c17e12c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "concreteType": "TodoConnection",
  "plural": false,
  "normalizationNode": require('./../../relay/resolvers/__generated__/Root__todos$normalization.graphql')
},
v1 = [
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
v2 = [
  {
    "kind": "Literal",
    "name": "filter",
    "value": "COMPLETED"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "hasClientEdges": true
  },
  "name": "MainSection",
  "selections": [
    {
      "kind": "ClientEdgeToClientObject",
      "concreteType": "TodoConnection",
      "backingField": {
        "alias": null,
        "args": null,
        "fragment": null,
        "kind": "RelayResolver",
        "name": "todos",
        "resolverModule": require('relay-runtime/experimental').weakObjectWrapper(require('./../../relay/resolvers/Root').todos, '__relay_model_instance', false),
        "path": "todos",
        "normalizationInfo": (v0/*: any*/)
      },
      "linkedField": {
        "alias": null,
        "args": null,
        "concreteType": "TodoConnection",
        "kind": "LinkedField",
        "name": "todos",
        "plural": false,
        "selections": (v1/*: any*/),
        "storageKey": null
      }
    },
    {
      "kind": "ClientEdgeToClientObject",
      "concreteType": "TodoConnection",
      "backingField": {
        "alias": "completed_todos",
        "args": (v2/*: any*/),
        "fragment": null,
        "kind": "RelayResolver",
        "name": "todos",
        "resolverModule": require('relay-runtime/experimental').weakObjectWrapper(require('./../../relay/resolvers/Root').todos, '__relay_model_instance', false),
        "path": "completed_todos",
        "normalizationInfo": (v0/*: any*/)
      },
      "linkedField": {
        "alias": "completed_todos",
        "args": (v2/*: any*/),
        "concreteType": "TodoConnection",
        "kind": "LinkedField",
        "name": "todos",
        "plural": false,
        "selections": (v1/*: any*/),
        "storageKey": "todos(filter:\"COMPLETED\")"
      }
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
})();

node.hash = "e70247cad71385724caa6089d675d69e";

module.exports = node;
