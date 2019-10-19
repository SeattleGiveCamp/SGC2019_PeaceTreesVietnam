import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import MapModal from "../MapModal/MapModal";
import { Icon } from "@material-ui/core";

export default class MapBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 960,
        height: 600,
        latitude: 16.4,
        longitude: 106,
        zoom: 8
      },
      selectedZone: null
    };
  }

  getAllProjectCoordinates = () => {
    const coordinates = [
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
    ];
    return coordinates;
  };

  handleClick = zone => {
    this.setState({ selectedZone: zone });
  };

  handleClose = () => {
    this.setState({ selectedZone: null });
  };

  render() {
    const MAPBOX_URL = process.env.REACT_APP_MAPBOX;
    const projects = this.getAllProjectCoordinates();
    return (
      <div>
        {this.state.selectedZone ? (
          <MapModal
            zone={this.state.selectedZone}
            open={this.state.selectedZone ? true : false}
            onClose={() => this.handleClose()}
          />
        ) : (
          undefined
        )}
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={MAPBOX_URL}
        >
          {projects.map((zone, index) => {
            return (
              <Marker latitude={zone.lat} longitude={zone.lng} key={index}>
                <Icon onClick={() => this.handleClick(zone)}>star</Icon>
              </Marker>
            );
          })}
        </ReactMapGL>
      </div>
    );
  }
}
