import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Typography, Input, TextField, FormControl, InputLabel, OutlinedInput, TextareaAutosize } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
  register: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    color: theme.palette.secondary.main,
  },
  inputlabel: {
    marginLeft: "10%"
  },
  input: {
    marginTop: "16px",
  },
  button: {
    width: "40%",
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.dark,
    color: "#fff",
    marginTop: "16px"
  }
}))

const Register = (props) => {

  const classes = useStyles();

  return (
    <Box className={classes.register}>
      <Typography variant="h5" className={classes.title}>
        Register
      </Typography>
      <TextField
        required
        id="register-email"
        type="email"
        label="Email Address"
        variant="outlined"
        className={classes.input}
        onChange={props.handleOnChange("userEmail")}
      />
      <TextField
        required
        id="register-userPassword"
        type="password"
        label="Password"
        variant="outlined"
        className={classes.input}
        onChange={props.handleOnChange("userPassword")}
      />
      <TextField
        required
        id="register-checkedPassword"
        type="password"
        label="Verify Password"
        variant="outlined"
        className={classes.input}
        onChange={props.handleOnChange("checkPassword")}
      />
      <Button variant="contained" className={classes.button}>Create Account</Button>
    </Box>
  )
}

export default Register;