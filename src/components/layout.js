import React from "react";
import "../styles/styles.scss";
import LoudHelmet from "./helmet";
import Navbar from "./Navbar";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div>
    <LoudHelmet />
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
