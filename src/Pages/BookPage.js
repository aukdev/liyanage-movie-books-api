import { useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Payment from "../Components/Payment";
import bookApiData from "../db/books";
import Auth from "../utils/auth";
import { ADD_BOOK_COMMENT } from "../utils/mutations";
import { GET_BOOK } from "../utils/queries";

const BookPage = () => {
  const [commentInput, setCommentInput] = useState("");
  const [paymentSet, setPaymentSet] = useState(false);
  const [canComment, setCanComment] = useState(false);

  const [addBookComment] = useMutation(ADD_BOOK_COMMENT);

  const token = Auth.loggedIn() ? Auth.getToken() : null;

  const { id } = useParams();

  useEffect(() => {
    if (token) {
      if (!canComment) {
        setCanComment(true);
      }
    } else {
      if (canComment) {
        setCanComment(false);
      }
    }
    // eslint-disable-next-line
  }, [token, id]);

  // console.log(canComment);
  const { Title, Description, Poster } = bookApiData[1];

  const [commentFromDB, setCommentFromDB] = useState([]);

  const { loading, data, error, refetch } = useQuery(GET_BOOK, {
    variables: { getBookId: id },
  });

  useEffect(() => {
    refetch({ getBookId: id });
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (data) {
      // console.log(data.getBook.comments);
      if (data.getBook.comments) {
        setCommentFromDB(data.getBook.comments);
      }
    }
  }, [data]);

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
          color: "white",
        }}
      >
        loading........
      </h1>
    );
  }

  const commentSubmitHandle = async (e) => {
    e.preventDefault();

    const user = Auth.loggedIn() ? Auth.getUserName() : null;

    // console.log(user);

    if (id && commentInput && user) {
      try {
        const { data } = await addBookComment({
          variables: {
            bookId: id,
            user,
            comment: commentInput,
          },
        });

        // console.log(data);
        const setNewComment = data.addBookComment;

        setCommentFromDB((pre) => {
          const temp = [...pre];
          temp.push({
            user: setNewComment.user,
            comment: setNewComment.comment,
          });

          return temp;
        });
      } catch (err) {
        console.log(err);
      }
    }

    setCommentInput("");
  };

  return (
    <BookPageContainer>
      {paymentSet && <Payment setPaymentSet={setPaymentSet} />}

      <BookPageTopBlock>
        <BookPageMainImage>
          <img src={data ? data.getBook.image : Poster} alt="book" />
        </BookPageMainImage>
        <BookPageMovieDetails>
          <h1>{data ? data.getBook.title : Title}</h1>
          <p>{data ? data.getBook.description : Description}</p>

          <BookPageWatchButton>
            <button
              onClick={() => {
                setPaymentSet((pre) => !pre && true);
              }}
            >
              Order ($5)
            </button>
          </BookPageWatchButton>
        </BookPageMovieDetails>
      </BookPageTopBlock>

      <BookPageReviews>
        <h2>User Reviews</h2>
        {canComment && (
          <BookPageCommentSubmit onSubmit={commentSubmitHandle}>
            <BookPageCommentInput
              type="text"
              value={commentInput}
              onChange={(e) => {
                e.preventDefault();
                setCommentInput(e.target.value);
              }}
              placeholder="Your Comment"
            />
            <BookPageCommentButton type="submit">Comment</BookPageCommentButton>
          </BookPageCommentSubmit>
        )}
        {data &&
          commentFromDB?.map(({ user, comment }, index) => (
            <BookPageComments key={index}>
              <h5>
                <span>{user}</span>
                <span>{"07-12-2022"}</span>
              </h5>
              <p>{comment}</p>
            </BookPageComments>
          ))}
      </BookPageReviews>
    </BookPageContainer>
  );
};

export default BookPage;

const BookPageContainer = styled.main`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const BookPageTopBlock = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1;
    gap: 30px;
    margin-bottom: 50px;
  }
`;

const BookPageMainImage = styled.div`
  margin-top: 50px;
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const BookPageMovieDetails = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    margin-top: 50px;
  }

  h1 {
    margin-top: 7px;
    font-size: 24px;
    color: #fca103;
  }

  p {
    margin-top: 20px;
    color: #eee;
    text-align: justify;
  }
`;

const BookPageWatchButton = styled.div`
  margin: 50px 0;
  width: 100%;
  text-align: center;

  button {
    padding: 12px 27px;
    background-color: #fca103;
    border-radius: 50px;
    font-weight: 600;
    transition: all 400ms ease-in;
    cursor: pointer;

    &:hover {
      background-color: white;
    }
  }
`;

const BookPageReviews = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 50px;

  h2 {
    width: 100%;
    margin-bottom: 27px;
    padding-bottom: 7px;
    border-bottom: 2px solid gray;
    color: #eee;
  }
`;

const BookPageComments = styled.div`
  width: 100%;
  padding-bottom: 7px;
  background-color: white;
  color: black;
  border-radius: 7px;

  h5 {
    width: 100%;
    padding: 7px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    width: 100%;
    margin-left: 50px;
    margin-right: 20px;
    text-align: jus;
  }
`;

const BookPageCommentSubmit = styled.form`
  width: 100%;
  padding: 7px;
  display: flex;
  align-items: center;
`;

const BookPageCommentInput = styled.input`
  flex-grow: 1;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`;

const BookPageCommentButton = styled.button`
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  background-color: #fca103;
  transition: all 400ms ease-in;
  cursor: pointer;

  &:hover {
    background-color: red;
    color: white;
  }
`;
