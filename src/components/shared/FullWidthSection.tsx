import { Box } from '@mui/material';
import styled from 'styled-components';
import type { ReactNode } from 'react';

interface FullWidthSectionProps {
    children: ReactNode;
    background?: 'black' | 'white' | 'primary';
    showTopTransition?: boolean;
}

// Only one styled component needed for the clip-path
const TransitionShape = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 70px;
  }
  background: ${({ theme }) => theme.colors.white};
  clip-path: polygon(0 0, 100% 0, 50% 100%);
`;

/**
 * Simple full-width section using sx props where possible.
 */
const FullWidthSection = ({
    children,
    background,
    showTopTransition = false
}: FullWidthSectionProps) => {
    const getBackgroundColor = () => {
        switch (background) {
            case 'black': return 'black';
            case 'white': return 'white';
            case 'primary': return 'primary.main';
            default: return undefined;
        }
    };

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                overflow: 'hidden',
                bgcolor: getBackgroundColor()
            }}
        >
            {showTopTransition && <TransitionShape />}
            {children}
        </Box>
    );
};

export default FullWidthSection;
