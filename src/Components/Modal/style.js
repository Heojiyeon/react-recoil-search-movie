import styled from "@emotion/styled";

export const NewModal = styled.div`
  height: 600px;
  width: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #faf7f0;
  z-index: 999;
  padding: 3rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  background: none;
  border-style: none;
  font-size: 1.4rem;
  cursor: pointer;
`;

export const MovieTitle = styled.div`
  margin: 0 0 0.8rem 0;
  font-size: 2rem;
`;

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

export const MoviePlot = styled.p`
  height: 150px;
  overflow: scroll;
  overflow-x: hidden;
`;
