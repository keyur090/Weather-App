import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import "./index.css";

const Index = ({ weather, items }) => {
  const { name, country, formattedLocalTime, temp, details, icon } = weather;

  // Function to calculate the slider width based on the temperature
  const calculateSliderWidth = (tempValue) => {
    // Assuming you want the slider width to reflect the temp value in some proportion
    // Adjust the multiplier as needed to fit your design
    const maxTemp = 100; // Maximum temp for slider calculation (adjust as necessary)
    const minTemp = -20; // Minimum temp for slider calculation (adjust as necessary)
    const width = ((tempValue - minTemp) / (maxTemp - minTemp)) * 100; // Percentage of slider width
    return `${width}%`;
  };

  return (
    <div className="left-side-container">
      <div className="top-container">
        <div className="top">
          <p className="text-sm flex justify-between">{formattedLocalTime}</p>
        </div>
        <p className="city-name">{`${name}, ${country}`}</p>
        <div className="center">
          <span className="temp">{temp}°</span>
        </div>
        <div className="bottom">
          <ThunderstormOutlinedIcon />
          <p className="weather">{details}</p>
        </div>
      </div>
      <div className="bottom-container">
        <div className="top">
          <p className="heading">5-Day Forecast</p>
        </div>
        <div className="bottom-containerr">
          {items.map((item, index) => (
            <div className="bottomm-con" key={index}>
              <p>{item.title}</p>
              <div className="slider-track">
                <div
                  className="slider-range"
                  style={{ width: calculateSliderWidth(item.temp) }}
                ></div>
              </div>
              <p>{item.temp}°</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
