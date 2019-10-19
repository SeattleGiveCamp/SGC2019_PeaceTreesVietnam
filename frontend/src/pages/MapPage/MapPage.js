import React from "react";
import MapBox from "../../components/MapBox/MapBox";
import MapLegend from "../../components/MapLegend/MapLegend";
import SearchAppBar from "../../components/SearchAppBar";

export default class Map extends React.Component {
  state = {};

  render() {
    return (
      <main>
        <SearchAppBar />
        <MapBox />
        <MapLegend />
      </main>
    );
  }
}
