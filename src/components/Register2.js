import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, InputLabel, MenuItem, Select, Typography, FormControl, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    register: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    box1: {
        width: "80%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
    },
    formControl: {
        marginTop: "10px",
        width: "100%",
        height: "100%"
    },
    box2: {
        width: "80%",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    button: {
        width: "40%",
        backgroundColor: theme.palette.secondary.dark,
        color: "#fff",
        alignSelf: "center",
        marginTop: "auto",
    }
}))

const Register2 = (props) => {

    const {
        handleOnChange,
        setSelection,
        clearFields,
        accountType,
        initialTransaction,
        handleCreateAccountSubmit,
    } = props;

    const selectionRef = useRef();

    const classes = useStyles();

    const handleLoginButton = () => {
        clearFields();
        setSelection("login");
    }

    return (
        <Box className={classes.register}>
            <Box className={classes.box1}>
                <Typography variant="h5" className={classes.title}>
                    Register: Step 2
        </Typography>
                <FormControl className={classes.formControl} ref={selectionRef}>
                    <InputLabel id="label-accountType">Account Type</InputLabel>
                    <Select
                        labelId="label-accountType"
                        id="select-accountType"
                        value={accountType}
                        onChange={handleOnChange("accountType")}
                        label="Account Type"
                    >
                        <MenuItem value={"checking"}>Checking</MenuItem>
                        <MenuItem value={"savings"}>Savings</MenuItem>
                    </Select>
                </FormControl>
                <Typography>Make your first deposit</Typography>
                <TextField
                    variant="outlined"
                    label="amount"
                    type="number"
                    InputProps={{ inputProps: { min: 0 } }}
                    size="small"
                    className={classes.input}
                    value={initialTransaction}
                    onChange={handleOnChange("initialTransaction")}
                />
                <Button variant="contained" className={classes.button} onClick={(e) => handleCreateAccountSubmit(e)}>Create Account</Button>
            </Box>

            <Box className={classes.box2}>
                <Typography>Already have an account?</Typography>
                <Button variant="contained" className={classes.button} onClick={handleLoginButton}>Log In</Button>
            </Box>
        </Box>
    )
}

export default Register2;