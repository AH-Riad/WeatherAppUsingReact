import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

// Define the WeatherData type again for consistency
type WeatherData = {
  city: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  feels_like: number;
  weather: string;
};

export default function WeatherApp() {
  // Define the initial state for weather info
  const [weatherInfo, setWeatherInfo] = useState<WeatherData>({
    city: "WonderLand",
    temp: 28.4,
    temp_min: 26.65,
    temp_max: 30.87,
    humidity: 47,
    feels_like: 29.5,
    weather: "Sunny",
  });

  // Function to update weather info
  let updateInfo = (newInfo: WeatherData) => {
    setWeatherInfo(newInfo); // Update state with new weather data
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App By Riad</h1>
      <SearchBox updateInfo={updateInfo} /> {/* Pass updateInfo to SearchBox */}
      <InfoBox info={weatherInfo} /> {/* Pass weatherInfo to InfoBox */}
    </div>
  );
}
