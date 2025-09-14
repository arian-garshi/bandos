import { Typography, Box } from '@mui/material';
import styled from 'styled-components';
import { HelpCircle, Code, FileText, TrendingUp } from 'lucide-react';
import PageSection from './shared/PageSection';
import IconTextItem from './shared/IconTextItem';
import responsivityImg from '../assets/graphics/responsivity.svg';
import seoImg from '../assets/graphics/seo.svg';
import safetyImg from '../assets/graphics/safety.svg';
import analyticsImg from '../assets/graphics/analytics.svg';
import userTestingImg from '../assets/graphics/user testing.svg';
import accessibilityImg from '../assets/graphics/accessibility.svg';
import prototypeMainImg from '../assets/graphics/prototypeMain.svg';
import developmentMainImg from '../assets/graphics/developmentMain.svg';

// SectionContainer and SectionTitle replaced by PageSection

const ServiceSection = styled(Box)`
  margin-bottom: 120px;
  position: relative;
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: 80px;
  }
`;

const ServiceContent = styled(Box)`
  display: flex;
  align-items: center;
  gap: 80px;
  
  ${({ theme }) => theme.breakpoints.down('lg')} {
    flex-direction: column;
    gap: 48px;
  }
`;

const ServiceTextContent = styled(Box)`
  flex: 1;
  max-width: 600px;
`;

const ServiceImageContainer = styled(Box)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 420px;
  
  ${({ theme }) => theme.breakpoints.down('lg')} {
    max-width: 380px;
    width: 100%;
  }
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: 320px;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
`;

const ServiceTitle = styled(Typography)`
  && {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 600;
    margin-bottom: 24px;
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      margin-bottom: 20px;
    }
  }
`;

const ServiceDescription = styled(Typography)`
  && {
    color: ${({ theme }) => theme.palette.text.secondary};
    line-height: 1.7;
    font-size: 1.125rem;
    margin-bottom: 24px;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      font-size: 1rem;
      margin-bottom: 20px;
    }
  }
`;

const IncludedTitle = styled(Typography)`
  && {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 500;
    margin-bottom: 32px;
    font-size: 1.525rem;
    text-align: center;
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      margin-bottom: 24px;
      font-size: 1rem;
    }
  }
`;

const FeaturesGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 900px;
  margin: 0 auto;
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const FeatureCard = styled(Box)`
  text-align: center;
`;

const FeatureImageContainer = styled(Box)`
  width: 120px;
  height: 120px;
  margin: 0 auto 16px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100px;
    height: 100px;
    margin-bottom: 12px;
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

// Simplified - use sx prop instead of styled components

const ServicesContainer = styled(Box)`
  max-width: 1000px;
  margin: 0 auto 80px auto;
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: 60px;
  }
`;

const AlternateServiceSection = styled(ServiceSection)`
  ${ServiceContent} {
    ${({ theme }) => theme.breakpoints.up('lg')} {
      flex-direction: row-reverse;
    }
  }
`;

// Removed unused styled components - replaced by IconTextItem

const ProcessSteps = styled(Box)`
  background: ${({ theme }) => theme.colors.gray.light};
  padding: 24px;
  border-radius: 8px;
  margin-top: 24px;
`;

const ProcessTitle = styled(Typography)`
  && {
    font-weight: 600;
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 16px;
    font-size: 1.125rem;
  }
`;

const ProcessDescription = styled(Typography)`
  && {
    color: ${({ theme }) => theme.palette.text.secondary};
    line-height: 1.7;
    font-size: 1rem;
  }
`;

