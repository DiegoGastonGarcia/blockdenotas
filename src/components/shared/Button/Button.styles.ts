import { lighten } from "polished";
import styled from "styled-components";

export const StyledButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.m}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing.xs};
  transition: all 0.15s ease-in;
  border: ${({ theme }) => `1px solid ${theme.colors.dark}`};
  &:hover {
    background-color: ${({ theme }) => lighten(0.15, theme.colors.primary)};
  }
`;
