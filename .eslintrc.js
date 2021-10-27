//Módulo de configuración de React

module.exports = {
  root: true,
  extends: '@react-native-community',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    strict: 0,
    indent: ['error', 2],
    semi: ['error', 'always'],
  },
};
