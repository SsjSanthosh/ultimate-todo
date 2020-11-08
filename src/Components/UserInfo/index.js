import React from "react";
import { useSelector } from "react-redux";

import { LoadingOutlined } from "@ant-design/icons";

import "./style.scss";
import TagSummary from "./../TagSummary/index";
import TasksChart from "./../TasksChart/index";
function UserInfo() {
  const user = useSelector(({ auth }) => auth.user);
  const renderUser = () => {
    return (
      <div className="user">
        <div className="user-avatar">
          <img src={user.avatar} alt="avatar" />
        </div>
        <div className="user-details">
          <p className="user-name">{`${user.first_name} ${user.last_name}`}</p>
          <p className="user-email">{`${user.email}`}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="user-info">
      {user.email ? (
        <>
          {renderUser()}
          <TagSummary />
          <TasksChart />
        </>
      ) : (
        <LoadingOutlined />
      )}
    </div>
  );
}

export default UserInfo;
