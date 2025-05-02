import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

// Define the shape of the weather data for type safety
type WeatherData = {
  city: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  feels_like: number;
  weather: string;
};

// Define the props for SearchBox component
type SearchBoxProps = {
  updateInfo: (data: WeatherData) => void; // Function that takes weather data and doesn't return anything
};

function SearchBox({ updateInfo }: SearchBoxProps) {
  let [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "7bbf9b395fe9adf2ba8ea61127e5d47d";

  const getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result: WeatherData = {
      // Now we make sure the result matches the WeatherData type
      city: city,
      temp: jsonResponse.main.temp,
      temp_min: jsonResponse.main.temp_min,
      temp_max: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feels_like: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result; // Call updateInfo function passed as prop to update the weather data
  };

  let handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(city);
    setCity(""); // Clear the input field after submitting
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchBox;
