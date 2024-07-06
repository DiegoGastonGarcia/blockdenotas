'use client';

import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import StyledComponentsRegistry from './Registry';

function ThemeLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default ThemeLayout;
