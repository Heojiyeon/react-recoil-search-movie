import { atom, selector } from "recoil";
import { API_KEY } from "../utils/url";
// import { ERROR_MESSAGE } from "../utils/constants";
import axios from "axios";

// 검색어 상태 관리 atom
export const searchState = atom({
  key: "SearchState",
  default: "",
});

// 검색 결과 selector
export const getMovies = selector({
  key: "GetMovies",
  get: async ({ get }) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com?apikey=${API_KEY}&s=${get(searchState)}`
      );
      // if (!response.ok) {
      //   throw new Error(ERROR_MESSAGE.WRONG_URL);
      // }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
});

// 해당 영화 아이디 관리 atom
export const movieIDState = atom({
  key: "MovieIDState",
  default: "",
});

// 영화 정보 selector
export const getMovieDetail = selector({
  key: "GetMovieDetail",
  get: async ({ get }) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com?apikey=${API_KEY}&i=${get(
          movieIDState
        )}&plot=full`
      );
      // if (!response.ok) {
      //   throw new Error(ERROR_MESSAGE.WRONG_URL);
      // }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
});
