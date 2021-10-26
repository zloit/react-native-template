# :space_invader: React Native Template

> Clean and minimalist React Native template for a quick start with TypeScript.

## :star: Features

- Elegant usage directly within the [React Native CLI](https://github.com/react-native-community/cli)
- Consistent with the default React Native template
- Minimal additional dependencies
## :white_check_mark: Included

- pre-commit-hooks by [husky v6](https://typicode.github.io/husky/)
- [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer)
- autofixable import sorting with [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
- [compose-function](https://www.npmjs.com/package/compose-function) for providers composing
- [eslint-plugin-boundaries](https://github.com/javierbrea/eslint-plugin-boundaries) for [layer order](https://feature-sliced.design/en/docs/concepts/app-splitting/#layer-order) and [public API](https://feature-sliced.design/en/docs/concepts/public-api)
- [react-navigation v6](https://reactnavigation.org/docs/hello-react-navigation/) with typed initital structure
- Path aliases for [feature-sliced](https://feature-sliced.design/) architecture:

## ▶️ Usage

```sh
npx react-native init MyApp --template zloit/react-native-template
```

## 📘 Aliases

| Alias     | Path            |
| --------- |:---------------:|
| app      | ./src/app/      |
| processes| ./src/processes/|
| pages    | ./src/pages/    |
| features | ./src/features/ |
| entities | ./src/entities/ |
| shared   | ./src/shared/   |

## :warning: React Native CLI

This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`) for the below command to work. If you wish to not use `npx`, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

If you tried the above and still get the react-native-template-react- native-template-typescript: Not found error, please try adding the `--ignore-existing` flag to [force npx to ignore](https://github.com/npm/npx#description) any locally installed versions of the CLI and use the latest.

Further information can be found here: https://github.com/react-native-community/cli#about

## :bookmark: License

This project is [MIT](LICENSE) licensed.
