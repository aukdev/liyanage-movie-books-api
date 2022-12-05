import styled from "styled-components";
import BookUnit from "../Components/BookUnit";
import bookApiData from "../db/books";

const Books = () => {
  return (
    <BooksContainer>
      <BooksBlock>
        {bookApiData &&
          bookApiData.map(({ Title, Year, imdbID, Poster }, index) => (
            <BookUnit
              Title={Title}
              Year={Year}
              Poster={Poster}
              key={imdbID}
              index={index}
            />
          ))}
      </BooksBlock>
    </BooksContainer>
  );
};

export default Books;

const BooksContainer = styled.main`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BooksBlock = styled.div`
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
