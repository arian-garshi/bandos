import { Container, Typography } from '@mui/material';
import styled from 'styled-components';
import type { ReactNode } from 'react';

interface PageSectionProps {
    title?: string;
    titleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: ReactNode;
    maxWidth?: number;
    padding?: 'normal' | 'large' | 'small';
}

// Reusable section container - eliminates duplicate SectionContainer across components
const SectionContainer = styled(Container) <{ $padding: 'normal' | 'large' | 'small' }>`
  && {
    padding: ${({ $padding }) => {
        switch ($padding) {
            case 'large': return '120px 24px 80px 24px';
            case 'small': return '40px 24px';
            case 'normal':
            default: return '80px 24px';
        }
    }};
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      padding: ${({ $padding }) => {
        switch ($padding) {
            case 'large': return '80px 16px 60px 16px';
            case 'small': return '32px 16px';
            case 'normal':
            default: return '60px 16px';
        }
    }};
    }
  }
`;

// Reusable section title - eliminates duplicate SectionTitle across components
const SectionTitle = styled(Typography)`
  && {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 600;
    margin-bottom: 48px;
    text-align: center;
    
    ${({ theme }) => theme.breakpoints.down('md')} {
      margin-bottom: 32px;
    }
  }
`;

/**
 * Reusable page section component that replaces duplicate SectionContainer + SectionTitle patterns.
 * Used in TjenesterSection, CardsSection, and other components.
 * 
 * @param title - Optional section title
 * @param titleVariant - Typography variant for title (default: h3)
 * @param children - Section content
 * @param maxWidth - Maximum width of container (default: 1200px from theme)
 * @param padding - Padding preset: 'normal' | 'large' | 'small'
 */
const PageSection = ({
    title,
    titleVariant = 'h3',
    children,
    maxWidth,
    padding = 'normal'
}: PageSectionProps) => {
    return (
        <SectionContainer
            $padding={padding}
            style={{ maxWidth: maxWidth ? `${maxWidth}px` : undefined }}
        >
            {title && (
                <SectionTitle variant={titleVariant}>
                    {title}
                </SectionTitle>
            )}
            {children}
        </SectionContainer>
    );
};

export default PageSection;
