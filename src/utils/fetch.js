import { API_KEY } from "./url.js";
import { ERROR_MESSAGE } from "./constants.js";

export const MovieListRequest = async searchKeyword => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_KEY}&s=${searchKeyword}`
    );
    if (!response.ok) {
      throw new Error(ERROR_MESSAGE.WRONG_URL);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const movieDetailRequest = async currId => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com?apikey=${API_KEY}&i=${currId}&plot=full`
    );
    if (!response.ok) {
      throw new Error(ERROR_MESSAGE.WRONG_URL);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
