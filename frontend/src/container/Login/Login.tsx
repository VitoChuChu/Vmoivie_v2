import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Form, Input, Alert, message } from "antd";
import {
  CenterCenterRow,
  CenterCenterCol,
} from "../../components/atoms/grid/grid";
import { CustomizeButton } from "../../components/atoms/button/CustomizeButton";
import { StyledH1 } from "../../components/atoms/text/text";
import { UserConfig } from "../../interface/user";
import { login } from "../../service/DB_API";
import { clearLocalStorage } from "../../utils/localstorage";

interface LoginProps {
  loginStatusHandler: () => void;
}

const Login: React.FC<LoginProps> = ({ loginStatusHandler }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [inputData, setInputData] = useState<UserConfig>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onSubmitLogin = async () => {
    const config: UserConfig = {
      email: inputData.email,
      password: inputData.password,
    };
    const data = await login(config);
    if (data) {
      clearLocalStorage();
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("userName", data.userName);
      localStorage.setItem("userID", data.userID);
      navigate("/");
      loginStatusHandler();
    } else {
      messageApi.open({
        type: "error",
        content: "Information Error",
      });
    }
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
        <StyledH1>Login</StyledH1>
      </CenterCenterCol>
      <CenterCenterCol xs={16} sm={12} md={10} lg={8}>
        <Form
          name="normal_login"
          requiredMark={false}
          layout="vertical"
          onFinish={onSubmitLogin}
          style={containerStyle}
        >
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
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Email"
              name="email"
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
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item>
            <CustomizeButton htmlType="submit">Login</CustomizeButton>
            <Link to={"/register"}>
              <CustomizeButton>Register</CustomizeButton>
            </Link>
          </Form.Item>
        </Form>
      </CenterCenterCol>
    </CenterCenterRow>
  );
};

export default Login;
