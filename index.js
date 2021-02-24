/**
 * This file includes `eslint` settings that are distributed via the
 * `@allenai/eslint-config-varnish` package and shared amongst many AI2
 * projects.
 *
 * @see https://eslint.org/docs/user-guide/configuring
 */
module.exports = {
    extends: [ "standard", "plugin:prettier/recommended", 'plugin:mdx/recommended' ],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
    },
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        JSX: true,
        React: true,
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
        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': 0,
        'no-restricted-imports': [
            'warn',
            {
                name: 'antd',
                message: `To import X use "import X from 'antd/es/x'"`,
            },
        ],
    },
    overrides: [
        {
            files: ['*.mdx'],
            rules: {
                'react/jsx-no-undef': 0,
                'no-undef': 0,
                '@typescript-eslint/no-unused-vars': 0,
            },
        },
    ],
}
