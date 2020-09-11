import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#599532",
            light: "#95D06F",
            dark: "#0C2000"

        },
        secondary: {
            main: "#334D7D",
            light: "#808898",
            dark: "#173670"
        },
        error: {
            main: "#eb4034",
            light: "#cf726b",
            dark: "#5c0903"
        }
    },
    background: {
        default: "#fff"
    }
})

export default theme;