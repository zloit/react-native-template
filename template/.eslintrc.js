const fs = require('fs');

const folders = fs
  .readdirSync('src', {withFileTypes: true})
  .filter(dirent => dirent.isDirectory())
  .map(dirent => '@' + dirent.name);

module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
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
