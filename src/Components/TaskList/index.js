import { Card } from "antd";
import React from "react";
import "./style.scss";
import Task from "Components/Task";
import { Draggable } from "react-beautiful-dnd";
function TaskList({ status, tasks }) {
  const renderTasks = () => {
    if (!tasks.length) {
      return <p className="task-list-empty">Nothing to see here.</p>;
    }
    return tasks.map((task, index) => {
      return (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided, snapshot) => {
            return (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={{ ...provided.draggableProps.style }}
              >
                <Task task={task} />
              </div>
            );
          }}
        </Draggable>
      );
    });
  };
  return (
    <Card
      title={status.title}
      className="bg-color-grey-light task-list"
      bordered={false}
    >
      <p
        className="card-title border-bottom color-white bg-color-grey-light"
        style={{ backgroundColor: status.color }}
      >
        {status.name}
      </p>
      {renderTasks()}
    </Card>
  );
}

export default TaskList;
