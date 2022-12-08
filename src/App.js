import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Books from "./Pages/Books";
import MoviePage from "./Pages/MoviePage";
import Movies from "./Pages/Movies";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import BookPage from "./Pages/BookPage";
import Home from "./Pages/Home";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useState } from "react";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  return (
    <ApolloProvider client={client}>
      <Router>
        <Header isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} />
        <Switch>
          <Route path="/movie/:id">
            <MoviePage />
          </Route>
          <Route path="/book/:id">
            <BookPage />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/books">
            <Books />
          </Route>
          <Route exact path="/login">
            <Login isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} />
          </Route>
          <Route exact path="/signup">
            <Signup isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
