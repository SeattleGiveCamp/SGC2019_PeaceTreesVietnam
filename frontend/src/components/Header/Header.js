import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <img alt="PeaceTrees Vietnam" title="logo" src="https://cdn.firespring.com/images/c2e93d07-d2af-4746-8aaa-59cd79c932c2.png"/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          ABOUT
        </Typography>
        <Typography variant="h6" className={classes.title}>
          WHAT WE DO
        </Typography>
        <Typography variant="h6" className={classes.title}>
          BECOME INVOLVED
        </Typography>
        <Typography variant="h6" className={classes.title}>
          NEWS & EVENTS
        </Typography>
        <Typography variant="h5" className={classes.title}>
          DONATE
        </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
