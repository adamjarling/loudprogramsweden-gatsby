import React from "react";
import "../styles/styles.scss";
import Helmet from "./helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
