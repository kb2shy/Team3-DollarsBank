import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

}))

const Transaction = ({ transaction }) => {

    const classes = useStyles();

    console.log(transaction);
    return <Box>
        <Typography>Transaction component</Typography>
    </Box>
}

export default Transaction;