import React from "react";
import {
  ArrowLeftOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import "./style.scss";

import {
  Input,
  Form,
  Radio,
  Checkbox,
  DatePicker,
  Button,
  Space,
  message,
} from "antd";
import { v4 as uuid } from "uuid";
import { TAG_OPTIONS, TASK_STATUSES } from "utils/constants";
import moment from "moment";
import { addTask, deleteTask, editTask } from "Redux/Data/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function TodoForm({ match }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const tasks = useSelector(({ tasks }) => tasks.tasks);

  const newTaskValues = {
    name: "",
    subtasks: [],
    id: uuid(),
    description: "",
    status: "to-do",
    tag: [TAG_OPTIONS[0].value],
    date: moment(),
  };

  const taskId = match.params.id;
  const handleFormSubmit = (values) => {
    taskId
      ? dispatch(editTask({ ...values }))
      : dispatch(addTask({ ...values }));
    message.success(
      taskId ? "Task edited successfully" : "Task added successfully"
    );
    history.push("/dashboard");
  };

  const getEditTaskData = () => {
    const task = tasks.find((task) => task.id === taskId);
    if (task) return { ...task, date: moment(task.date) };

    message.error("Task not found. Try adding a new task.");
    history.push("/new-task");
  };

  const initialValues = taskId ? getEditTaskData() : newTaskValues;

  const handleTaskDelete = () => {
    dispatch(deleteTask(taskId));
    history.push("/dashboard");
    message.success("Task deleted successfully.");
  };

  return (
    <div className="todo-page">
      <div className="todo-page-header">
        <ArrowLeftOutlined
          className="color-black page-nav-back"
          onClick={() => history.push("/dashboard")}
        />{" "}
        <p className="page-title"> {taskId ? "Edit" : "New"} task</p>
      </div>
      <div className="todo-page-form-wrapper">
        <Form
          name="todo-form"
          layout="vertical"
          onFinish={handleFormSubmit}
          initialValues={initialValues}
        >
          <div className="form-group-flex">
            <div className="form-group-main">
              <Form.Item
                label="Task name"
                name="name"
                rules={[
                  { required: true, message: "Please input your task name!" },
                ]}
              >
                <Input
                  placeholder="Task name"
                  className="bg-color-grey-light"
                />
              </Form.Item>

              <Form.Item name="id" style={{ display: "none" }}>
                <Input type="hidden" />
              </Form.Item>
              <Form.Item label="Task description" name="description">
                <Input.TextArea
                  placeholder="Task description"
                  className="bg-color-grey-light"
                />
              </Form.Item>
              <Form.Item
                label="Branch to"
                name="status"
                rules={[{ required: true, message: "Please choose a status." }]}
              >
                <Radio.Group>
                  {TASK_STATUSES.map((status) => {
                    return (
                      <Radio.Button value={status.value} key={status.value}>
                        {status.name}
                      </Radio.Button>
                    );
                  })}
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Select tag"
                name="tag"
                rules={[{ required: true, message: "Please choose a tag." }]}
              >
                <Checkbox.Group options={TAG_OPTIONS}></Checkbox.Group>
              </Form.Item>
              <Form.Item label="Select date" name="date">
                <DatePicker></DatePicker>
              </Form.Item>
              <div className="form-group-buttons">
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
                {taskId && (
                  <Button type="primary" danger onClick={handleTaskDelete}>
                    Delete task
                  </Button>
                )}
              </div>
            </div>
            <div className="form-group-subtasks">
              <p className="mb8 subtasks-label">Subtasks</p>
              <Form.List name="subtasks">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map((field) => (
                      <Space
                        key={field.key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                      >
                        <Form.Item
                          {...field}
                          name={[field.name, "done"]}
                          initialValue={false}
                          valuePropName="checked"
                        >
                          <Checkbox defaultChecked={false} />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "name"]}
                          rules={[
                            {
                              required: true,
                              message: "Subtask cannot be blank.",
                            },
                          ]}
                        >
                          <Input placeholder="Subtask name" />
                        </Form.Item>
                        <Form.Item
                          name={[field.name, "id"]}
                          initialValue={uuid()}
                          label="id"
                          style={{ display: "none" }}
                        >
                          <Input type="hidden" />
                        </Form.Item>
                        <DeleteOutlined onClick={() => remove(field.name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add subtask
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default TodoForm;
