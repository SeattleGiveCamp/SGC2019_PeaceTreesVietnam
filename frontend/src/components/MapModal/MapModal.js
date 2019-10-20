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
    console.log("open new window with url");
  };

  render() {
    const image = this.props.zone.imageUrl || Logo;
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
            <span className="accent">{this.props.zone.year} </span>
            {this.props.zone.projectStatus} | Location:&nbsp;
            <b>{this.props.zone.location}</b> |&nbsp;
            {this.props.zone.sponsors ? (
              <span>
                Sponsors: <b> {this.props.zone.sponsors}</b>
              </span>
            ) : (
              undefined
            )}
            {this.props.zone.dedicatedTo ? (
              <span>
                | Dedicated to
                <b> {this.props.zone.dedicatedTo}</b>
              </span>
            ) : (
              undefined
            )}
          </Typography>
          <DialogContentText className="description">
            {this.props.zone.description ||
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."}
          </DialogContentText>

          <DialogActions>
            {/* {this.props.zone.pageUrl ? (
              <Button
                onClick={this.handleClick}
                variant="outlined"
                className="accent"
              >
                Learn More
              </Button>
            ) : (
              undefined
            )} */}
          </DialogActions>
        </DialogContent>
      </Dialog>
    );
  }
}
