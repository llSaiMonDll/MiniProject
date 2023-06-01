import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Box className="sidebar" flex={1} sx={{display:{md:"flex",sm:"none",xs:"none"}}}>
        <Sidebar />
      </Box>
      <Box className="header"display={"flex"} flex={4} flexDirection={"column"}>
        <Box>
          <Header />
        </Box>
        <Box className="main-content" sx={{height:"80vh"}}>
          <MainContent />
        </Box >
        <Box className="footer" >
          <Footer/>
        </Box>
      </Box>
    </>
  );
}

export default Home;
