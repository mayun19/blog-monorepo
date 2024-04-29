import MyLink from "./link";
import { NavbarProps } from "./types";

const Navbar: React.FC<NavbarProps> = ({
  linkBrandComponent,
  linkBrand,
  linkPageCreate,
  contentNavbar,
  navbarContainerClassName,
  navbarWrapperClassName,
  brandWrapperClassName,
  brandClassName,
  createWrapperClassName,
  createClassName,
  linkCreateComponent,
  CreatePostContent,
}) => {
  return (
    <div className={navbarWrapperClassName}>
      <div className={navbarContainerClassName}>
        <div className={brandWrapperClassName}>
          <MyLink
            linkComponent={linkBrandComponent}
            className={brandClassName}
            href={linkBrand}>
            {contentNavbar}
          </MyLink>
        </div>
        <div className={createWrapperClassName}>
          <MyLink
            linkComponent={linkCreateComponent}
            className={createClassName}
            href={linkPageCreate}>
            {CreatePostContent}
          </MyLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
