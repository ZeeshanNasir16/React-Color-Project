import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';

const styles = {
   root: {
      width: '20%',
      height: '23%',
      // height: (props) => (props.showingFullPalette ? '25%' : '50.05%'),
      display: 'inline-block',
      margin: '0 auto',
      position: 'relative',
      cursor: 'pointer',
      marginBottom: '-3.6px',
      '&:hover svg': {
         color: 'white',
         transform: 'scale(1.3)',
      },
   },
   boxContent: {
      bottom: '0',
      position: 'absolute',
      padding: '10px',
      left: ' 0px',
      width: '90%',
      fontSize: '12px',
      textTransform: ' uppercase',
      letterSpacing: '1px',
      color: 'rgba(0,0,0,0.5)',
      fontWeight: '500',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   deleteIcon: {
      transition: 'all 0.4s ease-in-out',
   },
};
const DragableColorBox = SortableElement((props) => {
   const { classes, color, name, handleDelete } = props;

   return (
      <div className={classes.root} style={{ backgroundColor: color }}>
         <div className={classes.boxContent}>
            <span>{name}</span>
            <span>
               <DeleteIcon className={classes.deleteIcon} onClick={handleDelete} />
            </span>
         </div>
      </div>
   );
});

export default withStyles(styles)(DragableColorBox);