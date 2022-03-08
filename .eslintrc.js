module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb",
    ],
    "env": {
        "browser": true
      },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "rules": {
        "import/no-named-as-default": "off",
        "linebreak-style": "off",
        "react/forbid-prop-types": [false, { forbid: ['off'], checkContextTypes: false, checkChildContextTypes: false }],
        "react/jsx-pascal-case": [0, { allowAllCaps: true, allowNamespace: true, allowLeadingUnderscore: false }],
        "react/jsx-filename-extension": [
            2,
            {
              "extensions": [
                ".js",
                ".jsx"
              ]
            }
        ]
    }
};