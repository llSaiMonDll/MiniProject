import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Typography, Grid, Button, InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import "../Styles/Login.css";
import Axios from "axios";
// import axios from "axios";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  marginTop: "30px",
};

const StyleBox = {
  width: "60vw",
  height: "70vh",
  bgcolor: "#B8D0D8",
  display: "flex",
  justifyContent: "center",
};

const LoginContentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
};
const textFieldStyled = {
  display: { xs: "flex", sm: "flex", md: "flex" },
  flexDirection: { xs: "column", sm: "column", md: "column" },
  marginBottom: { xs: "40px", sm: "40px", md: "40px" },
  width: { xs: "250px", sm: "350px", md: "450px" },
  height: { xs: "54px", sm: "54px", md: "54px" },
  bgcolor: "white",
};
const ButtonStyle = {
  color: "white",
  backgroundColor: "#E0710A",
  width: "200px",
  height: "50px",
  marginTop: "20px",
  borderRadius: "20px ",
  display: "flex",
  justifyContent: "center",
};

export default function Register() {
  const [agree, setAgree] = useState(false);
  const [username, setUsernameReg] = useState("");
  const [password, setPasswordReg] = useState("");
  const [email, setEmailReg] = useState("");
  
  const register = () => {
    Axios.post("http://localhost:6105/Register", {
      username: username,
      password: password,
      email: email,
    }).then((response) => {
      console.log(response);
    });
  };

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  const btnHandler = () => {
    alert("Register is Sucessful");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ height: "10vh", bgcolor: "#8AB6CF" }}>
            <IconButton
              size="large"
              edge="start"
              color="black"
              sx={{ mr: 1, bgcolor: "white", marginLeft: "30px" }}
            >
              <Link to="/Login">
                <ArrowBackIosIcon />
              </Link>
            </IconButton>
            <Typography sx={{ marginLeft: "auto", marginRight: "auto" }}>
              <h1>MyMondMusic</h1>
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={containerStyle}>
          <Box className="LoginBox" sx={StyleBox}>
            <Grid sx={LoginContentStyle}>
              <Typography>
                <h1>Sign up</h1>
              </Typography>
              <form action="">
                <TextField
                  id="username"
                  label="Username"
                  type="username"
                  variant="outlined"
                  size="medium"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon />
                      </InputAdornment>
                    ),
                  }}
                  autoComplete="disable"
                  sx={textFieldStyled}
                  onChange={(e) => {
                    setUsernameReg(e.target.value);
                  }}
                  required
                />
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  size="medium"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={textFieldStyled}
                  onChange={(e) => {
                    setPasswordReg(e.target.value);
                  }}
                  required
                />

                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  size="medium"
                  type="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={textFieldStyled}
                  onChange={(e) => {
                    setEmailReg(e.target.value);
                  }}
                  required
                />
                {/* Term Condition*/}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "red",
                  }}
                >
                  <input
                    type="checkbox"
                    onChange={checkboxHandler}
                    style={{
                      marginRight: "20px",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  <Typography>
                    <h3>I read and agree to Terms & Condition</h3>
                  </Typography>
                </Box>

                {/*Button*/}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={ButtonStyle}
                    type="submit"
                    disabled={!agree}
                    onClick={() => {
                      window.location.href = "/Login";
                      btnHandler();
                      register();
                      
                    }}
                  >
                    <h3>CREATE ACCOUNT</h3>
                  </Button>
                </Box>
              </form>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
