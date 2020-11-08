import React from "react";
import WebsiteBrand from "img/website_brand.png";
import { PoweroffOutlined } from "@ant-design/icons";
import { logoutUser } from "Redux/Auth/actions";
import { useDispatch } from "react-redux";
import { message } from "antd";

import "./style.scss";
import { useHistory } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logoutUser());
    history.push("/login");
    message.success("You have been logged out.");
  };
  return (
    <div className="navbar-wrapper bg-color-grey-dark">
      <div className="navbar-brand">
        <img src={WebsiteBrand} alt="website_brand" />
      </div>
      <div className="navbar-logout" onClick={handleLogout}>
        <PoweroffOutlined className="color-white" />
      </div>
    </div>
  );
}

export default Navbar;
