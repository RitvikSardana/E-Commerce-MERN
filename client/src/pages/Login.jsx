import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const loginHandler = (e) => {
    e.preventDefault();

    login(dispatch, {
      username,
      password,
    });
  };

  const testCredentialsHandler = (e) => {
    e.preventDefault();
    console.log("clicked");
    // setPassword("test123");
    // setUserName("test");
    login(dispatch, {
      username:"test",
      password:"test123",
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <Input
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div>
            <Button onClick={loginHandler} disabled={isFetching}>
              LOGIN
            </Button>
            <Button
              secondary
              onClick={testCredentialsHandler}
              disabled={isFetching}
            >
              Enter Test Credentials
            </Button>
          </div>
          {error && <Error>Something Went Wrong!</Error>}
          <LinkCustom>DO NOT YOU REMEMBER THE PASSWORD?</LinkCustom>
          <Link to="/register">
            <LinkCustom>CREATE A NEW ACCOUNT</LinkCustom>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: ${(props) => (props.secondary ? "50%" : "40%")};;
  border: ${(props) => (props.secondary ? "1px solid teal" : "none")};
  padding: 15px 20px;
  background-color: ${(props) => (props.secondary ? "white" : "teal")};;
  color: ${(props) => (props.secondary ? "teal" : "white")};;
  margin-right: 10px;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const LinkCustom = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`;

const Error = styled.span`
  color: red;
`;

export default Login;
