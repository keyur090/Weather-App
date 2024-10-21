import React from "react";
import Speedometer from "react-d3-speedometer"; // Import Speedometer from react-d3-speedometer
import "./Compass.css";

const Compass = ({ weather }) => {
  const [localSpeed, setLocalSpeed] = React.useState(0);

  React.useEffect(() => {
    if (weather && weather.speed) {
      setLocalSpeed(weather.speed);
    }
  }, [weather]);

  return (
    <div className="compass-container">
      <div className="speed">
        <Speedometer
        height={130}
        width={200}
          minValue={0}
          maxValue={10} // Adjust the max value based on expected speed
          value={localSpeed}
          needleColor="#000" // Color of the needle
          startColor="#6e6e6e" // Color at the start of the speed range
          endColor="#ff0000" // Color at the end of the speed range
          segments={5} // Number of segments in the speedometer
          textColor="rgba(255, 255, 255, 0.813)" // Color of the text
          ringWidth={30} // Width of the speedometer ring
          needleHeight={30} // Height of the needle
          style={{ width: "100px" }} // Width of the speedometer
        />
      </div>
    </div>
  );
};

export default Compass;
