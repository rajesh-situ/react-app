# react-app

# Scripts
1. `yarn start` - Will start the webpack dev server for development.
2. `yarn build` - Will bundle the production dist in the `dist` folder.
3. `yarn coverage` -  Will run the tests and open the generated coverage report.
4. `yarn test` - Will run all the tests.
5. `yarn test --watch` or `(npm test -- --watch)` - Will run tests in watch mode.
6. `yarn test -u` or `(npm test -- -u)` - Will update the jest snapshots.

# Notes
1. We will use **yarn** as our package manager for the frontend. (We do not want to manage both package-lock.json and yarn.lock). So please **DO NOT** do **npm install**.
2. Source maps are included in development mode only.
3. Webpack bundle analyzer starts at http://127.0.0.1:8888 in development mode - You can view how much size a module adds to the bundle by going here. Whenever you do **`yarn install`** do open this link to see what is the cost of adding that module.

## Styling
- For styling we will be using styled-components https://www.styled-components.com/
- For variables we will be using CSS variables https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables Check the `styles/variables.js`
