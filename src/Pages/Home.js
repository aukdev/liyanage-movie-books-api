import { Link } from "react-router-dom";
import styled from "styled-components";
// import homeImage from "../img/homeImage.png";

const Home = () => {
  return (
    <HomeContainer>
      <HomeContainerBlock>
        <h1>Unlimited Movies & Books TRY NOW</h1>
        <HomeContainerButtonsBlock>
          <Link to="/movies">
            <HomeContainerButton>Movies</HomeContainerButton>
          </Link>
          <Link to="/books">
            <HomeContainerButton>Books</HomeContainerButton>
          </Link>
        </HomeContainerButtonsBlock>
      </HomeContainerBlock>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url("/image/homeImage.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HomeContainerBlock = styled.div`
  background-color: rgba(0, 0, 0, 0.68);
  padding: 50px;

  h1 {
    color: white;
    text-align: center;
  }
`;

const HomeContainerButtonsBlock = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const HomeContainerButton = styled.button`
  padding: 12px 25px;
  font-size: 16px;
  font-weight: 600;
  color: black;
  background-color: #fca103;
  border-radius: 7px;
  cursor: pointer;
  transition: all 400ms ease-in;

  &:hover {
    background-color: red;
    color: white;
  }
`;
