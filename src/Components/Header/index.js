import { Button, DatePicker, Input } from "antd";
import React from "react";
import moment from "moment";
import "./style.scss";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="page-header-wrapper">
      <Input className="bg-color-grey-light header-search" />
      <Link to="/new-task">
        <Button className="bg-color-primary header-button">New task</Button>
      </Link>
      <DatePicker
        defaultValue={moment()}
        className="bg-color-grey-light header-date"
      />
    </div>
  );
}

export default Header;
