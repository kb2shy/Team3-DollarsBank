import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

// components
import Footer from './Footer';
import Landing from './Landing';
import MenuBar from './MenuBar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  display: {
    top: "calc(100vh - 56px)",
    display: "flex",
    flexDirection: "column",
    alignContent: "center"
  }
}))

const URI = "http://localhost:3001";

function App() {
  const classes = useStyles();

  const [user, setUser] = useState({});
  const [accountDetails, setAccountDetails] = useState({});

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

  return (
    <Box className={classes.root}>
      <MenuBar user={user}/>
      <Box className={classes.display}>
        <Landing getUser={getUser}/>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
