import Header from "Components/Header";
import Navbar from "Components/Navbar";
import UserInfo from "Components/UserInfo";
import React from "react";
import "./style.scss";
function Layout({ children, ...props }) {
  return (
    <div className="page-layout">
      <Navbar />
      <UserInfo />
      <div className="page-content">{children}</div>
    </div>
  );
}

export default Layout;
