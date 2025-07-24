// Import all the necessary dependencies here
import React from "react";

type Variant = "primary" | "secondary";
// Button.tsx necessary props
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string; // required text for the button name
  variant: Variant
}
