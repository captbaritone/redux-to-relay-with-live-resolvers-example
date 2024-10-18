/**
 * @generated SignedSource<<43785c05cc2d726bd7336946e1c1a647>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Todo____relay_model_instance",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Todo__id"
      },
      "kind": "RelayLiveResolver",
      "name": "__relay_model_instance",
      "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./Todo__id.graphql'), require('./../Todo').Todo, 'id', true),
      "path": "__relay_model_instance"
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

module.exports = node;
