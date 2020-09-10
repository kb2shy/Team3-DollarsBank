import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  userProfile: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  title: {
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-around",
    // alignItems: "center",
    // width: "80%",
    height: "80%",
    backgroundColor: "white",
    margin: "10px 10px"
  },
  input: {
    width: "80%",
    margin: "20px auto"
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    // justifyItems: "center",
    width: "100%",
    marginTop: "auto",

  },
  button: {
    width: "80%",
    margin: "10px auto",
    color: "white",
    fontSize: "1rem",
  },
  button2: {
    color: "white",
    fontSize: "1rem",
    width: "80%",
    margin: "10px auto",
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    }
  }

}))

const UserProfile = ({ user }) => {

  const classes = useStyles();

  const [userValues, setUserValues] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: ""
  });

  const handleSaveButton = () => {

  }

  const handleDeleteButton = () => {

  }

  const isValidPassword = () => {
    return false;
  }

  console.log(user);

  return (
    <Box className={classes.userProfile}>
      <Typography variant="h4" className={classes.title}>
        {`Chhaian Pin's Profile Details`}
      </Typography>
      <Box className={classes.form}>
        <TextField
          required
          id="register-firstName"
          type="text"
          label="First Name"
          variant="outlined"
          className={classes.input}
          onChange={e => setUserValues({ firstName: e.target.value })}
          value={userValues.firstName}
          error={isValidPassword()}
          helperText={"first name is too short"}
        />
        <TextField
          required
          id="register-lastName"
          type="text"
          label="Last Name"
          variant="outlined"
          className={classes.input}
          onChange={e => setUserValues({ lastName: e.target.value })}
          value={userValues.lastName}
        />
        <TextField
          required
          id="register-email"
          type="email"
          label="Email Address"
          variant="outlined"
          className={classes.input}
          onChange={e => setUserValues({ email: e.target.value })}
          value={userValues.email}
        />
        <TextField
          required
          id="register-userPassword"
          type="password"
          label="Password"
          variant="outlined"
          className={classes.input}
          onChange={e => setUserValues({ password: e.target.value })}
          value={userValues.password}

        />
        <Box className={classes.buttonGroup}>
          <Button 
            color="primary"
            variant="contained" 
            className={classes.button} 
            onClick={(e) => handleSaveButton(e)}
          >
            Save
          </Button>
          <Button 
            variant="contained" 
            className={classes.button2} 
            onClick={(e) => handleDeleteButton(e)}
          >
            Close Account
          </Button>
        </Box>
      </Box>
    </Box>
    )
}

export default UserProfile;