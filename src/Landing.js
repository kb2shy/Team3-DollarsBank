import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from "@material-ui/core";

import Register from './Register';
import Login from './Login';

const useStyles = makeStyles((theme) => ({
  landing: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/landing.jpg')`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4rem",
  },
  title: {
    color: "#fff"
  },
  reglog: {
    opacity: "0.6",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "50%",
    height: "50%"
  },
  reglog__box: {
    flexDirection: "column",
    alignContent: "center",
    textAlign: "center",
    width: "100%",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%"
  },
  button: {
    color: theme.palette.secondary.dark
  }
}))

const Landing = (props) => {
  const classes = useStyles();
  const [selection, setSelection] = useState("register");

  const displaySelection = () => {
    if (selection === "register") {
      return <Register />
    } else {
      return <Login />;
    }
  }

  console.log(selection);
  return (
    <Box className={classes.landing}>
      <Box className={classes.title}>Welcome to Dollars Bank</Box>
      <Box className={classes.reglog}>
        <Box className={classes.reglog__box}>
          {displaySelection()}
        </Box>
        <Box className={classes.buttonGroup}>
          <Button className={classes.button} onClick={() => setSelection("register")}>Register</Button>
          <Button className={classes.button} onClick={() => setSelection("login")}>Login</Button>
        </Box>
      </Box>
    </Box>
  )

}

export default Landing;