import React, { Component } from "react";
import PropTypes from 'prop-types';
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


export default class SearchAppBar extends React.Component {
  state = {
    value: ""
  };

  handleChange = name => value => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const  classes  = this.props;
    console.log("classes");
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

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
} 