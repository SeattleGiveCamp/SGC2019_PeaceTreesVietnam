import React from "react";
import MapBox from "../../components/MapBox/MapBox";
import MapLegend from "../../components/MapLegend/MapLegend";
import SearchAppBar from "../../components/SearchAppBar";
import "./MapPage.scss";

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: null
    };
  }

  getProjectTypes = () => {
    return [
      { type: "Kindergarten", icon: "school" },
      { type: "Library", icon: "local_library" },
      { type: "Economic Development Project", icon: "eco" },
      { type: "Community Project", icon: "group" }
    ];
  };

  handleChangeFilter = newValue => {
    this.setState({ filter: newValue });
  };

  render() {
    const projectTypes = this.getProjectTypes();
    return (
      <main className="map">
        <MapBox types={projectTypes} projectShown={this.state.filter} />
        <MapLegend types={projectTypes} onChange={this.handleChangeFilter} />
      </main>
    );
  }
}
