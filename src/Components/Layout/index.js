import Navbar from "Components/Navbar";
import UserInfo from "Components/UserInfo";
import React from "react";
import "./style.scss";
function Layout({ children }) {
  /* 
    This component serves as a container for all the login protected routes.
  */
  return (
    <div className="page-layout">
      <Navbar />
      <UserInfo />
      <div className="page-content">{children}</div>
    </div>
  );
}

export default Layout;
