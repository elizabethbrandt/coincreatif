import { AppBar, Toolbar, Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(() => ({
//     typographyStyles: {
//         flex:1
//     }
// }))

function Nav() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>Coin Créatif</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Nav;