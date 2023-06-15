import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleTrainPage = () => {
  const { id } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Fetch train details from the API
    const fetchTrainDetails = async () => {
      try {
        const response = await fetch(`API_ENDPOINT/train/${id}`, {
          headers: {
            Authorization: "Bearer AUTH_TOKEN",
          },
        });
        const data = await response.json();
        setTrain(data.train);
      } catch (error) {
        console.error("Error fetching train details:", error);
      }
    };

    fetchTrainDetails();
  }, [id]);

  if (!train) {
    return <div>Loading train details...</div>;
  }

  return (
    <div>
      <h1>{train.name}</h1>
      <p>Departure: {train.departure}</p>
      <p>Arrival: {train.arrival}</p>
      {/* Display seat availability, prices, delays, etc. */}
    </div>
  );
};

export default SingleTrainPage;
