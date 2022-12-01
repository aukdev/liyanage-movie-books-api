import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
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
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: #181818;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fca103;
`;

const HeaderLeft = styled.div`
  h1 {
    font-size: 16px;
    font-weight: 700;
  }
`;

const HeaderRight = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;

    a {
      color: #fca103;
      font-weight: 600;
      transition: all 350ms ease-in;

      &:hover {
        color: white;
      }
    }
  }
`;
