"use client";
import React from "react";
import { StyledText } from "./TextBody.styles";

export interface ITextBody {
  children: string;
  size: "s" | "m" | "l";
}
const TextBody = ({ children, size }: ITextBody) => {
  return <StyledText size={size}>{children}</StyledText>;
};

export default TextBody;
