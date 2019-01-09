import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';

const yellow = "#fff000";
const green = "#ABC000";
const black = "#302827"
// const grey = "#EEEEEE";

const theme = getMuiTheme({
  palette: {
    primary1Color: green,
    primary2Color: green,
    primary3Color: green,
    accent1Color: yellow,
    accent2Color: yellow,
    accent3Color: yellow,
    textColor: black,
    disabledColor: fade(black, 0.3),
    clockCircleColor: fade(black, 0.07)
  },
  raisedButton: {
    secondaryTextColor: black
  }
});

export default theme;
