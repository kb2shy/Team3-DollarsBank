import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from "@material-ui/core";
import axios from "axios";
import { URI } from '../constants';

// components
import Register from './Register';
import Login from './Login';

const useStyles = makeStyles((theme) => ({
  landing: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/bank.jpg')`,
    // height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // top: "74px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    // alignContent: "center",
    // alignItems: "center",
    // fontSize: "1rem",
    textAlign: "center",
    backgroundColor: "lightgray",
    width: "100%",
    height: "100%"
  },
  title: {
    color: "#eee"
  },
  reglog: {
    // opacity: "0.6",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "center",
    backgroundColor: "#eee",
    width: "50%",
    height: "60%",
    margin: "0 auto",
    maxWidth: "500px"

  },
  button: {
    color: theme.palette.secondary.dark
  }
}))

const Landing = ({ loginWithEmailPW, createAccount, displayAlert }) => {

  const classes = useStyles();

  const [selection, setSelection] = useState("login");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");

  const handleOnChange = (prop) => (e) => {
    switch (prop) {
      case "userEmail":
        return setUserEmail(e.target.value);
      case "userPassword":
        return setUserPassword(e.target.value);
      case "checkPassword":
        return setCheckPassword(e.target.value);
      case "userFirstName":
        return setUserFirstName(e.target.value);
      case "userLastName":
        return setUserLastName(e.target.value);
      default:
        return
    }
  };

  const clearFields = () => {
    setUserEmail("");
    setUserPassword("");
    setCheckPassword("");
    setUserFirstName("");
    setUserLastName("");
  }

  const displaySelection = () => {
    switch(selection) {
      case "login":
        return <Login
        userEmail={userEmail}
        userPassword={userPassword}
        handleOnChange={handleOnChange} 
        setSelection={setSelection}
        clearFields={clearFields} 
        handleLoginSubmit={handleLoginSubmit} />;
      case "register":
        return <Register
          handleOnChange={handleOnChange} 
          setSelection={setSelection}
          clearFields={clearFields} 
          handleCreateAccountSubmit={handleCreateAccountSubmit}
          userFirstName={userFirstName}
          userLastName={userLastName}
          userEmail={userEmail}
          userPassword={userPassword}
          checkPassword={checkPassword} />
      default:
        return <Login
        userEmail={userEmail}
        userPassword={userPassword}
        handleOnChange={handleOnChange} />;
    }
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    
    const loginUser = {
      email: userEmail,
      password: userPassword
    }
    
    loginWithEmailPW(loginUser);
    return clearFields();
  }

  const handleCreateAccountSubmit = (e) => {
    e.preventDefault();

    if (userFirstName.length === 0 || 
        userLastName.length === 0 || 
        userEmail.length === 0 || 
        userPassword.length === 0 || 
        checkPassword.length === 0) {
      return displayAlert({ severity: "warning", title: "Missing information", msg: "Please fill out all fields."})
    }

    if (userPassword !== checkPassword) {
      console.log("passwords don't match");
      setUserPassword("");
      setCheckPassword("");
      return displayAlert({ severity: "error", title: "Passwords error", msg: "Passwords do not match."});
    }

    const newUser = {
      firstName: userFirstName,
      lastName: userLastName,
      email: userEmail,
      password: userPassword
    }

    try {     
      axios.post(URI + "/register", newUser)
        .then(result => console.log(result.data))
        .catch(error => console.log(error))
    } catch (error) {
      
    }
  }

  return (
    <Box className={classes.landing}>
      <Typography className={classes.title} variant="h2">Welcome to Dollars Bank</Typography>
      <Box className={classes.reglog}>
        {displaySelection()}
      </Box>
    </Box>
  )

}

export default Landing;