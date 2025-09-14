import { Container, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface PageSectionProps {
  title?: string;
  children: ReactNode;
  maxWidth?: number;
}

/**
 * Simple page section using MUI sx props. Much cleaner than styled components!
 */
const PageSection = ({
  title,
  children,
  maxWidth
}: PageSectionProps) => {
  return (
    <Container sx={{
      py: { xs: 7.5, md: 10 }, // 60px/8, 80px/8 
      px: { xs: 2, md: 3 },    // 16px/8, 24px/8
      maxWidth: maxWidth ? `${maxWidth}px` : '1200px'
    }}>
      {title && (
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            textAlign: 'center',
            mb: { xs: 4, md: 6 } // 32px/8, 48px/8
          }}
        >
          {title}
        </Typography>
      )}
      {children}
    </Container>
  );
};

export default PageSection;