import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./InfoBox.css";

function InfoBox() {
  const Init_Url =
    "https://images.unsplash.com/photo-1706730511764-23a0ff2eecbf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let info = {
    city: "Rangpur",
    temp: 28.4,
    temp_min: 26.65,
    temp_max: 30.87,
    humidity: 87,
    feels_like: 29.5,
    weather: "Haze",
  };
  return (
    <div className="infoBox">
      <h1>
        WeatherInfo- <i>{info.weather}</i>
      </h1>
      <div className="CardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={Init_Url}
              alt="WeatherImg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <>
                  <span style={{ display: "block" }}>
                    Temperature = {info.temp} &deg;C
                  </span>
                  <span style={{ display: "block" }}>
                    Humidity = {info.humidity}
                  </span>
                  <span style={{ display: "block" }}>
                    Min Temp = {info.temp_min} &deg;C
                  </span>
                  <span style={{ display: "block" }}>
                    Max Temp= {info.temp_max} &deg;C
                  </span>
                  <span style={{ display: "block" }}>
                    <br />
                    Weather can be described as <i>{info.weather}</i> and feels
                    like {info.feels_like} &deg;C
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
