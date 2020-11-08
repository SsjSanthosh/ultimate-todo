import React, { useEffect, useState } from "react";
import WebsiteLogo from "img/website_logo.png";
import { Form, Input, Button, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import "./style.scss";
import { LOGIN_API_ENDPOINT } from "utils/endpoints";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "Redux/Auth/actions";
import { useHistory } from "react-router-dom";
function Login() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const loggedIn = useSelector(({ auth }) => auth.loggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    if (loggedIn) {
      history.push("/dashboard");
    }
  }, [loggedIn, history]);
  const handleFormSubmit = (values) => {
    setLoading(true);
    axios
      .post(LOGIN_API_ENDPOINT, { ...values })
      .then((res) => {
        setLoading(false);
        dispatch(loginUser(res.data.token));
        message.success("Login successful! Redirecting to dashboard now.");
        history.push("/dashboard");
      })
      .catch((err) => {
        setLoading(false);
        message.error(
          err.response?.data?.error || "Something went wrong, try again."
        );
      });
  };

  return (
    <div className="login-page">
      <div className="login-hero bg-color-primary">
        <img src={WebsiteLogo} alt="Website Logo" />
        <h2 className="color-white">Assignments</h2>
      </div>
      <div className="login-form-wrapper">
        <h1>To-do App</h1>
        <div className="login-form">
          <Form
            name="login-form"
            className="login-form"
            onFinish={handleFormSubmit}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
              initialValue="eve.holt@reqres.in"
            >
              <Input
                type="email"
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                block
                htmlType="submit"
                loading={loading}
                disabled={loading}
                className="login-form-button bg-color-primary color-white"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
