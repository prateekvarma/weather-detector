import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    //below, If lat > 0 then we are in the NORTHERN hemisphere, therefore it's SUMMER else it's WINTER
    return lat > 0 ? "summer" : "winter";
  }
  //below, this is for months other than >2 && <9
  else {
    //below if lat > 0 we are in the NORTHERN hemisphere
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const icon = season === "winter" ? "snowflake" : "sun";

  return (
    <div>
      <i className={`massive ${icon} icon`}></i>
      <h1>Current season for your location is : {season}</h1>
      <i className={`massive ${icon} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
