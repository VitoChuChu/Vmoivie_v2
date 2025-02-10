import MoviesCard from "./MoviesCard";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen, act } from "@testing-library/react";
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
  id: 33542,
  title: "Rumble in the Bronx",
  backdrop_path:
    "https://image.tmdb.org/t/p/original//h9T2IaeL9VlKY4MJcTNLtLwj4jG.jpg",
  poster_path:
    "https://image.tmdb.org/t/p/w500//1nAfchiXHQB3iyhK8fCJJEnNs5A.jpg",
  overview:
    "Keong comes from Hong Kong to visit New York for his uncle's wedding. His uncle runs a market in the Bronx and Keong offers to help out while Uncle is on his honeymoon. During his stay in the Bronx, Keong befriends a neighbor kid and beats up some neighborhood thugs who cause problems at the market. One of those petty thugs in the local gang stumbles into a criminal situation way over his head.",
  vote_average: 6.778,
  release_date: "1995-01-21",
};

describe(MoviesCard, () => {
  test("The img should be render normally", async () => {
    render(<MoviesCard item={item} />, { wrapper: BrowserRouter });
    expect(
      await screen.findByAltText("Rumble in the Bronx")
    ).toBeInTheDocument();
  });
  test("The name of movie should be render normally", async () => {
    render(<MoviesCard item={item} />, { wrapper: BrowserRouter });
    expect(await screen.findByText("Rumble in the Bronx")).toBeInTheDocument();
  });
  test("The user can be redirect to the selected movie by click the img", async () => {
    scrollToTop = jest.fn();
    render(<MoviesCard item={item} scrollToTop={scrollToTop} />, {
      wrapper: BrowserRouter,
    });
    fireEvent.click(await screen.findByAltText("Rumble in the Bronx"));
    await act(async () => {
      expect(window.location.href.slice(-5)).toBe("33542");
    });
  });
});
