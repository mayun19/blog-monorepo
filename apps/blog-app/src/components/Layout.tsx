import React from "react";
import Link from "next/link";
import Head from "next/head";
import { ChildProps } from "@/utils/type";
import Navbar from "@repo/blog-ui/navbar";
const Layout: React.FC<ChildProps> = ({ pageTitle, children }) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
      <Head>
        <title>by Nuya {pageTitle ? `- ${pageTitle}` : ""}</title>
        <meta name="description" content="Blog Monorepo by Nuya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar
          linkBrandComponent={Link}
          linkCreateComponent={Link}
          linkBrand="/"
          linkPageCreate="/blog/create"
          navbarWrapperClassName="navbar border-b bg-neutral-100"
          navbarContainerClassName="container"
          brandWrapperClassName="flex-1"
          createWrapperClassName="flex-none"
          brandClassName="btn btn-ghost text-xl"
          createClassName="btn btn-ghost"
          contentNavbar="by Nuya"
          CreatePostContent="Create Post"
        />
        <div className="container h-full mt-10">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
