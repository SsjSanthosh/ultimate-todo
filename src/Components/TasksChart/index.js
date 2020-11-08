import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { connect } from "react-redux";
import { TASK_STATUSES } from "utils/constants";
import "./style.scss";
function TasksChart({ tasks }) {
  const getStatusCount = (status) => {
    let count = 0;
    tasks.forEach((task) => {
      if (task.status === status.value) count++;
    });
    return count;
  };

  const renderPieChart = () => {
    return (
      <div className="tasks-chart">
        <PieChart
          data={TASK_STATUSES.map((status) => {
            return {
              title: status.name,
              color: status.color,
              value: getStatusCount(status),
            };
          })}
        />
      </div>
    );
  };

  const renderLegends = () => {
    return (
      <div className="tasks-chart-legend">
        {TASK_STATUSES.map((status) => {
          return (
            <p className="legend" key={status.value}>
              <span
                className="status-color"
                style={{ backgroundColor: status.color }}
              ></span>
              <span className="status-name">{status.name}</span>
            </p>
          );
        })}
      </div>
    );
  };
  return (
    <div className="tasks-chart-wrapper">
      <p className="tasks-chart-title">Your task trends this week.</p>
      {renderPieChart()}
      {renderLegends()}
    </div>
  );
}

const mapStateToProps = ({ tasks }) => {
  return { tasks };
};
export default connect(mapStateToProps)(TasksChart);
