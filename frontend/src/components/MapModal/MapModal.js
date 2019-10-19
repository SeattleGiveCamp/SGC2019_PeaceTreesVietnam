import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText
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

  displayedData = () => {
    return {
      Year: this.props.zone.year,
      Province: this.props.zone.province,
      Sponsors: this.props.zone.sponsors,
      Type: this.props.zone.type
    };
  };

  render() {
    const data = this.displayedData();
    return (
      <Dialog open={this.props.open} onClose={this.handleClose}>
        <DialogContent>
          <DialogTitle>{this.props.zone.name}</DialogTitle>

          <List>
            {Object.keys(data).map(key => {
              return (
                <ListItem>
                  <ListItemText key={key}>
                    <b>{key}</b>: {data[key]}
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>

          <DialogActions>
            <Button onClick={this.handleClick}>Learn More</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    );
  }
}
