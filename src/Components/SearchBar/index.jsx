import React from "react";
import { useSetRecoilState } from "recoil";
import { searchState } from "../../states/atoms";
import { SearchForm, SearchInput, SubmitButton } from "./style";

const SearchBar = () => {
  const setSearchInput = useSetRecoilState(searchState);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchInput(e.target.keyword.value);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        name="keyword"
        placeholder="키워드를 입력해주세요"
      />
      <SubmitButton>검색</SubmitButton>
    </SearchForm>
  );
};

export default React.memo(SearchBar);
