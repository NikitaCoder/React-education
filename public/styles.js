import { cyan500, cyan700, darkBlack, fullBlack } from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

const styles = {
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
  h2: {
      color: darkBlack
  }
};

export default styles;