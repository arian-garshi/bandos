import { Container, Typography, Box } from '@mui/material';
import styled from 'styled-components';
import Navigation from './Navigation';
import Footer from './Footer';

const PersonvernContainer = styled(Container)`
  && {
    padding: 120px 24px 80px 24px;
    max-width: 800px;
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      padding: 100px 16px 60px 16px;
    }
  }
`;

const PersonvernTitle = styled(Typography)`
  && {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 600;
    margin-bottom: 32px;
    font-size: 2rem;
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      margin-bottom: 24px;
      font-size: 1.75rem;
    }
  }
`;

const SectionTitle = styled(Typography)`
  && {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 600;
    margin: 40px 0 16px 0;
    font-size: 1.25rem;
    
    &:first-of-type {
      margin-top: 0;
    }
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      font-size: 1.125rem;
    }
  }
`;

const PersonvernText = styled(Typography)`
  && {
    color: ${({ theme }) => theme.palette.text.secondary};
    line-height: 1.7;
    margin-bottom: 16px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ListItem = styled.li`
  color: ${({ theme }) => theme.palette.text.secondary};
  line-height: 1.7;
  margin-bottom: 8px;
`;

const Personvern = () => {
    const lastUpdated = "15. september 2025";

    return (
        <>
            <Navigation />
            <PersonvernContainer>
                <PersonvernTitle variant="h1">
                    Personvernerklæring
                </PersonvernTitle>

                <PersonvernText>
                    <strong>Sist oppdatert: {lastUpdated}</strong>
                </PersonvernText>

                <PersonvernText>
                    Bandos ("vi", "oss", "vårt") respekterer ditt personvern og er forpliktet til å beskytte dine personopplysninger.
                    Denne personvernerklæringen forklarer hvordan vi samler inn, bruker og beskytter informasjonen din når du besøker
                    vår nettside bandos.no og bruker våre tjenester.
                </PersonvernText>

                <SectionTitle variant="h2">
                    1. Behandlingsansvarlig
                </SectionTitle>
                <PersonvernText>
                    Bandos<br />
                    Bergen, Norge<br />
                    E-post: <ContactLink href="mailto:post@bandos.no">post@bandos.no</ContactLink>
                </PersonvernText>

                <SectionTitle variant="h2">
                    2. Hvilke personopplysninger vi samler inn
                </SectionTitle>
                <PersonvernText>
                    Vi samler inn følgende typer personopplysninger:
                </PersonvernText>
                <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                    <ListItem><strong>Kontaktinformasjon:</strong> Navn, e-postadresse, telefonnummer og bedriftsinformasjon når du kontakter oss gjennom kontaktskjemaet</ListItem>
                    <ListItem><strong>Teknisk informasjon:</strong> IP-adresse, nettlesertype, enhetstype, og besøksstatistikk gjennom Google Analytics</ListItem>
                    <ListItem><strong>Kommunikasjon:</strong> Meldinger du sender oss via e-post eller kontaktskjema</ListItem>
                </Box>

                <SectionTitle variant="h2">
                    3. Hvordan vi bruker dine personopplysninger
                </SectionTitle>
                <PersonvernText>
                    Vi bruker dine personopplysninger til følgende formål:
                </PersonvernText>
                <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                    <ListItem>Å svare på dine henvendelser og gi kundeservice</ListItem>
                    <ListItem>Å tilby våre tjenester innen webutvikling, design og AI-løsninger</ListItem>
                    <ListItem>Å forbedre vår nettside og tjenester gjennom analyse av brukeratferd</ListItem>
                    <ListItem>Å overholde juridiske forpliktelser</ListItem>
                </Box>

                <SectionTitle variant="h2">
                    4. Rettslig grunnlag for behandling
                </SectionTitle>
                <PersonvernText>
                    Vi behandler dine personopplysninger basert på følgende rettslige grunnlag:
                </PersonvernText>
                <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                    <ListItem><strong>Samtykke:</strong> For bruk av Google Analytics og markedsføringskommunikasjon</ListItem>
                    <ListItem><strong>Berettiget interesse:</strong> For å svare på henvendelser og forbedre våre tjenester</ListItem>
                    <ListItem><strong>Kontraktsoppfyllelse:</strong> For levering av tjenester du har bestilt</ListItem>
                </Box>

                <SectionTitle variant="h2">
                    5. Google Analytics og informasjonskapsler
                </SectionTitle>
                <PersonvernText>
                    Vi bruker Google Analytics for å forstå hvordan besøkende bruker vår nettside. Google fungerer som
                    databehandler og samler inn anonymiserte data om ditt besøk på våre vegne, inkludert:
                </PersonvernText>
                <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                    <ListItem>Sider du besøker og tid brukt på siden</ListItem>
                    <ListItem>Geografisk plassering (land/by-nivå)</ListItem>
                    <ListItem>Enhetstype og nettleserinformasjon</ListItem>
                    <ListItem>Hvordan du kom til vår nettside</ListItem>
                </Box>
                <PersonvernText>
                    <strong>Viktig:</strong> Vi har ikke tilgang til individuelle brukerdata i Google Analytics. Google behandler
                    dataene og gir oss kun aggregerte, anonymiserte rapporter om nettstedets bruk. For å utøve dine rettigheter
                    overfor Google Analytics-data, må du kontakte Google direkte.
                </PersonvernText>
                <PersonvernText>
                    Du kan deaktivere Google Analytics ved å installere <ContactLink href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">
                        Google Analytics Opt-out Browser Add-on</ContactLink> eller ved å justere informasjonskapsel-innstillingene i din nettleser.
                </PersonvernText>

                <SectionTitle variant="h2">
                    6. Deling av personopplysninger
                </SectionTitle>
                <PersonvernText>
                    Vi selger, leier eller deler ikke dine personopplysninger med tredjeparter, unntatt:
                </PersonvernText>
                <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                    <ListItem>Med din uttrykkelige tillatelse</ListItem>
                    <ListItem>Med tjenesteleverandører som hjelper oss med å levere våre tjenester (som e-postleverandører)</ListItem>
                    <ListItem>Når det kreves av lov eller for å beskytte våre rettigheter</ListItem>
                </Box>

                <SectionTitle variant="h2">
                    7. Lagring og sikkerhet
                </SectionTitle>
                <PersonvernText>
                    Vi oppbevarer dine personopplysninger så lenge det er nødvendig for å oppfylle formålene beskrevet i denne
                    erklæringen, eller som påkrevd av lov. Vi implementerer passende tekniske og organisatoriske tiltak for
                    å beskytte dine personopplysninger mot uautorisert tilgang, endring, avsløring eller ødeleggelse.
                </PersonvernText>

                <SectionTitle variant="h2">
                    8. Dine rettigheter
                </SectionTitle>
                <PersonvernText>
                    Under GDPR har du følgende rettigheter:
                </PersonvernText>
                <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                    <ListItem><strong>Rett til innsyn:</strong> Du kan be om en kopi av personopplysningene vi har direkte tilgang til (kontaktinformasjon fra henvendelser)</ListItem>
                    <ListItem><strong>Rett til retting:</strong> Du kan be oss rette unøyaktige eller ufullstendige opplysninger vi kontrollerer</ListItem>
                    <ListItem><strong>Rett til sletting:</strong> Du kan be oss slette personopplysninger vi har direkte kontroll over</ListItem>
                    <ListItem><strong>Rett til begrensning:</strong> Du kan be oss begrense behandlingen av opplysninger vi kontrollerer</ListItem>
                    <ListItem><strong>Rett til dataportabilitet:</strong> Du kan be om å få dine kontaktdata i et strukturert format</ListItem>
                    <ListItem><strong>Rett til innsigelse:</strong> Du kan motsette deg behandling basert på berettiget interesse</ListItem>
                </Box>
                <PersonvernText>
                    <strong>Viktig om Google Analytics:</strong> For data samlet av Google Analytics må du kontakte Google direkte
                    gjennom deres <ContactLink href="https://myaccount.google.com/" target="_blank" rel="noopener">My Account</ContactLink> tjeneste
                    eller bruke Googles <ContactLink href="https://support.google.com/analytics/answer/181881" target="_blank" rel="noopener">
                        opt-out verktøy</ContactLink>. Vi har ikke direkte tilgang til å slette eller endre individuelle brukerdata i Google Analytics.
                </PersonvernText>
                <PersonvernText>
                    For å utøve rettigheter knyttet til data vi kontrollerer direkte, kontakt oss på <ContactLink href="mailto:post@bandos.no">post@bandos.no</ContactLink>.
                </PersonvernText>

                <SectionTitle variant="h2">
                    9. Klagerett
                </SectionTitle>
                <PersonvernText>
                    Du har rett til å klage til Datatilsynet hvis du mener vi behandler dine personopplysninger i strid med
                    personvernlovgivningen. Kontaktinformasjon til Datatilsynet finner du på datatilsynet.no.
                </PersonvernText>

                <SectionTitle variant="h2">
                    10. Endringer i personvernerklæringen
                </SectionTitle>
                <PersonvernText>
                    Vi kan oppdatere denne personvernerklæringen fra tid til annen. Vesentlige endringer vil bli kommunisert
                    på vår nettside. Vi oppfordrer deg til å gjennomgå denne erklæringen regelmessig.
                </PersonvernText>

                <SectionTitle variant="h2">
                    11. Kontakt oss
                </SectionTitle>
                <PersonvernText>
                    Hvis du har spørsmål om denne personvernerklæringen eller hvordan vi behandler dine personopplysninger,
                    kan du kontakte oss:
                </PersonvernText>
                <PersonvernText>
                    E-post: <ContactLink href="mailto:post@bandos.no">post@bandos.no</ContactLink><br />
                    Adresse: Bergen, Norge
                </PersonvernText>
            </PersonvernContainer>
            <Footer />
        </>
    );
};

export default Personvern;
