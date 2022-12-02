module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "prettier",
    "plugin:react-hooks/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["react", "react-hooks", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/jsx-uses-react": 1,
    "react/react-in-jsx-scope": 0,
    "no-unused-expressions": [
      "error",
      { allowShortCircuit: true, allowTernary: true },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "no-underscore-dangle": 0,
    "no-restricted-syntax": 1,
    "import/prefer-default-export": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/require-default-props": [
      0,
      { forbidDefaultForRequired: false, ignoreFunctionalComponents: false },
    ],
    "react/prop-types": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "react/jsx-props-no-spreading": 0,
    "jsx-a11y/aria-role": [
      0,
      {
        ignoreNonDOM: false,
      },
    ],
    "jsx-a11y/no-static-element-interactions": [
      0,
      {
        handlers: [
          "onClick",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp",
        ],
      },
    ],
    "jsx-a11y/anchor-is-valid": [2, { components: [] }],
    "jsx-a11y/click-events-have-key-events": 0,

    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    react: {
      version: "16.13.0",
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
        moduleDirectory: ["src", "node_modules"],
      },
    },
  },
};
