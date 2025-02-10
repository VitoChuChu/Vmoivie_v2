import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";

const GenreButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const H1 = styled.h1`
  color: #f4c10f;
  font-size: 2rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const GenreButton = ({ genres, handleGenreClick }) => {
  GenreButton.propTypes = {
    genres: PropTypes.array,
    handleGenreClick: PropTypes.func,
  };

  return (
    <GenreButtonContainer>
      <H1>Which genre you wanna to have?</H1>
      <ButtonContainer>
        {genres.map((item) => {
          return (
            <Button
              ghost
              key={item.id}
              style={{
                width: "128px",
                margin: "0.25rem",
                padding: "2.5px 8px 3.5px 8px",
                fontSize: "1rem",
              }}
              onClick={() => {
                handleGenreClick(item.id);
              }}
            >
              {item.name}
            </Button>
          );
        })}
      </ButtonContainer>
    </GenreButtonContainer>
  );
};

export default GenreButton;
