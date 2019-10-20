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
      mapStyle: "mapbox://styles/xenalara/ck1ykgd854d521cmer7uz3hyf/draft"
    };
  }

  componentDidMount() {
    this.props.getAllProjects();
  }

  handleClick = zone => {
    this.setState({ selectedZone: zone });
  };

  handleClose = () => {
    this.setState({ selectedZone: null });
  };

  showOrdnance = () => {
    if (this.props.projectShown) {
      return this.props.projectShown.includes(6) ? true : false;
    }
  };

  render() {
    const MAPBOX_URL = process.env.REACT_APP_MAPBOX;
    let { mapData } = this.props;
    console.log(mapData);

    if (this.props.projectShown) {
      mapData = mapData.filter(project =>
        this.props.projectShown.includes(project.projectType)
      );
    }
    const ordnanceData = this.props.ordnanceData
      ? this.props.ordnanceData
      : undefined;

    const showOrdnance = this.showOrdnance();
    const getIconType = iconType => {
      const projectType = this.props.types.find(el => el.id === iconType);
      return projectType ? projectType.icon : null;
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
          {mapData.length > 0
            ? mapData.map((zone, index) => {
                return (
                  <Marker
                    latitude={zone.latitude}
                    longitude={zone.longitude}
                    key={index}
                  >
                    <IconButton onClick={() => this.handleClick(zone)}>
                      <Icon>{getIconType(zone.projectType)}</Icon>
                    </IconButton>
                  </Marker>
                );
              })
            : undefined}
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
