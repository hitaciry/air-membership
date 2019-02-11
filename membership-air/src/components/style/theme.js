import { createMuiTheme } from '@material-ui/core/styles';
import colors from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.main,
      light:'#67adff',
      dark:'#0053bf'
    },
    secondary: {
      main: colors.orange,
    },
  },
});

export default theme;