'use strict';

module.exports = {
    "root": true,
    "extends": "eslint-config-hapi",
    "env": {
        "es6": true,
        "browser": false,
        "node": true,
    },
    "rules": {
        "comma-dangle": ["error", "always-multiline"],
        'space-before-function-paren': [2, { 'anonymous': 'always', 'named': 'always' }],
    },
};
