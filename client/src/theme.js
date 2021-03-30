import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#B5E6C5",
    },
    secondary: {
      main: "#00AEEF",
    },
    info: {
      main: "#730071",
    },
  },
    typography: {
    fontFamily: 'Spartan'
  },
});

export default theme;