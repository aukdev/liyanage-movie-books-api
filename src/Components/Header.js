import { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Auth from "../utils/auth";

const Header = ({ isLogedIn, setIsLogedIn }) => {
  const [menuControl, setMenuControl] = useState(false);
  const history = useHistory();

  const token = Auth.loggedIn() ? Auth.getToken() : null;

  useEffect(() => {
    if (token) {
      if (!isLogedIn) {
        setIsLogedIn(true);
      }
    } else {
      if (isLogedIn) {
        setIsLogedIn(false);
      }
    }
    // eslint-disable-next-line
  }, [token]);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <Link to="/">
          <h1>Movies Books App</h1>
        </Link>
      </HeaderLeft>
      <HeaderRight>
        <ul>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            {isLogedIn ? (
              <p
                onClick={() => {
                  Auth.logout();
                  const token = Auth.loggedIn() ? Auth.getToken() : null;
                  if (!token) {
                    if (isLogedIn) {
                      setIsLogedIn(false);
                    }
                  }
                  history.push("/");
                }}
              >
                Log Out
              </p>
            ) : (
              <Link to="/login">Log in</Link>
            )}
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>

        <img
          src="/image/menu-svgrepo-com.svg"
          alt="menu-open"
          onClick={() => {
            setMenuControl((pre) => !pre && true);
          }}
        />

        <ol
          style={{
            right: `${menuControl ? "-22px" : "-300px"}`,
          }}
        >
          <img
            src="/image/close-svgrepo-com.svg"
            alt="menu-close"
            onClick={() => {
              setMenuControl((pre) => pre && false);
            }}
          />
          <div>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              {isLogedIn ? (
                <p
                  onClick={() => {
                    Auth.logout();
                    const token = Auth.loggedIn() ? Auth.getToken() : null;
                    if (!token) {
                      if (isLogedIn) {
                        setIsLogedIn(false);
                      }
                    }
                    history.push("/");
                  }}
                >
                  Log Out
                </p>
              ) : (
                <Link to="/login">Log in</Link>
              )}
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </div>
        </ol>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
`;

const HeaderLeft = styled.div`
  h1 {
    color: black;
    font-size: 16px;
    font-weight: 700;
  }
`;

const HeaderRight = styled.nav`
  position: relative;

  img {
    width: 24px;
    object-fit: contain;
    cursor: pointer;

    @media (min-width: 768px) {
      display: none;
    }
  }

  ol {
    position: absolute;
    height: 100vh;
    top: -40px;
    right: -22px;
    padding: 15px;
    background-color: #fca103;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transition: all 400ms ease-in;

    img {
      width: 24px;
      object-fit: contain;
      margin-top: 15px;
      cursor: pointer;
    }

    div {
      padding: 50px 0;
      width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;

      li {
        p {
          font-weight: 600;
          color: black;
          transition: all 400ms ease-in;
          cursor: pointer;

          &:hover {
            color: white;
          }
        }
      }

      a {
        font-weight: 600;
        color: black;
        transition: all 400ms ease-in;

        &:hover {
          color: white;
        }
      }
    }
  }

  ul {
    display: none;

    li {
      p {
        color: #fca103;
        font-weight: 600;
        transition: all 350ms ease-in;
        cursor: pointer;

        &:hover {
          color: black;
        }
      }
    }

    a {
      color: #fca103;
      font-weight: 600;
      transition: all 350ms ease-in;

      &:hover {
        color: black;
      }
    }

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 20px;
    }
  }
`;
