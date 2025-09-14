import 'styled-components';
import { Theme } from '@mui/material/styles';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      primary: string;
      white: string;
      black: string;
      gray: {
        light: string;
        medium: string;
        dark: string;
        darker: string;
      };
      success: string;
      error: string;
    };
  }
}

declare global {
  function gtag(command: string, action: string, parameters: Record<string, any>): void;
}
