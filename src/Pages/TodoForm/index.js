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
import uuid from "react-uuid";
import { TAG_OPTIONS } from "utils/constants";
import moment from "moment";
import { addTask, editTask } from "Redux/Data/actions";
import { connect } from "react-redux";
function TodoForm({ history, addTask, editTask, tasks, ...props }) {
  const newTaskValues = {
    name: "new",
    subtasks: [],
    id: uuid(),
    description: "",
    status: "todo",
    tag: [TAG_OPTIONS[0].value],
    date: moment(),
  };
  const handleChange = (e) => console.log(e.target.value);
  const taskId = props.match.params.id;
  const handleFormSubmit = (values) => {
    taskId ? editTask({ ...values }) : addTask({ ...values });
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
            <Form.Item
              label="Task name"
              name="name"
              rules={[
                { required: true, message: "Please input your task name!" },
              ]}
            >
              <Input placeholder="Task name" className="bg-color-grey-light" />
            </Form.Item>
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
          <Form.Item name="id">
            <Input type="hidden" />
          </Form.Item>
          <Form.Item label="Task description" name="description">
            <Input
              type="textarea"
              placeholder="Task description"
              className="bg-color-grey-light"
            />
          </Form.Item>
          <Form.Item
            label="Branch to"
            name="status"
            rules={[{ required: true, message: "Please choose a status." }]}
          >
            <Radio.Group onChange={handleChange}>
              <Radio.Button value="todo">To-do</Radio.Button>
              <Radio.Button value="in-progress">In Progress</Radio.Button>
              <Radio.Button value="done">Done</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Select tag" name="tag">
            <Checkbox.Group options={TAG_OPTIONS}></Checkbox.Group>
          </Form.Item>
          <Form.Item label="Select date" name="date">
            <DatePicker></DatePicker>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export const mapStateToProps = ({ tasks }) => {
  return { tasks };
};
export default connect(mapStateToProps, { addTask, editTask })(TodoForm);
