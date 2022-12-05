import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Books from "./Pages/Books";
import MoviePage from "./Pages/MoviePage";
import Movies from "./Pages/Movies";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import BookPage from "./Pages/BookPage";

const App = () => {
  return (
    <Router>
      <Header />
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
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
