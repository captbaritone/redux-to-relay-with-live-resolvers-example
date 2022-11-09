/**
 * @generated SignedSource<<9cf9dcff0a87da2ce723dfde07ef3325>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "todoFilter"
  }
],
v1 = {
  "name": "todos",
  "args": [
    {
      "kind": "Literal",
      "name": "filter",
      "value": "COMPLETED"
    }
  ],
  "fragment": null,
  "kind": "RelayResolver",
  "storageKey": "todos(filter:\"COMPLETED\")"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "MainSection"
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "name": "todos",
            "args": [
              {
                "kind": "Variable",
                "name": "filter",
                "variableName": "todoFilter"
              }
            ],
            "fragment": null,
            "kind": "RelayResolver",
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "name": "todos",
            "args": [
              {
                "kind": "Literal",
                "name": "filter",
                "value": "ACTIVE"
              }
            ],
            "fragment": null,
            "kind": "RelayResolver",
            "storageKey": "todos(filter:\"ACTIVE\")"
          },
          {
            "name": "todos",
            "args": null,
            "fragment": null,
            "kind": "RelayResolver",
            "storageKey": null
          },
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "cacheID": "a86e1a5d02417cf3a1573ede6b647853",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

node.hash = "9a6c446a070f2c734ef27279a1903082";

module.exports = node;
