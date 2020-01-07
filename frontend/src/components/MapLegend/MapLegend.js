import React from "react";
import { connect } from "react-redux";
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
      checked: [1, 2, 3, 4, 5, null]
    };
  }

  handleChange = (value, index) => {
    var checkedArr = this.state.checked.slice();

    if (!this.state.checked.length) {
      this.props.types.forEach((type, i) => {
        checkedArr[i] = type.id;

        if (type.type === "Ordnance") {
          checkedArr[i] = false;
        }
      });
    } else if (this.state.checked[index]) {
      checkedArr[index] = null;
    } else {
      checkedArr = value;
    }

    this.setState("checked", checkedArr);
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
              <ListItem key={type.id}>
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
                    onChange={() => this.handleChange(type.id, index)}
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

const mapStateToProps = state => ({
  mapData: state.mapData,
  ordnanceData: state.ordnanceData
});

export default connect(
  mapStateToProps,
  null
)(MapLegend);
