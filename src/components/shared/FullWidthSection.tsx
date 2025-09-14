import type { ReactNode } from 'react';
import styled from 'styled-components';

interface FullWidthSectionProps {
    children: ReactNode;
    backgroundColor?: string;
    backgroundThemeColor?: 'black' | 'white' | 'primary'; // Use theme colors
    textColor?: string;
    showTopTransition?: boolean; // Triangular transition shape at top
    transitionColor?: string;
    className?: string;
}

// Full-width section that breaks out of container
const Section = styled.section<{
    $backgroundColor?: string;
    $textColor?: string;
    $bgThemeColor?: 'black' | 'white' | 'primary';
}>`
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow: hidden;
  
  ${({ $backgroundColor, $bgThemeColor, theme }) => {
        if ($bgThemeColor) {
            switch ($bgThemeColor) {
                case 'black':
                    return `background: ${theme.colors.black};`;
                case 'white':
                    return `background: ${theme.colors.white};`;
                case 'primary':
                    return `background: ${theme.colors.primary};`;
                default:
                    return '';
            }
        }
        return $backgroundColor ? `background: ${$backgroundColor};` : '';
    }}
  
  ${({ $textColor }) => $textColor ? `color: ${$textColor};` : ''}
`;

// Triangular transition shape (like in ContactForm)
const TransitionShape = styled.div<{ $color?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: ${({ $color, theme }) => $color || theme.colors.white};
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 70px;
  }
`;

/**
 * Reusable full-width section component.
 * Replaces the ContactForm full-width pattern and can be used for any section that needs:
 * - Full viewport width background
 * - Break out of container constraints
 * - Optional triangular transition at top
 * 
 * @param children - Section content
 * @param backgroundColor - Custom background color
 * @param backgroundThemeColor - Use predefined theme color ('black' | 'white' | 'primary')
 * @param textColor - Text color override
 * @param showTopTransition - Show triangular transition shape at top
 * @param transitionColor - Color of transition shape (defaults to white)
 * @param className - Additional CSS classes
 */
const FullWidthSection = ({
    children,
    backgroundColor,
    backgroundThemeColor,
    textColor,
    showTopTransition = false,
    transitionColor,
    className
}: FullWidthSectionProps) => {
    return (
        <Section
            $backgroundColor={backgroundColor}
            $bgThemeColor={backgroundThemeColor}
            $textColor={textColor}
            className={className}
        >
            {showTopTransition && (
                <TransitionShape $color={transitionColor} />
            )}
            {children}
        </Section>
    );
};

export default FullWidthSection;
