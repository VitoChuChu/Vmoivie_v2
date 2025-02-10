import TrailerModal from "./TrailerModal";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe(TrailerModal, () => {
  test("The modal should render normally", async () => {
    const isModalOpen = jest.fn();
    const handleCancel = jest.fn();
    const video = { key: "o4AQ-q8AeKo" };
    const detail = { title: "1234" };
    await act(async () => {
      render(
        <TrailerModal
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          video={video}
          detail={detail}
        />,
        { wrapper: BrowserRouter }
      );
    });
    expect(isModalOpen).toBeCalled();
  });
  test("The modal can be closed", async () => {
    const isModalOpen = jest.fn();
    const handleCancel = jest.fn();
    const video = { key: "o4AQ-q8AeKo" };
    const detail = { title: "1234" };
    await act(() => {
      render(
        <TrailerModal
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          video={video}
          detail={detail}
        />,
        { wrapper: BrowserRouter }
      );
    });
    fireEvent.click(await screen.findByRole("button", { name: /close/i }));
    expect(handleCancel).toBeCalled();
  });
});
