# ESLint Config

The files in this directory represent the `eslint` configuration settings
for Varnish.

They're packaged as such so that they can be published as a separate NPM module,
`@allenai/@allenai/eslint-config-varnish`. This allows them to be shared easily
across multiple AI2 projects.

For more information about publishing and using shared `eslint` configuration
definitions, see [this documentation](https://eslint.org/docs/user-guide/configuring).

## Testing

The configuration expressed in this directory is used by the parent project,
so you can simply run `yarn lint` in the root of the repository to verify
things are working.

## Publishing

To publish a new version after making changes, follow these steps:

```bash
~ npm version major|minor|patch
~ git push --tags origin master
~ npm publish
```

🤘 ⛵️ 🎨
