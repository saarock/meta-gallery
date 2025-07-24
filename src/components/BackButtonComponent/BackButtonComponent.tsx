"use client";
// Import all the necessary dependencies here
import React from "react";
import Button from "../Button/Button";
import { useNavigation } from "@/hooks";
import { ArrowLeft } from "lucide-react";
import backBtnStyles from "../../styles/components/BackBtn.module.css"

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
      className={backBtnStyles.back_btn}
    >
      <ArrowLeft size={20} />
    </Button>
  );
};

export default BackButtonComponent;
