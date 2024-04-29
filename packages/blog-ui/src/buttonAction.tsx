"use client";

import { PencilLine } from "lucide-react";
import MyLink from "./link";
import { ButtonProps } from "./types";
import { FC } from "react";

export const Button = ({
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

export const ButtonAction: FC<ButtonProps>= ({
  typeButton,
  actionButton,
  buttonActionWrapper,
  buttonActionClassName,
  buttonClassName,
  children,
  linkComponent,
  linkHref,
}) => {
  return (
    <div className={buttonActionWrapper}>
      <MyLink
        linkComponent={linkComponent}
        href={linkHref!}
        className={buttonActionClassName}>
        <PencilLine /> Edit
      </MyLink>
      <Button
        typeButton={typeButton}
        actionButton={actionButton}
        buttonClassName={buttonClassName}>
          {children}
      </Button>
    </div>
  );
};
