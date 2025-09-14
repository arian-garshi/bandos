import { Container, Typography, Box, Link } from '@mui/material';
import styled from 'styled-components';
import '@fontsource/space-grotesk/700.css';

const FooterSection = styled.footer`
  background: ${({ theme }) => theme.colors.black};
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContainer = styled(Container)`
  && {
    padding: 60px 24px 40px 24px;
    max-width: 1200px;
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      padding: 40px 16px 30px 16px;
    }
  }
`;

const FooterContent = styled(Box)`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 40px;
  
  ${({ theme }) => theme.breakpoints.down('lg')} {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }
`;

const FooterColumn = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const BrandColumn = styled(FooterColumn)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    align-items: center;
    text-align: center;
  }
`;

const FooterLogo = styled(Typography)`
  && {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.palette.primary.main};
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }
`;

const FooterDescription = styled(Typography)`
  && {
    color: ${({ theme }) => theme.colors.gray.medium};
    line-height: 1.6;
    margin-bottom: 24px;
    max-width: 300px;
    
    ${({ theme }) => theme.breakpoints.down('sm')} {
      max-width: 100%;
    }
  }
`;

const FooterTitle = styled(Typography)`
  && {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    margin-bottom: 20px;
    font-size: 1rem;
  }
`;

const FooterLink = styled(Link)`
  && {
    color: ${({ theme }) => theme.colors.gray.medium};
    text-decoration: none;
    margin-bottom: 12px;
    font-size: 0.95rem;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

const ContactInfo = styled(Typography)`
  && {
    color: ${({ theme }) => theme.colors.gray.medium};
    margin-bottom: 8px;
    font-size: 0.95rem;
  }
`;

const FooterBottom = styled(Box)`
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`;

const Copyright = styled(Typography)`
  && {
    color: ${({ theme }) => theme.colors.gray.medium};
    font-size: 0.9rem;
  }
`;

const LegalLinks = styled(Box)`
  display: flex;
  gap: 24px;
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    gap: 16px;
  }
`;

const LegalLink = styled(Link)`
  && {
    color: ${({ theme }) => theme.colors.gray.medium};
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent>
          <BrandColumn>
            <FooterLogo>
              Bandos
            </FooterLogo>
            <FooterDescription>
              Vi bygger digitale produkter. Ett lite team som tar deg fra idé til drift med rask fremdrift og målbare resultater.
            </FooterDescription>
          </BrandColumn>

          <FooterColumn>
            <FooterTitle>Kontakt oss</FooterTitle>
            <FooterLink href="mailto:post@bandos.no">post@bandos.no</FooterLink>
            <ContactInfo>Bergen, Norge</ContactInfo>
            <ContactInfo>Org.nr: 123 456 789</ContactInfo>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Kom i gang</FooterTitle>
            <FooterLink href="mailto:post@bandos.no?subject=Ny%20henvendelse%20-%20Bandos">Send en henvendelse</FooterLink>
            <FooterLink href="tel:+4712345678">Ring oss</FooterLink>
            <FooterDescription style={{ fontSize: '0.9rem', marginTop: '12px' }}>
              Vi svarer innen 24 timer på alle henvendelser.
            </FooterDescription>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Våre tjenester</FooterTitle>
            <ContactInfo>• Webutvikling</ContactInfo>
            <ContactInfo>• Design og workshop</ContactInfo>
            <ContactInfo>• AI og automasjon</ContactInfo>
            <ContactInfo>• Generativ programmering</ContactInfo>
          </FooterColumn>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © {currentYear} Bandos. Alle rettigheter reservert.
          </Copyright>
          <LegalLinks>
            <LegalLink href="/personvern">Personvern</LegalLink>
          </LegalLinks>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
