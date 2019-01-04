module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
      browser: true,
      jest: true
    },
    "rules": {
      'comma-dangle': ['error', 'never'],
      'object-curly-newline':['off'],
      'import/prefer-default-export': ['off'],
      'import/no-unresolved': ['error', { caseSensitive: false }],
      'react/jsx-filename-extension': ['off'],
      'react/prefer-stateless-function': ['off'],
      'react/forbid-prop-types':['off'],
      'arrow-parens': ['error', 'always'],
      'jsx-a11y/no-static-element-interactions':['off'],
      'jsx-a11y/click-events-have-key-events':['off'],
      'jsx-a11y/anchor-is-valid':['off'],
      'import/no-extraneous-dependencies': '[error, { devDependencies: true }]'
    }
  };