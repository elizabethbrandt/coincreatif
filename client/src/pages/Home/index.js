import { Button, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    primaryStyle: {
        fontStyle: "oblique"
    },
    buttonStyles: {
        color: "green"
    }
});

function Home() {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.primaryStyle} color="primary" variant="h1">Coin Créatif</Typography>
            <Typography className={classes.primaryStyle} color="primary" variant="h3">Where small businesses thrive</Typography>
            <Button color="primary" variant="outlined">Browse the Market</Button>
        </div>
    )
}

export default Home;