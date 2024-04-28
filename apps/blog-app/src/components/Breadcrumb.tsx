import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BreadcrumbProps } from "@/utils/type";
const Breadcrumb = ({ linkHref, contentBreadcrumb,
  ariaLabel }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb">
      <Link
        href={linkHref}
        className="text-base text-foreground/70 flex gap-1 items-center mb-4"
        aria-label={ariaLabel}>
        <ArrowLeft size={16} />
        <span>{contentBreadcrumb}</span>
      </Link>
    </nav>
  );
};

export default Breadcrumb;
