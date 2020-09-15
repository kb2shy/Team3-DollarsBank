import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { URI, USER } from './constants';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Snackbar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// components
import AccountDetails from './components/AccountDetails';
import Footer from './components/Footer';
import Landing from './components/Landing';
import LoadingBank from './components/LoadingBank';
import MenuBar from './components/MenuBar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar,
  displayBox: {
    height: "calc(100vh - 90px)"
  },

}))

function App() {
  const classes = useStyles();

  const [user, setUser] = useState(USER);
  const [openSnack, setOpenSnack] = useState(false);
  const [alert, setAlert] = useState({});
  const [displayState, setDisplayState] = useState("loggedIn");

  useEffect(() => {
    axios.post(URI + "/login", USER)
      .then(result => {
        setDisplayState("loggedIn");
        setUser(result.data);
      })
  }, [])

  const loginWithEmailPW = (login) => {
    // console.log("inside loginWithEmailPW", login);
    // POST API to log in user
    try {
      axios.post(URI + "/login", login)
      .then(result => {
        setDisplayState("loading");
        setUser(result.data);
        setTimeout(() => {
          setDisplayState("loggedIn")
        }, 3000)
      })
      .catch(error => {
        console.log(error)

        // set up something to notify user of error
      })
    } catch (error) {
      
    }
  }

  const createUser = (data) => {
    // POST API to create User
    try {
      axios.post(`${URI}/register`, data)
      .then(result => {
        setUser(result.data);
      })
      .catch(error => console.log(error))      
    } catch (error) {

    }
  }

  const createAccount = (data) => {
    // object to create account
    const obj = {
      userId: user.userId,
      accountType: data.accountType,
      balance: data.initialTransaction
    }

    // call POST API to create Account
    try {
      axios.post(`${URI}/account`, obj)
        .then(result => {
          if (result.status === 201) {
            setDisplayState("loading");
            setTimeout(() => {
              setDisplayState("loggedIn");
            }, 3000);
          }
        })
        .catch(error => console.log(error))
    } catch (error) {

    }
  }

  const displayAlert = (alert) => {
    setOpenSnack(true);
    setAlert(alert);
  }

  const handleSnackClose = () => {
    setOpenSnack(false);
    setAlert({});
  }

  const display = () => {
    switch(displayState) {
      case "loading":
        return <LoadingBank />;
      case "loggedIn":
        return <AccountDetails user={user}/>;
      default: 
        return <Landing 
          loginWithEmailPW={loginWithEmailPW} 
          displayAlert={displayAlert} 
          createUser={createUser}
          createAccount={createAccount} />; 
    }
  } 

  return (
    <Box className={classes.root}>
      <MenuBar user={user} setDisplayState={setDisplayState} setUser={setUser}/>
      <div className={classes.toolbar} />
      <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleSnackClose}>
        <Alert 
          severity={alert.severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => handleSnackClose()}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          } >
          <AlertTitle 
            onClose={handleSnackClose}
          >{alert.title}</AlertTitle>
          {alert.msg}
        </Alert>
      </Snackbar>
      <Box className={classes.displayBox}>
        {display()}
        {/* <AccountDetails user={user}/> */}
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
