import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Layout, Menu, Button, Drawer } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
const { Header } = Layout;
import PropTypes from "prop-types";
import logo from "../../images/VmovieLogoYS.svg";

const ComputerHeaderContainer = styled.div`
  display: flex;

  width: 100vw;
  height: 64px;
  align-items: center;
  background-color: #1a1a1a;
  padding: 0 20px;
  overflow: hidden;
  position: fixed;
  top: 0;
  z-index: 1;
  @media screen and (min-width: 767px) {
    display: flex;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileHeaderContainer = styled.div`
  width: 100vw;
  overflow: hidden;
  position: fixed;
  top: 0;
  z-index: 1;
  @media screen and (min-width: 767px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    height: 64px;
    align-items: center;
    justify-content: space-evenly;
    background-color: #1a1a1a;
  }
`;

const StyledHeader = styled(Header)`
  background-color: "#1a1a1a";
  padding: 0;
`;

const StyledH1 = styled.h1`
  flex-grow: 2;
  color: #f4c10f;
  font-size: 1.25rem;
  margin: 0;
  padding: 0 1rem;
  text-align: end;
`;

const StyledMenu = styled(Menu)`
  &.ant-menu-dark.ant-menu-horizontal > .ant-menu-item:hover {
    background-color: transparent;
  }
  &.ant-menu.ant-menu-dark .ant-menu-item-selected {
    background-color: transparent;
  }
`;

const Nav = ({ loginStatus, loginStatusHandler }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  Nav.propTypes = {
    loginStatus: PropTypes.bool,
    loginStatusHandler: PropTypes.func,
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const items = [
    {
      label: (
        <Link to="/" onClick={onClose}>
          Home
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link to="/wishlist" onClick={onClose}>
          Wishlist
        </Link>
      ),
      key: "2",
    },
  ];

  if (!loginStatus) {
    items.push({
      label: (
        <Link to="/login" onClick={onClose}>
          Login
        </Link>
      ),
      key: "3",
    });
  } else {
    items.push({
      label: "Logout",
      key: "4",
      onClick: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        loginStatusHandler();
        onClose();
        navigate("/");
      },
    });
  }

  return (
    <div>
      <ComputerHeaderContainer>
        <Link to="/">
          <img src={logo} alt="Vmovie" width="120" />
        </Link>
        <StyledHeader>
          <StyledMenu
            theme="dark"
            mode="horizontal"
            style={{
              fontSize: "1.25rem",
              width: "50vw",
              backgroundColor: "#1a1a1a",
            }}
            items={items}
          ></StyledMenu>
        </StyledHeader>
        {userName ? (
          <StyledH1 data-testid="userName">Hi,{userName}</StyledH1>
        ) : null}
      </ComputerHeaderContainer>
      <MobileHeaderContainer>
        <Link to="/">
          <img src={logo} alt="Vmovie" width="120" />
        </Link>
        <Button type="primary" onClick={showDrawer} className="menuIcon">
          <MenuOutlined />
        </Button>
        <Drawer
          placement="top"
          closable={true}
          onClose={onClose}
          closeIcon={<CloseOutlined style={{ color: "white" }} />}
          open={open}
          key="top"
          height="auto"
          drawerStyle={{ backgroundColor: "#1a1a1a" }}
          bodyStyle={{ backgroundColor: "#1a1a1a" }}
        >
          <Menu
            theme="dark"
            mode="vertical"
            style={{
              fontSize: "1.25rem",
              width: "auto",
              backgroundColor: "#1a1a1a",
            }}
            items={items}
          ></Menu>
        </Drawer>
      </MobileHeaderContainer>
    </div>
  );
};

export default Nav;
