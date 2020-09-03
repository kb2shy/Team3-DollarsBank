import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.secondary.main,
        bottom: "0px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "30px",
        width: "100vw",
        position: "fixed"
    }
}))

const Footer = () => {

    const classes = useStyles();

    return (
        <Box className={classes.footer}>
            <Typography>
                © Cognixia Team 3 (Joshua Anderson, Terry Johnson, Jabid Methun, Chhaian Pin)
            </Typography>
        </Box>
    )
}

export default Footer;