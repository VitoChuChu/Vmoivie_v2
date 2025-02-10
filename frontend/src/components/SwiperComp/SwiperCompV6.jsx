import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import styled from "styled-components";
import PropTypes from "prop-types";

import SwiperCore, { Navigation } from "swiper/core";
SwiperCore.use([Navigation]);

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;
const Title = styled.h1`
  color: white;
  font-size: 1.1rem;
  margin: 0;
`;

const SwiperComp = ({ items, scrollToTop }) => {
  SwiperComp.propTypes = {
    items: PropTypes.array,
    scrollToTop: PropTypes.func,
  };
  return (
    <div>
      <Swiper
        style={{ zIndex: "0" }}
        // slidesPerView={5}
        spaceBetween={20}
        loop={false}
        navigation={true}
        modules={[Navigation]}
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
        className="mySwiper"
      >
        {items.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <MovieContainer>
                <Link to={`/filmPage/${item.id}`} onClick={scrollToTop}>
                  <Img
                    className="img-fluid blur"
                    src={item.poster_path}
                    alt={item.title}
                  />
                </Link>
                <Title className="textPos text-center">{item.title}</Title>
                <p style={{ margin: "0", color: "white" }}>
                  <strong style={{ color: "#f4c10f" }}>Rated: </strong>
                  {item.vote_average}
                </p>
                <ReactStars
                  count={10}
                  value={item.vote_average}
                  size={15}
                  isHalf={true}
                  edit={false}
                ></ReactStars>
              </MovieContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperComp;
