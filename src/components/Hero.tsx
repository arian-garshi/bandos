import { Container, Typography, Box } from '@mui/material';
import styled from 'styled-components';
import marketingMainSvg from '../assets/graphics/marketingMain.svg';
import { PrimaryButton, OutlineButton } from './shared/Buttons';
import TwoColumnLayout from './shared/TwoColumnLayout';

// HeroContent, TextContent, ImageContainer replaced by TwoColumnLayout

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
`;

// Simplified - use sx prop instead of styled components

// Simplified - use sx prop instead of styled component


// Simplified - use sx prop instead of custom styled container

const Hero = () => {
  const textContent = (
    <>
      <Typography
        variant="h1"
        sx={{
          mb: { xs: 4, md: 3.5 },
          fontSize: { xs: '2.5rem', md: '3.5rem' }
        }}
      >
        Bandos bygger digitale produkter
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: 'text.secondary',
          maxWidth: { xs: '100%', lg: '450px' },
          mb: { xs: 5, md: 7 }
        }}
      >
        Ett lite team som tar deg fra idé til drift. MVP, prototyper, webapplikasjoner, nettsider og UX. Rask fremdrift, ryddig kommunikasjon, målbare resultater. Spesialisert på effektivisering av prosesser med generativ AI og automasjon med LLM.
      </Typography>
      <Box sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', lg: 'flex-start' },
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'center', sm: 'flex-start' }
      }}>
        <PrimaryButton variant="contained">
          Start et prosjekt
        </PrimaryButton>
        <OutlineButton variant="outlined">
          Se arbeid
        </OutlineButton>
      </Box>
    </>
  );

  const imageContent = (
    <StyledImage
      src={marketingMainSvg}
      alt="Marketing illustration"
    />
  );

  return (
    <Container sx={{
      py: { xs: 8, md: 10 }, // 64px/8, 80px/8 - use theme spacing
      px: { xs: 2, md: 3 }   // 16px/8, 24px/8
    }}>
      <TwoColumnLayout
        leftContent={textContent}
        rightContent={imageContent}
      />
    </Container>
  );
};

export default Hero;
