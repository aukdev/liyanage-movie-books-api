import { useState } from "react";
import styled from "styled-components";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { useHistory } from "react-router-dom";

const Signup = ({ isLogedIn, setIsLogedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [addUser] = useMutation(ADD_USER);
  const history = useHistory();

  const signUpButtonHandle = async (e) => {
    e.preventDefault();
    console.log(username, email, password);

    if (username && email && password) {
      try {
        const { data } = await addUser({
          variables: {
            username,
            email,
            password,
          },
        });

        // console.log(data);
        Auth.login(data.addUser.token, data.addUser.user.username);
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
    <SignupContainer>
      <SignupBody>
        <h1>Signup</h1>
        <SignupInputBox>
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
        </SignupInputBox>
        <SignupInputBox>
          <p>E-mail</p>
          <input
            value={email}
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="E-mail"
          />
        </SignupInputBox>
        <SignupInputBox>
          <p>Password</p>
          <input
            value={password}
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
        </SignupInputBox>
        <button onClick={signUpButtonHandle}>Signup</button>
      </SignupBody>
    </SignupContainer>
  );
};

export default Signup;

const SignupContainer = styled.main`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const SignupBody = styled.div`
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

const SignupInputBox = styled.div`
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
