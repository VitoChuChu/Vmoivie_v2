import React, { useState, useEffect, CSSProperties } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useLoadingStore } from "../store/LoadingStore";
import { Layout } from "antd";
import Nav from "../components/compose/Nav/Nav";
import FooterComp from "../components/compose/FooterComp/FooterComp";
import Home from "./Home/Home";
import Wishlist from "./Wishlist/Wishlist";
import Search from "./Search/Search";
import Login from "./Login/Login";
import Register from "./Register/Register";
import FilmPage from "./FilmPage/FilmPage";
import LoadingMask from "../components/compose/LoadingMask/LoadingMask";

const { Header, Footer, Content } = Layout;

const App: React.FC = () => {
  const [loginStatus, setLoginStatus] = useState<boolean>(false);
  const [toFixFooter, setToFixFooter] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();
  const isLoading = useLoadingStore((state) => state.isLoading);

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

  useEffect(() => {
    const currentUrl = window.location.href;
    setToFixFooter(
      currentUrl.includes("login") ||
        currentUrl.includes("register") ||
        currentUrl.includes("wishlist")
    );
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const layoutStyle: CSSProperties = {
    width: "100%",
    height: "100%",
  };

  const headerStyle: CSSProperties = {
    padding: 0,
    background: isScrolled
      ? "linear-gradient(to bottom, black, black)"
      : "linear-gradient(to bottom, black, transparent)",

    transition: "background 0.5s",
    position: "fixed",
    zIndex: 9,
    width: "100%",
  };

  const contentStyle: CSSProperties = {
    padding: "4 0 4 0",
    backgroundColor: "rgb(0, 0, 0)",
  };

  let footerStyle: CSSProperties = {
    backgroundColor: "rgb(35, 35, 35)",
    padding: "0",
    width: "100%",
    ...(toFixFooter ? { position: "fixed", bottom: 0 } : {}),
  };

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Nav
          loginStatus={loginStatus}
          loginStatusHandler={loginStatusHandler}
        />
      </Header>
      <Content style={contentStyle}>
        <Routes>
          <Route path="/" element={<Home scrollToTop={scrollToTop} />} />
          <Route
            path="/wishlist"
            element={<Wishlist scrollToTop={scrollToTop} />}
          />
          <Route path="/search" element={<Search scrollToTop={scrollToTop} />} />
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
      </Content>
      <Footer style={footerStyle}>
        <FooterComp />
      </Footer>
      {isLoading && <LoadingMask />}
    </Layout>
  );
};

export default App;
