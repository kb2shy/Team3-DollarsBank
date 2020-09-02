import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

}))

const Login = (props) => {

  const classes = useStyles();

  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h3">
            Login
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Login;