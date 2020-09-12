import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Typography } from '@material-ui/core';

import { TRANSACTIONS } from '../constants';

const useStyles = makeStyles(theme => ({
    accountDisplay: {
        width: "100%",
        height: "100%",
        backgroundColor: "lightgreen"
    },
    title: {
        display: "flex",
        alignItems: "center",
        height: "80px",
        backgroundColor: "white",
    },
    acctDetails: {
        width: "30%",
        backgroundColor: "lightgrey"
    },
    acctOptions: {
        display: "flex",
        justifyItems: "space-between",
        width: "70%",
        justifyContent: "space-around",
        backgroundColor: "lightblue",
        fontSize: "1.2rem",
        color: "white"
    },
    balanceRed: {
        color: "red"
    },
    balanceGreen: {
        color: "green"
    },
    btn1: {
        backgroundColor: theme.palette.primary.main,
        color: "white"
    },
    btn2: {
        backgroundColor: "red",
        color: "white"
    },
    btn3: {
        backgroundColor: theme.palette.secondary.main,
        color: "white"
    }
}))

const AccountDisplay = ({ account }) => {

    // console.log("account:", account);
    const classes = useStyles();

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        if (transactions.length === 0) {
            const trans = TRANSACTIONS.filter(transaction => transaction.acctId === account.acctId)
            // console.log(trans);
            setTransactions(trans);
        }
    }, [])

    // console.log(transactions)
    return <Box className={classes.accountDisplay}>
        <Box className={classes.title}>
            <Box className={classes.acctDetails}>
                <Typography variant="h6">{account.acctType}</Typography>
                {account.balance > 0 ? 
                    <Typography className={classes.balanceGreen}>{`Balance: ${account.balance}`}</Typography> : 
                    <Typography className={classes.balanceRed}>{`Balance: ${account.balance}`}</Typography>
                }
            </Box>
            <Box className={classes.acctOptions}>
                <Button variant="contained" className={classes.btn1}>Deposit Cash</Button>
                <Button variant="contained" className={classes.btn2}>Withdraw Cash</Button>
                <Button variant="contained" className={classes.btn3}>Transfer Money</Button>
            </Box>
        </Box>
    </Box>
}

export default AccountDisplay;