import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <main className="container mx-auto my-4">{children}</main>;
};

export default Layout;
