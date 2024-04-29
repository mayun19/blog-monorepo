import { MyLinkProps } from "./types";


const MyLink: React.FC<MyLinkProps> = <T extends {}>({
  linkComponent: LinkComponent,
  children,
  ...props
}: MyLinkProps & T) => {
  return <LinkComponent {...props}>{children}</LinkComponent>;
};

export default MyLink;
