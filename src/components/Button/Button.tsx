// Import all the necessary dependencies here
import React from "react";
import { ButtonProps } from "@/types/componentIndex";

/**
 * Reusable Button component
 *
 * @param {Object} props - Component props
 * @param {string} props.text - Text label displayed inside the button
 * @param {React.ReactNode} [props.children] - Optional children elements inside the button
 * @param {string} [props.variant='primary'] - Style variant of the button, e.g. "primary", "secondary"
 * @param {string} [props.className] - Additional custom class names to apply
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} [props.rest] - Other native button attributes like onClick, disabled, etc.
 *
 * @returns {JSX.Element} A styled button element
 */
const Button: React.FC<ButtonProps> = ({
  text,
  children,
  variant = "primary",  // default variant
  className = "",
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant} ${className}`}
      {...props}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
