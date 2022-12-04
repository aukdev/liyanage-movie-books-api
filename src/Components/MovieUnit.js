import { Link } from "react-router-dom";
import styled from "styled-components";
const MovieUnit = ({ Poster, Title, Year, index }) => {
  return (
    <MovieUnitContainer>
      <img src={Poster} alt={Title} />
      <MovieDatalis>
        <h3>
          <Link to={`/movies/${index}`}>{Title}</Link>
        </h3>
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
  box-shadow: rgba(0, 0, 0, 0.95) 0px 13px 27px -5px,
    rgba(0, 0, 0, 1) 0px 8px 16px -8px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const MovieDatalis = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 14px;
    font-weight: 500;
    span {
      color: #fca103;
    }
  }
`;
