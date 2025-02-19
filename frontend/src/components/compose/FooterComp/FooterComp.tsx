import { CenterCenterRow, TextCenterCol } from "../../atoms/grid/grid";
import { Image, Button } from "antd";

const TMDBLogo = require("../../../images/TMBD.png") as string;
const FooterComp: React.FC = () => {
  return (
    <CenterCenterRow>
      <TextCenterCol lg={12} sm={24}>
        <h2
          style={{
            color: "white",
            margin: "0px",
          }}
        >
          © 2025 Vito Chu source code
        </h2>
      </TextCenterCol>
      <TextCenterCol lg={12} sm={24}>
        <Button type="link" href="https://www.themoviedb.org/" target="_blank">
          <Image
            className="Logo"
            src={TMDBLogo}
            alt="TMDBLogo"
            width={200}
            preview={false}
          />
        </Button>
      </TextCenterCol>
      <TextCenterCol>
        <p style={{ color: "white", margin: "0px" }}>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </TextCenterCol>
    </CenterCenterRow>
  );
};

export default FooterComp;
