import styled from "@emotion/styled";

export const NewModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff5e4;
  z-index: 999;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  overflow: scroll;
  overflow-x: hidden;
  display: none;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  background-color: #ffd1d1;
  border-style: none;
  font-size: 1.4rem;
`;
