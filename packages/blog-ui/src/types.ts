import { ReactNode, ComponentType } from "react";

export type MyLinkProps = {
  linkComponent: ComponentType<any>;
  children: ReactNode;
  href: string;
  className?: string;
}
export type NavbarProps = {
  linkBrandComponent: ComponentType<any>;
  linkCreateComponent: ComponentType<any>;
  linkPageCreate: string;
  linkBrand: string;
  navbarContainerClassName: string;
  navbarWrapperClassName: string;
  brandWrapperClassName: string;
  createWrapperClassName: string;
  brandClassName: string;
  createClassName: string;
  contentNavbar: string;
  CreatePostContent: string;
};

export type BreadcrumbPropsType = {
  breadcrumbClassName?: string;
  linkComponent?: any;
  linkHref: string;
  ariaLabel?: string;
  contentBreadcrumb?: string;
};

export type ButtonProps = {
  children?: ReactNode;
  linkComponent?: any;
  linkHref?: string;
  typeButton: "submit" | "reset" | "button";
  actionButton: () => void;
  buttonClassName: string;
  buttonActionWrapper?: string;
  buttonActionClassName?: string;
};