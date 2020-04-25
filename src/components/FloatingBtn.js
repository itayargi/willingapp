import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// import EditIcon from '@material-ui/icons/Edit';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import NavigationIcon from '@material-ui/icons/Navigation';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();
  
  return (
    <div style={{position:"fixed", bottom:"10%", right:"3%", zIndex:5}} className={classes.root}>
    <Link style={{}} to='/newRequest'>
    <div>
      <Fab color="primary" aria-label="add" >
        
      <AddIcon />
      
      </Fab>
      </div>
      </Link>
    </div>
  );
}
