import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from "@material-ui/core";

// components
import Register from './Register';
import Login from './Login';

const useStyles = makeStyles((theme) => ({
  landing: {
    // backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/landing.jpg')`,
    // height: "100vh",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
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
    color: "black"
  },
  reglog: {
    // opacity: "0.6",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "center",
    backgroundColor: "orange",
    width: "50%",
    height: "60%",
    margin: "0 auto",
    maxWidth: "500px"

  },
  button: {
    color: theme.palette.secondary.dark
  }
}))

const Landing = (props) => {
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
        handleOnChange={handleOnChange} 
        setSelection={setSelection}
        clearFields={clearFields} />;
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

  const handleCreateAccountSubmit = (e) => {
    e.preventDefault();

    console.log(`userPassword: ${userPassword}, checkPassword: ${checkPassword}`);
    if (userFirstName.length === 0 || 
        userLastName.length === 0 || 
        userEmail.length === 0 || 
        userPassword.length === 0 || 
        checkPassword.length === 0) {
      return props.displayAlert({ severity: "warning", title: "Missing information", msg: "Please fill out all fields."})
    }

    if (userPassword !== checkPassword) {
      console.log("passwords don't match");
      setUserPassword("");
      setCheckPassword("");
      return props.displayAlert({ severity: "error", title: "Passwords error", msg: "Passwords do not match."});
    }

    // const user = {
    //   firstName: userFirstName,
    //   lastName: userLastName,
    //   email: userEmail,
    //   password: userPassword,
    // }
  }

  return (
    <Box className={classes.landing}>
      <Typography variant="h1">Welcome to Dollars Bank</Typography>
      <Box className={classes.reglog}>
        {displaySelection()}
      </Box>
    </Box>
  )

}

export default Landing;