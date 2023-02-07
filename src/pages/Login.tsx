import styled from "styled-components";
import Header from "../components/Header";
import LoginImage from "../components/LoginImage";
import LoginForm from "../components/forms/LoginForm";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 1200px;
  min-height: 600px;
`;

const Grid = styled.div`
  display: flex;
  width: 100vw;
  height: calc((1000 / 1080) * 100%);
`;
const FormContainer = styled.div`
  width: calc((582 / 1920) * 100vw);
  margin-left: calc((15 / 1920) * 100vw);
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

function Login() {
  return (
    <Container>
      <Header />
      <Grid>
        <LoginImage />
        <FormContainer>
          <LoginForm />
        </FormContainer>
      </Grid>
    </Container>
  );
}
export default Login;
