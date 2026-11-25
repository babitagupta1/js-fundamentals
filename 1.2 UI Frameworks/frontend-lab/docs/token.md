
# Design Tokens

Design tokens are reusable design values used throughout the application.
They help maintain consistent colors, spacing, typography and component styles.

## Color Tokens

| Token | Light Value | Dark Value | Usage |
|---|---|---|---|
| --bg | #f8fafc | #0b1220 | Main page background |
| --surface | #ffffff | #131c2e | Cards and surfaces |
| --text | #0f172a | #e2e8f0 | Primary text |
| --muted | #64748b | #94a3b8 | Secondary text |
| --primary | #0ea5e9 | #38bdf8 | Primary buttons and actions |
| --primary-contrast | #ffffff | #06202e | Text on primary background |
| --border | #e2e8f0 | #243049 | Borders and separators |

## Other Tokens

| Token | Value | Usage |
|---|---|---|
| --radius | 0.75rem | Rounded corners |
| --font-sans | Inter, system-ui, sans-serif | Application typography |

## Theme Support

The application supports light and dark themes.

The light theme is defined using the `:root` selector.
The dark theme is activated using `[data-theme="dark"]`.

CSS variables allow the application to change its appearance
without modifying individual components.

## Tailwind Utilities

The design tokens are exposed through Tailwind CSS v4 using `@theme inline`.

Examples:

- bg-bg
- bg-surface
- text-fg
- text-muted
- bg-primary
- border-line
- rounded-card
- font-sans
