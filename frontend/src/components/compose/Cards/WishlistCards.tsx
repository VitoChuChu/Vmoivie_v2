import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CardImg } from "../../atoms/image/image";
import { MovieDetail } from "../../../interface/movie";

const StyledLink = styled(Link)`
  padding: 0;
`;

interface WishlistCardsProps {
  item: MovieDetail;
  scrollToTop: () => void;
}

const WishlistCards: React.FC<WishlistCardsProps> = ({ item, scrollToTop }) => {
  return (
    <>
      <StyledLink to={`/filmPage/${item.movieID}`} onClick={scrollToTop}>
        <CardImg src={item.posterPath} alt={item.title} />
        <h3 style={{ color: "white", margin: "0" }}>{item.title}</h3>
        <p style={{ color: "white", margin: "0" }}>{item.releaseDate}</p>
      </StyledLink>
    </>
  );
};

export default WishlistCards;
