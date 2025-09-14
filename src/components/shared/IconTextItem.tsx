import { Typography, Box } from '@mui/material';
import styled from 'styled-components';
import type { LucideIcon } from 'lucide-react';

interface IconTextItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  elevated?: boolean;
}

// Only styled component needed - the elevated icon wrapper
const IconWrapper = styled(Box) <{ $elevated: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  ${({ $elevated, theme }) => $elevated ? `
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(210, 65, 91, 0.25);
  ` : `
    width: 24px;
    height: 24px;
    margin-top: 2px;
    color: ${theme.palette.primary.main};
  `}
`;

/**
 * Simple icon + text component. Uses sx props instead of complex styled components.
 */
const IconTextItem = ({
  icon,
  title,
  description,
  elevated = false
}: IconTextItemProps) => {
  const Icon = icon;

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 2, // 16px
      mb: { xs: 5, md: 6 }, // 40px, 48px
      '&:last-child': { mb: 0 }
    }}>
      <IconWrapper $elevated={elevated}>
        <Icon size={elevated ? 20 : 24} />
      </IconWrapper>
      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: '1.125rem', md: '1.25rem' },
            mb: 1
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: 'text.secondary',
            lineHeight: 1.7,
            fontSize: { xs: '1rem', md: '1.125rem' }
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default IconTextItem;