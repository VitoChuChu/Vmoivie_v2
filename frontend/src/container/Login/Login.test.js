import React from "react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login.jsx";
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
let mock = new MockAdapter(axios);
const replyData = {
  accessToken: "1234",
  userID: "1",
  userName: "test",
};
mock
  .onPost("http://localhost:8080/login")
  .replyOnce(200, replyData)
  .onPost("http://localhost:8080/login")
  .reply(400, "Information incorrect.");

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

describe(Login, () => {
  test("User email input should be render", () => {
    render(<Login />, {
      wrapper: BrowserRouter,
    });
    const emailInputEL = screen.getByPlaceholderText(/email/i);
    expect(emailInputEL).toBeInTheDocument();
  });
  test("User password input should be render", () => {
    render(<Login />, {
      wrapper: BrowserRouter,
    });
    const passwordInputEL = screen.getByPlaceholderText(/password/i);
    expect(passwordInputEL).toBeInTheDocument();
  });
  test("Login button should be render", () => {
    render(<Login />, {
      wrapper: BrowserRouter,
    });
    const loginButtonEL = screen.getByTestId(/login/i);
    expect(loginButtonEL).toBeInTheDocument();
  });
  test("Register button should be render", () => {
    render(<Login />, {
      wrapper: BrowserRouter,
    });
    const registerButtonEL = screen.getByTestId(/register/i);
    expect(registerButtonEL).toBeInTheDocument();
  });
  test("User email input should be empty in begining", () => {
    render(<Login />, {
      wrapper: BrowserRouter,
    });
    const emailInputEL = screen.getByPlaceholderText(/email/i);
    expect(emailInputEL.value).toBe("");
  });
  test("User password input should be empty in begining", () => {
    render(<Login />, {
      wrapper: BrowserRouter,
    });
    const passwordInputEL = screen.getByPlaceholderText(/password/i);
    expect(passwordInputEL.value).toBe("");
  });

  test("User email input should be changed", async () => {
    render(<Login />, {
      wrapper: BrowserRouter,
    });
    const emailInputEL = screen.getByPlaceholderText(/email/i);
    const testValue = "test";
    fireEvent.change(emailInputEL, { target: { value: testValue } });
    await act(async () => {
      expect(emailInputEL.value).toBe(testValue);
    });
  });
  test("User password input should be changed", async () => {
    render(<Login />, {
      wrapper: BrowserRouter,
    });
    const passwordInputEL = screen.getByPlaceholderText(/password/i);
    const testValue = "test";
    fireEvent.change(passwordInputEL, { target: { value: testValue } });
    await act(async () => {
      expect(passwordInputEL.value).toBe(testValue);
    });
  });

  test("User can login and save the information to localstorage then redirect to homepage", async () => {
    loginStatusHandler = jest.fn();
    act(() => {
      render(<Login loginStatusHandler={loginStatusHandler} />, {
        wrapper: BrowserRouter,
      });
    });
    const emailInputEL = screen.getByPlaceholderText(/Email/i);
    const passwordInputEL = screen.getByPlaceholderText(/Password/i);
    const loginButtonEL = screen.getByTestId(/login/i);
    act(() => {
      fireEvent.change(emailInputEL, { target: { value: "test@email.com" } });
      fireEvent.change(passwordInputEL, { target: { value: "1234" } });
      fireEvent.click(loginButtonEL);
    });
    await waitFor(async () => {
      expect(localStorage.getItem("token")).toBe("1234");
      expect(localStorage.getItem("userName")).toBe("test");
      expect(window.location.href.slice(-1)).toBe("/");
    });
  });

  test("User can not login", async () => {
    loginStatusHandler = jest.fn();
    act(() => {
      render(<Login loginStatusHandler={loginStatusHandler} />, {
        wrapper: BrowserRouter,
      });
    });
    const emailInputEL = screen.getByPlaceholderText(/Email/i);
    const passwordInputEL = screen.getByPlaceholderText(/Password/i);
    const loginButtonEL = screen.getByTestId(/login/i);
    await act(() => {
      fireEvent.change(emailInputEL, { target: { value: "test@email.com" } });
      fireEvent.change(passwordInputEL, { target: { value: "11" } });
      fireEvent.click(loginButtonEL);
    });
    expect(
      await screen.findByText(/Information incorrect./i)
    ).toBeInTheDocument();
  });

  test("User shoule be direct to register page.", () => {
    render(<Login />, {
      wrapper: BrowserRouter,
    });
    const registerButtonEL = screen.getByTestId(/register/i);
    fireEvent.click(registerButtonEL);
    expect(window.location.href.slice(-8)).toBe("register");
  });
});
