import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
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
                <Typography varient="h6">
                    Coin Créatif
                </Typography>
                <Button color="inherit">
                    Login
                </Button>
                <Button color="inherit">
                    Cart
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Nav;