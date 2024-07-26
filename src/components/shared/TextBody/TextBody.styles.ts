import styled from "styled-components";
import { ITextBody } from "./TextBody";

export const StyledText = styled.text<Pick<ITextBody, "size">>`
  font-size: ${({ theme, size }) => theme.fontSize[size]};
`;
