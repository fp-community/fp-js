# fp-js [![CircleCI](https://circleci.com/gh/fp-community/fp-js/tree/development.svg?style=svg)](https://circleci.com/gh/fp-community/fp-js/tree/development)
FP library for JS 


## Intorudction
This project is not deployed yet package manager like NPM

## Discussions
- [ ] Expected Result: Returning `null` or throw exception
- [ ] Compatibility Support: Supporting auto import by setting webpack configuration
- [ ] Lint: Setting husky and lint-staged for checking auto
- [ ] CI: Setting ci like travis and circle configuration for checking specs and expected results.

## Coding Styles - using StandardJS
- **2 spaces** – for indentation
- **Single quotes for strings** – except to avoid escaping
- **No unused variables** – this one catches *tons* of bugs!
- **No semicolons** – [It's][1] [fine.][2] [Really!][3]
  - [More details][4]
- **Space after keywords** `if (condition) { ... }`
- **Space after function name** `function name (arg) { ... }`
- Always use `===` instead of `==` – but `obj == null` is allowed to check `null || undefined`.
- Always handle the node.js `err` function parameter
- Declare browser globals with `/* global */` comment at top of file
  - Prevents accidental use of vaguely-named browser globals like `open`, `length`,
    `event`, and `name`.
  - Example: `/* global alert, prompt */`
  - Exceptions are: `window`, `document`, and `navigator`
## Participation
- slack: https://fp-community.slack.com

## Test
```
$ npm test
```
