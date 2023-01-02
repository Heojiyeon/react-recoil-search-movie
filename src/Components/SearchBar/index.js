import { useRecoilState } from "recoil";
import { searchState, movieListState } from "../../states/atoms";
import { MovieListRequest } from "../../utils/fetch";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useRecoilState(searchState);
  const [searchMovieList, setSearchMovieList] = useRecoilState(movieListState);

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await MovieListRequest(searchInput);
    if (result.Response === "True") {
      setSearchMovieList(result.Search);
    }
  };

  const handleChange = ({ target: { value } }) => {
    setSearchInput(value);
    console.log("searchInput", searchInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchInput} onChange={handleChange} />
      <button>검색</button>
    </form>
  );
};

export default SearchBar;
