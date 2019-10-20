import React from "react";
import MapBox from "../../components/MapBox/MapBox";
import MapLegend from "../../components/MapLegend/MapLegend";
import { connect } from "react-redux";
import "./MapPage.scss";

class MapPage extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: null
    };
  }

  getProjectTypes = () => {
    return [
      { type: "Community Project", icon: "group", id: 1 },
      { type: "Library", icon: "local_library", id: 2 },
      { type: "Kindergarten", icon: "school", id: 3 },
      { type: "Economic Development Project", icon: "eco", id: 4 },
      { type: "Other", icon: "fiber_manual_record", id: 5 },
      { type: "Ordnance", icon: "", id: 6 }
    ];
  };

  handleChangeFilter = newValue => {
    this.setState({ filter: newValue });
  };

  render() {
    const projectTypes = this.getProjectTypes();
    return (
      <main className="container">
        <h1>Our Work</h1>
        <MapBox types={projectTypes} projectShown={this.state.filter} />
        {this.props.mapData ? (
          <MapLegend types={projectTypes} onChange={this.handleChangeFilter} />
        ) : (
          undefined
        )}
      </main>
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
)(MapPage);
