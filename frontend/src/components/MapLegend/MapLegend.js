import React from "react";
import { connect } from "react-redux";
import * as ordnanceActions from "../../action/ordnance-actions";
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

const defaultState = [true, true, true, true, false];
class MapLegend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
  }

  handleChange = (value, index) => {
    if (!this.state.checked.length) {
      this.props.types.forEach((type, i) => {
        this.state.checked[i] = type.type;
        if (type.type === "Ordnance") {
          this.state.checked[i] = false;
        }
      });
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
    const styles = {
      root: {
        backgroundColor: "#b0bd22",
        color: "#b0bd22"
      }
    };
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
                        ? defaultState[index]
                        : this.isChecked(index)
                    }
                    onChange={() => this.handleChange(type.type, index)}
                    value={type.type}
                    size="small"
                    classes={styles.root}
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

export default connect(
  null,
  null
)(MapLegend);
