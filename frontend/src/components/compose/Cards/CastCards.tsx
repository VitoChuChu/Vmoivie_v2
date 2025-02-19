import React from "react";
import PropTypes from "prop-types";
import { CenterCenterRow, CenterCenterCol } from "../../atoms/grid/grid";
import { SmallCard } from "../../atoms/image/image";
const unknown_poeple = require("../../../images/unknown_people.svg") as string;

interface CastCardProps {
  item: {
    profile_path: string;
    name: string;
    character: string;
  };
}

const CastCards: React.FC<CastCardProps> = ({ item }) => {
  const havePhoto = () => {
    return !item.profile_path.includes("null");
  };

  return (
    <CenterCenterRow>
      <CenterCenterCol span={24}>
        <SmallCard
          src={havePhoto() ? item.profile_path : unknown_poeple}
          alt={item.name}
        />
      </CenterCenterCol>
      <CenterCenterCol span={24}>
        <h3 style={{ color: "white", margin: "0" }}>{item.name}</h3>
      </CenterCenterCol>
      <CenterCenterCol span={24}>
        <p style={{ color: "white" }}>
          <strong style={{ color: "#f4c10f", margin: "0" }}>Act: </strong>
          {item.character}
        </p>
      </CenterCenterCol>
    </CenterCenterRow>
  );
};

CastCards.propTypes = {
  item: PropTypes.shape({
    profile_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  }).isRequired,
};

export default CastCards;
