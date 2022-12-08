import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Payment from "../Components/Payment";
import movieApiData from "../db/movies";
import { GET_MOVIE } from "../utils/queries";
import Auth from "../utils/auth";
import { useEffect } from "react";
import { ADD_MOVIE_COMMENT } from "../utils/mutations";

const MoviePage = () => {
  const [commentInput, setCommentInput] = useState("");
  const [paymentSet, setPaymentSet] = useState(false);
  const [canComment, setCanComment] = useState(false);

  const [addMovieComment] = useMutation(ADD_MOVIE_COMMENT);

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
  const { Title, Description, Poster } = movieApiData[1];

  const [commentFromDB, setCommentFromDB] = useState([]);

  const { loading, data, error, refetch } = useQuery(GET_MOVIE, {
    variables: { getMovieId: id },
  });

  useEffect(() => {
    refetch({ getMovieId: id });
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (data) {
      // console.log(data.getMovie.comments);
      if (data.getMovie.comments) {
        setCommentFromDB(data.getMovie.comments);
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
        const { data } = await addMovieComment({
          variables: {
            movieId: id,
            user,
            comment: commentInput,
          },
        });

        const setNewComment = data.addMovieComment;

        setCommentFromDB((pre) => {
          const temp = [...pre];
          temp.push({
            user: setNewComment.user,
            comment: setNewComment.comment,
          });

          return temp;
        });
      } catch (error) {
        console.log(error);
      }
    }

    setCommentInput("");
  };

  return (
    <MoviePageContainer>
      {paymentSet && <Payment setPaymentSet={setPaymentSet} />}
      <MoviePageTopBlock>
        <MoviePageMainImage>
          <img src={data ? data.getMovie.image : Poster} alt="movie" />
        </MoviePageMainImage>
        <MoviePageMovieDetails>
          <h1>{data ? data.getMovie.title : Title}</h1>
          <p>{data ? data.getMovie.description : Description}</p>

          <MoviePageWatchButton>
            <button
              onClick={() => {
                setPaymentSet((pre) => !pre && true);
              }}
            >
              Watch ($5)
            </button>
          </MoviePageWatchButton>
        </MoviePageMovieDetails>
      </MoviePageTopBlock>

      <MoviePageReviews>
        <h2>User Reviews</h2>
        {canComment && (
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
            <MoviePageCommentButton type="submit">
              Comment
            </MoviePageCommentButton>
          </MoviePageCommentSubmit>
        )}
        {data &&
          commentFromDB?.map(({ user, comment }, index) => (
            <MoviePageComments key={index}>
              <h5>
                <span>{user}</span>
                <span>{"07-12-2022"}</span>
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

const MoviePageTopBlock = styled.div`
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

const MoviePageMainImage = styled.div`
  margin-top: 50px;
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const MoviePageMovieDetails = styled.div`
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
