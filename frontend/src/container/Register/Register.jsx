import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Row, Col, Alert } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";
import { register } from "../../service/DB_API";

const CcRow = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
`;

const StyledH1 = styled.h1`
  font-size: 2rem;
  color: #f4c10f;
`;

const Register = ({ loginStatusHandler }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  Register.propTypes = {
    loginStatusHandler: PropTypes.func,
  };

  const onSubmitRegister = async () => {
    const config = {
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
    };
    const result = await register(config);
    if (!result) return;
    if (result && result === "User exist") {
      setDescription("User exist");
      return;
    }
    localStorage.setItem("token", result.accessToken);
    localStorage.setItem("userName", result.userName);
    loginStatusHandler();
    navigate("/");
  };

  return (
    <CcRow>
      <Col span={24} style={{ height: "20vh" }}></Col>
      <Col xs={16} sm={15} md={14} lg={13}>
        <StyledH1>Register</StyledH1>
      </Col>
      <Col xs={16} sm={15} md={14} lg={13}>
        <Form
          name="normal_login"
          className="login-form"
          requiredMark={false}
          layout="vertical"
          onFinish={() => {
            onSubmitRegister();
          }}
          onFinishFailed={() => {
            setDescription("Information incorrect");
          }}
        >
          <Form.Item
            label={
              <label style={{ color: "white", fontSize: "1.25rem" }}>
                Name :
              </label>
            }
            name="userName"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
              {
                min: 3,
                message: "At most for 3 character.",
              },
              {
                max: 30,
                message: "At most for 8 character.",
              },
              {
                pattern: /^[^\s]*$/,
                message: "No space allowed",
              },
              {
                message: "Only english & number",
                pattern: /[a-zA-Z0-9]/,
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Name"
              onChange={(e) => setUserName(e.target.value)}
              data-testid="Name"
            />
          </Form.Item>
          <Form.Item
            label={
              <label style={{ color: "white", fontSize: "1.25rem" }}>
                Email :
              </label>
            }
            name="userEmail"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
              {
                type: "email",
                message: "It has to be an email",
              },
              {
                pattern: /^[^\s]*$/,
                message: "No space allowed",
              },
              {
                message: "Only english & number",
                pattern: /[a-zA-Z0-9]/,
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              onChange={(e) => setUserEmail(e.target.value)}
              data-testid="Email"
            />
          </Form.Item>
          <Form.Item
            label={
              <label style={{ color: "white", fontSize: "1.25rem" }}>
                Password :
              </label>
            }
            name="userPassword"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
              {
                min: 4,
                message: "At least to have 4 character.",
              },
              {
                max: 8,
                message: "At most for 8 character.",
              },
              {
                pattern: /^[^\s]*$/,
                message: "No space allowed",
              },
              {
                message: "Only english character & number",
                pattern: /[a-zA-Z0-9]/,
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              onChange={(e) => setUserPassword(e.target.value)}
              data-testid="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ margin: "0.5rem 0.5rem 0 0" }}
              data-testid="register"
            >
              Register
            </Button>
            <Link to={"/login"}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ margin: "0.5rem 0 0 0.5rem" }}
                data-testid="login"
              >
                Login
              </Button>
            </Link>
          </Form.Item>
        </Form>
        {description === "User exist" ? (
          <Alert
            message="Error"
            description={description}
            type="error"
            showIcon
            closable
          />
        ) : description === "Information incorrect" ? (
          <Alert
            message="Error"
            description={description}
            type="error"
            showIcon
            closable
          />
        ) : null}
      </Col>
    </CcRow>
  );
};

export default Register;
