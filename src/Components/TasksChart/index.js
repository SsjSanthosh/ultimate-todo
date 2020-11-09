import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useSelector } from "react-redux";
import { TASK_STATUSES } from "utils/constants";
import { ArrowsAltOutlined } from "@ant-design/icons";
import "./style.scss";
import { Modal } from "antd";
function TasksChart() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const tasks = useSelector(({ tasks }) => tasks.tasks);
  const getStatusCount = (status) => {
    let count = 0;
    tasks.forEach((task) => {
      if (task.status === status.value) count++;
    });
    return count;
  };

  const renderPieChart = (options = {}) => {
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
          label={(dataEntry) => dataEntry.value}
          {...options}
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
                style={{
                  backgroundColor: status.color,
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  display: "block",
                }}
              ></span>
              <span className="status-name">{status.name}</span>
            </p>
          );
        })}
      </div>
    );
  };
  return tasks.length ? (
    <div className="tasks-chart-wrapper">
      <p className="chart-modal-switch" onClick={() => setIsModalVisible(true)}>
        <ArrowsAltOutlined />
      </p>
      <p className="tasks-chart-title">Your task trends this week.</p>
      {renderPieChart()}
      {renderLegends()}
      {isModalVisible && (
        <Modal
          title="Your weekly trends"
          wrapClassName="chart-modal"
          visible={isModalVisible}
          onOk={() => setIsModalVisible(false)}
          onCancel={() => setIsModalVisible(false)}
          cancelText="Close"
        >
          {renderPieChart({ animate: true })}
          {renderLegends()}
        </Modal>
      )}
    </div>
  ) : (
    <p className="tasks-chart-empty">
      No tasks, add tasks to see distribution here.
    </p>
  );
}

export default TasksChart;
