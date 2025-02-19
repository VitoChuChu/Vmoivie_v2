import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import { CenterCenterRow, CenterCenterCol } from "../../atoms/grid/grid";
import { SwiperImg } from "../../atoms/image/image";
import { MovieTitle } from "../../atoms/text/text";
import { Movie } from "../../../interface/movie";

import "swiper/swiper.min.css";
SwiperCore.use([Navigation]);

interface SwiperCompProps {
  items: Movie[];
  scrollToTop: () => void;
}

const SwiperComp: React.FC<SwiperCompProps> = ({ items, scrollToTop }) => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        loop={false}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
      >
        {items.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <CenterCenterRow>
                <CenterCenterCol span={24}>
                  <Link to={`/filmPage/${item.id}`} onClick={scrollToTop}>
                    <SwiperImg src={item.poster_path} alt={item.title} />
                  </Link>
                </CenterCenterCol>
                <CenterCenterCol span={24}>
                  <MovieTitle>{item.title}</MovieTitle>
                </CenterCenterCol>
                <CenterCenterCol span={24}>
                  <p style={{ margin: "0", color: "white" }}>
                    <strong style={{ color: "#f4c10f" }}>Rated: </strong>
                    {item.vote_average}
                  </p>
                </CenterCenterCol>
                <CenterCenterCol
                  span={24}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ReactStars
                    count={10}
                    value={item.vote_average}
                    size={15}
                    isHalf={true}
                    edit={false}
                  ></ReactStars>
                </CenterCenterCol>
              </CenterCenterRow>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperComp;
