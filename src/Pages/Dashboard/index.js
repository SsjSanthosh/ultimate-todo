import Header from "Components/Header";
import React from "react";
import { connect } from "react-redux";
import Task from "Components/Task/index";

function Dashboard({ history, tasks, ...props }) {
  console.log(tasks.length);
  return (
    <div>
      <Header />
      <div className="tasks-wrapper">
        {tasks.length &&
          tasks.map((task) => <Task task={task} key={task.id} />)}
      </div>
    </div>
  );
}

const mapStateToProps = ({ tasks }) => {
  return { tasks };
};
export default connect(mapStateToProps)(Dashboard);
