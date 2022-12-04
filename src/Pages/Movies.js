import styled from "styled-components";
import MovieUnit from "../Components/MovieUnit";
import moveiApiData from "../db/book";

const Movies = () => {
  return (
    <MoviesContainer>
      <MoviesBlock>
        {moveiApiData &&
          moveiApiData.map(({ Title, Year, imdbID, Poster }, index) => (
            <MovieUnit
              Title={Title}
              Year={Year}
              Poster={Poster}
              key={imdbID}
              index={index}
            />
          ))}
      </MoviesBlock>
    </MoviesContainer>
  );
};

export default Movies;

const MoviesContainer = styled.main`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MoviesBlock = styled.div`
  width: 95%;
  margin-top: 50px;
  margin-bottom: 50px;
  display: grid;
  gap: 25px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`;
