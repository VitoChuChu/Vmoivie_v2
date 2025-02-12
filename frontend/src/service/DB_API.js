import { fetchData } from "../utils/FetchData";

export const login = async (config) => {
  try {
    const data = await fetchData("login", "post", config, "DB");
    if (data.userID) return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const register = async (config) => {
  try {
    const data = await fetchData("register", "post", config, "DB");
    if (data) return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getWishList = async (header) => {
  try {
    const data = await fetchData(
      "filmpage/getWishlist",
      "put",
      {},
      "DB",
      header
    );
    console.log(data);
    // if (data) return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
