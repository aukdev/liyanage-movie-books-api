import { useQuery } from "@apollo/client";
import styled from "styled-components";
import BookUnit from "../Components/BookUnit";
import { GET_BOOKS } from "../utils/queries";

const Books = () => {
  const { loading, data, error } = useQuery(GET_BOOKS);

  if (error) {
    console.log(error);
  }

  if (!loading) {
    if (!error) {
      if (!data) {
        console.log("no data found");
      }
    }
  } else if (loading) {
    return (
      <h1
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        loading........
      </h1>
    );
  }

  return (
    <BooksContainer>
      <BooksBlock>
        {data &&
          data.getBooks.map(({ title, image, _id }) => (
            <BookUnit
              Title={title}
              Year={2022}
              Poster={image}
              key={_id}
              index={_id}
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
