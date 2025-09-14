import { Box } from '@mui/material';
import type { ReactNode } from 'react';

interface TwoColumnLayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  reverse?: boolean;
}

/**
 * Simple two-column layout using MUI sx props. Much cleaner than styled components!
 */
const TwoColumnLayout = ({
  leftContent,
  rightContent,
  reverse = false
}: TwoColumnLayoutProps) => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: { xs: reverse ? 'column' : 'column-reverse', lg: reverse ? 'row-reverse' : 'row' },
      gap: { xs: 5, lg: 7.5 }, // 40px, 60px
      minHeight: { lg: '500px' },
      textAlign: { xs: 'center', lg: 'left' }
    }}>
      <Box sx={{
        flex: 1,
        maxWidth: { xs: '100%', lg: '500px' }
      }}>
        {leftContent}
      </Box>
      <Box sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: { xs: '280px', lg: '350px', xl: '500px' },
        width: '100%'
      }}>
        {rightContent}
      </Box>
    </Box>
  );
};

export default TwoColumnLayout;