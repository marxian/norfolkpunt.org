/* eslint-env node */
module.exports = {
  extends: ['react'],
  rules: {
    semi: 0,
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2],
    'react/prop-types': 0,
    'prefer-reflect': 0,
    'space-before-function-paren': 0,
  },
  globals: {
    graphql: false,
  },
}
