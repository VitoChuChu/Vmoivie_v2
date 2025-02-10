import WishlistCards from "./WishlistCards";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";

// 解決matchMedia問題
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const item = {
  movieID: "557",
  title: "Spider-Man",
  releaseDate: "2002-05-01",
  posterPath:
    "https://image.tmdb.org/t/p/w500//gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
};

describe(WishlistCards, () => {
  test("The img should be render normally", async () => {
    render(<WishlistCards item={item} />, { wrapper: BrowserRouter });
    expect(await screen.findByAltText("Spider-Man")).toBeInTheDocument();
  });
  test("The name of movie should be render normally", async () => {
    render(<WishlistCards item={item} />, { wrapper: BrowserRouter });
    expect(await screen.findByText("Spider-Man")).toBeInTheDocument();
  });
  test("The release date of movie should be render normally", async () => {
    render(<WishlistCards item={item} />, { wrapper: BrowserRouter });
    expect(await screen.findByText("2002-05-01")).toBeInTheDocument();
  });
  test("The user can be redirect to the selected movie by click the img", async () => {
    scrollToTop = jest.fn();
    render(<WishlistCards item={item} />, {
      wrapper: BrowserRouter,
    });
    fireEvent.click(await screen.findByAltText("Spider-Man"));
    await act(async () => {
      expect(window.location.href.slice(-3)).toBe("557");
    });
  });
});
