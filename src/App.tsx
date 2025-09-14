import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HvaViGjorSection from './components/CardsSection';
import TjenesterSection from './components/TjenesterSection';
import ContactForm from './components/ContactForm';
import Personvern from './components/Personvern';
import CookieConsent from './components/CookieConsent';

const HomePage = () => (
  <>
    <Navigation />
    <Hero />
    <HvaViGjorSection />
    <TjenesterSection />
    <ContactForm />
  </>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/personvern" element={<Personvern />} />
          </Routes>
          <CookieConsent />
        </Router>
      </StyledThemeProvider>
    </ThemeProvider>
  )
}

export default App
