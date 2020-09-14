import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		backgroundColor: theme.palette.secondary.main,
		color: "#fff",
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1,
	}
}));

const MenuBar = ({ user, setUser, setDisplayState }) => {
	const classes = useStyles();

	const handleLogOutButton = () => {
		setUser(null);
		return setDisplayState("home");
	}

	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar} position="fixed">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Dollars Bank
					</Typography>
					{ user ? <Button color="inherit" onClick={handleLogOutButton}>Log Out</Button> : null}
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default MenuBar;