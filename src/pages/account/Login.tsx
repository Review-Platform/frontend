import styled from "styled-components";
import Header from "../../components/account/Header";
import LoginImage from "../../components/account/LoginImage";
import LoginForm from "../../components/account/forms/LoginForm";
import { Outlet } from "react-router-dom";
import {
  Container,
  FormContainer,
  Grid,
} from "../../components/account/AccountStyles";

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
