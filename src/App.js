import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, Toolbar } from '@mui/material';
import Navbar from './components/Navbar';
import ProblemDetail from './components/ProblemDetail';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import HowToUse from './components/HowToUse';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4', // Cyan
      light: '#62efff',
      dark: '#008ba3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#7c4dff', // Deep Purple
      light: '#b47cff',
      dark: '#3f1dcb',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0A1929', // Dark blue-gray
      paper: '#132f4c', // Slightly lighter blue-gray
    },
    text: {
      primary: '#ffffff',
      secondary: '#b2bac2',
    },
    divider: 'rgba(194, 224, 255, 0.08)',
    action: {
      active: '#fff',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    }
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 8px 16px rgba(0, 188, 212, 0.2)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #00bcd4 30%, #00e5ff 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #00acc1 30%, #00d5ff 90%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
          backdropFilter: 'blur(20px)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
          backdropFilter: 'blur(20px)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Toolbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/problems/:slug" element={<ProblemDetail />} />
          <Route path="/how-to-use" element={<HowToUse />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 