import React from "react";
import MapBox from "../../components/MapBox/MapBox";
import MapLegend from "../../components/MapLegend/MapLegend";

export default class Map extends React.Component {
  state = {};

  render() {
    return (
      <main>
        <MapBox />
        <MapLegend />
      </main>
    );
  }
}