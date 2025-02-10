import Wishlist from "./Wishlist";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

let mock = new MockAdapter(axios);
mock
  .onPut("http://localhost:8080/filmpage/getWishlist")
  .replyOnce(200, [])
  .onPut("http://localhost:8080/filmpage/getWishlist")
  .reply(200, [
    {
      addDate: "2022-12-07T23:16:12.947Z",
      movieID: "8859",
      order: 39,
      posterPath:
        "https://image.tmdb.org/t/p/w500//nx5QwdN86qmjboNINn2smi6EPuZ.jpg",
      releaseDate: "2000-12-15",
      title: "Dude, Where's My Car?",
      userID: "65",
    },
  ]);

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
describe(Wishlist, () => {
  test("The not login image should be render if user not login.", async () => {
    loginStatusHandler = jest.fn();
    render(<Wishlist loginStatusHandler={loginStatusHandler} />, {
      wrapper: BrowserRouter,
    });
    expect(
      await screen.findByRole("img", { name: /login first~/i })
    ).toBeInTheDocument();
  });
  test("The empty image should be render if user logined but no wishlist data", async () => {
    localStorage.setItem("token", "1234");
    render(<Wishlist />, {
      wrapper: BrowserRouter,
    });
    expect(
      await screen.findByRole("img", { name: /have a favorite movie first~/i })
    ).toBeInTheDocument();
  });
  test("The wishlist data should be render normally.", async () => {
    localStorage.setItem("token", "1234");
    render(<Wishlist />, {
      wrapper: BrowserRouter,
    });
    expect(
      await screen.findByAltText(/Dude, Where's My Car/i)
    ).toBeInTheDocument();
  });
});
