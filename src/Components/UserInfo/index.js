import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setUser } from "Redux/Auth/actions";
import { LoadingOutlined } from "@ant-design/icons";

import "./style.scss";
import TagSummary from "./../TagSummary/index";
import TasksChart from "./../TasksChart/index";
function UserInfo({ user, setUser }) {
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

const mapStateToProps = ({ auth }) => {
  return { user: auth.user };
};
export default connect(mapStateToProps)(UserInfo);
