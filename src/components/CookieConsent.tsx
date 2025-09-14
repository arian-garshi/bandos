import { useState, useEffect } from 'react';
import { Box, Typography, Switch, FormControlLabel } from '@mui/material';
import styled from 'styled-components';
import { PrimaryButton, OutlineButton, TextButton } from './shared/Buttons';

const ConsentBanner = styled(Box) <{ show: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.gray.light};
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  padding: 24px;
  z-index: 1000;
  transform: translateY(${props => props.show ? '0' : '100%'});
  transition: transform 0.3s ease-in-out;
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 20px 16px;
  }
`;

const ConsentContent = styled(Box) <{ showSettings: boolean }>`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: ${props => props.showSettings ? 'stretch' : 'center'};
  flex-direction: ${props => props.showSettings ? 'column' : 'row'};
  gap: ${props => props.showSettings ? '20px' : '32px'};
  
  ${({ theme }) => theme.breakpoints.down('lg')} {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }
`;

const ConsentText = styled(Box)`
  flex: 1;
`;

const ConsentTitle = styled(Typography)`
  && {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray.darker};
    margin-bottom: 8px;
    font-size: 1.125rem;
  }
`;

const ConsentDescription = styled(Typography)`
  && {
    color: ${({ theme }) => theme.colors.gray.dark};
    line-height: 1.6;
    font-size: 0.95rem;
  }
`;

const ConsentControls = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 300px;
  
  ${({ theme }) => theme.breakpoints.down('lg')} {
    min-width: auto;
  }
`;

const ConsentOptions = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

const ConsentButtons = styled(Box)`
  display: flex;
  gap: 12px;
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
`;


const DetailedSettings = styled(Box) <{ show: boolean }>`
  display: ${props => props.show ? 'block' : 'none'};
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray.light};
`;

const SettingItem = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SettingInfo = styled(Box)`
  margin-bottom: 12px;
`;

const SettingTitle = styled(Typography)`
  && {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray.darker};
    font-size: 0.95rem;
    margin-bottom: 4px;
  }
`;

const SettingDescription = styled(Typography)`
  && {
    color: ${({ theme }) => theme.colors.gray.dark};
    font-size: 0.85rem;
    line-height: 1.5;
  }
`;

interface ConsentSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<ConsentSettings>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem('cookie-consent');
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      const parsed = JSON.parse(savedConsent);
      setSettings(parsed);
      updateGoogleAnalytics(parsed);
    }
  }, []);

  const updateGoogleAnalytics = (consent: ConsentSettings) => {
    // Update Google Analytics consent mode
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': consent.analytics ? 'granted' : 'denied',
        'ad_storage': consent.marketing ? 'granted' : 'denied',
        'ad_user_data': consent.marketing ? 'granted' : 'denied',
        'ad_personalization': consent.marketing ? 'granted' : 'denied'
      });
    }
  };

  const saveConsent = (consent: ConsentSettings) => {
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setSettings(consent);
    updateGoogleAnalytics(consent);
    setShowBanner(false);
  };

  const handleAcceptAll = () => {
    const fullConsent = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    saveConsent(fullConsent);
  };

  const handleRejectAll = () => {
    const minimalConsent = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    saveConsent(minimalConsent);
  };

  const handleSaveSettings = () => {
    saveConsent(settings);
  };

  const handleSettingChange = (key: keyof ConsentSettings) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (key === 'necessary') return; // Can't disable necessary cookies

    setSettings(prev => ({
      ...prev,
      [key]: event.target.checked
    }));
  };

  if (!showBanner) return null;

  return (
    <ConsentBanner show={showBanner}>
      <ConsentContent showSettings={showSettings}>
        <ConsentText>
          <ConsentTitle>
            Vi bruker informasjonskapsler
          </ConsentTitle>
          <ConsentDescription>
            Vi bruker nødvendige informasjonskapsler for at nettsiden skal fungere.
            Vi ønsker også å bruke analytiske informasjonskapsler for å forstå hvordan du bruker siden,
            slik at vi kan forbedre den. Du kan velge hvilke typer du vil tillate.
          </ConsentDescription>
        </ConsentText>

        <ConsentControls>
          {!showSettings && (
            <ConsentButtons>
              <PrimaryButton onClick={handleAcceptAll}>
                Godta alle
              </PrimaryButton>
              <OutlineButton onClick={handleRejectAll}>
                Kun nødvendige
              </OutlineButton>
              <TextButton onClick={() => setShowSettings(true)}>
                Tilpass innstillinger
              </TextButton>
            </ConsentButtons>
          )}

          <DetailedSettings show={showSettings}>
            <ConsentOptions>
              <SettingItem>
                <SettingInfo>
                  <SettingTitle>Nødvendige informasjonskapsler</SettingTitle>
                  <SettingDescription>
                    Kreves for at nettsiden skal fungere. Kan ikke deaktiveres.
                  </SettingDescription>
                </SettingInfo>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.necessary}
                      disabled={true}
                      color="primary"
                    />
                  }
                  label=""
                />
              </SettingItem>

              <SettingItem>
                <SettingInfo>
                  <SettingTitle>Analytiske informasjonskapsler</SettingTitle>
                  <SettingDescription>
                    Hjelper oss å forstå hvordan besøkende bruker nettsiden gjennom Google Analytics.
                    Data er anonymisert og brukes kun for å forbedre brukeropplevelsen.
                  </SettingDescription>
                </SettingInfo>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.analytics}
                      onChange={handleSettingChange('analytics')}
                      color="primary"
                    />
                  }
                  label=""
                />
              </SettingItem>

              <SettingItem>
                <SettingInfo>
                  <SettingTitle>Markedsføring og personalisering</SettingTitle>
                  <SettingDescription>
                    Brukes for å vise relevante annonser og tilpasset innhold.
                    Kan dele data med tredjeparter for markedsføringsformål.
                  </SettingDescription>
                </SettingInfo>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.marketing}
                      onChange={handleSettingChange('marketing')}
                      color="primary"
                    />
                  }
                  label=""
                />
              </SettingItem>
            </ConsentOptions>

            <ConsentButtons>
              <PrimaryButton onClick={handleSaveSettings}>
                Lagre innstillinger
              </PrimaryButton>
              <OutlineButton onClick={() => setShowSettings(false)}>
                Avbryt
              </OutlineButton>
            </ConsentButtons>
          </DetailedSettings>
        </ConsentControls>
      </ConsentContent>
    </ConsentBanner>
  );
};

export default CookieConsent;
