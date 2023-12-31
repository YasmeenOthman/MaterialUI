import SearchAppBar from "../components/AppBar";
import TourCard from "../components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import cities from "../data.json";
import { Typography } from "@mui/material";

function Home() {
  return (
    <div className="App">
      {/* container for centering the element  */}
      <Container sx={{ marginTop: 5, marginBottom: 10 }}>
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={4}>
              {city.tours.map((tour, index) => (
                <TourCard tour={tour} key={index} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
}

export default Home;
