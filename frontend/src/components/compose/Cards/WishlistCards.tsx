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

const StyledImg = styled.img<{ src: string; alt: string }>`
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
  movieID: number;
  title: string;
  posterPath: string;
  releaseDate: string;
}

interface WishlistCardsProps {
  item: Movie;
  scrollToTop: () => void;
}

const WishlistCards: React.FC<WishlistCardsProps> = ({ item, scrollToTop }) => {
  return (
    <CccDiv>
      <StyledLink to={`/filmPage/${item.movieID}`} onClick={scrollToTop}>
        <StyledImg src={item.posterPath} alt={item.title} />
        <h3 style={{ color: "white", margin: "0" }}>{item.title}</h3>
        <p style={{ color: "white" }}>{item.releaseDate}</p>
      </StyledLink>
    </CccDiv>
  );
};

export default WishlistCards;
