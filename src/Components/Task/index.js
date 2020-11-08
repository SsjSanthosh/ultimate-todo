import { Card, Checkbox, Dropdown, Menu, message } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { TAG_OPTIONS } from "utils/constants";
import {
  EllipsisOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import moment from "moment";
import "./style.scss";
import { deleteTask, editSubtask } from "Redux/Data/actions";
import { useDispatch } from "react-redux";
import { getTrimmedString } from "utils/utils";
function Task({ task }) {
  const dispatch = useDispatch();

  const tagColor = (currentTag) => {
    return TAG_OPTIONS.find((tag) => currentTag === tag.value).color;
  };

  const renderTag = () => {
    return task.tag.map((tag) => {
      return (
        <span
          className="task-tag"
          style={{ backgroundColor: tagColor(tag) }}
          key={tag}
        >
          {tag}
        </span>
      );
    });
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    message.success("Deleted task successfully.");
  };

  const handleSubtaskChange = (e, subtaskId) => {
    dispatch(editSubtask(task.id, subtaskId, e.target.checked));
    message.success("Subtask changed successfully");
  };

  const menu = (
    <Menu className="task-menu">
      <Menu.Item key="0" className="menu-item border-bottom">
        <EditOutlined />
        <Link to={`edit-task/${task.id}`}>Edit task</Link>
      </Menu.Item>
      <Menu.Item key="1" className="menu-item" onClick={handleDelete}>
        <DeleteOutlined />
        Delete Task
      </Menu.Item>
    </Menu>
  );

  const renderSubtasks = () => {
    return task?.subtasks?.length ? (
      <div className="subtasks-wrapper">
        {task.subtasks.map((task) => (
          <p className="subtask border-bottom" key={task.id}>
            <Checkbox
              defaultChecked={task.done}
              onChange={(e) => handleSubtaskChange(e, task.id)}
            />
            <span className="subtask-title">
              {getTrimmedString(task.name, 25)}
            </span>
          </p>
        ))}
      </div>
    ) : (
      <p className="support-text">No subtasks.</p>
    );
  };

  return (
    <div className="task">
      <Card className="task-card">
        <div className="task-header">
          <p className="task-tags">{renderTag()}</p>
          <Dropdown overlay={menu}>
            <EllipsisOutlined className="task-menu-icon" />
          </Dropdown>
        </div>
        <div className="task-title-wrapper">
          <p className="task-title">{getTrimmedString(task.name, 10)}</p>
          <p className="task-date support-text">
            {moment(task.date).format("ddd, MMM D")}
          </p>
        </div>
        {task.description && (
          <p className="task-description  border-bottom">{task.description}</p>
        )}
        <div className="task-subtasks">{renderSubtasks()}</div>
      </Card>
    </div>
  );
}

export default Task;
