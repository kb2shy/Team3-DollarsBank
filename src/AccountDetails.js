import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const classes = makeStyles(theme => ({
    accountDetails: {
        display: "flex",
        height: "100%",
        width: "100%",
        backgroundColor: "lightgray"
    },
    box1: {
        backgroundColor: "orange",
        flexGrow: 1
    },
    box2: {
        backgroundColor: "yellow",
        flexGrow: 4
    }
}));

const AccountDetails = (props) => {


    return <Box className={classes.accountDetails}>
        <Typography variant="h2">Account Details</Typography>
        <Box className={classes.box1}>
            content
        </Box>

        <Box className={classes.box2}>
            content
        </Box>
    </Box>
}

export default AccountDetails;