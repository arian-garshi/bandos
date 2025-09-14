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

const HeroTitle = styled(Typography)`
  && {
    margin-bottom: 28px;
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 3.5rem;
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      margin-bottom: 32px;
    }
  }
`;

const HeroText = styled(Typography)`
  && {
    color: ${({ theme }) => theme.palette.text.secondary};
    max-width: 450px;
    margin-bottom: 56px;
    
    ${({ theme }) => theme.breakpoints.down('lg')} {
      max-width: 100%;
    }
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      margin-bottom: 40px;
    }
  }
`;

const ButtonContainer = styled(Box)`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  
  ${({ theme }) => theme.breakpoints.down('lg')} {
    justify-content: center;
  }
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    align-items: center;
  }
`;


const HeroWithTopSpacing = styled(Container)`
  && {
    padding: 80px 24px;
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      padding: 64px 16px 40px 16px;
    }
  }
`;

const Hero = () => {
  const textContent = (
    <>
      <HeroTitle variant="h1">
        Bandos bygger digitale produkter
      </HeroTitle>
      <HeroText variant="h6">
        Ett lite team som tar deg fra idé til drift. MVP, prototyper, webapplikasjoner, nettsider og UX. Rask fremdrift, ryddig kommunikasjon, målbare resultater. Spesialisert på effektivisering av prosesser med generativ AI og automasjon med LLM.
      </HeroText>
      <ButtonContainer>
        <PrimaryButton variant="contained">
          Start et prosjekt
        </PrimaryButton>
        <OutlineButton variant="outlined">
          Se arbeid
        </OutlineButton>
      </ButtonContainer>
    </>
  );

  const imageContent = (
    <StyledImage
      src={marketingMainSvg}
      alt="Marketing illustration"
    />
  );

  return (
    <HeroWithTopSpacing>
      <TwoColumnLayout
        leftContent={textContent}
        rightContent={imageContent}
        minHeight={500}
        leftMaxWidth={500}
        rightMaxWidth={500}
      />
    </HeroWithTopSpacing>
  );
};

export default Hero;
