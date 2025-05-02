import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/Sunny";
// Define the WeatherData type directly in this file
type WeatherData = {
  city: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  feels_like: number;
  weather: string;
};

// Define the props for InfoBox component, which expects a prop called "info" of type WeatherData
type InfoBoxProps = {
  info: WeatherData;
};

function InfoBox({ info }: InfoBoxProps) {
  const Hot_Url =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Cold_Url =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Rain_URl =
    "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="infoBox">
      <div className="CardContainer">
        <Card sx={{ maxWidth: 390 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="220"
              image={
                info.humidity > 80
                  ? Rain_URl
                  : info.temp > 15
                  ? Hot_Url
                  : Cold_Url
              }
              alt="WeatherImg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <b>{info.city} </b>
                {info.humidity > 80 ? (
                  <ThunderstormIcon />
                ) : info.temp > 15 ? (
                  <SunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
                ;
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <>
                  <span style={{ display: "block" }}>
                    <b> Temperature = {info.temp} &deg;C</b>
                  </span>
                  <span style={{ display: "block" }}>
                    <b>Humidity = {info.humidity}%</b>
                  </span>
                  <span style={{ display: "block" }}>
                    <b> Min Temp = {info.temp_min} &deg;C</b>
                  </span>
                  <span style={{ display: "block" }}>
                    <b>Max Temp= {info.temp_max} &deg;C</b>
                  </span>
                  <span style={{ display: "block" }}>
                    <br />
                    <b>
                      Weather can be described as <i>{info.weather}</i> and
                      feels like {info.feels_like} &deg;C
                    </b>
                  </span>
                </>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox;
