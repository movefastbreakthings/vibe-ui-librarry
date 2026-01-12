## Prompt

You are building a React application using **vibe-tailwind-library**, a Material Tailwind wrapper with a vibrant pink theme. Use the package from github:movefastbreakthings/vibe-ui-library.

### ⚠️ Critical Setup Requirements

**React 18 is REQUIRED** - This library does NOT work with React 19!

```bash
# Install with legacy peer deps and React 18
npm install react@18 react-dom@18 @types/react@18 @types/react-dom@18 --legacy-peer-deps
npm install vibe-tailwind-library@github:movefastbreakthings/vibe-ui-library @material-tailwind/react @heroicons/react --legacy-peer-deps
npm install -D tailwindcss@3 postcss autoprefixer --legacy-peer-deps
```

**Vite Config** - Add React deduplication to prevent "Invalid hook call" errors:

```ts
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom"],
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
```

**Tailwind Config** - Use Material Tailwind's withMT wrapper:

```js
// tailwind.config.js
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
});
```

### Key Rules

1. **DO NOT create custom styles** - Use only the pre-built components from the library
2. **Always wrap your app** with `VibeUIProvider`
3. **Use `color="pink"` or `color="purple"`** for themed components
4. **Import icons separately** from `@heroicons/react`

### Setup

```tsx
import { VibeUIProvider } from "vibe-tailwind-library";

function App() {
  return <VibeUIProvider>{/* Your app here */}</VibeUIProvider>;
}
```

### Import Pattern

```tsx
// Components from vibe-tailwind-library
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Switch,
  Alert,
  Chip,
  Avatar,
  Badge,
  Tabs,
  TabsHeader,
  Tab,
  // ... all Material Tailwind components
} from "vibe-tailwind-library";

// Icons from @heroicons/react (NOT from the library!)
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
```

### Color Palette

- **Primary:** `#ff0080` (Vibrant Pink) - Use `color="pink"`
- **Secondary:** `#9c27b0` (Electric Purple) - Use `color="purple"`

### Example Component

```tsx
import {
  VibeUIProvider,
  Card,
  CardBody,
  Typography,
  Button,
  Input,
} from "vibe-tailwind-library";
import { SparklesIcon } from "@heroicons/react/24/solid";

function ContactForm() {
  return (
    <VibeUIProvider>
      <Card className="max-w-md mx-auto">
        <CardBody className="flex flex-col gap-4">
          <Typography variant="h4">Contact Us</Typography>
          <Input label="Name" color="pink" />
          <Input label="Email" color="pink" />
          <Button color="pink" className="flex items-center gap-2">
            <SparklesIcon className="h-5 w-5" /> Submit
          </Button>
        </CardBody>
      </Card>
    </VibeUIProvider>
  );
}
```

### Available Variants

**Button variants:**

- `variant="filled"` (default)
- `variant="outlined"`
- `variant="gradient"`
- `variant="text"`

**Button sizes:**

- `size="sm"`
- `size="md"` (default)
- `size="lg"`

### DO NOT

- ❌ Create custom CSS for colors or styles
- ❌ Import icons from vibe-tailwind-library
- ❌ Use Tailwind color classes like `bg-pink-500` for themed elements
- ❌ Skip the VibeUIProvider wrapper

### DO

- ✅ Use `color="pink"` or `color="purple"` props
- ✅ Import icons from `@heroicons/react`
- ✅ Wrap app with `VibeUIProvider`
- ✅ Use pre-built component variants

---

## Quick Reference

| Task                   | Code                                                                                          |
| ---------------------- | --------------------------------------------------------------------------------------------- |
| Pink button            | `<Button color="pink">Click</Button>`                                                         |
| Purple outlined button | `<Button color="purple" variant="outlined">Click</Button>`                                    |
| Pink input             | `<Input label="Email" color="pink" />`                                                        |
| Pink checkbox          | `<Checkbox color="pink" />`                                                                   |
| Pink switch            | `<Switch color="pink" />`                                                                     |
| Button with icon       | `<Button className="flex items-center gap-2"><HeartIcon className="h-5 w-5" /> Like</Button>` |

---

When I ask you to create UI components, use this library and follow these rules exactly.
