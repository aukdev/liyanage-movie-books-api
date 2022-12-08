import { useState } from "react";
import styled from "styled-components";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { useHistory } from "react-router-dom";

const Login = ({ isLogedIn, setIsLogedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useMutation(LOGIN_USER);

  const history = useHistory();

  const loginButtonHandle = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const { data } = await login({
          variables: { email, password },
        });

        Auth.login(data.login.token, data.login.user.username);
        // console.log(data);
        if (data) {
          if (!isLogedIn) {
            setIsLogedIn(true);
          }
        }
        history.push("/");
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <LoginContainer>
      <LoginBody>
        <h1>Login</h1>
        <LoginBodyInputBox>
          <p>Email</p>
          <input
            value={email}
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="E-mail"
          />
        </LoginBodyInputBox>
        <LoginBodyInputBox>
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
        </LoginBodyInputBox>

        <button onClick={loginButtonHandle}>Login</button>
      </LoginBody>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.main`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const LoginBody = styled.div`
  margin-top: 100px;
  width: 95%;
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.95) 0px 13px 27px -5px,
    rgba(0, 0, 0, 1) 0px 8px 16px -8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  h1 {
    width: 100%;
    margin-bottom: 10px;
    font-size: 20px;
    padding-bottom: 7px;
    border-bottom: 2px solid gray;
  }

  button {
    margin: 20px 0 40px;
    padding: 12px 20px;
    background-color: #fca103;
    font-weight: 600;
    cursor: pointer;
    transition: all 400ms ease-in;
    border-radius: 3px;

    &:hover {
      background-color: red;
      color: white;
    }
  }
`;

const LoginBodyInputBox = styled.div`
  position: relative;
  width: 100%;
  padding: 7px;
  border-radius: 3px;
  border: 2px solid #fca103;

  p {
    position: absolute;
    top: -12px;
    left: 12px;
    font-size: 14px;
    padding: 0 7px;
    background-color: white;
    color: #fca103;
    font-weight: 600;
  }

  input {
    width: 100%;
    padding: 7px;
    font-weight: 600;
    color: black;
  }
`;
