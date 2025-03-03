import React from "react";
import { Spin } from "antd";
import styled from "styled-components";
import { useLoadingStore } from "../../../store/LoadingStore";

const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const LoadingMask: React.FC = () => {
  const isLoading = useLoadingStore((state) => state.isLoading);

  return isLoading ? (
    <Mask>
      <Spin size="large" />
    </Mask>
  ) : null;
};

export default LoadingMask;
