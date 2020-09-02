import React from 'react';
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
    padding: "10px"
  },
  button: {
    width: "40%",
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.dark,
    color: "#fff"
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
      <Button variant="contained" className={classes.button}>Log In</Button>
    </Box>
  )
}

export default Login;