import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import MapModal from "../MapModal/MapModal";
import { Icon } from "@material-ui/core";
import { connect } from "react-redux";
import * as mapActions from "../../action/map-actions";
import * as ordnanceActions from "../../action/ordnance-actions";

class MapBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 960,
        height: 600,
        latitude: 16.6,
        longitude: 106.4,
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
        sponsors: "Robert and Barbara Spindel",
        type: "Kindergarten"
      },
      {
        lat: 16.483,
        lng: 106.698,
        name: "David Warner Kindergarten",
        year: 2007,
        province: "Amor Village",
        sponsors: "Sue Warner-Bean",
        type: "Kindergarten"
      },
      {
        lat: 16.486,
        lng: 106.702,
        name: "Friendship Force Library",
        year: 2009,
        province: "A Xing Commune",
        sponsors: "Friendship Force International",
        type: "Library"
      },
      {
        lat: 16.6,
        lng: 106.63,
        name: "Jesse Griego Kindergarten",
        year: 2009,
        province: "A Cha Village",
        sponsors: "Jim Lewis",
        type: "Kindergarten"
      },
      {
        lat: 16.71025,
        lng: 106.878101,
        name: "Heathful Garden for Healthy Children",
        year: 2010,
        province: "Krong Kiang Town",
        sponsors: "Washington Women's Foundation",
        type: "Economic Development Project"
      },
      {
        lat: 16.630956,
        lng: 107.011278,
        name: "Ba Long Community Center",
        year: 2014,
        province: "Ba Long District",
        sponsors: "",
        type: "Community Project"
      }
    ];

    return coordinates;
  };

  // This is meant to be more of an overlay; does not need to be clickable really
  getAllOrdnanceCoordinates = () => {};

  handleClick = zone => {
    this.setState({ selectedZone: zone });
  };

  handleClose = () => {
    this.setState({ selectedZone: null });
  };

  showOrdance = () => {
    if (this.props.projectShown) {
      return this.props.projectShown.includes("Ordnance") ? true : false;
    }
  };

  render() {
    const MAPBOX_URL = process.env.REACT_APP_MAPBOX;
    let projects = this.getAllProjectCoordinates();

    if (this.props.projectShown) {
      projects = projects.filter(project =>
        this.props.projectShown.includes(project.type)
      );
    }
    const ordnanceData = this.props.ordnanceData
      ? this.props.ordnanceData
      : undefined;

    const showOrdnance = this.showOrdance();

    const getIconType = iconType => {
      const projectType = this.props.types.find(el => el.type === iconType);
      return projectType.icon;
    };

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
                <Icon onClick={() => this.handleClick(zone)}>
                  {getIconType(zone.type)}
                </Icon>
              </Marker>
            );
          })}
          {ordnanceData.length > 0 && showOrdnance
            ? ordnanceData.map((zone, index) => {
                const lat = +zone.parsedProperties.Lat;
                const lng = +zone.parsedProperties.Long;
                return (
                  <Marker latitude={lat} longitude={lng} key={index}>
                    <svg height="10" width="10">
                      <circle cx="5" cy="5" r="4" fill="red" opacity="0.5" />
                    </svg>
                  </Marker>
                );
              })
            : undefined}
        </ReactMapGL>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mapData: state.mapData,
  ordnanceData: state.ordnanceData
});

const mapDispatchToProps = dispatch => ({
  getAllProjects: () => dispatch(mapActions.getAllProjects())
  // getAllOrdnances: () => dispatch(mapActions.getAllOrdnances())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapBox);
