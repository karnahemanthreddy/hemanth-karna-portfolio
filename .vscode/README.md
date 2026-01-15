# VS Code Configuration

This folder contains workspace-specific settings for Visual Studio Code.

## Settings

### CSS Validation
- **css.validate**: Disabled to prevent conflicts with Tailwind CSS
- **css.lint.unknownAtRules**: Set to "ignore" to suppress @tailwind and @apply warnings
- **scss.validate**: Disabled for consistency
- **less.validate**: Disabled for consistency

### Tailwind CSS IntelliSense
- Configured to recognize Tailwind classes in `cva()` and `cn()` functions
- Provides autocomplete and validation for Tailwind utilities

## Why These Settings?

Tailwind CSS uses custom at-rules like `@tailwind`, `@apply`, and `@layer` that aren't part of standard CSS. VS Code's built-in CSS validator doesn't recognize these, causing false warnings. These settings disable those warnings while maintaining Tailwind IntelliSense support.
