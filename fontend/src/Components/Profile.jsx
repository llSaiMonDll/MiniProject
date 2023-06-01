import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Typography, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const ButtonStyle = {
  color: "white",
  backgroundColor: "red",
  width: "200px",
  height: "50px",
  marginTop: "20px",
  borderRadius: "20px ",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  marginLeft: "auto",
  marginRight: "auto",
};
function Profile() {
  const [Bio, setBio] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const postBio = () => {
    axios
      .post("http://localhost:6105/getBio", {
        BIO_content: Bio,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const deletePost = () => {
    axios
      .delete("http://localhost:6105/deletePost")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:6105/getBio")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const boxStyle = {
    bgcolor: "white",
    width: "500px",
    height: "500px",
    overflow: "hidden",
    borderRadius: "10px",
  };
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
          <h1>MyMondMusic</h1>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            bgcolor: "#C3DDEC",
            width: "100vw",
            height: "30vw",
            marginTop: "14vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <Button
              onClick={handleOpen}
              sx={{ bgcolor: "#FF8412", color: "white" }}
            >
              EDIT YOUR BIO
            </Button>
            <Button
              onClick={() => {
                deletePost();
                window.location.reload();
              }}
              sx={{ bgcolor: "red", color: "white" }}
            >
              DELETE
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <form onSubmit={(e) => e.preventDefault()}>
                  {" "}
                  <input
                    type="text"
                    placeholder="Input your mood"
                    onChange={(e) => {
                      setBio(e.target.value);
                    }}
                    style={{
                      fontSize: "20px",
                      margin: "20px",
                      textAlign: "center",
                    }}
                  />{" "}
                </form>
                <Button
                  style={{
                    backgroundColor: "#1DA1EF",
                    marginBottom: "10px",
                    width: "6vw",
                  }}
                  onClick={() => {
                    postBio();
                    window.location.reload();
                  }}
                >
                  EDIT
                </Button>
              </Box>
            </Modal>
          </div>
          <Box sx={boxStyle}>
            {data.map((BIO) => {
              return (
                <>
                  <p style={{ fontSize: "30px" }}>{BIO.BIO_content}</p>
                </>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Button sx={ButtonStyle} href="/Login">LOGOUT</Button>
    </Box>
  );
}

export default Profile;
