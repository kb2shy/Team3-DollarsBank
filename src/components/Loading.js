import React from 'react';
import Lottie from 'react-lottie';
import * as loading from '../json/money-machine.json';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: theme.palette.primary.light
    }
}))

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const Loading = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Lottie options={defaultOptions} width="50%" height="50%"/>
        </Box>
    )
}

export default Loading
