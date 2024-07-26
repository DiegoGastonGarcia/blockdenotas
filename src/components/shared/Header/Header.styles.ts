import styled from "styled-components";
import { IHeader } from "./Header";

export const StyledHeader = styled.h2<Pick<IHeader, "variant" | "bold">>`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme, variant }) => theme.colors[variant]};
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  margin-block: 0;
`;
