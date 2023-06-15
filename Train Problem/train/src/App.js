import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllTrainsPage from "./AllTrainsPage";
import SingleTrainPage from "./SingleTrainPage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Trains</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/train/:id">
            <SingleTrainPage />
          </Route>
          <Route path="/">
            <AllTrainsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
