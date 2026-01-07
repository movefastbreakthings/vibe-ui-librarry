import { createTheme, ThemeOptions } from '@mui/material/styles';

// Knalliges Pink als Hauptakzentfarbe
const VIBE_PINK = {
  50: '#fce4ec',
  100: '#f8bbd9',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#ff0080', // Hauptfarbe - knalliges Pink/Magenta
  600: '#e91e63',
  700: '#d81b60',
  800: '#c2185b',
  900: '#ad1457',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#ff0080',
  A700: '#c51162',
};

// Sekundärfarbe - Electric Purple für Kontrast
const VIBE_PURPLE = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  A100: '#ea80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#aa00ff',
};

export const vibeThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: VIBE_PINK[500],
      light: VIBE_PINK[300],
      dark: VIBE_PINK[700],
      contrastText: '#ffffff',
    },
    secondary: {
      main: VIBE_PURPLE[500],
      light: VIBE_PURPLE[300],
      dark: VIBE_PURPLE[700],
      contrastText: '#ffffff',
    },
    error: {
      main: '#ff1744',
    },
    warning: {
      main: '#ff9100',
    },
    info: {
      main: '#00b0ff',
    },
    success: {
      main: '#00e676',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(255, 0, 128, 0.3)',
          },
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${VIBE_PINK[500]} 0%, ${VIBE_PINK[600]} 100%)`,
          '&:hover': {
            background: `linear-gradient(135deg, ${VIBE_PINK[400]} 0%, ${VIBE_PINK[500]} 100%)`,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        colorPrimary: {
          background: `linear-gradient(135deg, ${VIBE_PINK[500]} 0%, ${VIBE_PINK[600]} 100%)`,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: VIBE_PINK[500],
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        primary: {
          background: `linear-gradient(135deg, ${VIBE_PINK[500]} 0%, ${VIBE_PINK[600]} 100%)`,
          '&:hover': {
            background: `linear-gradient(135deg, ${VIBE_PINK[400]} 0%, ${VIBE_PINK[500]} 100%)`,
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          '&.Mui-checked': {
            color: VIBE_PINK[500],
            '& + .MuiSwitch-track': {
              backgroundColor: VIBE_PINK[500],
            },
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: VIBE_PINK[500],
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: VIBE_PINK[500],
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: VIBE_PINK[500],
        },
        thumb: {
          '&:hover, &.Mui-focusVisible': {
            boxShadow: `0 0 0 8px rgba(255, 0, 128, 0.16)`,
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
        barColorPrimary: {
          background: `linear-gradient(90deg, ${VIBE_PINK[500]} 0%, ${VIBE_PURPLE[500]} 100%)`,
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        colorPrimary: {
          color: VIBE_PINK[500],
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: VIBE_PINK[500],
          height: 3,
          borderRadius: 2,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: VIBE_PINK[500],
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: VIBE_PINK[500],
          '&:hover': {
            color: VIBE_PINK[700],
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 20,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 8,
          backgroundColor: 'rgba(0, 0, 0, 0.87)',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: VIBE_PINK[500],
        },
      },
    },
  },
};

// Dark Theme Variante
export const vibeDarkThemeOptions: ThemeOptions = {
  ...vibeThemeOptions,
  palette: {
    mode: 'dark',
    primary: {
      main: VIBE_PINK[400],
      light: VIBE_PINK[200],
      dark: VIBE_PINK[600],
      contrastText: '#ffffff',
    },
    secondary: {
      main: VIBE_PURPLE[400],
      light: VIBE_PURPLE[200],
      dark: VIBE_PURPLE[600],
      contrastText: '#ffffff',
    },
    error: {
      main: '#ff5252',
    },
    warning: {
      main: '#ffab40',
    },
    info: {
      main: '#40c4ff',
    },
    success: {
      main: '#69f0ae',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
};

// Erstelle die Themes
export const vibeTheme = createTheme(vibeThemeOptions);
export const vibeDarkTheme = createTheme(vibeDarkThemeOptions);

// Export der Pink-Farben für direkten Zugriff
export const vibePink = VIBE_PINK;
export const vibePurple = VIBE_PURPLE;

export default vibeTheme;

