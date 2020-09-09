import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Snackbar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// components
import Footer from './Footer';
import Landing from './Landing';
import MenuBar from './MenuBar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar,
  displayBox: {
    height: "calc(100vh - 90px)"
  },

}))

const URI = "http://localhost:3001";

function App() {
  const classes = useStyles();

  const [user, setUser] = useState({});
  const [accountDetails, setAccountDetails] = useState({});
  const [openSnack, setOpenSnack] = useState(false);
  const [alert, setAlert] = useState({});

  const getUser = (login) => {
    axios.post(URI, login)
      .then(result => {
        console.log(result.data)

        // setUser here
        // setUser(result.data)
      })
      .catch(error => {
        console.log(error)

        // set up something to notify user of error
      })
  }

  const displayAlert = (alert) => {
    setOpenSnack(true);
    setAlert(alert);
  }

  const handleSnackClose = () => {
    setOpenSnack(false);
    setAlert({});
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
        <Landing getUser={getUser} displayAlert={displayAlert} />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
