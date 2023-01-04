import React, { useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getMovies, movieIDState } from "../../states/atoms";

const SearchResult = () => {
  const results = useRecoilValue(getMovies);
  const finalResults = results.Search;

  const setMovieID = useSetRecoilState(movieIDState);

  const handleMovie = useCallback(targetID => {
    setMovieID(targetID);
  }, []);

  return (
    <div>
      <br />
      {finalResults &&
        finalResults.map(result => {
          return (
            <div key={result.imdbID}>
              <img
                src={result.Poster}
                alt="영화 이미지"
                onClick={() => handleMovie(result.imdbID)}
              />
            </div>
          );
        })}
    </div>
  );
};

export default React.memo(SearchResult);
