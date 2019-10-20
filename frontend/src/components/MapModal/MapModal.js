import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Divider,
  Button,
  Icon,
  Typography,
  DialogContentText
} from "@material-ui/core";
import "./MapModal.scss";
import Logo from "../../assets/logo.png";

export default class MapModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClose = () => {
    this.props.onClose();
  };

  handleClick = () => {
    window.open(this.props.zone.pageUrl, "_blank");
  };

  render() {
    const image = this.props.zone.imageUrl || Logo;
    console.log(this.props.zone);
    return (
      <Dialog open={this.props.open} onClose={this.handleClose}>
        <div className="mapModal">
          <img src={image} alt={this.props.zone.name} />
        </div>
        <Divider />
        <DialogContent>
          <Typography variant="h5">
            <Icon>{this.props.getIcon(this.props.zone.projectType)}</Icon>&nbsp;
            {this.props.zone.projectName}
          </Typography>

          <Typography variant="caption">
            <span className="accent">
              {this.props.zone.completedYear || this.props.zone.plantedYear}{" "}
            </span>
            | Location:&nbsp;
            <b>{this.props.zone.location}</b>
          </Typography>

          <DialogContentText className="description">
            {this.props.zone.description ||
              "Check out our website to learn more about this project."}
          </DialogContentText>

          <Typography variant="caption">
            {this.props.zone.sponsors ? (
              <span>
                Sponsors: <b> {this.props.zone.sponsors}</b>&nbsp;
              </span>
            ) : (
              undefined
            )}
            <br />
            {this.props.zone.dedicatedTo ? (
              <span>
                Dedicated to
                <b> {this.props.zone.dedicatedTo}</b>
              </span>
            ) : (
              undefined
            )}
          </Typography>
          <DialogActions>
            {this.props.zone.pageUrl ? (
              <Button
                onClick={this.handleClick}
                variant="outlined"
                className="accent"
              >
                Learn More
              </Button>
            ) : (
              undefined
            )}
          </DialogActions>
        </DialogContent>
      </Dialog>
    );
  }
}
