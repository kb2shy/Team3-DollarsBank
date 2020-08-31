import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    landing: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/landing.jpg')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "4rem",
    },
    title: {
        color: theme.palette.primary.main
    }
}))

const Landing = (props) => {

    const classes = useStyles();

    return (
        <Box className={classes.landing}>
            <Box className={classes.title}>Landing</Box>
        </Box>
    )

}

export default Landing;