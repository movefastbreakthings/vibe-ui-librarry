# 🎀 Vibe Tailwind Library

A Material Tailwind wrapper with a **vibrant pink theme** (`#ff0080`). Zero configuration needed - just wrap your app and go!

![Demo](https://img.shields.io/badge/demo-live-ff0080?style=for-the-badge)
![NPM](https://img.shields.io/badge/npm-vibe--tailwind--library-9c27b0?style=for-the-badge)

## ✨ Features

- 🎨 Pre-configured vibrant pink (`#ff0080`) and electric purple (`#9c27b0`) theme
- 📦 All Material Tailwind components re-exported
- 🚀 Zero configuration needed
- 💪 Full TypeScript support
- ⚡ ESM-only build (no CommonJS issues)

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| 🩷 Primary Pink | `#ff0080` | Primary actions, buttons, highlights |
| 💜 Secondary Purple | `#9c27b0` | Secondary actions, accents |
| 🌸 Pink Light | `#ff6eb4` | Gradients, hover states |
| 💟 Purple Light | `#ce93d8` | Gradients, hover states |

## 📦 Installation

```bash
npm install vibe-tailwind-library @material-tailwind/react tailwindcss
```

> ⚠️ **Important:** `@material-tailwind/react` and `tailwindcss` are peer dependencies and must be installed separately.

### From GitHub (Latest)

```bash
npm install github:yourusername/vibe-tailwind-library @material-tailwind/react tailwindcss
```

## 🚀 Quick Start

### 1. Configure Tailwind CSS

Update your `tailwind.config.js`:

```javascript
import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
```

### 2. Wrap Your App

```tsx
import { VibeUIProvider } from 'vibe-tailwind-library';

function App() {
  return (
    <VibeUIProvider>
      <YourApp />
    </VibeUIProvider>
  );
}
```

### 3. Use Components

```tsx
import {
  VibeUIProvider,
  Button,
  Card,
  CardBody,
  Typography,
  Input,
} from 'vibe-tailwind-library';

function MyComponent() {
  return (
    <Card>
      <CardBody>
        <Typography variant="h3">Hello Vibe!</Typography>
        <Input label="Email" color="pink" />
        <Button color="pink">Submit</Button>
        <Button color="purple" variant="outlined">Cancel</Button>
      </CardBody>
    </Card>
  );
}
```

## 🧩 Available Components

All Material Tailwind components are available:

### Layout
- `Card`, `CardBody`, `CardHeader`, `CardFooter`
- `Accordion`, `AccordionBody`, `AccordionHeader`
- `Collapse`, `Drawer`

### Form Elements
- `Button`, `IconButton`, `ButtonGroup`
- `Input`, `Textarea`, `Select`, `Option`
- `Checkbox`, `Radio`, `Switch`, `Slider`

### Navigation
- `Navbar`, `MobileNav`, `Breadcrumbs`
- `Menu`, `MenuHandler`, `MenuList`, `MenuItem`
- `Tabs`, `TabsHeader`, `TabsBody`, `Tab`, `TabPanel`
- `Stepper`, `Step`

### Feedback
- `Alert`, `Dialog`, `Popover`, `Tooltip`
- `Spinner`, `Progress`

### Data Display
- `Avatar`, `Badge`, `Chip`
- `List`, `ListItem`, `ListItemPrefix`, `ListItemSuffix`
- `Timeline`, `TimelineItem`, `TimelineConnector`, `TimelineHeader`, `TimelineIcon`, `TimelineBody`
- `Typography`, `Rating`, `Carousel`

## 🎯 Icons

Icons should be imported separately from `@heroicons/react`:

```tsx
import { HeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';

<Button color="pink" className="flex items-center gap-2">
  <HeartIcon className="h-5 w-5" /> Like
</Button>
```

## 🔧 Alternative: Direct ThemeProvider

If `VibeUIProvider` causes issues, use the theme directly:

```tsx
import { ThemeProvider } from '@material-tailwind/react';
import { vibeTheme } from 'vibe-tailwind-library';

function App() {
  return (
    <ThemeProvider value={vibeTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

## 📖 Live Demo

Check out the live demo: [GitHub Pages Demo](https://yourusername.github.io/vibe-tailwind-library/)

## 🤖 AI Integration

See [AI_PROMPT.md](./AI_PROMPT.md) for a prompt you can give to AI tools (ChatGPT, Claude, Cursor, v0.dev) to help them use this library correctly.

## 📝 License

MIT
