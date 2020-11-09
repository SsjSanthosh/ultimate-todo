import Header from "Components/Header";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TASK_STATUSES } from "utils/constants";
import TaskList from "Components/TaskList";
import "./style.scss";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { changeTaskStatus } from "Redux/Data/actions";
import { setUser } from "Redux/Auth/actions";

function Dashboard() {
  const tasks = useSelector(({ tasks }) => tasks.tasks);
  const filterTag = useSelector(({ tasks }) => tasks.filterTag);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser());
  }, []);
  const getTasksByStatus = (status) => {
    const displayTasks = filterTag
      ? tasks.filter((task) => task.tag.some((tag) => tag === filterTag))
      : tasks;

    return displayTasks.filter((task) => task.status === status.value);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    if (result.destination.droppableId !== result.source.droppableId) {
      dispatch(
        changeTaskStatus(result.draggableId, result.destination.droppableId)
      );
    }
  };

  return (
    <div>
      <Header />
      <div className="tasks-wrapper">
        <DragDropContext onDragEnd={handleDragEnd}>
          {TASK_STATUSES.map((status, index) => {
            return (
              <Droppable
                droppableId={status.value}
                key={status.value}
                index={index}
              >
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      key={status.value}
                      className="task-list"
                      style={{
                        backgroundColor: snapshot.isDraggingOver
                          ? "#f2f2f2"
                          : "#fff",
                        minWidth: 330,
                      }}
                    >
                      <TaskList
                        tasks={getTasksByStatus(status)}
                        status={status}
                        ey={status.value}
                      />
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
}

export default Dashboard;
