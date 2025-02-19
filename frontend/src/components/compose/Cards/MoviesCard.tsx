import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CenterCenterRow, CenterCenterCol } from "../../atoms/grid/grid";
import { SmallCard } from "../../atoms/image/image";
const unknown_movie = require("../../../images/unknown_movie.svg") as string;

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

  const havePhoto = () => {
    return !item.poster_path.includes("null");
  };

  return (
    <CenterCenterRow>
      <StyledLink
        to={`/filmPage/${item.id}`}
        onClick={onClickFunction}
        data-testid="movieCard"
      >
        <CenterCenterCol>
          <SmallCard
            src={havePhoto() ? item.poster_path : unknown_movie}
            alt={item.title}
          />
        </CenterCenterCol>
        <CenterCenterCol>
          <h3 style={{ color: "white", margin: "0" }}>{item.title}</h3>
        </CenterCenterCol>
        <CenterCenterCol>
          <p style={{ color: "white" }}>
            <strong style={{ color: "#f4c10f", margin: "0" }}>Rated: </strong>
            {item.vote_average}
          </p>
        </CenterCenterCol>
      </StyledLink>
    </CenterCenterRow>
  );
};

export default MoviesCard;
