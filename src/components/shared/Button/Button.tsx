"use client";
import React from "react";
import { StyledButton } from "./Button.styles";

export interface IButton {
  children: string;
  onClick?: () => void;
  type?: "submit" | "button";
}

const Button = ({ children, onClick, type }: IButton) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
