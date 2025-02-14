import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Layout } from "antd";
import Nav from "../components/compose/Nav/Nav";
import FooterComp from "../components/compose/FooterComp/FooterComp";
import Home from "./Home/Home";
import Wishlist from "./Wishlist/Wishlist";
import Login from "./Login/Login";
import Register from "./Register/Register";
import FilmPage from "./FilmPage/FilmPage";

const App: React.FC = () => {
  const [loginStatus, setLoginStatus] = useState<boolean>(false);

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

  return (
    <Layout className="layout">
      <Nav loginStatus={loginStatus} loginStatusHandler={loginStatusHandler} />
      <Routes>
        <Route path="/" element={<Home scrollToTop={scrollToTop} />} />
        <Route
          path="/wishlist"
          element={<Wishlist scrollToTop={scrollToTop} />}
        />
        <Route
          path="/login"
          element={<Login loginStatusHandler={loginStatusHandler} />}
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
