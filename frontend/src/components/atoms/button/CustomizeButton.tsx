import { Button, ButtonProps } from "antd";
import Styled from "styled-components";

export interface CustomizeButtonProps extends ButtonProps {
  showicon?: boolean;
}

export function CustomizeButton({
  showicon = true,
  ...props
}: Readonly<CustomizeButtonProps>) {
  const style = {
    margin: "1rem 1rem 0 0",
  };
  return <Button ghost style={style} {...props} />;
}

export function GenerButton({ ...props }) {
  const style = {
    width: "128px",
    margin: "0.25rem",
    fontSize: "1rem",
  };
  return <Button ghost style={style} {...props} />;
}

export const LikeButton = Styled.button.attrs(
  (props: { onClick: () => void }) => ({
    onClick: props.onClick,
  })
)<{ imgSrc: string }>`
  width: 150px;
  height: 60px;
  padding: 0;
  display: inline-block;
  border-radius: 5px;
  border: none;
  background-image: url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  cursor: pointer;
  &:active {
    opacity: 0.5;
  }
`;
