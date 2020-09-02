import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from "@material-ui/core";

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
  buttonGroup: {
    opacity: "0.6",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
    backgroundColor: "#fff",
    width: "30%",
    height: "50%"
  },
  button: {
    color: theme.palette.secondary.dark
  }
}))

const Landing = (props) => {
  const classes = useStyles();
  const [selection, setSelection] = useState("register");

  console.log(selection);
  return (
    <Box className={classes.landing}>
      <Box className={classes.title}>Welcome to Dollars Bank</Box>

      <Box className={classes.buttonGroup}>
        <Button className={classes.button} onClick={() => setSelection("register")}>Register</Button>
        <Button className={classes.button} onClick={() => setSelection("login")}>Login</Button>
      </Box>
    </Box>
  )

}

export default Landing;