// =============================================================================
// Vibe Tailwind Library - Main Export
// =============================================================================

// Custom Theme & Provider
export { VibeUIProvider } from "./components";
export type { VibeUIProviderProps } from "./components";
export { vibeTheme, vibeColors } from "./theme";

// =============================================================================
// Re-export all Material Tailwind Components
// =============================================================================

// Core Components
export {
  // Buttons
  Button,
  IconButton,
  ButtonGroup,

  // Typography
  Typography,

  // Cards
  Card,
  CardBody,
  CardHeader,
  CardFooter,

  // Layout
  Accordion,
  AccordionBody,
  AccordionHeader,
  Collapse,
  Drawer,

  // Form Elements
  Input,
  Textarea,
  Select,
  Option,
  Checkbox,
  Radio,
  Switch,
  Slider,

  // Navigation
  Navbar,
  MobileNav,
  Breadcrumbs,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Stepper,
  Step,

  // Feedback
  Alert,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Popover,
  PopoverHandler,
  PopoverContent,
  Tooltip,
  Spinner,
  Progress,

  // Data Display
  Avatar,
  Badge,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,

  // Theme
  ThemeProvider,

  // Rating
  Rating,

  // Carousel
  Carousel,

  // Speed Dial
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";

// =============================================================================
// Note: Icons should be imported separately from @heroicons/react
// Example:
//   import { HeartIcon } from '@heroicons/react/24/solid';
//   import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
// =============================================================================
