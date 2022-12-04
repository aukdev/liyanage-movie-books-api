import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import movieApiData from "../db/book";

const MoviePage = () => {
  const [commentInput, setCommentInput] = useState("");

  const { id } = useParams();
  const { Title, Description, Poster } = movieApiData[id];

  const reviews = [
    {
      user: "amila",
      comment: "This is a awesome movie.",
      date: "03-12-2022",
    },
    {
      user: "amila",
      comment: "This is a awesome movie.",
      date: "03-12-2022",
    },
    {
      user: "amila",
      comment: "This is a awesome movie.",
      date: "03-12-2022",
    },
    {
      user: "amila",
      comment: "This is a awesome movie.",
      date: "03-12-2022",
    },
  ];

  const commentSubmitHandle = (e) => {
    e.preventDefault();
    console.log(commentInput);
    setCommentInput("");
  };

  return (
    <MoviePageContainer>
      <MoviePageMainImage>
        <img src={Poster} alt="movie" />
      </MoviePageMainImage>
      <MoviePageMovieDetails>
        <h1>{Title}</h1>
        <p>{Description}</p>

        <MoviePageWatchButton>
          <Link to="/payment">
            <button>Watch ($5)</button>
          </Link>
        </MoviePageWatchButton>
      </MoviePageMovieDetails>

      <MoviePageReviews>
        <h2>User Reviews</h2>
        <MoviePageCommentSubmit onSubmit={commentSubmitHandle}>
          <MoviePageCommentInput
            type="text"
            value={commentInput}
            onChange={(e) => {
              e.preventDefault();
              setCommentInput(e.target.value);
            }}
            placeholder="Your Comment"
          />
          <MoviePageCommentButton type="submit">Comment</MoviePageCommentButton>
        </MoviePageCommentSubmit>
        {reviews?.map(({ user, comment, date }, index) => (
          <MoviePageComments key={index}>
            <h5>
              <span>{user}</span>
              <span>{date}</span>
            </h5>
            <p>{comment}</p>
          </MoviePageComments>
        ))}
      </MoviePageReviews>
    </MoviePageContainer>
  );
};

export default MoviePage;

const MoviePageContainer = styled.main`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const MoviePageMainImage = styled.div`
  margin-top: 50px;
  width: 95%;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const MoviePageMovieDetails = styled.div`
  width: 95%;

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

const MoviePageWatchButton = styled.div`
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

const MoviePageReviews = styled.div`
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

const MoviePageComments = styled.div`
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

const MoviePageCommentSubmit = styled.form`
  width: 100%;
  padding: 7px;
  display: flex;
  align-items: center;
`;

const MoviePageCommentInput = styled.input`
  flex-grow: 1;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`;

const MoviePageCommentButton = styled.button`
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
