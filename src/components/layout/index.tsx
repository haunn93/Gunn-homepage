import React from "react";
import Footer from "../footer";
import NavigationBar from "../navigation-bar";
import "./layout.scss";
import "../../assets/scss/global.scss";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <NavigationBar />
    {children}
    <Footer />
  </>
);

export default Layout;
