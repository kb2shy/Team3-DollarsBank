import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URI } from '../constants';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';

// components
import UserProfile from './UserProfile';
import AccountDisplay from './AccountDisplay';
import AccountList from './AccountList';
import LoadingMoney from './LoadingMoney';

const useStyles = makeStyles(theme => ({
	accountDetails: {
		display: "flex",
		height: "100%",
		width: "100%",
		// backgroundColor: "green"
	},
	box1: {
		// backgroundColor: "orange",
		width: "200px",
		display: "flex",
		flexDirection: "column",
		// justifyContent: "center",
		padding: "10px",
		borderRight: "3px solid black",
	},
	box2: {
		// backgroundColor: "yellow",
		width: "calc(100% - 200px)",
		// padding: "10px",
	},
	userOption: {
		height: "60px",
		width: "100%",
		color: "white",
		fontSize: "1rem",
		backgroundColor: theme.palette.secondary.main,
		marginTop: "10px",
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		}
	},
	accountList: {
		margin: "10px 0px",
		// border: "3px solid black",
		// minHeight: "150px"
	}
}));

const AccountDetails = ({ user }) => {

	// console.log("user passed to AcountDetails", user);

	const classes = useStyles();

	const [showAccounts, setShowAccounts] = useState(true);
	const [activeAccountDisplay, setActiveAccountDisplay] = useState(undefined);
	const [userAccounts, setUserAccounts] = useState([]);
	const [account, setAccount] = useState(undefined);

	useEffect(() => {
		getAllAccountsInfo();
	}, [])

	const getAllAccountsInfo = () => {
		try {
			axios.get(`${URI}/account/${user.userId}`)
				.then(result => {
					setUserAccounts(result.data);
				})
		} catch (error) {
			
		}
		return () => {
			
		}
	}

	const updateAccount = () => {
		getAllAccountsInfo();

		try {
			axios.get(`${URI}/account/home/${account.accountId}`)
			.then(result => {
				setAccount(result.data);
			})
		} catch (error) {
			
		}
	}

	const displayADSelection = () => {
		switch (activeAccountDisplay) {
			case "user":
				return <UserProfile user={user} setActiveAccountDisplay={setActiveAccountDisplay}/>
			case "account":
				return <AccountDisplay user={user} account={account} updateAccount={updateAccount}/>
			case "loading":
				// return setActiveAccountDisplay("account");
				setTimeout(() => {
					setActiveAccountDisplay("account");
				}, 3000);
				return <LoadingMoney />;
			default:
				return null;
		}
	}

	return <Box className={classes.accountDetails}>

		<Box className={classes.box1}>
			<Button
				variant="outlined"
				className={classes.userOption}
				onClick={() => setActiveAccountDisplay("user")}
			>
				Account Profile
            </Button>
			<Button
				variant="outlined"
				className={classes.userOption}
				onClick={() => setShowAccounts(!showAccounts)}
			>
				{showAccounts ? "Hide Account(s)" : "Show Acount(s)"}
			</Button>
			<Box className={classes.accountList}>
				{showAccounts && <AccountList accounts={userAccounts} setAccount={setAccount} setActiveAccountDisplay={setActiveAccountDisplay}/>}
			</Box>
		</Box>

		<Box className={classes.box2}>
			{displayADSelection()}
		</Box>
	</Box>
}

export default AccountDetails;