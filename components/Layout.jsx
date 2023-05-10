import React, { Children } from "react";
import Head from "next/head";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>alejandrorincondev.com</title>
      </Head>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
