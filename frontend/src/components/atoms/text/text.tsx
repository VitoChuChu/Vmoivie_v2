import styled from "styled-components";
import Colors from "../colors/colors";

export const StyledH1 = styled.h1`
  color: ${Colors.textColor};
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const StyledH2 = styled.h2`
  color: ${Colors.textColor};
  margin: 0;
  font-weight: 600;
`;

export const TitleH1 = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const MovieTitle = styled.h1.attrs(
  (props: { className?: string; children?: React.ReactNode }) => ({
    className: props.className,
    children: props.children,
  })
)`
  color: white;
  font-size: 1.1rem;
  margin: 0;
`;
