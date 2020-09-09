import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from "@material-ui/core";

import Register from './Register';
import Login from './Login';

const useStyles = makeStyles((theme) => ({
  landing: {
    // backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/landing.jpg')`,
    // top: "74px",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: "4rem",
  },
  title: {
    color: "black"
  },
  reglog: {
    // opacity: "0.6",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "center",
    // backgroundColor: "#fff",
    width: "50%",
    height: "50%",
  },
  button: {
    color: theme.palette.secondary.dark
  }
}))

const Landing = (props) => {
  const classes = useStyles();
  const [selection, setSelection] = useState("register");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const handleOnChange = (prop) => (e) => {
    switch (prop) {
      case "userEmail":
        return setUserEmail(e.target.value);
      case "userPassword":
        return setUserPassword(e.target.value);
      case "checkPassword":
        return setCheckPassword(e.target.value);
      default:
        return
    }
  };

  const clearFields = () => {
    setUserEmail("");
    setUserPassword("");
    setCheckPassword("");
  }

  const displaySelection = () => {
    switch(selection) {
      case "login":
        return <Login
        userEmail={userEmail}
        userPassword={userPassword}
        handleOnChange={handleOnChange} 
        setSelection={setSelection}
        clearFields={clearFields} />;
      case "register":
        return <Register
          userEmail={userEmail}
          userPassword={userPassword}
          checkPassword={checkPassword}
          handleOnChange={handleOnChange} 
          setSelection={setSelection}
          clearFields={clearFields} />
      default:
        return <Login
        userEmail={userEmail}
        userPassword={userPassword}
        handleOnChange={handleOnChange} />;
    }
  }

  return (
    <Box className={classes.landing}>
      <Box className={classes.title}>Welcome to Dollars Bank</Box>
      <Box className={classes.reglog}>
        {displaySelection()}
        {/* <Box className={classes.buttonGroup}> */}
          {/* <Button className={classes.button} onClick={() => {clearFields(); setSelection("register")}}>Register</Button>
          <Button className={classes.button} onClick={() => {clearFields(); setSelection("login")}}>Login</Button> */}
        {/* </Box> */}
      </Box>
    </Box>
  )

}

export default Landing;