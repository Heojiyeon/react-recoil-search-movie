import { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import { useRecoilValue } from "recoil";
import { getMovieDetail } from "../../states/atoms";
import { CloseButton, NewModal } from "./style";

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
      <h3>{movieDetail.Title}</h3>
      <img src={movieDetail.Poster} alt="영화포스터" />
      <p>{movieDetail.Plot}</p>
    </NewModal>,
    el
  );
};

export default Modal;
