"use client";
// Import all the necessary dependencies here
import React from "react";
import Button from "../Button/Button";
import { useNavigation } from "@/hooks";
import { ArrowLeft } from "lucide-react";

/**
 * Back button with icon
 * @returns {JSX.Element}
 */
const BackButtonComponent = () => {
  const { backToPreviousPage } = useNavigation();

  return (
    <Button
      onClick={backToPreviousPage}
      aria-label="Go back"
      type="button"
      variant="primary"
      text="Back"
    >
      <ArrowLeft size={20} />
    </Button>
  );
};

export default BackButtonComponent;
