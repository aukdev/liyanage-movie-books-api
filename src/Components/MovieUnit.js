import styled from "styled-components";
const MovieUnit = ({ Poster, Title, Year }) => {
  return (
    <MovieUnitContainer>
      <img src={Poster} alt={Title} />
      <MovieDatalis>
        <h3>{Title}</h3>
        <h3>
          <span>{Year}</span>
        </h3>
      </MovieDatalis>
    </MovieUnitContainer>
  );
};

export default MovieUnit;

const MovieUnitContainer = styled.div`
  width: 100%;
  border: 2px solid red;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const MovieDatalis = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 14px;
    span {
      color: red;
    }
  }
`;
