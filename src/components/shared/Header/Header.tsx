"use client";
import React from "react";
import { StyledHeader } from "./Header.styles";

export interface IHeader {
  children: string;
  variant: "dark" | "light";
  bold?: boolean;
}
const Header = ({ variant, children, bold }: IHeader) => {
  return (
    <StyledHeader variant={variant} bold={bold}>
      {children}
    </StyledHeader>
  );
};

export default Header;
