import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    transaction: {
        width: "98%",
        // height: "100px",
        border: "2px solid black",
        marginBottom: "6px",
        padding: "4px"
        // ":not(:last-child)": {
        //     marginBottom: "10px"
        // }
    },
    green: {
        color: "green"
    },
    red: {
        color: "red"
    }

}))

const Transaction = ({ transaction }) => {

    const classes = useStyles();

    const date = new Date(transaction.date);
    
    return <Box className={classes.transaction}>
        <Typography>{`Transaction Date: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}</Typography>
        <Typography>{`Type: ${transaction.action}`}</Typography>
        {transaction.action === "deposit" ?
            <Typography className={classes.green}>+${Number(transaction.amount).toFixed(2)}</Typography> :
            <Typography className={classes.red}>-${Number(transaction.amount).toFixed(2)}</Typography>
        }
    </Box>
}

export default Transaction;