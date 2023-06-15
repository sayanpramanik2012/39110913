import React from "react";
import { useParams } from "react-router-dom";

const trains = [
  { id: 1, name: "Train 1", departure: "9:00 AM", arrival: "11:00 AM" },
  { id: 2, name: "Train 2", departure: "10:30 AM", arrival: "1:00 PM" },
  { id: 3, name: "Train 3", departure: "1:30 PM", arrival: "4:00 PM" },
];

const SingleTrainPage = () => {
  const { id } = useParams();
  const train = trains.find((train) => train.id === parseInt(id));

  if (!train) {
    return <div>Train not found</div>;
  }

  return (
    <div>
      <h1>{train.name}</h1>
      <p>Departure: {train.departure}</p>
      <p>Arrival: {train.arrival}</p>
    </div>
  );
};

export default SingleTrainPage;
