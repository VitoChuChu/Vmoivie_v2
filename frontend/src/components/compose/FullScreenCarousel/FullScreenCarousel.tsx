import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Col } from "antd";
import styled from "styled-components";
import { CenterCenterRow } from "../../atoms/grid/grid";
import { Movie } from "../../../interface/movie";

const CarouselContainer = styled(CenterCenterRow)`
  position: relative;
`;

const InfoContainer = styled(Col)`
  width: 100%;
  min-height: 125px;
  position: absolute;
  bottom: 0;
  background-color: #1a1a1a65;
`;

interface FullScreenCarouselProps {
  nowPlayingMovies: Movie[];
}

const FullScreenCarousel: React.FC<FullScreenCarouselProps> = ({
  nowPlayingMovies,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <Carousel effect="fade" autoplay autoplaySpeed={3000} arrows>
        {nowPlayingMovies.slice(0, 5).map((item) => {
          return (
            <CarouselContainer key={item.id}>
              <Link to={`/filmPage/${item.id}`}>
                <img
                  src={item.backdrop_path}
                  alt={item.title}
                  style={{
                    width: "100vw",
                    height: "90vh",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                />
              </Link>
              <InfoContainer span={24}>
                <h1
                  style={{
                    color: "white",
                    margin: "0 1rem",
                    fontSize: "2rem",
                  }}
                >
                  {item.title}
                </h1>
                <p style={{ margin: "0 1rem", color: "white" }}>
                  {item.overview}
                </p>
              </InfoContainer>
            </CarouselContainer>
          );
        })}
      </Carousel>
    </div>
  );
};

export default FullScreenCarousel;
