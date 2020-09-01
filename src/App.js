import React, { useState } from 'react';
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
    marginTop: "56px"
  }
}))

function App() {
  const classes = useStyles();

  const [user, setUser] = useState({})

  return (
    <Box className={classes.root}>
      <MenuBar user={user}/>
      <Box className={classes.display}>
        <Landing />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
