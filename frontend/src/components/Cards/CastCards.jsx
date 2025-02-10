import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CccDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`;

const StyledImg = styled.img`
  width: 13vw;
  height: auto;
  border-radius: 50%;

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
    padding: 0 2%;
  }
`;

const CastCards = ({ item }) => {
  CastCards.propTypes = {
    item: PropTypes.object,
  };

  return (
    <CccDiv>
      <StyledImg src={item.profile_path} alt={item.name} />
      <h3 style={{ color: "white", margin: "0" }}>{item.name}</h3>
      <p style={{ color: "white" }}>
        <strong style={{ color: "#f4c10f", margin: "0" }}>Act: </strong>
        {item.character}
      </p>
    </CccDiv>
  );
};

export default CastCards;
