import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Terms from "./Terms";
import Privacy from "./Privacy";
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
    <div className={classes.root} style={{ position: "relative" }}>
      <AppBar
        position="static"
        color="black"
        style={{ background: "black", paddingTop: "20px" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img
              alt="PeaceTrees Vietnam"
              title="logo"
              src="https://cdn.firespring.com/images/c2e93d07-d2af-4746-8aaa-59cd79c932c2.png"
            />
          </IconButton>
          <Typography className={classes.title} style={style}>
            509 Olive Way
            <br />
            Suite 1226
            <br />
            Seattle, Washington 98101
            <br />
            (206) 441-6136
            <br />
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
        </Toolbar>
        <Toolbar style={{ margin: "90px 0 20px 0" }}>
          <Typography className={classes.title} style={{ fontSize: "20px" }}>
            © 2019 PeaceTrees Vietnam
          </Typography>
          <a
            href="https://www.instagram.com/peacetreesvietnam/"
            style={{ fontSize: "25px", color: "white", marginRight: "15px" }}
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/peacetreesvietnam/"
            style={{ fontSize: "25px", color: "white", marginRight: "15px" }}
          >
            <i class="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com/peacetreesvn"
            style={{ fontSize: "25px", color: "white", marginRight: "15px" }}
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/user/peacetreesvietnam"
            style={{ fontSize: "25px", color: "white", marginRight: "15px" }}
          >
            <i class="fab fa-youtube"></i>
          </a>
          <Typography className={classes.title}>
            <Privacy />
          </Typography>
          <Typography className={classes.title}>
            <Terms />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
