import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Terms from './Terms';
import Privacy from './Privacy';
import Grid from '@material-ui/core/Grid';
import logo from './resize_logo.png';

const style = {
  fontSize: "20px",
  color: "white",
  textDecoration: "none"
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    color: "white"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{ position: "relative", background: "#222222", margin: "auto 0" }}
    >
      <AppBar
        position="static"
        style={{ background: "inherit", paddingTop: "20px" }}
      >
        <Toolbar>
         <Grid container spacing={0}>
          <Grid item sm={12} lg={3}>
            <IconButton edge="start" color="inherit" aria-label="menu" >
              <a href="/"><img alt="PeaceTrees Vietnam" title="logo" src={logo}/></a>
            </IconButton>
          </Grid>
          <Grid item sm={4} lg={3}>
            <Typography className={classes.title} style={style}>
              509 Olive Way
              <br/>
              Suite 1226
              <br/>
              Seattle, Washington 98101
              <br/>
              (206) 441-6136
              <br/>
              <a
                component="button"
                variant="body2"
                href="mailto:info@peacetreesvietnam.org"
                style={style}
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </Typography>
          </Grid>
          <Grid item sm={4} lg={3}>
            <Typography variant="h6" className={classes.title} style={style}>
              <a component="button"
              variant="body2"
              style={style}
              href="https://www.peacetreesvietnam.org/how-to-help/volunteer.html"
              target="_blank"
              rel="noopener noreferrer"
              >Get Involved</a>
              <br/>
              <a component="button"
              variant="body2"
              style={style}
              href="https://www.peacetreesvietnam.org/how-to-help/donate-form.html"
              target="_blank"
              rel="noopener noreferrer"
              >Donate Now</a>
              <br/>
              <a component="button"
              variant="body2"
              style={style}
              href="https://www.peacetreesvietnam.org/news-events/event-calendar.html"
              target="_blank"
              rel="noopener noreferrer"
              >Upcoming Events</a>
              </Typography>
            </Grid>
            <Grid item sm={4} lg={3}>
              <Typography variant="h6" className={classes.title} style={style}>
                <a
                  component="button"
                  variant="body2"
                  style={style}
                  href="https://www.peacetreesvietnam.org/how-to-help/volunteer.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Involved
                </a>
                <br />
                <a
                  component="button"
                  variant="body2"
                  style={style}
                  href="https://www.peacetreesvietnam.org/how-to-help/donate-form.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate Now
                </a>
                <br />
                <a
                  component="button"
                  variant="body2"
                  style={style}
                  href="https://www.peacetreesvietnam.org/news-events/event-calendar.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Upcoming Events
                </a>
              </Typography>
            </Grid>
            <Grid item sm={4} lg={3}>
              <Typography variant="h6" className={classes.title}>
                <a
                  component="button"
                  variant="body2"
                  style={style}
                  href="https://www.peacetreesvietnam.org/news-events/mailing-list.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Our Newsletter
                </a>
                <br />
                <a
                  component="button"
                  variant="body2"
                  style={style}
                  href="https://www.peacetreesvietnam.org/portal/login.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Board Portal
                </a>
                <br />
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
        <Toolbar style={{ margin: "90px 0 20px 0" }}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Typography
                className={classes.title}
                style={{ fontSize: "20px" }}
              >
                © 2019 PeaceTrees Vietnam
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <a
                href="https://www.instagram.com/peacetreesvietnam/"
                style={{
                  fontSize: "25px",
                  color: "white",
                  marginRight: "15px"
                }}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/peacetreesvietnam/"
                style={{
                  fontSize: "25px",
                  color: "white",
                  marginRight: "15px"
                }}
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com/peacetreesvn"
                style={{
                  fontSize: "25px",
                  color: "white",
                  marginRight: "15px"
                }}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.youtube.com/user/peacetreesvietnam"
                style={{
                  fontSize: "25px",
                  color: "white",
                  marginRight: "15px"
                }}
              >
                <i className="fab fa-youtube"></i>
              </a>
            </Grid>
            <Grid item xs={3}>
              <Privacy className={classes.title} />
            </Grid>
            <Grid item xs={3}>
              <Terms className={classes.title} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
