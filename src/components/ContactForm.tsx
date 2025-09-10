import { Container, Typography, TextField, Button, Box } from '@mui/material';
import styled from 'styled-components';
import { useState } from 'react';
import Footer from './Footer';

const ContactSection = styled.section`
  position: relative;
  background: #000000;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow: hidden;
`;

const TransitionShape = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: #ffffff;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 70px;
  }
`;

const ContactContainer = styled(Container)`
  && {
    padding: 180px 24px 80px 24px;
    max-width: 800px;
    position: relative;
    z-index: 1;
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      padding: 140px 16px 60px 16px;
    }
  }
`;

const ContactContent = styled(Box)`
  text-align: center;
  margin-bottom: 64px;
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: 48px;
  }
`;

const ContactTitle = styled(Typography)`
  && {
    color: #ffffff;
    font-weight: 600;
    margin-bottom: 16px;
    font-size: 2.5rem;
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      font-size: 2rem;
    }
  }
`;

const ContactSubtitle = styled(Typography)`
  && {
    color: #cccccc;
    font-size: 1.25rem;
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.6;
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      font-size: 1.125rem;
    }
  }
`;

const FormContainer = styled(Box)`
  max-width: 600px;
  margin: 0 auto;
`;

const FormGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const StyledTextField = styled(TextField)`
  && {
    .MuiOutlinedInput-root {
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      
      &:hover {
        background-color: rgba(255, 255, 255, 0.08);
      }
      
      &.Mui-focused {
        background-color: rgba(255, 255, 255, 0.1);
      }
      
      .MuiOutlinedInput-notchedOutline {
        border-color: rgba(255, 255, 255, 0.2);
      }
      
      &:hover .MuiOutlinedInput-notchedOutline {
        border-color: rgba(255, 255, 255, 0.3);
      }
      
      &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.palette.primary.main};
        border-width: 2px;
      }
    }
    
    .MuiInputLabel-root {
      color: #cccccc;
      
      &.Mui-focused {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
    
    .MuiOutlinedInput-input {
      color: #ffffff;
      
      &::placeholder {
        color: #999999;
        opacity: 1;
      }
    }
  }
`;

const FullWidthTextField = styled(StyledTextField)`
  && {
    margin-bottom: 32px;
    
    ${({ theme }) => theme.breakpoints.down('sm')} {
      margin-bottom: 24px;
    }
  }
`;

const SubmitButton = styled(Button)`
  && {
    background: linear-gradient(135deg, ${({ theme }) => theme.palette.primary.main} 0%, ${({ theme }) => theme.palette.primary.light} 100%);
    color: white;
    padding: 16px 48px;
    font-size: 1.125rem;
    font-weight: 600;
    border-radius: 8px;
    text-transform: none;
    box-shadow: 0 8px 32px rgba(210, 65, 91, 0.3);
    transition: all 0.3s ease;
    
    &:hover {
      background: linear-gradient(135deg, ${({ theme }) => theme.palette.primary.dark} 0%, ${({ theme }) => theme.palette.primary.main} 100%);
      box-shadow: 0 12px 40px rgba(210, 65, 91, 0.4);
      transform: translateY(-2px);
    }
    
    ${({ theme }) => theme.breakpoints.down('sm')} {
      width: 100%;
      padding: 14px 32px;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <ContactSection>
      <TransitionShape />
      <ContactContainer>
        <ContactContent>
          <ContactTitle variant="h2">
            La oss snakke sammen
          </ContactTitle>
          <ContactSubtitle>
            Fortell oss om prosjektet ditt, så kommer vi tilbake til deg innen 24 timer.
          </ContactSubtitle>
        </ContactContent>

        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormGrid>
              <StyledTextField
                name="name"
                label="Navn"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                required
              />
              <StyledTextField
                name="email"
                label="E-post"
                type="email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGrid>

            <FormGrid>
              <StyledTextField
                name="company"
                label="Bedrift"
                variant="outlined"
                fullWidth
                value={formData.company}
                onChange={handleChange}
              />
              <StyledTextField
                name="phone"
                label="Telefon"
                variant="outlined"
                fullWidth
                value={formData.phone}
                onChange={handleChange}
              />
            </FormGrid>

            <FullWidthTextField
              name="message"
              label="Fortell oss om prosjektet"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />

            <Box textAlign="center">
              <SubmitButton type="submit" variant="contained">
                Send melding
              </SubmitButton>
            </Box>
          </form>
        </FormContainer>
      </ContactContainer>
      <Footer />
    </ContactSection>
  );
};

export default ContactForm;
