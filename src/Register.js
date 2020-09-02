import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Typography, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  register: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    color: theme.palette.secondary.main,
  },
  input: {
    marginTop: "10px",
    padding: "10px"
  },
  button: {
    width: "40%",
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.dark,
    color: "#fff"
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
        id="filled-required"
        label="Email Address"
        variant="outlined"
        className={classes.input}
      />
      <TextField
        required
        id="filled-required"
        label="Password"
        variant="outlined"
        className={classes.input}
      />
      <TextField
        required
        id="filled-required"
        label="Verify Password"
        variant="outlined"
        className={classes.input}
      />
      <Button variant="contained" className={classes.button}>Create Account</Button>
    </Box>
  )
}

export default Register;