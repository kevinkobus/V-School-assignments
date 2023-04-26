import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [leagueTable, setLeagueTable] = useState([]);

  const eplTable = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/leagues",
    params: { id: "39" },
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(eplTable)
      .then((res) => {
        setLeagueTable(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(leagueTable);

  return (
    <>
      <div>
        <h1>API Practice</h1>
      </div>
    </>
  );
}

export default App;
