import { createTheme } from '@mui/material/styles';

// Brand colors - single source of truth
const brandColors = {
  // Primary brand color
  primary: 'rgba(210, 65, 91, 1)',
  
  // Core neutrals
  white: 'rgba(255, 255, 255, 1)',
  black: 'rgba(0, 0, 0, 1)',
  
  // Essential grays (only 4 shades)
  gray: {
    light: 'rgba(245, 245, 245, 1)',      // Light backgrounds
    medium: 'rgba(153, 153, 153, 1)',     // Muted text, icons
    dark: 'rgba(74, 85, 104, 1)',         // Secondary text
    darker: 'rgba(26, 26, 26, 1)',        // Primary text, headings
  },
  
  // Status colors (simplified)
  success: 'rgba(76, 175, 80, 1)',
  error: 'rgba(244, 67, 54, 1)',
};

declare module '@mui/material/styles' {
  interface Theme {
    colors: typeof brandColors;
  }
  interface ThemeOptions {
    colors?: typeof brandColors;
  }
}

const theme = createTheme({
  colors: brandColors,
  palette: {
    primary: {
      main: brandColors.primary,
      contrastText: brandColors.white,
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: brandColors.gray.darker,
      secondary: brandColors.gray.dark,
    },
  },
  typography: {
    fontFamily: 'system-ui, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      '@media (max-width:768px)': {
        fontSize: '2rem',
      },
      '@media (max-width:480px)': {
        fontSize: '1.75rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      '@media (max-width:768px)': {
        fontSize: '2rem',
      },
      '@media (max-width:480px)': {
        fontSize: '1.75rem',
      },
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.6,
      '@media (max-width:768px)': {
        fontSize: '1.125rem',
      },
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1200,
      xl: 1500,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1200px',
        },
      },
    },
  },
});

export default theme;
