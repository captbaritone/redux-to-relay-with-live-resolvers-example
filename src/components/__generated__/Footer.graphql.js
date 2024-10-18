/**
 * @generated SignedSource<<13b2222cb2a7118e619f650a911d5314>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Footer",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FilterLink"
    },
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "fragment": null,
          "kind": "RelayLiveResolver",
          "name": "todos_count",
          "resolverModule": require('./../../relay/resolvers/Root').todos_count,
          "path": "todos_count"
        },
        {
          "alias": null,
          "args": null,
          "fragment": null,
          "kind": "RelayLiveResolver",
          "name": "completed_todos_count",
          "resolverModule": require('./../../relay/resolvers/Root').completed_todos_count,
          "path": "completed_todos_count"
        }
      ]
    }
  ],
  "type": "Root",
  "abstractKey": null
};

node.hash = "535026557265b81bdd542813ec09aff9";

module.exports = node;
