import { Container, Typography, Box } from '@mui/material';
import styled from 'styled-components';
import { Target, Palette, TrendingUp } from 'lucide-react';

const SectionContainer = styled(Container)`
  && {
    padding: 80px 24px;
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      padding: 60px 16px;
    }
  }
`;

const SectionTitle = styled(Typography)`
  && {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 600;
    margin-bottom: 48px;
    text-align: center;
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      margin-bottom: 32px;
    }
  }
`;

const ContentColumn = styled(Box)`
  max-width: 800px;
  margin: 0 auto;
`;

const ProcessItem = styled(Box)`
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: 40px;
  }
`;

const IconWrapper = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-top: 2px;
  color: ${({ theme }) => theme.palette.primary.main};
  flex-shrink: 0;
`;

const ContentWrapper = styled(Box)`
  flex: 1;
`;

const ProcessTitle = styled(Typography)`
  && {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 600;
    font-size: 1.25rem;
    margin-bottom: 8px;
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      font-size: 1.125rem;
    }
  }
`;

const ProcessDescription = styled(Typography)`
  && {
    color: ${({ theme }) => theme.palette.text.secondary};
    line-height: 1.7;
    font-size: 1.125rem;
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      font-size: 1rem;
    }
  }
`;

const HvaViGjorSection = () => {
  const processes = [
    {
      icon: Target,
      title: "Fra idé til første versjon",
      description: "Vi starter med målet ditt og oversetter det til en smal første versjon som kan testes raskt. Unødvendig kompleksitet venter til vi ser effekt."
    },
    {
      icon: Palette,
      title: "Design og utvikling",
      description: "Vi designer klare brukerflyter og grensesnitt, bygger på moderne rammeverk og kobler til et enkelt CMS når det trengs. Hastighet, sikkerhet og tilgjengelighet er standard."
    },
    {
      icon: TrendingUp,
      title: "Lansering og forbedring",
      description: "Etter lansering følger vi tallene, fikser feil raskt og prioriterer endringer som faktisk flytter nålen. AI brukes der det gir bedre resultat, ikke for pynt."
    }
  ];

  return (
    <SectionContainer>
      <SectionTitle variant="h3">
        Hva vi gjør
      </SectionTitle>
      <ContentColumn>
        {processes.map((process, index) => (
          <ProcessItem key={index}>
            <IconWrapper>
              <process.icon size={24} />
            </IconWrapper>
            <ContentWrapper>
              <ProcessTitle>
                {process.title}
              </ProcessTitle>
              <ProcessDescription>
                {process.description}
              </ProcessDescription>
            </ContentWrapper>
          </ProcessItem>
        ))}
      </ContentColumn>
    </SectionContainer>
  );
};

export default HvaViGjorSection;
