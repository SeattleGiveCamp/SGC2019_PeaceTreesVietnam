import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

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


export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background: "black"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img alt="PeaceTrees Vietnam" title="logo" src="https://cdn.firespring.com/images/c2e93d07-d2af-4746-8aaa-59cd79c932c2.png"/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <a
            component="button"
            variant="body2"
            href="https://www.peacetreesvietnam.org/about/"
            rel="noopener noreferrer"
            target="_blank"
            style={{color: "white", textDecoration: "none"}}
          >
            ABOUT
          </a>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <a
            component="button"
            variant="body2"
            href="https://www.peacetreesvietnam.org/what-we-do/"
            rel="noopener noreferrer"
            target="_blank"
            style={{color: "white", textDecoration: "none"}}
          >
            WHAT WE DO
          </a>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <a
            component="button"
            variant="body2"
            href="https://www.peacetreesvietnam.org/how-to-help/"
            rel="noopener noreferrer"
            target="_blank"
            style={{color: "white", textDecoration: "none"}}
          >
            BECOME INVOLVED
          </a>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <a
            component="button"
            variant="body2"
            href="https://www.peacetreesvietnam.org/news-events/"
            rel="noopener noreferrer"
            target="_blank"
            style={{color: "white", textDecoration: "none"}}
          >
            NEWS & EVENTS
          </a>
          </Typography>
          <Typography variant="h5" className={classes.button} style={{padding: "10px", borderRadius: "5%", border: "5px solid white"}}>
            <a
              component="button"
              variant="body2"
              href="https://www.peacetreesvietnam.org/how-to-help/donate-form.html"
              rel="noopener noreferrer"
              target="_blank"
              style={{color: "white", textDecoration: "none"}}
            >
              DONATE
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
