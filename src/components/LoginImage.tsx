import styled from "styled-components";

const Container = styled.div`
  background-image: url("images/loginImage.png");
  background-color: black;
  background-size: cover;
  height: 100%;
  width: 50%;
`;

function LoginImage() {
  return <Container></Container>;
}
export default LoginImage;
