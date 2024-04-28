"use client";
import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  linkComponent: any;
  typeButton?: "submit" | "reset" | "button";
  actionButton: () => void;
  buttonClassName?: string;
}
const ButtonAction = ({
  typeButton,
  actionButton,
  buttonClassName,
  children,
}: ButtonProps) => {
  return (
    <button
      type={typeButton}
      onClick={actionButton}
      className={buttonClassName}>
      {children}
    </button>
  );
};

export default ButtonAction;
