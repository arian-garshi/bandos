import { Button } from '@mui/material';
import styled from 'styled-components';

// Primary button - used for main actions
export const PrimaryButton = styled(Button)`
  && {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: white;
    padding: 12px 32px;
    font-weight: 600;
    border-radius: 8px;
    text-transform: none;
    font-size: 1rem;
    
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.dark};
    }
    
    ${({ theme }) => theme.breakpoints.down('sm')} {
      width: 200px;
    }
  }
`;

// Secondary button - used for alternative actions
export const SecondaryButton = styled(Button)`
  && {
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.main};
    padding: 10px 32px;
    font-weight: 600;
    border-radius: 8px;
    text-transform: none;
    font-size: 1rem;
    
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: white;
    }
    
    ${({ theme }) => theme.breakpoints.down('sm')} {
      width: 200px;
    }
  }
`;

// Outline button - used for less prominent actions
export const OutlineButton = styled(Button)`
  && {
    border: 1px solid ${({ theme }) => theme.colors.gray.light};
    color: ${({ theme }) => theme.colors.gray.dark};
    padding: 12px 24px;
    font-weight: 600;
    border-radius: 8px;
    text-transform: none;
    font-size: 1rem;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray.light};
      border-color: ${({ theme }) => theme.colors.gray.medium};
    }
  }
`;

// Text button - used for minimal actions like links
export const TextButton = styled(Button)`
  && {
    color: ${({ theme }) => theme.colors.primary};
    padding: 12px 16px;
    font-weight: 600;
    text-transform: none;
    font-size: 1rem;
    text-decoration: underline;
    
    &:hover {
      background-color: rgba(210, 65, 91, 0.05);
      text-decoration: none;
    }
  }
`;

// Special submit button for forms with gradient and enhanced effects
export const SubmitButton = styled(Button)`
  && {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    padding: 16px 48px;
    font-size: 1.125rem;
    font-weight: 600;
    border-radius: 8px;
    text-transform: none;
    box-shadow: 0 8px 32px rgba(210, 65, 91, 0.3);
    transition: all 0.3s ease;
    
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 12px 40px rgba(210, 65, 91, 0.4);
      transform: translateY(-2px);
    }
    
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
      box-shadow: 0 8px 32px rgba(210, 65, 91, 0.2);
    }
    
    ${({ theme }) => theme.breakpoints.down('sm')} {
      width: 100%;
      padding: 14px 32px;
    }
  }
`;
