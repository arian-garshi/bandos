import React from 'react';
import { Typography, Box } from '@mui/material';
import styled from 'styled-components';
import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

interface IconTextItemProps {
    icon?: LucideIcon;
    iconElement?: ReactNode; // For custom icon JSX
    title: string;
    description: string;
    layout?: 'horizontal' | 'vertical'; // horizontal for CardsSection, vertical for feature cards
    iconStyle?: 'simple' | 'elevated'; // simple for CardsSection, elevated for TjenesterSection
    gap?: number;
}

// Flexible container that adapts to layout
const ItemContainer = styled(Box) <{ $layout: 'horizontal' | 'vertical'; $gap: number }>`
  display: flex;
  flex-direction: ${({ $layout }) => $layout === 'horizontal' ? 'row' : 'column'};
  align-items: ${({ $layout }) => $layout === 'horizontal' ? 'flex-start' : 'center'};
  text-align: ${({ $layout }) => $layout === 'horizontal' ? 'left' : 'center'};
  gap: ${({ $gap }) => $gap}px;
  margin-bottom: 48px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: 40px;
  }
`;

// Flexible icon wrapper - simple for process icons, elevated for examples
const IconWrapper = styled(Box) <{ $style: 'simple' | 'elevated' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.palette.primary.main};
  
  ${({ $style, theme }) => $style === 'simple' ? `
    width: 24px;
    height: 24px;
    margin-top: 2px;
  ` : `
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(210, 65, 91, 0.25);
  `}
`;

const ContentWrapper = styled(Box)`
  flex: 1;
`;

const ItemTitle = styled(Typography) <{ $layout: 'horizontal' | 'vertical' }>`
  && {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 600;
    font-size: 1.25rem;
    margin-bottom: 8px;
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      font-size: 1.125rem;
    }
  }
`;

const ItemDescription = styled(Typography) <{ $layout: 'horizontal' | 'vertical' }>`
  && {
    color: ${({ theme }) => theme.palette.text.secondary};
    line-height: 1.7;
    font-size: ${({ $layout }) => $layout === 'horizontal' ? '1.125rem' : '0.95rem'};
    max-width: ${({ $layout }) => $layout === 'vertical' ? '200px' : 'none'};
    margin: 0 auto;
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      font-size: ${({ $layout }) => $layout === 'horizontal' ? '1rem' : '0.9rem'};
    }
  }
`;

/**
 * Reusable icon + text component that replaces duplicate patterns:
 * - CardsSection: ProcessItem + IconWrapper + ProcessTitle + ProcessDescription 
 * - TjenesterSection: ExampleItem + ExampleIcon + ExampleTitle + ExampleDescription
 * 
 * @param icon - Lucide icon component
 * @param iconElement - Custom icon JSX (alternative to icon prop)
 * @param title - Item title
 * @param description - Item description
 * @param layout - 'horizontal' (default, like CardsSection) or 'vertical' (like feature cards)
 * @param iconStyle - 'simple' (like CardsSection) or 'elevated' (like TjenesterSection examples)
 * @param gap - Gap between icon and content (default: 16px)
 */
const IconTextItem = ({
    icon,
    iconElement,
    title,
    description,
    layout = 'horizontal',
    iconStyle = 'simple',
    gap = 16
}: IconTextItemProps) => {
    return (
        <ItemContainer $layout={layout} $gap={gap}>
            <IconWrapper $style={iconStyle}>
                {iconElement || (icon && React.createElement(icon, { size: iconStyle === 'simple' ? 24 : 20 }))}
            </IconWrapper>
            <ContentWrapper>
                <ItemTitle $layout={layout}>
                    {title}
                </ItemTitle>
                <ItemDescription $layout={layout}>
                    {description}
                </ItemDescription>
            </ContentWrapper>
        </ItemContainer>
    );
};

export default IconTextItem;
