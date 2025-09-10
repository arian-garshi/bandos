import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HvaViGjorSection from './components/CardsSection';
import TjenesterSection from './components/TjenesterSection';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <Hero />
        <HvaViGjorSection />
        <TjenesterSection />
        <ContactForm />
      </StyledThemeProvider>
    </ThemeProvider>
  )
}

export default App
