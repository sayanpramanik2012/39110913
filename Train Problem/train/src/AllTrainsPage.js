import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch train data from the API
    const fetchTrains = async () => {
      try {
        const response = await fetch("API_ENDPOINT/all-trains", {
          headers: {
            Authorization: "Bearer AUTH_TOKEN",
          },
        });
        const data = await response.json();
        setTrains(data.trains);
      } catch (error) {
        console.error("Error fetching train data:", error);
      }
    };

    fetchTrains();
  }, []);

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
