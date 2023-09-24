import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";

// customization of a theme
const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        // if the variant equal to body2 add this style to it
        { props: { variant: "body2" }, style: { fontSize: 14 } },
        { props: { variant: "body3" }, style: { fontSize: 12 } },
      ],
    },
  },
});
function TourCard({ tour }) {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img className="img" src={tour.image} />
          {/* box like a div we use to give some padding */}
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {tour.name}
            </Typography>
            {/* sx to give a customized style */}
            {/* time box */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime
                sx={{
                  width: 14,
                }}
              ></AccessTime>
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.duration}
              </Typography>
            </Box>
            {/* rating box */}
            <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
              <Rating
                name="read-only"
                value={3.5}
                precision={0.5}
                size="small"
                readOnly
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant="body3" component="p" marginLeft={1.5}>
                ({tour.numberOfReviews})
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginTop={0}>
                {tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}

export default TourCard;