const TjenesterSection = () => {
  const aiExamples = [
    {
      icon: Code,
      title: "Generativ programmering",
      description: "Vi bruker generativ AI til å bygge fullverdige applikasjoner på brøkdelen av tiden og kostnaden. Fra idé til fungerende prototype på dager, ikke måneder. Perfekt for å teste konsepter, validere marked og bevise verdi før du investerer i full utvikling. Koden er ren, dokumentert og kan videreutvikles av alle utviklere."
    },
    {
      icon: HelpCircle,
      title: "Selvbetjent support på egne dokumenter",
      description: "Svar fra håndbøker, kontrakter og rutiner med kildepeker og tilgangskontroll. Avlaster support og gjør innholdet bedre over tid."
    },
    {
      icon: FileText,
      title: "Faktura og dokumentflyt til økonomi",
      description: "Hent data fra PDF og epost, normaliser, valider mot regler og postér trygt til regnskap med full sporbarhet."
    },
    {
      icon: TrendingUp,
      title: "Kreativ optimalisering og A/B testing",
      description: "Lag sikre varianter av annonsetekst og bilder, test løpende, skaler vinnere, pause tapere og juster landingssider etter faktiske konverteringer. Integrert med Google Ads og Meta med rene UTM og server side sporing."
    }
  ];

  const features = [
    {
      image: responsivityImg,
      title: "Responsiv",
      description: "Din nettside vil bli tilpasset alle enheter, skjermstørrelser og orienteringer"
    },
    {
      image: seoImg,
      title: "SEO",
      description: "Økt synlighet i Google søk ved hjelp av Søkemotor-optimalisering"
    },
    {
      image: safetyImg,
      title: "Trygg",
      description: "Robust kode sikret med kryptert forbindelse (SSL)"
    },
    {
      image: analyticsImg,
      title: "Analyse",
      description: "Integrering av Google analytics for klar oversikt over besøkende trafikk"
    },
    {
      image: userTestingImg,
      title: "Brukertestet",
      description: "Gjennom grundig testing via ekte brukere optimaliseres design og flyt"
    },
    {
      image: accessibilityImg,
      title: "Brukervennlig",
      description: "Brukervennlighet for alle, uavhengig av funksjons-evne."
    }
  ];

  return (
    <PageSection title="Tjenester">

      <ServicesContainer>
        <ServiceSection>
          <ServiceContent>
            <ServiceTextContent>
              <ServiceTitle variant="h4">
                Webutvikling
              </ServiceTitle>
              <ServiceDescription>
                Vi bygger i React på frontend og Node på backend, med Sanity som headless CMS. Det gir rask lastetid, ryddig komponentarkitektur og enkel redigering av innhold uten at designet ryker. Nye sider og moduler kan legges til uten full ombygging, og du får stabil drift med SSL, backup og overvåking fra dag én.
              </ServiceDescription>
              <ServiceDescription>
                Vi bruker generativ AI som utviklingsakselerator, men all kode kvalitetssikres manuelt. I tillegg setter vi opp AI-drevne løsninger med LLM og agenter som automatiserer oppgaver i dine prosesser, som innholdsproduksjon, dokumentoppsummering, kundestøtte, dataoppslag og integrasjoner mot tredjepart. Løsningene kan hente og bruke dine data trygt med tilgangsstyring, logging og sporing, og de skalerer når behovet vokser.
              </ServiceDescription>
            </ServiceTextContent>

            <ServiceImageContainer>
              <ServiceImage
                src={developmentMainImg}
                alt="Webutvikling illustration"
              />
            </ServiceImageContainer>
          </ServiceContent>
        </ServiceSection>

        <AlternateServiceSection>
          <ServiceContent>
            <ServiceTextContent>
              <ServiceTitle variant="h4">
                Design og workshop
              </ServiceTitle>
              <ServiceDescription>
                Vi bruker design thinking for å gå raskt fra antagelser til bevis. Vi avklarer problemet, målgruppen og hva ideen skal oppnå, gjør lettvekts markedsinnsikt med intervjuer og enkle spørreundersøkelser, ser på konkurrenter og formulerer hypoteser som kan testes. Deretter kjører vi idemyldring, prioriterer det som faktisk betyr noe, lager wireframes eller klikkbare prototyper og tester på ekte brukere.
              </ServiceDescription>
              <ServiceDescription>
                Du får konkrete funn, et beslutningsgrunnlag og en første backlog som peker rett mot en smal MVP. Vi kan rekruttere riktige testpersoner, fasilitere workshops med teamet ditt og dokumentere alt i klare anbefalinger. Målet er at en oppstart får trygghet i om ideen treffer, hva som må bygges først, og hvilke risikoer som kan kuttes før du bruker mer tid og penger.
              </ServiceDescription>
            </ServiceTextContent>

            <ServiceImageContainer>
              <ServiceImage
                src={prototypeMainImg}
                alt="Design og workshop illustration"
              />
            </ServiceImageContainer>
          </ServiceContent>
        </AlternateServiceSection>

        <ServiceSection>
          <ServiceContent>
            <ServiceTextContent style={{ maxWidth: '100%' }}>
              <ServiceTitle variant="h4">
                AI og automasjon
              </ServiceTitle>
              <ServiceDescription>
                Vi gjør LLM og generativ AI til konkret verdi i hverdagen. Vi finner tidstyvene i prosessene dine, kobler løsninger til egne dokumenter og systemer, og bygger små agenter som henter, forstår og handler. Tilgangsstyring, logging og sporbarhet er på plass fra første dag. Data forblir dine. Levering kan skje i din sky eller på egen drift der bransjen krever det.
              </ServiceDescription>
              <ServiceDescription>
                Vi starter med ett avgrenset mål som kan måles. Deretter bygger vi en første versjon som går mot virkelige brukere og verktøyene dere allerede bruker. Løsningen lærer innenfor tydelige rammer og krever godkjenning der det er riktig. Du får kort vei til effekt og en plan for neste trinn når gevinsten er dokumentert.
              </ServiceDescription>

              <Box sx={{ my: 4 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 3 }}
                >
                  Eksempler som leverer nå
                </Typography>
                {aiExamples.map((example, index) => (
                  <IconTextItem
                    key={index}
                    icon={example.icon}
                    title={example.title}
                    description={example.description}
                    elevated={true}
                  />
                ))}
              </Box>

              <ProcessSteps>
                <ProcessTitle>
                  Slik jobber vi
                </ProcessTitle>
                <ProcessDescription>
                  Kartlegging av mål og prosess. Prototype koblet til dine data og verktøy. Kontrollert utrulling med målinger, feillogging og endringslogg. Løpende forbedringer basert på tall, ikke magefølelse. Alt dokumenteres og kan overleveres internt uten låsing til oss.
                </ProcessDescription>
              </ProcessSteps>
            </ServiceTextContent>
          </ServiceContent>
        </ServiceSection>
      </ServicesContainer>

      <IncludedTitle>
        Inkludert i løsningen
      </IncludedTitle>

      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureImageContainer>
              <FeatureImage
                src={feature.image}
                alt={feature.title}
              />
            </FeatureImageContainer>
            <Typography
              sx={{
                fontWeight: 600,
                mb: 1,
                fontSize: { xs: '1rem', md: '1.125rem' }
              }}
            >
              {feature.title}
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                lineHeight: 1.6,
                fontSize: { xs: '0.9rem', md: '0.95rem' },
                maxWidth: '200px',
                mx: 'auto',
                textAlign: 'left'
              }}
            >
              {feature.description}
            </Typography>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </PageSection>
  );
};

export default TjenesterSection;
