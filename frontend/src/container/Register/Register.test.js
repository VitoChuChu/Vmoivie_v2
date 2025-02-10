import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Register from "./Register.jsx";

let mock = new MockAdapter(axios);
const replyData = {
  accessToken: "1234",
  userID: "1",
  userName: "test",
};
mock
  .onPost("http://localhost:8080/register")
  .replyOnce(200, replyData)
  .onPost("http://localhost:8080/register")
  .reply(200, "User exist");

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

describe(Register, () => {
  // 每次測試後將 render 的 DOM 清空
  afterEach(cleanup);
  // Render check
  test("User name input should be render", () => {
    render(<Register />, {
      wrapper: BrowserRouter,
    });
    const nameInputEL = screen.getByTestId(/name/i);
    expect(nameInputEL).toBeInTheDocument();
  });
  test("User email input should be render", () => {
    render(<Register />, {
      wrapper: BrowserRouter,
    });
    const emailInputEL = screen.getByPlaceholderText(/email/i);
    expect(emailInputEL).toBeInTheDocument();
  });
  test("User password input should be render", () => {
    render(<Register />, {
      wrapper: BrowserRouter,
    });
    const passwordInputEL = screen.getByPlaceholderText(/password/i);
    expect(passwordInputEL).toBeInTheDocument();
  });
  test("Login button should be render", () => {
    render(<Register />, {
      wrapper: BrowserRouter,
    });
    const loginButtonEL = screen.getByTestId(/login/i);
    expect(loginButtonEL).toBeInTheDocument();
  });
  test("Register button should be render", () => {
    render(<Register />, {
      wrapper: BrowserRouter,
    });
    const registerButtonEL = screen.getByTestId(/register/i);
    expect(registerButtonEL).toBeInTheDocument();
  });

  // Empty check
  test("User name input should be empty in beginning", () => {
    render(<Register />, { wrapper: BrowserRouter });
    const nameInputEL = screen.getByTestId(/name/i);
    expect(nameInputEL.value).toBe("");
  });
  test("User email input should be empty in begining", () => {
    render(<Register />, {
      wrapper: BrowserRouter,
    });
    const emailInputEL = screen.getByTestId(/email/i);
    expect(emailInputEL.value).toBe("");
  });
  test("User password input should be empty in begining", () => {
    render(<Register />, {
      wrapper: BrowserRouter,
    });
    const passwordInputEL = screen.getByPlaceholderText(/password/i);
    expect(passwordInputEL.value).toBe("");
  });
  test("User name input should be changed", async () => {
    act(() => {
      render(<Register />, {
        wrapper: BrowserRouter,
      });
    });
    const nameInputEL = screen.getByPlaceholderText(/name/i);
    const testValue = "test";
    await act(async () => {
      fireEvent.change(nameInputEL, { target: { value: testValue } });
    });
    expect(nameInputEL.value).toBe(testValue);
  });
  test("User email input should be changed", async () => {
    act(() => {
      render(<Register />, {
        wrapper: BrowserRouter,
      });
    });
    const emailInputEL = screen.getByPlaceholderText(/email/i);
    const testValue = "test";
    await act(async () => {
      fireEvent.change(emailInputEL, { target: { value: testValue } });
    });
    expect(emailInputEL.value).toBe(testValue);
  });
  test("User password input should be changed", async () => {
    act(() => {
      render(<Register />, {
        wrapper: BrowserRouter,
      });
    });
    const passwordInputEL = screen.getByPlaceholderText(/password/i);
    const testValue = "test";
    await act(async () => {
      fireEvent.change(passwordInputEL, { target: { value: testValue } });
    });
    expect(passwordInputEL.value).toBe(testValue);
  });

  // Redirect page
  test("User shoule be direct to login page.", () => {
    render(<Register />, {
      wrapper: BrowserRouter,
    });
    const loginButtonEL = screen.getByTestId(/login/i);
    fireEvent.click(loginButtonEL);
    expect(window.location.href.slice(-5)).toBe("login");
  });
  test("User can register and save the information to localstorage then redirect to homepage", async () => {
    loginStatusHandler = jest.fn();
    act(() => {
      render(<Register loginStatusHandler={loginStatusHandler} />, {
        wrapper: BrowserRouter,
      });
    });
    const nameInputEL = screen.getByPlaceholderText(/name/i);
    const emailInputEL = screen.getByPlaceholderText(/email/i);
    const passwordInputEL = screen.getByPlaceholderText(/password/i);
    const registerButtonEL = screen.getByTestId(/register/i);
    await act(async () => {
      fireEvent.change(nameInputEL, { target: { value: "test" } });
      fireEvent.change(emailInputEL, { target: { value: "test@email.com" } });
      fireEvent.change(passwordInputEL, { target: { value: "1234" } });
      fireEvent.click(registerButtonEL);
    });
    expect(localStorage.getItem("token")).toBe("1234");
    expect(localStorage.getItem("userName")).toBe("test");
    expect(window.location.href.slice(-1)).toBe("/");
  });

  test("User register but the email already exist", async () => {
    loginStatusHandler = jest.fn();
    act(() => {
      render(<Register loginStatusHandler={loginStatusHandler} />, {
        wrapper: BrowserRouter,
      });
    });
    const nameInputEL = screen.getByPlaceholderText(/name/i);
    const emailInputEL = screen.getByPlaceholderText(/email/i);
    const passwordInputEL = screen.getByPlaceholderText(/password/i);
    const registerButtonEL = screen.getByTestId(/register/i);
    await act(async () => {
      fireEvent.change(nameInputEL, { target: { value: "test" } });
      fireEvent.change(emailInputEL, { target: { value: "test@email.com" } });
      fireEvent.change(passwordInputEL, { target: { value: "1234" } });
      fireEvent.click(registerButtonEL);
    });
    expect(await screen.findByText(/User exist/i)).toBeInTheDocument();
  });

  test("User have incorrect information.", async () => {
    loginStatusHandler = jest.fn();
    act(() => {
      render(<Register loginStatusHandler={loginStatusHandler} />, {
        wrapper: BrowserRouter,
      });
    });
    const nameInputEL = screen.getByPlaceholderText(/name/i);
    const emailInputEL = screen.getByPlaceholderText(/email/i);
    const passwordInputEL = screen.getByPlaceholderText(/password/i);
    const registerButtonEL = screen.getByTestId(/register/i);
    await act(async () => {
      fireEvent.change(nameInputEL, { target: { value: "test" } });
      fireEvent.change(emailInputEL, { target: { value: "test@ema" } });
      fireEvent.change(passwordInputEL, { target: { value: "1234" } });
      fireEvent.click(registerButtonEL);
    });
    expect(
      await screen.findByText(/Information incorrect/i)
    ).toBeInTheDocument();
  });
});
