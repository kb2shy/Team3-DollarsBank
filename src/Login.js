import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  login: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  title: {
    color: theme.palette.secondary.main,
  },
  input: {
    marginTop: "10px",
  },
  button: {
    width: "40%",
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.dark,
    color: "#fff",
    marginTop: "16px"
  }
}))

const Login = (props) => {

  const classes = useStyles();

  return (
    <Box className={classes.login}>
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
  )
}

export default Login;