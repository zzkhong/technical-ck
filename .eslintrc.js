module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
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
  ],
  rules: {
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          common: './src/common',
          contact: './src/contact',
          editContact: './src/editContact',
          assets: './assets',
        },
      },
    },
  },
};
