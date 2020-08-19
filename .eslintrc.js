module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'react-hooks',
    'prettier'
  ],
  rules: {
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "no-underscore-dangle": ["error", { "allow": ["_id", "_div", "_getIconUrl", "_service"] }],
    "global-require": "off",
    "import/no-cycle": "off",
    "react/no-danger": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "object-curly-newline": "off",
    "comma-dangle": ["error", { "functions": "ignore" }]
  },
  "settings": {
    "import/resolver": {
      "alias": [
        ["~", "./src"]
      ]
    }
  }
};
