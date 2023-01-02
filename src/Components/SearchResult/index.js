import { useRecoilValue } from "recoil";
import { searchState } from "../../states/atoms";

const SearchResult = () => {
  const result = useRecoilValue(searchState);
  return (
    <div>
      You can see search state by atom
      <br />
      <strong>{result}</strong>
    </div>
  );
};

export default SearchResult;
