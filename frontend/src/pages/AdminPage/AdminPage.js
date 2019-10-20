import React from "react";
import { Link } from "react-router-dom";
import { kml } from "./togeojson";
import { connect } from "react-redux";
import * as ordnanceActions from "../../action/ordnance-actions";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelectedFile = this.handleSelectedFile.bind(this);
    this.state = {
      ordnanceData: null
    };
  }

  handleSelectedFile = e => {
    console.log(e.target.files);

    var reader = new FileReader();

    // When our uploaded file is done reading, execute this callback
    reader.onload = e => {
      var text = reader.result;

      // Convert our file to an XML dom
      var parser = new DOMParser();
      var xmldom = parser.parseFromString(text, "text/xml");

      // Read our XML file as JSON
      var geoJsonData = kml(xmldom);

      var ordnanceList = [{lat: "lat", lon: "lon"}];

      for (var featureNum in geoJsonData.features) {
        var feature = geoJsonData.features[featureNum];
        if (!feature) {
          continue;
        }

        var coordinates = feature.geometry.coordinates;

        var lat = +coordinates[0].toFixed(5);
        var lon = +coordinates[1].toFixed(5);

        ordnanceList.push({lat: lat, lon: lon});
      }

      console.log("Able to read all of the table data");
      // This is the final data, which shall be processed further once we move this code to the server.
      var csvContent = "";
      ordnanceList.forEach(function(ordnanceCoords) {
          let row = ordnanceCoords.lat + "," + ordnanceCoords.lon;
          csvContent += row + "\r\n";
      });

      this.setState({ ordnanceData: geoJsonData.features });
      this.props.postOrdnanceData(this.state.ordnanceData);
      

      // Create a link, and click it to download the data
      var element = window.document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf=8,' + encodeURIComponent(csvContent));
      element.setAttribute('download', 'mine-data.csv');
      
      element.click();
    }

    // Read the uploaded file as text
    reader.readAsText(e.target.files[0]);
  };

  render() {
    return (
      <div>
        <h3>Upload mine data KML file</h3>
        <form>
          <p>Please upload unzipped KML file for now! Will provide support for KMZ later.</p>
          <div>
          <input type="file" onChange={this.handleSelectedFile} accept="application/vnd.google-earth.kml+xml,application/vnd.google-earth.kmz" />
          </div>
        </form>

        <hr />

        <h3>Add project</h3>
        <Link to="/form">Go to Add Project</Link>

        <hr />
        <h3>Project table</h3>
        <Link to="/table">View Project table</Link>
      </div>
    );
  }
}

// This upload will go to the DB eventually....
const mapDispatchToProps = dispatch => ({
  postOrdnanceData: data => dispatch(ordnanceActions.postOrdnanceData(data))
});

export default connect(
  null,
  mapDispatchToProps
)(AdminPage);
