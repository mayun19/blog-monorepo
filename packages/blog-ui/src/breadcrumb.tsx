import { FC } from "react";
import { ArrowLeft } from "lucide-react";
import MyLink from "./link";
import { BreadcrumbPropsType } from "./types";

const Breadcrumb: FC<BreadcrumbPropsType> = ({
  breadcrumbClassName,
  linkComponent,
  linkHref,
  ariaLabel,
  contentBreadcrumb,
}) => {
  return (
    <nav aria-label="Breadcrumb">
      <MyLink
        linkComponent={linkComponent}
        className={breadcrumbClassName}
        aria-label={ariaLabel}
        href={linkHref}>
        <ArrowLeft size={16} />
        <span>{contentBreadcrumb}</span>
      </MyLink>
    </nav>
  );
};

export default Breadcrumb;
