const fs = require('fs');

const folders = fs
  .readdirSync('src', {withFileTypes: true})
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:boundaries/recommended'],
  plugins: ['simple-import-sort', 'boundaries'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'boundaries/element-types': [
      2,
      {
        default: 'allow',
        rules: [
          {
            from: 'shared',
            disallow: ['entities', 'features', 'pages', 'processes', 'app'],
          },
          {
            from: 'entities',
            disallow: ['features', 'pages', 'processes', 'app'],
          },
          {
            from: 'features',
            disallow: ['pages', 'app'],
          },
          {
            from: 'pages',
            disallow: ['app'],
          },
        ],
      },
    ],
    'boundaries/entry-point': [
      2,
      {
        // disallow all entry-points by default
        default: 'disallow',
        rules: [
          {
            // when importing any modules
            target: [
              'shared',
              'entities',
              'features',
              'pages',
              'processes',
              'app',
            ],
            // only allow index.js
            allow: 'index.{ts,tsx}',
          },
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    'boundaries/elements': [
      {
        type: 'pages',
        pattern: 'pages',
        mode: 'folder',
        capture: ['stack', 'page'],
      },
      {
        type: 'app',
        pattern: 'app',
        mode: 'folder',
        capture: ['slice', 'segment'],
      },
      {
        type: 'entities',
        pattern: 'entities',
        mode: 'folder',
        capture: ['slice', 'segment'],
      },
      {
        type: 'features',
        pattern: 'features',
        mode: 'folder',
        capture: ['slice', 'segment'],
      },
      {
        type: 'shared',
        pattern: 'shared',
        mode: 'folder',
        capture: ['slice', 'segment'],
      },
      {
        type: 'processes',
        pattern: 'processes',
        mode: 'folder',
        capture: ['slice', 'segment'],
      },
    ],
    'boundaries/ignore': ['.eslintrc.js'],
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^\\u0000'],
              ['^react', '^@?\\w'],
              [`^(${folders.join('|')})(/.*|$)`, '^\\.'],
              ['^'],
              ['^\\.'],
            ],
          },
        ],
      },
    },
  ],
};
