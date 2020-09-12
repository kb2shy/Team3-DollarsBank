import React, { useState } from 'react';
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

// Insert URI path for server here
// eg http://localhost:8080

function App() {
  const classes = useStyles();

  const [user, setUser] = useState(USER);
  const [accountDetails, setAccountDetails] = useState({});
  const [openSnack, setOpenSnack] = useState(false);
  const [alert, setAlert] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [displayState, setDisplayState] = useState("home");

  const loginWithEmailPW = (login) => {
    
    if (login.email === USER.email && login.password === USER.password) {
      
      setDisplayState("loading");
      setTimeout(() => {
        setDisplayState("loggedIn");
        return setUser(USER);
      }, 3000)
    }

    /* axios.post(URI + "/user", login)
      .then(result => {

        const user = {

        }
        // console.log(result.data)

        // setUser here
        setUser(user)
      })
      .catch(error => {
        console.log(error)

        // set up something to notify user of error
      }) */
  }

  const createAccount = (data) => {

    // when routes are set up, need to test this
    try {
      axios.post(`${URI}/register`, data)
      .then(result => console.log(result.data))
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
        return <Landing loginWithEmailPW={loginWithEmailPW} displayAlert={displayAlert} />; 
    }
  } 

  return (
    <Box className={classes.root}>
      <MenuBar user={user} />
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
        {/* {display()} */}
        <AccountDetails user={user}/>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
