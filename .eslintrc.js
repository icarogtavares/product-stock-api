module.exports = {
  env: {
    node: true,
  },
  plugins: [
    'mocha',
  ],
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'airbnb-base',
  ],
  rules: {
    // eslint-plugin-node
    'node/exports-style': ['error', 'module.exports'],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
    // eslint-plugin-mocha
    'mocha/no-exclusive-tests': 'error',
    'space-before-function-paren': [2, 'always'],
    semi: [2, 'always'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
  },
};
