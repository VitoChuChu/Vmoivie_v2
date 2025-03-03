import { fetchData } from "../utils/FetchData";
import { FetchDataConfig } from "../interface/fetchData";
import { UserConfig } from "../interface/user";
import { WishlistConfig } from "../interface/movie";

export const login = async (req: UserConfig) => {
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

export const register = async (req: UserConfig) => {
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

export const getWishList = async (userID: string) => {
  try {
    const config: FetchDataConfig = {
      url: "getWishlist",
      method: "POST",
      source: "DB",
      headers: {
        "content-type": "application/json",
      },
      data: {
        userID: userID,
      },
    };
    const data = await fetchData(config);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const checkWishList = async (userID: string, id: number) => {
  try {
    const config: FetchDataConfig = {
      url: "checkWishlist",
      method: "POST",
      source: "DB",
      headers: {
        "content-type": "application/json",
      },
      data: {
        userID: userID,
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
  userID: string,
  movieConfig: WishlistConfig
) => {
  try {
    const config: FetchDataConfig = {
      url: "addUserWishlist",
      method: "POST",
      source: "DB",
      headers: {
        "content-type": "application/json",
      },
      data: {
        userID: userID,
        movieConfig,
      },
    };
    const data = await fetchData(config);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const removeWishList = async (userID: string, id: number) => {
  try {
    const config: FetchDataConfig = {
      url: "removeUserWishlist",
      method: "DELETE",
      source: "DB",
      headers: {
        "content-type": "application/json",
      },
      data: {
        userID: userID,
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
