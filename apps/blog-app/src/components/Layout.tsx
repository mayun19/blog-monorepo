import React from "react";
import Head from "next/head";
import { ChildProps } from "@/utils/type";
import Navbar from "./Navbar";

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
        <title>by Nuya {pageTitle && `- ${pageTitle}`}</title>
        <meta name="description" content="Blog Monorepo by Nuya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        <div className="container h-full mt-10">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
