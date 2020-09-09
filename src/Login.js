import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  login: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    // backgroundColor: "aqua",
    position: "relative"
  },
  // title: {
  //   color: theme.palette.secondary.main,
  // },
  button: {
    width: "40%",
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.dark,
    color: "#fff",
    // marginTop: "16px"
  },
  box1: {
    width: "80%",
    height: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    // backgroundColor: "orange",
  },
  box2: {
    width: "80%",
    // backgroundColor: "yellow",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  }
}))

const Login = (props) => {

  const classes = useStyles();

  const handleCreateButton = () => {
    props.clearFields();
    props.setSelection("register");
  }

  return (
    <Box className={classes.login}>
      <Box className={classes.box1}>
        <Typography variant="h5" className={classes.title}>
        Log In
      </Typography>
      <TextField
        required
        id="login-email"
        type="email"
        label="Email Address"
        variant="outlined"
        className={classes.input}
        value={props.userEmail}
        onChange={props.handleOnChange("userEmail")}
      />
      <TextField
        required
        id="login-password"
        type="password"
        label="Password"
        variant="outlined"
        className={classes.input}
        value={props.userPassword}
        onChange={props.handleOnChange("userPassword")}
      />
      <Button variant="contained" className={classes.button}>Log In</Button>
      </Box>
      <Box className={classes.box2}>
      <Typography>Not a registered user? Create an account.</Typography>
      <Button variant="contained" className={classes.button} onClick={handleCreateButton}>Create Account</Button>
      </Box>
      
    </Box>

  )
}

export default Login;