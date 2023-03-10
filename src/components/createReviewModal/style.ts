import styled from "styled-components";

export const ModalBg = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Modal = styled.div`
  width: 806px;
  height: 718px;
  border: 5px solid #e76100;
  border-radius: 10px;
  background-color: var(--yellowColor);
  position: relative;
  z-index: 100;
`;

export const XBtn = styled.div`
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  right: 20px;
  top: 40px;
  color: var(--textColor);
  cursor: pointer;
`;

export const SubmitBtn = styled.button`
  width: 84px;
  height: 42px;
  position: absolute;
  top: 30px;
  right: 50px;
  background-color: white;
  border: 2px solid #f48722;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--mainColor);
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  cursor: pointer;
`;

export const Containers = styled.div`
  margin-top: 90px;
  width: 796px;
  height: 571px;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &:last-child {
    padding-left: 22px;
  }
`;
export const ImgContainer = styled.div`
  width: 298.42px;
  height: 189px;
  background-image: url("/images/background/productImgBackground.png");
  background-size: cover;
  border-radius: 10px;
  margin-top: 50px;
  margin-left: 57px;
`;
export const ProductName = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  color: var(--mainColor);
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

export const ReviewText = styled.div`
  margin-top: 40px;
  margin-left: 59px;
  display: flex;
  flex-direction: column;
  color: var(--mainColor);
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;
export const ReviewTextarea = styled.textarea`
  margin-top: 20px;
  width: 317px;
  height: 170px;
  background-color: #fff1e4;
  border-radius: 5px;
  padding: 10px 14px 20px 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: black;
  outline: none;
  border: none;
  resize: none;
  font-family: inherit;
`;

export const UserInfoBox = styled.div`
  margin-top: 50px;
  margin-right: 166px;
  width: 206px;
  height: 52px;
  border: 1px solid var(--yellowColor);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  gap: 14px;
  align-items: center;
`;
export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const UserName = styled.span`
  color: black;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;
export const Rating = styled.div`
  margin-top: 25px;
  margin-right: 210px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: var(--mainColor);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const FlavorCheck = styled.div`
  margin-top: 26px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: var(--mainColor);
  display: flex;
  flex-direction: column;
`;
export const HashTags = styled.div`
  margin-top: 26px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: var(--mainColor);
  display: flex;
  flex-direction: column;
`;
