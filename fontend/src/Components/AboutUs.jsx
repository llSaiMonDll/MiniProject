import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const StyleBox = {
  width: "100%",
  height: "60vh",
  bgcolor: "#C3DDEC",
  display: "flex",
  flexGrow: 1,
};
const TypographyBox = {
  flex: "70%",
  textAlign: "center",
  fontSize: "20px",
  padding: "30px",
};
const ImageBox = {
  flex: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function AboutUs() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ height: "10vh", bgcolor: "#8AB6CF" }}>
          <IconButton
            size="large"
            edge="start"
            color="black"
            sx={{ mr: 1, bgcolor: "white", marginLeft: "30px" }}
          >
            <Link to="/Home">
              <ArrowBackIosIcon />
            </Link>
          </IconButton>
          <Typography sx={{ marginLeft: "auto", marginRight: "auto" }}>
            <h1>MyMondMusic</h1>
          </Typography>
        </Toolbar>
      </AppBar>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <h1>ABOUT US</h1>
            <Typography component="div" variant="h5">
              <p>
                We are mymondmusic, a small company that wants to take your
                music experience to the next level. We're very happy that you
                guys use our streaming service and hope we can give you a
                different experience with mymondmusic.
              </p>
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: "800px" }}
          image="https://png.pngtree.com/background/20211217/original/pngtree-note-music-logo-watercolor-background-picture-image_1589075.jpg"
          alt="Live from space album cover"
        />
      </Card>
      <Grid className="Footer-About" textAlign={"center"} margin={"50px"}>
        <h1>Contact</h1>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Link
            to="https://www.facebook.com/profile.php?id=100012500596573"
            className="fb-btn"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
              alt="facebook"
              width={"80px"}
            />
          </Link>

          <Link
            to="https://www.instagram.com/para_seltamond/"
            className="ig-btn"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
              alt="instagram"
              width={"80px"}
            />
          </Link>
        </Box>
      </Grid>
      {/* <Box sx={StyleBox}>
        <Box sx={TypographyBox}>
          <Typography fontSize={"20px"}>
            <h1>ABOUT US</h1>
            <p>
              We are mymondmusic, a small company that wants to take your music
              experience to the next level. We're very happy that you guys use
              our streaming service and hope we can give you a different
              experience with mymondmusic.
            </p>
          </Typography>
        </Box>
        <Box sx={ImageBox}>
          <img
            src="https://png.pngtree.com/background/20211217/original/pngtree-note-music-logo-watercolor-background-picture-image_1589075.jpg"
            alt=""
            width={"100%"}
          />
        </Box>
      </Box>
      <Grid className="Footer-About" textAlign={"center"} margin={"50px"}>
        <h1>Contact</h1>
        <Box sx={{display:"flex",justifyContent:"center"}}>
          <Link
            to="https://www.facebook.com/profile.php?id=100012500596573"
            className="fb-btn"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
              alt="facebook"
              width={"80px"}
            />
          </Link>

          <Link
            to="https://www.instagram.com/para_seltamond/"
            className="ig-btn"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
              alt="instagram"
              width={"80px"}
            />
          </Link>
        </Box>
      </Grid> */}
    </Box>
  );
}

export default AboutUs;
