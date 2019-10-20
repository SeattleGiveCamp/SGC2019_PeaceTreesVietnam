import React, { Component } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const data = [
  {
    lat: 16.434,
    lng: 106.72,
    name: "John C Seel Kindergarten",
    year: 2018,
    province: "Xi Ra Man Village",
    sponsors: "Robert and Barbara Spindel"
  },
  {
    lat: 16.483,
    lng: 106.698,
    name: "David Warner Kindergarten",
    year: 2007,
    province: "Amor Village",
    sponsors: "Sue Warner-Bean"
  },
  {
    lat: 16.486,
    lng: 106.702,
    name: "Friendship Force Library",
    year: 2009,
    province: "A Xing Commune",
    sponsors: "Friendship Force International"
  },
  {
    lat: 16.6,
    lng: 106.63,
    name: "Jesse Griego Kindergarten",
    year: 2009,
    province: "A Cha Village",
    sponsors: "Jim Lewis"
  }
].map(data => ({
  value: data.name
  // label: "[Completion: " + data.ProjectName.Completion + "] " + data.number,
}));

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1,
//     display: "none",
//     [theme.breakpoints.up("sm")]: {
//       display: "block"
//     }
//   },
//   search: {
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: fade(theme.palette.common.white, 0.25)
//     },
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(1),
//       width: "auto"
//     }
//   },
//   searchIcon: {
//     width: theme.spacing(7),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   inputRoot: {
//     color: "inherit"
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 7),
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: 120,
//       "&:focus": {
//         width: 200
//       }
//     }
//   }
// }));

export default class SearchAppBar extends React.Component {
  state = {
    value: ""
  };

  handleChange = name => value => {
    // const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  // searchResult = () => {
  //   let result = [];
  //   //Once this function is trigged, hide all student items
  //   const name = data.value;
  //   console.log(name)
  //   if (this.state.value.length) {
  //     for (let i = 0; i < name.length; i++) {
  //       for (let j = 0; j < name[i].length; j++) {
  //         let partialName = name[i].slice(j, this.state.value.length + j);
  //         if (this.state.value !== partialName) continue;
  //         else if (this.state.value === partialName) {
  //           name[i].style.backgroundColor = "red";
  //           result.push(name[i]);
  //           break;
  //         }
  //       }
  //     }
  //   }
  //   return result;
  // }
  render() {
    //Search functionality
    const { classes, theme } = this.props;
    console.log("classes");
    // const classes = useStyles();
    return (
      <div>
        <div>
          <SearchIcon />
        </div>
        <InputBase
          classes={classes}
          placeholder="Search a location"
          options={data}
          name="value"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
