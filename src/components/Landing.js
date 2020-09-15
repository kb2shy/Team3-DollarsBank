import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from "@material-ui/core";

// components
import Login from './Login';
import Register from './Register';
import Register2 from './Register2';

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

const Landing = ({ loginWithEmailPW, createUser, createAccount, displayAlert }) => {

  const classes = useStyles();

  const [selection, setSelection] = useState("home");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [initialTransaction, setInitialTransaction] = useState("");

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
      case "accountType":
        return setAccountType(e.target.value);
      case "initialTransaction":
        return setInitialTransaction(e.target.value);
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
    setAccountType("");
    setInitialTransaction(null)
  }

  const displaySelection = () => {
    switch(selection) {
      case "home":
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
          handleCreateUserSubmit={handleCreateUserSubmit}
          userFirstName={userFirstName}
          userLastName={userLastName}
          userEmail={userEmail}
          userPassword={userPassword}
          checkPassword={checkPassword} />
      case "register2":
        return <Register2 
          handleOnChange={handleOnChange}
          setSelection={setSelection}
          clearFields={clearFields}
          accountType={accountType}
          initialTransaction={initialTransaction}
          handleCreateAccountSubmit={handleCreateAccountSubmit} />
      default:
        setSelection("home");
        return;
    }
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    const loginUser = {
      email: userEmail,
      password: userPassword
    }
    
    loginWithEmailPW(loginUser);
    return clearFields();
  }

  const handleCreateUserSubmit = (e) => {
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

    return createUser(newUser);
  }

  const handleCreateAccountSubmit = (e) => {
    e.preventDefault();

    const newAccount = {
      accountType,
      initialTransaction
    }

    createAccount(newAccount);
    return clearFields();
  }

  return (
    <Box className={classes.landing}>
      <Typography className={classes.title} variant="h2">Welcome to Dollars Bank</Typography>
      <Box className={classes.reglog}>
        {displaySelection()}
        {/* <Register2 /> */}
      </Box>
    </Box>
  )

}

export default Landing;