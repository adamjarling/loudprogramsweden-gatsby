import React from "react";

import "../styles/styles.scss";
import Helmet from "./helmet";
import Header from "./header";
import Navbar from "./Navbar";
import Midsection from "./midsection";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <Navbar />
    <Midsection />
    <Footer />
  </div>
);

export default Layout;
