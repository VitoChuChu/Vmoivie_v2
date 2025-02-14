import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CccDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`;

const StyledImg = styled.img.attrs((props: { src: string; alt: string }) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 13vw;
  height: auto;
  border-radius: 5%;

  @media screen and (max-width: 575px) {
    width: 40vw;
    height: auto;
  }
  @media screen and (min-width: 576px) {
    width: 20vw;
    height: auto;
  }
  @media screen and (min-width: 768px) {
    width: 25vw;
    height: auto;
  }
  @media screen and (min-width: 992px) {
    width: 14vw;
    height: auto;
    padding: 0 5px;
    border-radius: 10%;
  }
`;

const StyledLink = styled(Link)`
  padding: 0;
`;

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

interface MoviesCardProps {
  item: Movie;
  scrollToTop: () => void;
}

const MoviesCard: React.FC<MoviesCardProps> = ({ item, scrollToTop }) => {
  const onClickFunction = () => {
    scrollToTop();
  };

  return (
    <CccDiv>
      <StyledLink
        to={`/filmPage/${item.id}`}
        onClick={onClickFunction}
        data-testid="movieCard"
      >
        <StyledImg src={item.poster_path} alt={item.title} />
        <h3 style={{ color: "white", margin: "0" }}>{item.title}</h3>
        <p style={{ color: "white" }}>
          <strong style={{ color: "#f4c10f", margin: "0" }}>Rated: </strong>
          {item.vote_average}
        </p>
      </StyledLink>
    </CccDiv>
  );
};

export default MoviesCard;
