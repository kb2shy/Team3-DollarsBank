import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, TextField, Typography } from '@material-ui/core';

import { TRANSACTIONS } from '../constants';

import Transaction from './Transaction';

const useStyles = makeStyles(theme => ({
    accountDisplay: {
        width: "calc(100% - 20px)",
        height: "100%",
        padding: "10px"
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

const AccountDisplay = ({ account, user }) => {

    // console.log("account:", account);
    const classes = useStyles();

    const [transactions, setTransactions] = useState([]);
    const [deposit, setDeposit] = useState("");
    const [withdrawal, setWithdrawal] = useState("");
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
            setAccountBalance(ab.toFixed(2));
        }

    }, []);

    const handleDepositButton = (e) => {
        e.preventDefault();

        let transId = 6000;
        if (transactions.length > 0) {
            transId = transactions[0].transactionId;
        }

        const newTransaction = {
            transactionId: transId + 1,
            userId: user.userId,
            action: "deposit",
            amount: deposit,
            date: new Date(),
        }

        if (deposit <= 0) {
            return setDeposit(0);
        }

        setTransactions([newTransaction, ...transactions])
        setAccountBalance(Number(accountBalance) + Number(deposit.toFixed(2)));
        setDeposit("");
    }

    const handleWithdrawalButton = (e) => {
        e.preventDefault();

        const newTransaction = {
            transactionId: transactions[0].transactionId + 1,
            userId: user.userId,
            action: "withdrawal",
            amount: withdrawal,
            date: new Date(),
        }

        if (withdrawal <= 0 || accountBalance <= 0) return;

        setTransactions([newTransaction, ...transactions])
        setAccountBalance(Number(accountBalance) - Number(withdrawal.toFixed(2)));
        setWithdrawal("");
    }

    // console.log(transactions)
    // console.log(`accountBalance: ${accountBalance}`, `typeof accountBalance: ${typeof accountBalance}`);
    return <Box className={classes.accountDisplay}>
        <Box className={classes.title}>
            <Box className={classes.acctDetails}>
                <Typography variant="h4">{account.acctType}</Typography>
                {accountBalance >= 0 ?
                    <Typography variant="h5" className={classes.balanceGreen}>{`Balance: $${Number(accountBalance).toFixed(2)}`}</Typography> :
                    <Typography variant="h5" className={classes.balanceRed}>{`Balance: $${Number(accountBalance).toFixed(2)}`}</Typography>
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
                        onChange={(e) => setDeposit(Number(e.target.value))}
                    />
                </Box>
                <Box className={classes.acctOptions__input}>
                    <Button 
                        disabled={accountBalance <= 0}
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
                        onChange={(e) => setWithdrawal(Number(e.target.value))}
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