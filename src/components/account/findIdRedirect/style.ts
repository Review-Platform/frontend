import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 100%;
  min-height: 740px;
  background-color: #fffaf5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  margin-top: 120px;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: #ff4a00;
`;

export const ShowIdBox = styled.div`
  margin-top: 50px;
  width: 410px;
  height: 175px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const ShowIdTextarea = styled.div`
  width: 320px;
  height: 90px;
`;
export const YourIdIs = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
`;
export const IdBox = styled.div`
  width: 240px;
  height: 51px;
  background-color: #ffe5cd;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Id = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #191919;
`;

export const LoginBtn = styled.button`
  margin-top: 60px;
  width: 270px;
  min-height: 50px;
  border-radius: 40px;
  background-color: var(--orangeColor);
  border: 0;
  color: white;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
`;

export const FindPassword = styled.div`
  margin-top: 20px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #191919;
  cursor: pointer;
`;
