import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;
import TMBDLogo from "../../images/TMBD.png";

const FooterComp = () => {
  return (
    <div>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#1a1a1a",
        }}
      >
        <h4
          style={{
            color: "white",
            margin: "0px",
          }}
        >
          © 2022 Vito Chu source code
        </h4>
        {/* <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noreferrer noopener"
        > */}
        <img className="Logo" src={TMBDLogo} alt="TBMDLogo" width={200} />
        {/* </a> */}
        <p style={{ color: "white" }}>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </Footer>
    </div>
  );
};

export default FooterComp;
