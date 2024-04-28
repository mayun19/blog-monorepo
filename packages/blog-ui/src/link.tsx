"use client";

import { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  linkComponent: any;
}

export const MyLink = ({ linkComponent, children, ...props }: LinkProps) => {
  const Component = linkComponent;
  return <Component {...props}>{children}</Component>;
};