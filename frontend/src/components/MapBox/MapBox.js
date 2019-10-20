import React, { Component } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import MapModal from "../MapModal/MapModal";
import { IconButton, Icon } from "@material-ui/core";
import { connect } from "react-redux";
import * as mapActions from "../../action/map-actions";
import "./MapBox.scss";

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
      selectedZone: null,
      mapStyle: "mapbox://styles/mapbox/streets-v11"

    };
  }

  getAllProjectCoordinates = () => {
    const coordinates = [
      {
        latitude: 16.434,
        longitude: 106.72,
        projectName: "John C Seel Kindergarten",
        year: 2018,
        location: "Xi Ra Man Village",
        sponsors: "Robert and Barbara Spindel",
        type: "Kindergarten"
      },
      {
        latitude: 16.483,
        longitude: 106.698,
        projectName: "David Warner Kindergarten",
        year: 2007,
        location: "Amor Village",
        sponsors: "Sue Warner-Bean",
        type: "Kindergarten"
      },
      {
        latitude: 16.486,
        longitude: 106.702,
        projectName: "Friendship Force Library",
        year: 2009,
        location: "A Xing Commune",
        sponsors: "Friendship Force International",
        type: "Library"
      },
      {
        latitude: 16.6,
        longitude: 106.63,
        projectName: "Jesse Griego Kindergarten",
        year: 2009,
        location: "A Cha Village",
        sponsors: "Jim Lewis",
        type: "Kindergarten"
      },
      {
        latitude: 16.71025,
        longitude: 106.878101,
        projectName: "Heathful Garden for Healthy Children",
        year: 2010,
        location: "Krong Kiang Town",
        sponsors: "Washington Women's Foundation",
        type: "Economic Development Project"
      },
      {
        latitude: 16.630956,
        longitude: 107.011278,
        projectName: "Ba Long Community Center",
        year: 2014,
        location: "Ba Long District",
        sponsors: "",
        type: "Community Project"
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

  showOrdnance = () => {
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

    const showOrdnance = this.showOrdnance();
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
            getIcon={getIconType}
          />
        ) : (
          undefined
        )}
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={MAPBOX_URL}
          mapStyle={this.state.mapStyle}
        >
          <div style={{ position: "absolute", right: 10, top: 10 }}>
            <NavigationControl showCompass={false} />
          </div>
          {projects.map((zone, index) => {
            return (
              <Marker
                latitude={zone.latitude}
                longitude={zone.longitude}
                key={index}
              >
                <IconButton onClick={() => this.handleClick(zone)}>
                  <Icon>{getIconType(zone.type)}</Icon>
                </IconButton>
              </Marker>
            );
          })}
          {ordnanceData.length > 0 && showOrdnance
            ? ordnanceData.map((zone, index) => {
                return (
                  <Marker latitude={zone.lat} longitude={zone.long} key={index}>
                    <svg height="10" width="10">
                      <circle
                        cx="5"
                        cy="5"
                        r="4"
                        fill="#F50057"
                        opacity="0.5"
                      />
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
