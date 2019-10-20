import React from "react";
import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Icon,
  ListItemSecondaryAction,
  Switch
} from "@material-ui/core";
import "./MapLegend.scss";

export default class MapLegend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
  }

  handleChange = (value, index) => {
    if (!this.state.checked.length) {
      this.props.types.forEach(
        (type, i) => (this.state.checked[i] = type.type)
      );
      this.state.checked[index] = null;
    } else if (this.state.checked[index]) {
      this.state.checked[index] = null;
    } else {
      this.state.checked[index] = value;
    }
    this.props.onChange(this.state.checked);
  };

  isChecked = index => {
    return this.state.checked[index] ? true : false;
  };

  render() {
    return (
      <Card className="legend">
        <Typography gutterBottom variant="h5" component="h2">
          Legend
        </Typography>
        <List dense={true}>
          {this.props.types.map((type, index) => {
            return (
              <ListItem key={type.type}>
                <ListItemIcon>
                  <Icon>{type.icon}</Icon>
                </ListItemIcon>
                <ListItemText>{type.type}</ListItemText>
                <ListItemSecondaryAction>
                  <Switch
                    checked={
                      this.state.checked.length === 0
                        ? true
                        : this.isChecked(index)
                    }
                    onChange={() => this.handleChange(type.type, index)}
                    value={type.type}
                    size="small"
                  />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </Card>
    );
  }
}
