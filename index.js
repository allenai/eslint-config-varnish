/**
 * This file includes `eslint` settings that are distributed via the
 * `@allenai/eslint-config-varnish` package and shared amongst many AI2
 * projects.
 *
 * @see https://eslint.org/docs/user-guide/configuring
 */
module.exports = {
    extends: [ "standard", "plugin:prettier/recommended" ],
    env: {
        browser: true,
        es6: true
    },
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        sourceType: "module"
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    rules: {
        "prettier/prettier": [
            "error",
            {
                printWidth: 100,
                tabWidth: 4,
                singleQuote: true,
                jsxBracketSameLine: true,
                jsxSingleQuote: false
            }
        ],
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: false,
                argsIgnorePattern: "^_"
            }
        ],
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",
        // https://github.com/typescript-eslint/typescript-eslint/issues/2502
        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': 1,
    }
}
