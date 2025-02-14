import { fetchData } from "../utils/FetchData";
import { FetchDataConfig } from "../interface/fetchData";
import { LoginConfig } from "../interface/login";
import { RegisterConfig } from "../interface/register";

export const login = async (req: LoginConfig) => {
  try {
    const config: FetchDataConfig = {
      url: "login",
      method: "POST",
      data: req,
      source: "DB",
    };
    const data = await fetchData(config);
    if (data.userID) return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const register = async (req: RegisterConfig) => {
  try {
    const config: FetchDataConfig = {
      url: "register",
      method: "POST",
      data: req,
      source: "DB",
    };
    const data = await fetchData(config);
    if (data) return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getWishList = async (req: string) => {
  try {
    const config: FetchDataConfig = {
      url: "filmpage/getWishlist",
      method: "GET",
      source: "DB",
      headers: {
        Authorization: req,
      },
    };
    const data = await fetchData(config);
    console.log(data);
    // if (data) return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
