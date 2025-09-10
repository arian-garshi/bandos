import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import styled from 'styled-components';
import '@fontsource/space-grotesk/700.css';

const StyledAppBar = styled(AppBar)`
  && {
    background-color: ${({ theme }) => theme.palette.common.white};
    box-shadow: none;
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey[300]};
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
`;

const StyledToolbar = styled(Toolbar)`
  && {
    padding: ${({ theme }) => theme.spacing(0, 3)};
    min-height: 56px;
    margin: 0;
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      padding: ${({ theme }) => theme.spacing(0, 2)};
      min-height: 48px;
    }
  }
`;

const LogoText = styled(Typography)`
  && {
    color: ${({ theme }) => theme.palette.primary.main};
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-weight: 700;
    font-size: 1.375rem;
    text-decoration: none;
    cursor: pointer;
    letter-spacing: -0.02em;
    transition: all 0.2s ease-in-out;
    
    &:hover {
      opacity: 0.8;
      transform: translateY(-1px);
    }
  }
`;

const Navigation = () => {
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <StyledAppBar position="fixed" variant="outlined" elevation={0}>
      <Container maxWidth={false} disableGutters>
        <StyledToolbar>
          <LogoText
            variant="h6"
            component="div"
            onClick={handleLogoClick}
          >
            Bandos
          </LogoText>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navigation;
