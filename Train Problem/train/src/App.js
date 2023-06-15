import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllTrainsPage from "./AllTrainsPage";
import SingleTrainPage from "./SingleTrainPage";
import LoginPage from "./LoginPage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Trains</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/train/:id" element={<SingleTrainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<AllTrainsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
