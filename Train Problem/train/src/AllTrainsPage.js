import React from "react";
import { Link } from "react-router-dom";

const trains = [
  { id: 1, name: "Train 1", departure: "9:00 AM", arrival: "11:00 AM" },
  { id: 2, name: "Train 2", departure: "10:30 AM", arrival: "1:00 PM" },
  { id: 3, name: "Train 3", departure: "1:30 PM", arrival: "4:00 PM" },
];

const AllTrainsPage = () => {
  return (
    <div>
      <h1>All Trains</h1>
      <ul>
        {trains.map((train) => (
          <li key={train.id}>
            <Link to={`/train/${train.id}`}>{train.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTrainsPage;
