# CHANGELOG

## [2.0.0] - 2022-07-30
- 💥 Renamed `colormate.tokenKinds` setting to `colormate.semanticTokenTypes`.
- ✨ textMate tokens are now semantically highlighted when semantic tokens are unavailable. This is especially useful if you don't have any semantic tokens in your language of choice (JSX has none).
- 🔧 Added configuration for `colormate.textMateTokenScopes`. Now you can select textMate tokens to style as well as semantic tokens. This is especially useful if you don't have any semantic tokens in your language of choice (JSX has none).

## [1.3.2] - 2022-07-30
- 🔧 Updated the VSCode displayName to fit.

## [1.3.1] - 2022-07-30
- 🐛 Fixed a memory leak where invisible code windows weren't hidden. In doing this fix, only visible editors are semantically highlighted. A future change will need to be made to keep background editors highlighted.

## [1.3.0] - 2022-07-30

- ✨ Added `lighting` and `saturation` configuration settings for all color theme types.
- ✨ Changing settings now results in immediate visible changes.
- 🐛 Fixed an issue where leaving an editor view would remove semantic highlighting. This was most-apparent when using multiple columns or windows.
- 🎨 Major code styling and refactoring.

## [1.2.4] - 2022-07-30

- 🚑 Fixed a critical issue where local changes were incorrectly packaged.

## [1.2.3] - 2022-07-30

- 📝 Updated README with a callout on how to force-enable semantic highlighting.

## [1.2.2] - 2022-07-30

- 📝 Updated README with troubleshooting information.

## [1.2.1] - 2022-07-30

- 🩹 Fixed incorrect `CHANGELOG`.

## [1.2.0] - 2022-07-30

- ✨ Added more semantic token selectors for the default token configuration.

## [1.1.1] - 2022-07-30

- 🎉 First 100% working release with all the right logos!
