import React, { useContext } from "react";
import { Avatar, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import { AuthContext } from "../../utils/Auth";
import FavoriteCard from "../FavoritesCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function ProfileCard() {
  const classes = useStyles();

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
  return (
    <div className="classes.root">
      <Paper className={classes.paper}>
        <Typography variant="h4" className="email-name">
          MY PROFILE
          <br/>
          my email: {currentUser.email}
          <br/>
          my user id: {currentUser.uid}

        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            {/* Change src to dynamically update according to a user image/avatar */}
            <Avatar
              alt="Profile"
              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=EyeRoll&eyebrowType=DefaultNatural&mouthType=Eating&skinColor=Light"
              className={classes.large}
            />
          </Grid>
          <Grid item xs={12} sm>
            <Paper className={classes.paper}>
              <Typography variant="subtitle1">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Paper>
            <Grid item xs={12} sm>
              <FavoriteCard />
            </Grid>
          </Grid>

        </Grid>
      </Paper>
    </div>
  )};
}

export default ProfileCard;