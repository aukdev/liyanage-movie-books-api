import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Payment from "./Pages/Payment";
import Books from "./Pages/Books";
import MoviePage from "./Pages/MoviePage";
import Movies from "./Pages/Movies";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/movies/:id">
          <MoviePage />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/books">
          <Books />
        </Route>
        <Route exact path="/payment">
          <Payment />
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
