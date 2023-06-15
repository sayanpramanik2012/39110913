import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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

        <Routes>
          <Route path="/train/:id" element={<SingleTrainPage />} />
          <Route path="/" element={<AllTrainsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
