import { makeStyles } from '@material-ui/core';
import { DRAWER_WIDTH } from './Constants';
import sizes from '../Components/sizes';

const styles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   appBarShift: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
      transition: theme.transitions.create(['margin', 'width'], {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   button: {
      margin: theme.spacing(1),
   },
   headerBtn: {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& .MuiFormControl-root': {
         width: '100%',
      },
      [sizes.down('xs')]: {
         '& h6': {
            display: 'none',
         },
         '& svg': {
            display: 'none',
         },
         '& span': {
            fontSize: '0.6rem',
         },
      },
   },
   testDivSavePalette: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
   },
   navBtns: {
      display: 'flex',
   },
   hide: {
      display: 'none',
   },
}));

export default styles;
