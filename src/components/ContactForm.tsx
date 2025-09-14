import { Container, Typography, TextField, Box } from '@mui/material';
import styled from 'styled-components';
import { useState } from 'react';
import Footer from './Footer';
import { PrimaryButton } from './shared/Buttons';
import FullWidthSection from './shared/FullWidthSection';

// ContactSection and TransitionShape replaced by FullWidthSection

// Simplified - use sx prop instead of custom styled container

// Simplified - use sx prop instead of custom styled components

// Simplified dark TextField styling using sx props
const darkTextFieldSx = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 1,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.3)',
      },
    },
    '&.Mui-focused': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'primary.main',
        borderWidth: 2,
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'grey.400',
    '&.Mui-focused': {
      color: 'primary.main',
    },
  },
  '& .MuiOutlinedInput-input': {
    color: 'white',
    '&::placeholder': {
      color: 'grey.400',
      opacity: 1,
    },
  },
};


const StatusMessage = styled(Typography)`
  && {
    text-align: center;
    margin-top: 24px;
    font-weight: 500;
    padding: 12px 20px;
    border-radius: 8px;
    
    &.success {
      color: ${({ theme }) => theme.colors.success};
      background-color: rgba(76, 175, 80, 0.1);
      border: 1px solid rgba(76, 175, 80, 0.2);
    }
    
    &.error {
      color: ${({ theme }) => theme.colors.error};
      background-color: rgba(244, 67, 54, 0.1);
      border: 1px solid rgba(244, 67, 54, 0.2);
    }
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Reset status when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Email sent successfully:', result);

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'En feil oppstod ved sending av meldingen. Prøv igjen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FullWidthSection
      background="black"
      showTopTransition={true}
    >
      <Container sx={{
        pt: { xs: 17.5, md: 22.5 }, // 140px/8, 180px/8 (theme spacing)
        pb: { xs: 7.5, md: 10 },    // 60px/8, 80px/8 
        px: { xs: 2, md: 3 },       // 16px/8, 24px/8
        maxWidth: '800px',
        position: 'relative',
        zIndex: 1
      }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            La oss snakke sammen
          </Typography>
          <Typography
            sx={{
              color: 'grey.400',
              fontSize: { xs: '1.125rem', md: '1.25rem' },
              maxWidth: '500px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Fortell oss om prosjektet ditt, så kommer vi tilbake til deg innen 24 timer.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: '600px', mx: 'auto' }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 3,
              mb: 3
            }}>
              <TextField
                name="name"
                label="Navn"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                required
                sx={darkTextFieldSx}
              />
              <TextField
                name="email"
                label="E-post"
                type="email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                required
                sx={darkTextFieldSx}
              />
            </Box>

            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 3,
              mb: 3
            }}>
              <TextField
                name="company"
                label="Bedrift"
                variant="outlined"
                fullWidth
                value={formData.company}
                onChange={handleChange}
                sx={darkTextFieldSx}
              />
              <TextField
                name="phone"
                label="Telefon"
                variant="outlined"
                fullWidth
                value={formData.phone}
                onChange={handleChange}
                sx={darkTextFieldSx}
              />
            </Box>

            <TextField
              name="message"
              label="Fortell oss om prosjektet"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              sx={{ ...darkTextFieldSx, mb: 4 }}
            />

            <Box textAlign="center">
              <PrimaryButton
                type="submit"
                variant="contained"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sender...' : 'Send melding'}
              </PrimaryButton>

              {submitStatus === 'success' && (
                <StatusMessage className="success">
                  Takk for din henvendelse! Vi kommer tilbake til deg innen 24 timer.
                </StatusMessage>
              )}

              {submitStatus === 'error' && (
                <StatusMessage className="error">
                  {errorMessage}
                </StatusMessage>
              )}
            </Box>
          </form>
        </Box>
      </Container>
      <Footer />
    </FullWidthSection>
  );
};

export default ContactForm;
