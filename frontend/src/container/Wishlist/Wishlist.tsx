import React, { useState, useEffect } from "react";
import WishlistCards from "../../components/compose/Cards/WishlistCards";
import { Image } from "antd";
import {
  CenterCenterRow,
  CenterCenterCol,
} from "../../components/atoms/grid/grid";
import { StyledH1 } from "../../components/atoms/text/text";
import { MovieDetail } from "../../interface/movie";
import { getWishList } from "../../service/DB_API";

const notLoginImage = require("../../images/loginImg.svg") as string;
const emptyImage = require("../../images/emptyImg.svg") as string;

interface WishlistProps {
  scrollToTop: () => void;
}

const Wishlist: React.FC<WishlistProps> = ({ scrollToTop }) => {
  const [movies, setMovies] = useState<MovieDetail[]>([]);
  const [loginStatus, setLoginStatus] = useState<boolean>(false);
  const userToken = localStorage.getItem("token")!;
  const userID = localStorage.getItem("userID");

  const loginStatusHandler = (userToken: string) => {
    if (userToken != null) setLoginStatus(true);
  };

  const getUserWishlistMovies = async () => {
    const data = userID ? await getWishList(userID) : [];
    return data;
  };

  useEffect(() => {
    loginStatusHandler(userToken);
    const fetchAPI = async () => {
      if (userToken && userID) {
        const movies = await getUserWishlistMovies();
        if (movies) setMovies(movies);
      }
    };
    fetchAPI();
  }, []);

  const noLoginIn = () => {
    return (
      <>
        <CenterCenterCol span={24}>
          <Image
            src={notLoginImage}
            alt="Login first"
            style={{ width: "300px", height: "400px" }}
            preview={false}
          />
        </CenterCenterCol>
        <CenterCenterCol span={24}>
          <StyledH1>Please login to have wishlist!!</StyledH1>
        </CenterCenterCol>
      </>
    );
  };

  const emptyWishlist = () => {
    return (
      <>
        <CenterCenterCol span={24}>
          <Image
            src={emptyImage}
            alt="Have a favorite movie first~"
            style={{ width: "300px", height: "400px" }}
            preview={false}
          />
        </CenterCenterCol>
        <CenterCenterCol span={24}>
          <StyledH1>! ! ! E M P T Y ! ! !</StyledH1>
        </CenterCenterCol>
      </>
    );
  };

  return (
    <CenterCenterRow>
      <CenterCenterCol span={24} style={{ height: "8vh" }}></CenterCenterCol>
      {loginStatus ? (
        movies.length !== 0 ? (
          <>
            {movies.map((item) => (
              <CenterCenterCol xs={22} sm={11} md={8} lg={4} key={item.movieID}>
                <WishlistCards item={item} scrollToTop={scrollToTop} />
              </CenterCenterCol>
            ))}
          </>
        ) : (
          emptyWishlist()
        )
      ) : (
        noLoginIn()
      )}
    </CenterCenterRow>
  );
};

export default Wishlist;
