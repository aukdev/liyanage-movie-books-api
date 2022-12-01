import styled from "styled-components";
import MovieUnit from "../Components/MovieUnit";

const Movies = () => {
  const apiData = [
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame and the Latest Captain Marvel Outrage!!",
      Year: "2019",
      imdbID: "tt10025738",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjg2ZTM3OTgtY2ExMS00OGM4LTg3NDEtNjQ0MjJiZDFmMGFkXkEyXkFqcGdeQXVyMDY3OTcyOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Marvel Studios' Avengers: Endgame LIVE Red Carpet World Premiere",
      Year: "2019",
      imdbID: "tt10240638",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNThjZDgwZTYtMjdmYy00ZmUyLTk4NTUtMzdjZmExODQ3ZmY4XkEyXkFqcGdeQXVyMjkzMDgyNTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers Endgame: the Butt Plan",
      Year: "2019",
      imdbID: "tt10399328",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTQ1OWQzODktMTY3Zi00OTQxLWExOTYtZTNjZjY5ZTY4M2UyXkEyXkFqcGdeQXVyMTAzMzk0NjAy._V1_SX300.jpg",
    },
  ];

  return (
    <MoviesContainer>
      <MoviesBlock>
        {apiData &&
          apiData.map(({ Title, Year, imdbID, Poster }) => (
            <MovieUnit Title={Title} Year={Year} Poster={Poster} key={imdbID} />
          ))}
      </MoviesBlock>
    </MoviesContainer>
  );
};

export default Movies;

const MoviesContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MoviesBlock = styled.div`
  width: 95%;
  margin-top: 50px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  @media (min-width: 790px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
