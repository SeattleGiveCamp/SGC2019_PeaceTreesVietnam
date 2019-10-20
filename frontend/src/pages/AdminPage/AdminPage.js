import React from "react";
import { Link } from "react-router-dom";
import { kml } from "./togeojson";
import { connect } from "react-redux";
import * as ordnanceActions from "../../action/ordnance-actions";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {kmzProgress: 0};

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

      // We need to do some additional work to "fully" convert the `geoJsonData` to JSON.

      for (var featureNum in geoJsonData.features) {
        var feature = geoJsonData.features[featureNum];
        if (!feature) {
          continue;
        }

        // In geoJsonData.features array, each element (object) has a `.properties.description` string containing raw HTML
        // Parse that raw HTML string into an actual JS DOM object
        var propertiesDom = window.document
          .createRange()
          .createContextualFragment(feature.properties.description);
        // We want to convert the table rows to JSON
        var tableRows = propertiesDom.querySelectorAll("table tr");

        // And this JSON will be stored under a new key, `parsedProperties`
        geoJsonData.features[featureNum].parsedProperties = {};

        for (var rowNum in tableRows) {
          var tableRow = tableRows[rowNum];
          if (!tableRow || !(tableRow instanceof Node)) {
            continue;
          }
          var dataPoints = tableRow.querySelectorAll("td");
          // Format of table row should be:
          // <tr>
          //   <td>Label</td>
          //   <td>Value</td>
          // </tr>
          if (dataPoints.length != 2) {
            continue;
          }

          var dataPointLabel = dataPoints[0].textContent;
          var dataPointValue = dataPoints[1].textContent;

          // We add a key-value pair in the format:
          // {label: value} as defined above
          geoJsonData.features[featureNum].parsedProperties[
            dataPointLabel
          ] = dataPointValue;
        }

        var kmzProgress = Math.ceil(100 * (featureNum / geoJsonData.features.length));
        if (this.state.kmzProgress != kmzProgress) {
          this.setState({kmzProgress: kmzProgress});
      }

      console.log("Able to read all of the table data");
      // This is the final data, which shall be processed further once we move this code to the server.
      console.log(geoJsonData);
      this.setState({ ordnanceData: geoJsonData.features });
      this.props.postOrdnanceData(this.state.ordnanceData);
      
      var textJsonData = JSON.stringify(geoJsonData, null, 2);

      // Create a link, and click it to download the data
      var element = window.document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf=8,' + encodeURIComponent(textJsonData));
      element.setAttribute('download', 'mine-data.json');
      
      element.click();
    }.bind(this);

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
          
          <progress value={this.state.kmzProgress} max="100"></progress> {this.state.kmzProgress} / 100
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
