import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
function SearchBox() {
  return (
    <div className="search-box">
      <h3>Search for the weather</h3>
      <form>
        <TextField id="city" label="City Name" variant="outlined" required />
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchBox;
