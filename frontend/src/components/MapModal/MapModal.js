import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";

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
    return (
      <Dialog open={this.props.open} onClose={this.handleClose}>
        <DialogContent>
          <DialogTitle>{this.props.zone.name}</DialogTitle>
          <DialogContentText>
            <p>
              <b>Year</b> {this.props.zone.year}{" "}
            </p>
            <p>
              <b>Province</b> {this.props.zone.province}
            </p>
            <p>
              <b>Sponsors</b> {this.props.zone.sponsors}
            </p>
          </DialogContentText>
          <DialogActions>
            <Button onClick={this.handleClick}>Learn More</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    );
  }
}
