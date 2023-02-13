import styled from "styled-components";
import Header from "../components/Header";
import LoginImage from "../components/LoginImage";
import LoginForm from "../components/forms/LoginForm";
import { Outlet } from "react-router-dom";
import { Container, FormContainer, Grid } from "../styles/FormStyles";

function Login() {
  return (
    <Container>
      <Header />
      <Grid>
        <LoginImage />
        <FormContainer>
          <Outlet />
        </FormContainer>
      </Grid>
    </Container>
  );
}
export default Login;
