import React from "react";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import '../Styles/AudioPlayer.css'
function AudioPlayer({ audioElem, isplaying, setisplaying,currentSong }) {
  const PlayPause = () => {
    setisplaying(!isplaying);
  };
  return (
    <div className="player-container">
      <div className="navigation">
        <div className="navigation-wrapper">
          <div className="seek-bar" style={{ width: "50%" }}></div>
        </div>
      </div>
      <div className="controls">
        <SkipPreviousIcon className="btn-action" style={{fontSize:"40px"}} />
        {isplaying ? (
          <PauseIcon className="btn-action-pp" onClick={PlayPause}  style={{fontSize:"40px"}} />
        ) : (
          <PlayArrowIcon className="btn-action-pp" onClick={PlayPause}  style={{fontSize:"40px"}} />
        )}
        <SkipNextIcon className="btn-action" style={{fontSize:"40px"}}/>
      </div>
    </div>
  );
}

export default AudioPlayer;
