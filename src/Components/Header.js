import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [menuControl, setMenuControl] = useState(false);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <h1>Movies Books App</h1>
      </HeaderLeft>
      <HeaderRight>
        <ul>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
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
              <Link to="/login">Log in</Link>
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

    a {
      color: #fca103;
      font-weight: 600;
      transition: all 350ms ease-in;

      &:hover {
        color: white;
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
