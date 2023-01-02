import { atom } from "recoil";

// 검색어 상태 관리 atom
export const searchState = atom({
  key: "searchState",
  default: "",
});

// 영화 리스트 상태 관리 atom
export const movieListState = atom({
  key: "movieListState",
  default: [],
});
