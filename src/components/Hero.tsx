import { Container, Typography, Box, Button } from '@mui/material';
import styled from 'styled-components';
import marketingMainSvg from '../assets/graphics/marketingMain.svg';

const HeroContent = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  min-height: 500px;
  
  ${({ theme }) => theme.breakpoints.down('lg')} {
    flex-direction: column-reverse;
    gap: 40px;
    text-align: center;
    min-height: auto;
  }
`;

const TextContent = styled(Box)`
  flex: 1;
  max-width: 500px;
  
  ${({ theme }) => theme.breakpoints.down('lg')} {
    max-width: 100%;
  }
`;

const ImageContainer = styled(Box)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  
  ${({ theme }) => theme.breakpoints.down('lg')} {
    max-width: 350px;
    width: 100%;
  }
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: 280px;
  }
`;

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

const PrimaryButton = styled(Button)`
  && {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: white;
    padding: 12px 32px;
    font-weight: 600;
    border-radius: 8px;
    text-transform: none;
    font-size: 1rem;
    
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.dark};
    }
    
    ${({ theme }) => theme.breakpoints.down('sm')} {
      width: 200px;
    }
  }
`;

const SecondaryButton = styled(Button)`
  && {
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.main};
    padding: 10px 32px;
    font-weight: 600;
    border-radius: 8px;
    text-transform: none;
    font-size: 1rem;
    
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: white;
    }
    
    ${({ theme }) => theme.breakpoints.down('sm')} {
      width: 200px;
    }
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
    return (
        <HeroWithTopSpacing>
            <HeroContent>
                <TextContent>
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
                        <SecondaryButton variant="outlined">
                            Se arbeid
                        </SecondaryButton>
                    </ButtonContainer>
                </TextContent>

                <ImageContainer>
                    <StyledImage
                        src={marketingMainSvg}
                        alt="Marketing illustration"
                    />
                </ImageContainer>
            </HeroContent>
        </HeroWithTopSpacing>
    );
};

export default Hero;
