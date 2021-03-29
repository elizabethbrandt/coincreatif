import { Container, Paper, Typography } from "@material-ui/core";

const NotFound = () => {
  return (
    <Container>
        <br/>
        <Paper>
            <Typography>404 Page Not Found</Typography>
            <Typography>
                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
                </span>
            </Typography>
        </Paper>
    </Container>
  );
};

export default NotFound;