module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "import"],
  rules: {
    indent: ["warn", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-undef": 0,
    // "react/prop-types": "off",
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            extensions: ["", ".js", ".jsx"],
          },
        },
      },
    },
    react: {
      version: "detect",
    },
    parser: "@babel/eslint-parser",
    extends: ["airbnb", "airbnb/hooks"],
  },
};
