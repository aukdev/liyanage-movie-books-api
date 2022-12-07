import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_MOVIE_COMMENT = gql`
  mutation addMovieComment(
    $movieId: String!
    $user: String!
    $comment: String!
  ) {
    addMovieComment(movieId: $movieId, user: $user, comment: $comment) {
      user
      comment
    }
  }
`;
export const ADD_BOOK_COMMENT = gql`
  mutation addBookComment($bookId: String!, $user: String!, $comment: String!) {
    addBookComment(bookId: $bookId, user: $user, comment: $comment) {
      user
      comment
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($new_book: InputBook!) {
    saveBook(new_book: $new_book) {
      _id
      username
      email
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

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
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
