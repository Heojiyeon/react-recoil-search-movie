import axios from "axios";
import { atom, selector } from "recoil";
import { ERROR_MESSAGE } from "../utils/constants";
import { API_KEY } from "../utils/url";

export const searchState = atom({
  key: "SearchState",
  default: "",
});

export const getMovies = selector({
  key: "GetMovies",
  get: async ({ get }) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com?apikey=${API_KEY}&s=${get(searchState)}`
      );
      if (response.status !== 200) {
        throw new Error(ERROR_MESSAGE.WRONG_URL);
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
});

export const movieIDState = atom({
  key: "MovieIDState",
  default: "",
});

export const getMovieDetail = selector({
  key: "GetMovieDetail",
  get: async ({ get }) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com?apikey=${API_KEY}&i=${get(
          movieIDState
        )}&plot=full`
      );
      if (response.status !== 200) {
        throw new Error(ERROR_MESSAGE.WRONG_URL);
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
});
