import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Form, Input, message } from "antd";
import { register } from "../../service/DB_API";

import {
  CenterCenterRow,
  CenterCenterCol,
} from "../../components/atoms/grid/grid";
import { StyledH1 } from "../../components/atoms/text/text";
import { UserConfig } from "../../interface/user";
import { CustomizeButton } from "../../components/atoms/button/CustomizeButton";

import { clearLocalStorage } from "../../utils/localstorage";

interface RegisterProps {
  loginStatusHandler: () => void;
}

const Register: React.FC<RegisterProps> = ({ loginStatusHandler }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [inputData, setInputData] = useState<UserConfig>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onSubmitRegister = async () => {
    const result = await register(inputData);
    if (!result) {
      messageApi.open({
        type: "error",
        content: "Information Error",
      });
      return;
    }
    if (result === "User exist") {
      messageApi.open({
        type: "error",
        content: "User exist",
      });
      return;
    }
    clearLocalStorage();
    localStorage.setItem("token", result.accessToken);
    localStorage.setItem("userName", result.userName);
    localStorage.setItem("userID", result.userID);
    loginStatusHandler();
    navigate("/");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const labelStyle = { color: "white", fontSize: "1.25rem" };
  const containerStyle = {
    boxShadow: "0 0 10px 5px rgba(216, 216, 216, 0.3)",
    padding: "1.5rem",
    borderRadius: "16px",
  };

  return (
    <CenterCenterRow>
      {contextHolder}

      <CenterCenterCol span={24} style={{ height: "20vh" }}></CenterCenterCol>
      <CenterCenterCol span={24}>
        <StyledH1>Register</StyledH1>
      </CenterCenterCol>
      <CenterCenterCol xs={16} sm={12} md={10} lg={8}>
        <Form
          name="register"
          requiredMark={false}
          layout="vertical"
          onFinish={onSubmitRegister}
          style={containerStyle}
        >
          <Form.Item
            label={<label style={labelStyle}>Name :</label>}
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
              {
                min: 3,
                message: "At least 3 characters.",
              },
              {
                max: 30,
                message: "At most 30 characters.",
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
              name="name"
              prefix={<UserOutlined />}
              placeholder="Name"
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item
            label={<label style={labelStyle}>Email :</label>}
            name="email"
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
              name="email"
              prefix={<MailOutlined />}
              placeholder="Email"
              onChange={handleInputChange}
              data-testid="Email"
            />
          </Form.Item>
          <Form.Item
            label={<label style={labelStyle}>Password :</label>}
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
              {
                min: 4,
                message: "At least 4 characters.",
              },
              {
                max: 8,
                message: "At most 8 characters.",
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
              name="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
              data-testid="Password"
            />
          </Form.Item>
          <Form.Item>
            <CustomizeButton htmlType="submit" data-testid="register">
              Register
            </CustomizeButton>
            <Link to={"/login"}>
              <CustomizeButton htmlType="submit">Login</CustomizeButton>
            </Link>
          </Form.Item>
        </Form>
      </CenterCenterCol>
    </CenterCenterRow>
  );
};

export default Register;
