import { Box, Typography } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import "../Styles/Footer.css";
import { styled } from "@mui/material/styles";
import AudioPlayer from "./AudioPlayer";
import { songsdata } from "./audio";

function Footer() {
  const CoverImage = styled("div")({
    width: 100,
    height: 100,
    objectFit: "cover",
    overflow: "hidden",
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.08)",
    marginLeft: "10vw",
    marginTop: "20px",
    "& > img": {
      width: "130%",
    },
  });

  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[0]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  return (
    <>
      <Box className="main" sx={{ display: "flex", flexDirection: "row" }}>
        <CoverImage>
          <img alt="Song Cover" src={currentSong.image} />
        </CoverImage>
        <div className="title" style={{marginTop:"45px"}}>
          <p>{currentSong.title}</p>
        </div>

        <Box className="Player">
          <audio src={currentSong.src} ref={audioElem}></audio>
          <AudioPlayer
            songs={songs}
            setSongs={setSongs}
            isplaying={isplaying}
            setisplaying={setisplaying}
            audioElem={audioElem}
            currentSong={currentSong}
          />
        </Box>
      </Box>
    </>
  );
}

export default Footer;
