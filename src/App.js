import React, { useState, useEffect } from "react";
import axiox from "axios";
import "./App.css";

function App() {
  const [countryInfo, setCountryInfo] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await axiox.get(
        "http://api.ipstack.com/check?access_key=YOUR_API_ACCESS_KEY",
      );
      setCountryInfo(data);
      setLocation(data.location);
    })();
  }, []);

  return (
    <div className="container">
      <div className="countryInfo">
        <p>
          {` You are living in ${countryInfo.country_name} ${location.country_flag_emoji}`}
        </p>
      </div>
    </div>
  );
}

export default App;
