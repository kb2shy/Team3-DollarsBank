import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    accountList: {
        width: "100%",
        height: "100%",
        backgroundColor: "lightgrey"
    },
    card: {
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

    // console.log(accounts);

    const handleAccountSelect = (acct) => {
        setAccount(acct);
        return setActiveAccountDisplay("loading");
    }

    return <Box className={classes.accountList}>
        {accounts.map(account => {
            // return console.log(typeof account.acctId);
            const acctNum = "***" + account.acctId.substring(5, 9);
            return (
            <Card 
                key={account.acctId} 
                className={classes.card}
                onClick={() => handleAccountSelect(account)}
                variant="outlined"
            >
                <CardContent>
                    <Typography>
                        {`Acct#: ${acctNum}`}
                    </Typography>
                    <Typography>
                        {`Type: ${account.acctType}`}
                    </Typography>
                    <Typography>
                        {`Balance: ${account.balance}`}
                    </Typography>
                </CardContent>
            </Card>
        )})}
    </Box>
}

export default AccountList;