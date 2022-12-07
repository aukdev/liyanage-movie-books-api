import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const GET_BOOKS = gql`
  {
    getBooks {
      _id
      title
      image
    }
  }
`;

export const GET_BOOK = gql`
  query GetBook($getBookId: String) {
    getBook(id: $getBookId) {
      title
      description
      image
      authors
      comments {
        comment
        user
      }
    }
  }
`;

export const GET_MOVIES = gql`
  {
    getMovies {
      _id
      title
      image
    }
  }
`;

export const GET_MOVIE = gql`
  query GetMovie($getMovieId: String) {
    getMovie(id: $getMovieId) {
      title
      description
      image
      cast
      comments {
        comment
        user
      }
    }
  }
`;
