import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

export default function Header() {
  return (
    <div style={{background: "black"}}>
      <AppBar position="static" style={{background: "inherit", padding: "10px 0"}}>
        <Toolbar>
         <Grid container spacing={2} alignItems="center">
           <Grid item xs={12} md={2}>
            <a href="/"><img alt="PeaceTrees Vietnam" title="logo" src="https://cdn.firespring.com/images/c2e93d07-d2af-4746-8aaa-59cd79c932c2.png"/></a>
            </Grid>
            <Grid item md={4}>
            </Grid>
            <Grid item md={1}>
            <Hidden smDown>
            <Typography variant="h6">
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
            </Hidden>
            </Grid>
            <Grid item md={1}>
            <Hidden smDown>
            <Typography variant="h6">
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
            </Hidden>
            </Grid>
            <Grid item md={1}>
            <Hidden smDown>
            <Typography variant="h6">
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
            </Hidden>
            </Grid>
            <Grid item md={1}>
            <Hidden smDown>
            <Typography variant="h6">
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
            </Hidden>
            </Grid>
            <Grid item md={2}>
            <Hidden smDown>
            <Typography variant="h5" style={{ justifyContent: "center"}}>
              <a
                component="button"
                variant="body2"
                href="https://www.peacetreesvietnam.org/how-to-help/donate-form.html"
                rel="noopener noreferrer"
                target="_blank"
                style={{color: "white", textDecoration: "none", padding: "10px", borderRadius: "5%", border: "5px solid white"}}
              >
                DONATE
              </a>
            </Typography>
            </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
