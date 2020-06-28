import React, { useState, useEffect } from "react";
import axiox from "axios";
import "./App.css";

function App() {
  const [countryInfo, setCountryInfo] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await axiox.get(
        "https://api.ipgeolocationapi.com/geolocate",
      );
      console.log(data);

      setCountryInfo(data);
    })();
  }, []);

  return (
    <div className="container">
      <div className="countryInfo">
        <p>
          {` You are living in ${countryInfo.name} 😈`}
        </p>
      </div>
    </div>
  );
}

export default App;
