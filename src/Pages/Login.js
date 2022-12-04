import { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginButtonHandle = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <LoginContainer>
      <LoginBody>
        <h1>Login</h1>
        <LoginBodyInputBox>
          <p>Username</p>
          <input
            value={username}
            onChange={(e) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
            type="text"
            placeholder="Username"
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
