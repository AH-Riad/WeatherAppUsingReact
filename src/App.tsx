import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

function App() {
  let handelclick = () => {
    console.log("Button clicked");
  };
  return (
    <>
      <h1>Material Ui Demo</h1>
      <Button variant="contained" onClick={handelclick}>
        CLick me!
      </Button>
      <Alert severity="error">This is an error Alert.</Alert>
    </>
  );
}

export default App;
