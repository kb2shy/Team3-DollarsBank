import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Typography, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  register: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  box1: {
    width: "80%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  box2: {
    width: "80%",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    width: "40%",
    backgroundColor: theme.palette.secondary.dark,
    color: "#fff",
  }
}))

const Register = (props) => {

  const { userFirstName, userLastName, userEmail, userPassword, checkPassword, handleOnChange, handleCreateAccountSubmit } = props;
  const classes = useStyles();

  const handleLoginButton = () => {
    props.clearFields();
    props.setSelection("login");
  }
  
  return (
    <Box className={classes.register}>
      <Box className={classes.box1}>
        <Typography variant="h5" className={classes.title}>
          Register
        </Typography>
        <TextField
          required
          id="register-firstName"
          type="text"
          label="First Name"
          variant="outlined"
          className={classes.input}
          onChange={handleOnChange("userFirstName")}
          value={userFirstName}
        />
        <TextField
          required
          id="register-lastName"
          type="text"
          label="Last Name"
          variant="outlined"
          className={classes.input}
          onChange={handleOnChange("userLastName")}
          value={userLastName}
        />
        <TextField
          required
          id="register-email"
          type="email"
          label="Email Address"
          variant="outlined"
          className={classes.input}
          onChange={handleOnChange("userEmail")}
          value={userEmail}
        />
        <TextField
          required
          id="register-userPassword"
          type="password"
          label="Password"
          variant="outlined"
          className={classes.input}
          onChange={handleOnChange("userPassword")}
          value={userPassword}

        />
        <TextField
          required
          id="register-checkedPassword"
          type="password"
          label="Verify Password"
          variant="outlined"
          className={classes.input}
          onChange={handleOnChange("checkPassword")}
          value={checkPassword}
        />
        <Button variant="contained" className={classes.button} onClick={(e) => handleCreateAccountSubmit(e)}>Create Account</Button>
      </Box>

      <Box className={classes.box2}>
        <Typography>Already have an account?</Typography>
        <Button variant="contained" className={classes.button} onClick={handleLoginButton}>Log In</Button>
      </Box>
    </Box>
  )
}

export default Register;