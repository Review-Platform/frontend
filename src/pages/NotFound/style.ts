import styled from "styled-components";
export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const BgImg = styled.img`
  width: 901px;
  height: 436px;
  position: absolute;
  top: 100px;
  left: calc(50vw - 450px);
  z-index: -1;
  opacity: 0.4;
`;
export const Title = styled.div`
  color: var(--mainColor);
  width: 480px;
  height: auto;
  font-weight: 800;
  font-size: 80px;
  white-space: pre-line;
  text-align: center;
  margin-top: 80px;
`;
export const Row1 = styled.div`
  margin-top: 48px;
  font-weight: 700;
  font-size: 50px;
  color: #e76100;
`;
export const Row2 = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 46px;
  color: #e76100;
  white-space: pre-line;
  text-align: center;
  margin-top: 52px;
`;
