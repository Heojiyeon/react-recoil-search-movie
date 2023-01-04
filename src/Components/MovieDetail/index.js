import { useRecoilValue } from "recoil";
import { getMovieDetail } from "../../states/atoms";
import React from "react";

const MovieDetail = () => {
  const result = useRecoilValue(getMovieDetail);

  if (result) {
    return (
      <div>
        <p>{result.Title}</p>
        <p>{result.Released}</p>
        <p>{result.Plot}</p>
      </div>
    );
  }
};

export default React.memo(MovieDetail);
