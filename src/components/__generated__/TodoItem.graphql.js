/**
 * @generated SignedSource<<4f3bf1f012e47ce61bfb0f4b6ed2ec3b>>
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
      "name": "completed",
      "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./../../relay/resolvers/__generated__/Todo____relay_model_instance.graphql'), require('./../../relay/resolvers/Todo').completed, '__relay_model_instance', false),
      "path": "completed"
    },
    {
      "alias": null,
      "args": null,
      "fragment": (v0/*: any*/),
      "kind": "RelayResolver",
      "name": "text",
      "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./../../relay/resolvers/__generated__/Todo____relay_model_instance.graphql'), require('./../../relay/resolvers/Todo').text, '__relay_model_instance', false),
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

node.hash = "8517b47725e3419758f9773054e4a69a";

module.exports = node;
