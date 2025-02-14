import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import styled from "styled-components";

const Container = styled.div`
  background-color: #1a1a1a;
`;

const CarouselContainer = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: relative;
`;

const InfoContainer = styled.div`
  width: 100%;
  min-height: 130px;
  position: absolute;
  bottom: 0;
  background-color: #1a1a1a65;
`;

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
}

interface FullScreenCarouselProps {
  nowPlayingMovies: Movie[];
}

const FullScreenCarousel: React.FC<FullScreenCarouselProps> = ({
  nowPlayingMovies,
}) => {
  return (
    <Container>
      <Carousel effect="fade" autoplay autoplaySpeed={3000}>
        {nowPlayingMovies.slice(0, 5).map((item) => {
          return (
            <div key={item.id}>
              <CarouselContainer>
                <Link to={`/filmPage/${item.id}`}>
                  <img
                    src={item.backdrop_path}
                    alt={item.title}
                    style={{
                      width: "90vw",
                      height: "85vh",
                      margin: "0 auto",
                      objectFit: "cover",
                    }}
                  />
                </Link>
                <InfoContainer>
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
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default FullScreenCarousel;
