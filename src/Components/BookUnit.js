import { Link } from "react-router-dom";
import styled from "styled-components";

const BookUnit = ({ Poster, Title, Year, index }) => {
  return (
    <BookUnitContainer>
      <img src={Poster} alt={Title} />
      <BookDatalis>
        <h3>
          <Link to={`/book/${index}`}>{Title}</Link>
        </h3>
        <h3>
          <span>{Year}</span>
        </h3>
      </BookDatalis>
    </BookUnitContainer>
  );
};

export default BookUnit;

const BookUnitContainer = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.95) 0px 13px 27px -5px,
    rgba(0, 0, 0, 1) 0px 8px 16px -8px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const BookDatalis = styled.div`
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
