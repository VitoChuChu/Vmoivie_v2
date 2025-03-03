import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Row, Col, Menu, Image, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { StyledH1 } from "../../atoms/text/text";
import { clearLocalStorage } from "../../../utils/localstorage";

const logo = require("@/images/VmovieLogoYS.svg") as string;

const StyledMenu = styled(Menu)`
  &.ant-menu-dark.ant-menu-horizontal {
    background-color: transparent;
    border-bottom: none;
  }
  &.ant-menu-dark.ant-menu-horizontal > .ant-menu-item:hover {
    background-color: transparent;
  }
  &.ant-menu.ant-menu-dark .ant-menu-item-selected {
    background-color: transparent;
  }
`;

const UserName = styled(StyledH1)`
  margin: 0;
  align-self: center;
`;

interface NavProps {
  loginStatus: boolean;
  loginStatusHandler: () => void;
}

const Nav: React.FC<NavProps> = ({ loginStatus, loginStatusHandler }) => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  interface MenuItemProps {
    label: React.ReactNode;
    key: string;
    onClick?: () => void;
  }

  const items: MenuItemProps[] = [
    {
      label: <Link to="/">Home</Link>,
      key: "1",
    },
    {
      label: <Link to="/wishlist">Wishlist</Link>,
      key: "2",
    },
    !loginStatus
      ? {
          label: <Link to="/login">Login</Link>,
          key: "3",
        }
      : {
          label: "Logout",
          key: "4",
          onClick: () => {
            clearLocalStorage();
            loginStatusHandler();
            navigate("/");
          },
        },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const mobileContent = (items: MenuItemProps[], visible: boolean) => {
    return (
      <Col style={{ marginLeft: "auto", marginRight: "5vw" }}>
        <Button ghost icon={<MenuOutlined />} onClick={showDrawer} />
        <Drawer title="Menu" placement="top" onClose={onClose} open={visible}>
          <StyledMenu
            theme="light"
            mode="vertical"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Drawer>
      </Col>
    );
  };

  const nonMobileContent = (
    items: MenuItemProps[],
    userName: string | null
  ) => {
    return (
      <>
        <Col span={15}>
          <StyledMenu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{
              fontSize: "1.5rem",
              width: "50vw",
            }}
            items={items}
          />
        </Col>
        <Col
          span={4}
          style={{
            marginLeft: "auto",
          }}
        >
          {userName && <UserName>Hi, {userName}</UserName>}
        </Col>
      </>
    );
  };

  return (
    <Row wrap={false}>
      <Col style={{ padding: "0 0 0 2vw" }}>
        <Link to="/">
          <Image src={logo} alt="Vmovie" preview={false} width="150px" />
        </Link>
      </Col>
      {isMobile
        ? mobileContent(items, visible)
        : nonMobileContent(items, userName)}
    </Row>
  );
};

export default Nav;
