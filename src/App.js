import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Books from "./Pages/Books";
import Movies from "./Pages/Movies";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
