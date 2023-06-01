import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Typography, Grid, Button, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import "../Styles/Login.css";

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
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [LoginStatus , setLoginStatus] = useState("");
  

  const login = () => {
    Axios.post("http://localhost:6105/Login", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);

      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0]);
        window.location.href = "/Home";
      }
    });
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
              <Link to="/Home">
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
                <h1>Sign in</h1>
              </Typography>
              <form onSubmit={(e) => e.preventDefault()} >
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  size="medium"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  autoComplete="disable"
                  placeholder="email"
                  sx={textFieldStyled}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  size="medium"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                  type="password"
                  sx={textFieldStyled}
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                {/* Button */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={ButtonStyle}
                    onClick={() => {
                      login();
                    }}
                    type="submit"
                  >
                    Login
                  </Button>
                  <Typography sx={{ marginTop: "20px" }}>
                    <h3>
                      Join our family is here, please{" "}
                      <Link className="SignUpClick" to="/Register">
                        Sign up
                      </Link>
                    </h3>
                  </Typography>
                </Box>
                <p style={{color:'red',fontSize:'16px',marginLeft:"50px"}}>{LoginStatus} </p>
              </form>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
