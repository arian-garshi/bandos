import { Box } from '@mui/material';
import styled from 'styled-components';
import type { ReactNode } from 'react';

interface TwoColumnLayoutProps {
    leftContent: ReactNode;
    rightContent: ReactNode;
    reverse?: boolean; // Switch order of columns
    gap?: number;
    minHeight?: number;
    leftMaxWidth?: number;
    rightMaxWidth?: number;
    centerContentVertically?: boolean;
}

// Flexible two-column container
const LayoutContainer = styled(Box) <{
    $gap: number;
    $minHeight?: number;
    $reverse: boolean;
    $centerVertically: boolean;
}>`
  display: flex;
  align-items: ${({ $centerVertically }) => $centerVertically ? 'center' : 'flex-start'};
  justify-content: space-between;
  flex-direction: ${({ $reverse }) => $reverse ? 'row-reverse' : 'row'};
  gap: ${({ $gap }) => $gap}px;
  min-height: ${({ $minHeight }) => $minHeight ? `${$minHeight}px` : 'auto'};
  
  ${({ theme }) => theme.breakpoints.down('lg')} {
    flex-direction: ${({ $reverse }) => $reverse ? 'column' : 'column-reverse'};
    gap: 40px;
    text-align: center;
    min-height: auto;
  }
`;

const LeftColumn = styled(Box) <{ $maxWidth?: number }>`
  flex: 1;
  max-width: ${({ $maxWidth }) => $maxWidth ? `${$maxWidth}px` : '500px'};
  
  ${({ theme }) => theme.breakpoints.down('lg')} {
    max-width: 100%;
  }
`;

const RightColumn = styled(Box) <{ $maxWidth?: number }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ $maxWidth }) => $maxWidth ? `${$maxWidth}px` : '500px'};
  
  ${({ theme }) => theme.breakpoints.down('lg')} {
    max-width: 350px;
    width: 100%;
  }
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: 280px;
  }
`;

/**
 * Reusable two-column layout component.
 * Replaces the Hero component's text + image pattern and can be used for other similar layouts.
 * 
 * Features:
 * - Responsive: Stacks vertically on mobile
 * - Flexible: Supports any content in either column
 * - Reversible: Can swap column order
 * - Configurable: Gap, max widths, min height
 * 
 * @param leftContent - Content for left column (usually text)
 * @param rightContent - Content for right column (usually image/visual)
 * @param reverse - Reverse column order (right content appears first)
 * @param gap - Gap between columns (default: 60px)
 * @param minHeight - Minimum height of layout (default: none)
 * @param leftMaxWidth - Max width of left column (default: 500px)
 * @param rightMaxWidth - Max width of right column (default: 500px)
 * @param centerContentVertically - Center align content vertically (default: true)
 */
const TwoColumnLayout = ({
    leftContent,
    rightContent,
    reverse = false,
    gap = 60,
    minHeight,
    leftMaxWidth,
    rightMaxWidth,
    centerContentVertically = true
}: TwoColumnLayoutProps) => {
    return (
        <LayoutContainer
            $gap={gap}
            $minHeight={minHeight}
            $reverse={reverse}
            $centerVertically={centerContentVertically}
        >
            <LeftColumn $maxWidth={leftMaxWidth}>
                {leftContent}
            </LeftColumn>
            <RightColumn $maxWidth={rightMaxWidth}>
                {rightContent}
            </RightColumn>
        </LayoutContainer>
    );
};

export default TwoColumnLayout;
