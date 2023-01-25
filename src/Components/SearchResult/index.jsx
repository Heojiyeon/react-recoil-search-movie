import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getMovies, movieIDState } from "../../states/atoms";
import Modal from "../Modal";
import { MoviePoster, SearchResultContainer } from "./style";

const SearchResult = () => {
  const results = useRecoilValue(getMovies);
  const finalResults = results.Search;

  const [visible, setVisible] = useState(false);

  const setMovieID = useSetRecoilState(movieIDState);

  const handleMovie = targetID => {
    setMovieID(targetID);
    setVisible(true);
  };

  return (
    <SearchResultContainer>
      <Modal visible={visible} onClose={() => setVisible(false)} />
      {finalResults &&
        finalResults.map(result => {
          return (
            <div key={result.imdbID}>
              <MoviePoster
                src={result.Poster}
                alt="영화 이미지"
                onClick={() => handleMovie(result.imdbID)}
              />
            </div>
          );
        })}
    </SearchResultContainer>
  );
};

export default React.memo(SearchResult);
