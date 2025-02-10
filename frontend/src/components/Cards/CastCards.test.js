import CastCards from "./CastCards";
import React from "react";
import { render, screen } from "@testing-library/react";
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
  id: 0,
  name: "Dwayne Johnson",
  character: "Black Adam / Teth Adam",
  profile_path:
    "https://image.tmdb.org/t/p/w200//cgoy7t5Ve075naBPcewZrc08qGw.jpg",
};

describe(CastCards, () => {
  test("The img should be render normally", async () => {
    render(<CastCards item={item} />);
    expect(await screen.findByAltText("Dwayne Johnson")).toBeInTheDocument();
  });
  test("The information of casts should be render normally", async () => {
    render(<CastCards item={item} />);
    expect(
      await screen.findByText("Black Adam / Teth Adam")
    ).toBeInTheDocument();
  });
});
