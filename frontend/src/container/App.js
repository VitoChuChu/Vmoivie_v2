import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Layout } from "antd";
import Nav from "../components/Nav/Nav";
import FooterComp from "../components/FooterComp/FooterComp";
import Home from "../container/Home/Home";
import Wishlist from "./Wishlist/Wishlist";
import FilmPage from "../container/FilmPage/FilmPage";
import Login from "./Login/Login";
import Register from "./Register/Register";

const App = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const loginStatusHandler = () => {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      setLoginStatus(true);
    } else if (authToken === null) {
      setLoginStatus(false);
    }
  };
  useEffect(() => {
    loginStatusHandler();
  }, []);

  const navigate = useNavigate();

  return (
    <Layout className="layout">
      <Nav loginStatus={loginStatus} loginStatusHandler={loginStatusHandler} />
      <Routes basename="/">
        <Route path="/" element={<Home scrollToTop={scrollToTop} />} />
        <Route
          path="/wishlist"
          element={<Wishlist scrollToTop={scrollToTop} />}
        />
        <Route
          path="/login"
          element={
            <Login
              loginStatusHandler={loginStatusHandler}
              navigate={navigate}
            />
          }
        />
        <Route
          path="/register"
          element={<Register loginStatusHandler={loginStatusHandler} />}
        />
        <Route
          path="/filmPage/:id"
          element={<FilmPage scrollToTop={scrollToTop} />}
        />
      </Routes>
      <FooterComp />
    </Layout>
  );
};
export default App;
