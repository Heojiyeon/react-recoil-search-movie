import { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import { useRecoilValue } from "recoil";
import { getMovieDetail } from "../../states/atoms";
import {
  CloseButton,
  MovieDetails,
  MoviePlot,
  MovieTitle,
  NewModal,
} from "./style";

const Modal = ({ visible = false, onClose }) => {
  const movieDetail = useRecoilValue(getMovieDetail);

  const el = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  });

  const closeModal = () => {
    onClose();
  };

  return ReactDOM.createPortal(
    <NewModal style={{ display: visible ? "block" : "none" }}>
      <CloseButton onClick={() => closeModal()}>X</CloseButton>
      <MovieDetails>
        <MovieTitle>
          <strong>{movieDetail.Title}</strong>
        </MovieTitle>
        <img
          src={movieDetail.Poster}
          alt="영화포스터"
          style={{ width: 300, height: 400 }}
        />
        <MoviePlot>{movieDetail.Plot}</MoviePlot>
      </MovieDetails>
    </NewModal>,
    el
  );
};

export default Modal;
