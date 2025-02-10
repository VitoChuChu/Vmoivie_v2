import SwiperCompV6 from "./SwiperCompV6";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

let mock = new MockAdapter(axios);

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

describe(SwiperCompV6, () => {
  test("The cards should be render normally", () => {
    // render(<SwiperCompV6 item={item} />);
  });
});
