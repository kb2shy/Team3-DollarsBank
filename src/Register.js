import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

}))

const Register = (props) => {

  const classes = useStyles();

  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h3">
            Register
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Register;