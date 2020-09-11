import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URI, ACCOUNTS } from '../constants';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';

// components
import UserProfile from './UserProfile';
import AccountDisplay from './AccountDisplay';
import AccountList from './AccountList';

const useStyles = makeStyles(theme => ({
	accountDetails: {
		display: "flex",
		height: "100%",
		width: "100%",
		backgroundColor: "green"
	},
	box1: {
		backgroundColor: "orange",
		width: "200px",
		display: "flex",
		flexDirection: "column",
		// justifyContent: "center",
		padding: "10px"
	},
	box2: {
		backgroundColor: "yellow",
		width: "calc(100% - 200px)",
		padding: "10px",
	},
	userOption: {
		height: "60px",
		width: "100%",
		backgroundColor: "purple",
		marginTop: "10px"
	},
	accountList: {
		margin: "10px 0px",
		// border: "3px solid black",
		minHeight: "150px"
	}
}));

const AccountDetails = (props) => {

	const { user } = props;

	const classes = useStyles();

	const [showAccounts, setShowAccounts] = useState(true);
	const [showUserProfileDisplay, setShowUserProfileDisplay] = useState(false);
	const [showAccountDisplay, setShowAccountDisplay] = useState(false);
	const [activeAccountDisplay, setActiveAccountDisplay] = useState(ACCOUNTS);
	const [userAccounts, setUserAccounts] = useState([]);

	useEffect(() => {
		try {
			axios.get(`${URI}/accounts/${user.id}`)
				.then(result => {
					console.log(result.data);
					setUserAccounts(result.data);
				})
		} catch (error) {
			
		}
		return () => {
			
		}
	}, [])
	
	const displayADSelection = (display) => {
		switch (display) {
			case "user":
				setShowUserProfileDisplay(true);
				setShowAccountDisplay(false);
				break;
			case "accounts":
				setShowAccounts(!showAccounts);
				break;
			case "displayAccount":
				setShowAccountDisplay(true);
				setShowUserProfileDisplay(false);
				break;
			default:
				setShowUserProfileDisplay(false);
				setShowAccountDisplay(false);
				return;
		}
	}

	return <Box className={classes.accountDetails}>
		<Box className={classes.box1}>
			<Button
				variant="outlined"
				className={classes.userOption}
				onClick={() => displayADSelection("user")}
			>
				User
            </Button>
			<Button
				variant="outlined"
				className={classes.userOption}
				onClick={() => displayADSelection("accounts")}
			>
				Account(s)
      </Button>
			<Box className={classes.accountList}>
				{showAccounts && <AccountList accounts={ACCOUNTS}/>}
			</Box>
		</Box>

		<Box className={classes.box2}>
			{showUserProfileDisplay && <UserProfile user={user} displayADSelection={displayADSelection}/>}
			{showAccountDisplay && <AccountDisplay />}
    </Box>
	</Box>
}

export default AccountDetails;