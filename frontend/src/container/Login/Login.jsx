import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Row, Col, Alert } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";
import { login } from "../../service/DB_API";

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

const Login = ({ loginStatusHandler, navigate }) => {
  const [enterEmail, setEnterEmail] = useState("");
  const [enterPassword, setEnterPassword] = useState("");
  const [loginResult, setLoginResult] = useState(true);

  Login.propTypes = {
    loginStatusHandler: PropTypes.func,
    navigate: PropTypes.func,
  };

  const onSubmitLogin = async () => {
    const config = {
      enterEmail: enterEmail,
      enterPassword: enterPassword,
    };
    const data = await login(config);
    if (data) {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("userName", data.userName);
      navigate("/");
      loginStatusHandler();
    } else {
      setLoginResult(false);
    }
  };

  return (
    <CcRow>
      <Col span={24} style={{ height: "20vh" }}></Col>
      <Col xs={16} sm={15} md={14} lg={13}>
        <StyledH1>Login</StyledH1>
      </Col>
      <Col xs={16} sm={15} md={14} lg={13}>
        <Form
          name="normal_login"
          className="login-form"
          requiredMark={false}
          layout="vertical"
        >
          <Form.Item
            label={
              <label style={{ color: "white", fontSize: "1.25rem" }}>
                Email :
              </label>
            }
            name="enterEmail"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
              {
                type: "email",
                message: "It has to be an email",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              onChange={(e) => setEnterEmail(e.target.value)}
              data-testid="Email"
            />
          </Form.Item>
          <Form.Item
            label={
              <label style={{ color: "white", fontSize: "1.25rem" }}>
                Password :
              </label>
            }
            name="enterPassword"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              onChange={(e) => setEnterPassword(e.target.value)}
              data-testid="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ margin: "0.5rem 0.5rem 0 0" }}
              onClick={onSubmitLogin}
              data-testid="login"
            >
              Login
            </Button>
            <Link to={"/register"}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ margin: "0.5rem 0 0 0.5rem" }}
                data-testid="register"
              >
                Register
              </Button>
            </Link>
          </Form.Item>
        </Form>
        {loginResult ? null : (
          <Alert
            message="Error"
            description="Information incorrect."
            type="error"
            showIcon
            closable
          />
        )}
      </Col>
    </CcRow>
  );
};

export default Login;
