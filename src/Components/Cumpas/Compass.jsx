import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import './Compass.css';

const Compass = () => {
  const [direction, setDirection] = React.useState(0); // Direction in degrees
  // const [speed, setSpeed] = React.useState(0); // Speed in km/h

  React.useEffect(() => {
    const updateCompass = () => {
      const newDirection = Math.floor(Math.random() * 360); // Random direction
      // const newSpeed = Math.floor(Math.random() * 100); // Random speed

      setDirection(newDirection);
      // setSpeed(newSpeed);
    };

    const intervalId = setInterval(updateCompass, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  const props = useSpring({ transform: `rotate(${direction}deg)` });

  return (
    <div className="compass-container">
      <div className="compass">
        <animated.div
          className="needle"
          style={props}
        >
          <FaArrowUp />
        </animated.div>
      </div>
      {/* <div className="speed">
        <h2>Speed</h2>
        <p>{speed} km/h</p>
      </div> */}
    </div>
  );
};

export default Compass;
