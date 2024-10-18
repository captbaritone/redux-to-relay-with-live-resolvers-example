/**
 * @generated SignedSource<<551cfeedcf165b45ae91cf8df4f4d65a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "Todo____relay_model_instance"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoItem",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": (v0/*: any*/),
      "kind": "RelayResolver",
      "name": "redux_id",
      "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./../../relay/resolvers/__generated__/Todo____relay_model_instance.graphql'), require('./../../relay/resolvers/Todo').redux_id, '__relay_model_instance', true),
      "path": "redux_id"
    },
    {
      "alias": null,
      "args": null,
      "fragment": (v0/*: any*/),
      "kind": "RelayResolver",
      "name": "completed",
      "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./../../relay/resolvers/__generated__/Todo____relay_model_instance.graphql'), require('./../../relay/resolvers/Todo').completed, '__relay_model_instance', true),
      "path": "completed"
    },
    {
      "alias": null,
      "args": null,
      "fragment": (v0/*: any*/),
      "kind": "RelayResolver",
      "name": "text",
      "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./../../relay/resolvers/__generated__/Todo____relay_model_instance.graphql'), require('./../../relay/resolvers/Todo').text, '__relay_model_instance', true),
      "path": "text"
    },
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "Todo",
  "abstractKey": null
};
})();

node.hash = "fc5eacf7ab8361c0826d3c6152919e13";

module.exports = node;
