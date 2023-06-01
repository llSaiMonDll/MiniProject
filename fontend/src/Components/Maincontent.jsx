import React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const label = { inputProps: { "aria-label": "Switch demo" } };

function MainContent() {
  const darkmodeStyled ={
    display: 'flex',
    flexDirection:'row',
    marginLeft:'60vw'
  }
  return (
    <>
      <Box className="main-container" marginTop={"100px"} display={"flex"} flexDirection={"column"}>
        <Box sx={{ width: "100%"}}>
          
          
        </Box>
       
          <h2>Popular</h2>
       
        <Box sx={{ width: "100%", display: "flex" }}>
          <Card sx={{ maxWidth: 340, margin:"20px 20px 0px 60px" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://static.naewna.com/uploads/news/gallery/source/774969.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              ลุงตู่อยู่รวมไทยสร้างชาติ
              </Typography>
              <Typography variant="body2" color="text.secondary">
              ลุงตู่อยู่รวมไทยสร้างชาติ
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">play</Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default MainContent;
