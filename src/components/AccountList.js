import React from 'react';
// import { TRANSACTIONS } from '../constants';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    accountList: {
        width: "100%",
        height: "100%",
    },
    card: {
        backgroundColor: "lightgrey",
        width: "100%",
        ':not(:first-child)': {
            marginTop: "5px"
        },
        '&:hover': {
            cursor: "pointer"
        }
    }
}))

const AccountList = ({ accounts, setAccount, setActiveAccountDisplay }) => {

    const classes = useStyles();

    const handleAccountSelect = (acct) => {
        setAccount(acct);
        return setActiveAccountDisplay("loading");
    }

    // const calculateBalance = (data) => {

    //     let balance = data.balance;
    //     const transactions = TRANSACTIONS.filter(transaction => transaction.acctId === data.acctId);

    //     for (let trans of transactions) {
    //         if (trans.action === "deposit") {
    //             balance += trans.amount;
    //         }

    //         if (trans.action === "withdrawal") {
    //             balance -= trans.amount
    //         }
    //     }

    //     return balance.toFixed(2);
    // }

    return <Box className={classes.accountList}>
        {accounts.map(account => {
            // return console.log(typeof String(account.accountId));
            const acctNum = "***" + String(account.accountId).substring(5, 9);

            return (
            <Card 
                key={account.accountId} 
                className={classes.card}
                onClick={() => handleAccountSelect(account)}
                variant="outlined"
            >
                <CardContent>
                    <Typography>
                        {`Acct#: ${acctNum}`}
                    </Typography>
                    <Typography>
                        {`Type: ${account.accountType}`}
                    </Typography>
                    <Typography>
                        {`Balance: $${Number(account.balance).toFixed(2)}`}
                    </Typography>
                </CardContent>
            </Card>
        )})}
    </Box>
}

export default AccountList;