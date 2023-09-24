import { Box, Container, Typography } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigation";
import Paper from "@mui/material/Paper";
import ImageCollage from "../components/ImageCollage";
import BasicAccordion from "../components/Accordion";
import BasicModal from "../components/Modal";
function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Palestine{" "}
      </Typography>
      <Box marginTop={3} sx={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://pbs.twimg.com/media/CLA1x2QUAAA4OA7?format=jpg&name=4096x4096"
          alt="jerusalem"
          height={325}
          width={500}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginBottom={2}>
          About Jerusalem
        </Typography>
        <Typography variant="paragraph" component="p" marginBottom={5}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
          expedita architecto ea cum ab placeat provident? Unde perspiciatis sit
          ipsam commodi animi consequatur, rerum reiciendis dolore quibusdam
          consequuntur voluptatem tempore! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Dolor expedita architecto ea cum ab
          placeat provident? Unde perspiciatis sit ipsam commodi animi
          consequatur, rerum reiciendis dolore quibusdam consequuntur voluptatem
          tempore!s
        </Typography>
      </Box>
      <Box marginBottom={15}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <BasicAccordion />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, height: 50 }}
        elevation={3}
      >
        <BottomNavigationAction>
          <BasicModal />{" "}
        </BottomNavigationAction>
      </Paper>
    </Container>
  );
}

export default Tour;
