import { useRecoilState } from "recoil";
import { searchState } from "../../states/atoms";
import React, { useCallback } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useRecoilState(searchState);

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
