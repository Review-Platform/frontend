import styled from "styled-components";

export const Container = styled.div``;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
  background-color: rgba(1, 1, 1, 0.2);
`;

export const ModalButtonArea = styled.div`
  display: flex;
`;

export const ModalText = styled.span`
  margin-bottom: 30px;
  font-size: 16px;
`;

export const Modal = styled.div`
  width: 343px;
  height: 200px;
  background: #ffffff;
  color: #191919;
  border-radius: 0.2rem;
  padding: 2rem 2rem;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  top: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalButton = styled.button`
  width: 130px;
  height: 46px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  background-color: #f5f5f5;
  margin: 0 5px;
  cursor: pointer;
`;

export const ModalButtonTwo = styled(ModalButton)`
  background-color: #e76100;
  color: #ffffff;
`;
