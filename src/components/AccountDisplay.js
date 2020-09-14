import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, TextField, Typography } from '@material-ui/core';

import { TRANSACTIONS } from '../constants';

import Transaction from './Transaction';

const useStyles = makeStyles(theme => ({
    accountDisplay: {
        width: "100%",
        height: "100%",
        // backgroundColor: "lightgreen"
    },
    title: {
        display: "flex",
        height: "100px",
        // backgroundColor: "white",
    },
    acctDetails: {
        display: "flex",
        flexDirection: "column",
        width: "30%",
        // backgroundColor: "lightgrey",
        
    },
    acctOptions: {
        display: "flex",
        // justifyItems: "space-between",
        width: "70%",
        // justifyContent: "space-around",
        // backgroundColor: "lightblue",
        fontSize: "1.2rem",
        color: "white"
    },
    balanceRed: {
        color: "red",
        marginTop: "auto"
    },
    balanceGreen: {
        color: "green",
        marginTop: "auto"
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
    },
    acctOptions__input: {
        display: "flex",
        flexDirection: "column",
        margin: "5px"
        // justifyContent: "space-between"
    },
    input: {
        marginTop: "auto",
        width: "100%",
        // height: "40%"
    },
    transactionList: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: "20px",
        // border: "5px solid black",
        height: "calc(100% - 125px)",
        overflow: "auto"
    }
}))

const AccountDisplay = ({ account }) => {

    // console.log("account:", account);
    const classes = useStyles();

    const [transactions, setTransactions] = useState([]);
    const [deposit, setDeposit] = useState(0);
    const [withdrawal, setWithdrawal] = useState(0);
    const [transfer, setTransfer] = useState({});
    const [accountBalance, setAccountBalance] = useState(0);

    useEffect(() => {
        if (transactions.length === 0) {
            const trans = TRANSACTIONS.filter(transaction => transaction.acctId === account.acctId);
            let ab = account.balance;
            for (let t of trans) {
                t.date = new Date(t.date);
                if (t.action === "deposit") {
                    ab += t.amount;
                } else {
                    ab -= t.amount;
                }
            }
            
            setTransactions(trans.sort((a, b) => b.date - a.date));
            setAccountBalance(ab);
        }

    }, []);

    const handleDepositButton = (e) => {
        e.preventDefault();

        if (deposit <= 0) return;

        setAccountBalance(accountBalance + deposit);
        setDeposit(0);
    }

    const handleWithdrawalButton = (e) => {
        e.preventDefault();

        if (withdrawal <= 0 || withdrawal > accountBalance) return;

        setAccountBalance(accountBalance - withdrawal);
        setWithdrawal(0);
    }

    // console.log(transactions)
    return <Box className={classes.accountDisplay}>
        <Box className={classes.title}>
            <Box className={classes.acctDetails}>
                <Typography variant="h4">{account.acctType}</Typography>
                {accountBalance >= 0 ?
                    <Typography variant="h5" className={classes.balanceGreen}>{`Balance: ${accountBalance}`}</Typography> :
                    <Typography variant="h5" className={classes.balanceRed}>{`Balance: ${accountBalance}`}</Typography>
                }
            </Box>
            <Box className={classes.acctOptions}>
                <Box className={classes.acctOptions__input}>
                    <Button 
                        variant="contained" 
                        className={classes.btn1}
                        onClick={e => handleDepositButton(e)}
                    >
                        Deposit Cash
                    </Button>
                    <TextField 
                        variant="outlined" 
                        label="amount"
                        type="number"
                        InputProps={{ inputProps: { min: 0 }}}
                        size="small"
                        className={classes.input}
                        value={deposit}
                        onChange={(e) => setDeposit(e.target.value)}
                    />
                </Box>
                <Box className={classes.acctOptions__input}>
                    <Button 
                        variant="contained" 
                        className={classes.btn2}
                        onClick={e => handleWithdrawalButton(e)}
                    >
                        Withdraw Cash
                    </Button>
                    <TextField 
                        variant="outlined" 
                        label="amount"
                        type="number"
                        InputProps={{ inputProps: { min: 0 }}}
                        size="small"
                        className={classes.input}
                        value={withdrawal}
                        onChange={(e) => setWithdrawal(e.target.value)}
                    />
                </Box>
                <Box className={classes.acctOptions__input}>
                    <Button 
                        disabled
                        variant="contained" 
                        className={classes.btn3}
                    >
                        Transfer
                    </Button>
                    <TextField 
                        disabled
                        variant="outlined" 
                        label="amount"
                        type="number"
                        size="small"
                        className={classes.input}
                        value={transfer}
                        onChange={(e) => setTransfer(e)}
                    />
                </Box>
            </Box>
        </Box>

        {/* Transaction List */}
        <Box className={classes.transactionList}>
            {transactions.map(transaction => {
                return <Transaction key={transaction.transactionId} transaction={transaction}/>
            }).sort((a, b) => a.date > b.date)}
        </Box>
    </Box>
}

export default AccountDisplay;