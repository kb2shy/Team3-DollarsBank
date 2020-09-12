import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
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

const MenuBar = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar} position="fixed">
				<Toolbar>
					{/* <IconButton edge="start" className={classes.menuButton} color="inherit">
						<MenuIcon />
					</IconButton> */}
					<Typography variant="h6" className={classes.title}>
						Dollars Bank
					</Typography>
					{ props.user ? <Button color="inherit">Log Out</Button> : null}
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default MenuBar;