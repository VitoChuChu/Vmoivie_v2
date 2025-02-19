import { fetchData } from "../utils/FetchData";
import { FetchDataConfig } from "../interface/fetchData";
import { LoginConfig, RegisterConfig } from "../interface/user";
import { WishlistConfig } from "../interface/movie";

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
      method: "PUT",
      source: "DB",
      headers: {
        Authorization: req,
      },
    };
    const data = await fetchData(config);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const checkWishList = async (token: string, id: number) => {
  try {
    const config: FetchDataConfig = {
      url: "filmpage/chechWishlist",
      method: "PUT",
      source: "DB",
      headers: {
        Authorization: token,
        "content-type": "application/json",
      },
      data: {
        movieID: id,
      },
    };
    const data = await fetchData(config);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const addWishList = async (
  token: string,
  movieConfig: WishlistConfig
) => {
  try {
    const config: FetchDataConfig = {
      url: "filmpage/addUserWishlist",
      method: "POST",
      source: "DB",
      headers: {
        Authorization: token,
        "content-type": "application/json",
      },
      data: movieConfig,
    };
    const data = await fetchData(config);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const removeWishList = async (token: string, id: number) => {
  try {
    const config: FetchDataConfig = {
      url: "filmpage/removeUserWishlist",
      method: "DELETE",
      source: "DB",
      headers: {
        Authorization: token,
        "content-type": "application/json",
      },
      data: {
        movieID: id,
      },
    };
    const data = await fetchData(config);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
