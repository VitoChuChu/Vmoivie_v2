import React from "react";
import { Button } from "antd";
import { CenterCenterRow, CenterCenterCol } from "../../atoms/grid/grid";
import { Genre } from "../../../interface/movie";
import { StyledH1 } from "../../atoms/text/text";
import { GenerButton } from "../../atoms/button/CustomizeButton";

interface GenreButtonProps {
  genres: Genre[];
  handleGenreClick: (id: number) => void;
}

const GenreButton: React.FC<GenreButtonProps> = ({
  genres,
  handleGenreClick,
}) => {
  return (
    <CenterCenterRow>
      <CenterCenterCol span={24}>
        <StyledH1>Which genre do you want to choose?</StyledH1>
      </CenterCenterCol>
      <CenterCenterCol span={24}>
        {genres.map((item) => (
          <GenerButton
            // ghost
            key={item.id}
            // style={buttonStyle}
            onClick={() => handleGenreClick(item.id)}
          >
            {item.name}
          </GenerButton>
        ))}
      </CenterCenterCol>
    </CenterCenterRow>
  );
};

export default GenreButton;
