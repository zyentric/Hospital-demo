import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#0F4C81', // Requested Primary
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2563EB', // Requested Secondary
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8FAFC', // Requested Background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F172A', // Requested Text Primary
      secondary: '#64748B', // Requested Text Secondary
    },
    error: {
      main: '#EF4444', // Requested Danger
    },
    success: {
      main: '#22C55E', // Requested Success
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 24px',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.4)',
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(1px)',
          },
          '&.MuiButton-containedPrimary': {
            background: 'linear-gradient(45deg, #0d47a1 30%, #5472d3 90%)',
          }
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
