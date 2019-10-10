# ESLint Config

The files in this directory represent the `eslint` configuration settings
for Varnish.

They're packaged as such so that they can be published as a separate NPM module,
`@allenai/eslint-config-varnish`. This allows them to be shared easily
across multiple AI2 projects.

For more information about publishing and using shared `eslint` configuration
definitions, see [this documentation](https://eslint.org/docs/user-guide/configuring).

## Usage

1. Install it and it's peer dependencies:

    ```shell
    ~ yarn add @allenai/eslint-config-varnish \
        @typescript-eslint/eslint-plugin \
        @typescript-eslint/parser \
        eslint \
        eslint-config-prettier \
        eslint-config-standard \
        eslint-plugin-import \
        eslint-plugin-node \
        eslint-plugin-prettier \
        eslint-plugin-promise \
        eslint-plugin-react \
        eslint-plugin-standard \
        prettier
    ```

2. Create a file with patterns specifying stuff you'd like to ignore:

    ```bash
    ~ cat <<EOF > .eslintignore
    .next/
    node_modules/
    package.json
    tsconfig.json
    EOF
    ```

3. Create a config file, and configure `eslint` to use this package as a base:

    ```bash
    cat <<EOF > .eslintrc.js
    module.exports = {
    extends: [ "@allenai/eslint-config-varnish" ]
    };
    EOF
    ```

4. Add targets for linting and reformatting code to your `package.json` file:

    ```json
    "scripts": {
        "lint": "eslint '**/*.{js,ts,tsx,json}' && echo '💫  Lint complete.'",
        "lint:fix": "eslint '**/*.{js,ts,tsx,json}' --fix && echo '🛠  Lint --fix complete.'",
    }
    ```

5. Try it out:

    ```bash
    # See what's wrong
    ~ yarn lint

    # Reformat and fix things
    ~ yarn lint:fix
    ```

## Publishing

To publish a new version after making changes, follow these steps:

```bash
~ npm version major|minor|patch
~ git push --tags origin master
~ npm publish --access public
```

🤘 ⛵️ 🎨
