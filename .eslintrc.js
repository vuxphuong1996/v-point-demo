module.exports = {
  // "extends": ["airbnb", "prettier", "prettier/react"],
  // "plugins": ["prettier"],
  // "rules": {
  //   "react/jsx-filename-extension": [
  //     1,
  //     {
  //       "extensions": [".js", ".jsx"]
  //     }
  //   ],
  //   "react/prop-types": 0,
  //   "no-underscore-dangle": 0,
  //   "import/imports-first": ["error", "absolute-first"],
  //   "import/newline-after-import": "error"
  // },
  // "globals": {
  //   "window": true,
  //   "document": true,
  //   "localStorage": true,
  //   "FormData": true,
  //   "FileReader": true,
  //   "Blob": true,
  //   "navigator": true
  // },
  // "parser": "babel-eslint"
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      'experimentalObjectRestSpread': true,
      'experimentalDecorators': true
    }
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  rules: {
    'react/destructuring-assignment': 0,
    "react/prop-types": 0, // mark propTypes as required for components
    "linebreak-style": ["error", "unix"],
    'max-len': ['error', 100],
    'no-underscore-dangle': ['error', {
      allow: ['_id']
    }],
    // 'no-mixed-operators': 'off',
    // 'prefer-destructuring': [
    //   'error',
    //   {
    //     VariableDeclarator: {
    //       array: false,
    //       object: true,
    //     },
    //     AssignmentExpression: {
    //       array: true,
    //       object: false,
    //     },
    //   },
    //   {
    //     enforceForRenamedProperties: false,
    //   },
    // ],
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        printWidth: 100,
        semi: true,
        // endOfLine: 'lf',
        eslintIntegration: false,
        htmlWhitespaceSensitivity: 'css',
        jsxBracketSameLine: false,
        bracketSpacing: false
      },
    ],
  },

};
