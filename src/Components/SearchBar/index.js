import { useSetRecoilState } from "recoil";
import { searchState } from "../../states/atoms";
import React, { useCallback } from "react";

const SearchBar = () => {
  const setSearchInput = useSetRecoilState(searchState);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    setSearchInput(e.target.keyword.value);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="keyword" />
      <button>검색</button>
    </form>
  );
};

export default React.memo(SearchBar);
