import React, { Component } from "react";
import ReactMapGL from "react-map-gl";

export default class MapBox extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    const MAPBOX_URL = process.env.REACT_APP_MAPBOX;
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
        mapboxApiAccessToken={MAPBOX_URL}
      />
    );
  }
}
