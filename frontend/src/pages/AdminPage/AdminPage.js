import React from "react";
import { kml } from "./togeojson";

export default class AdminPage extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.handleSelectedFile = this.handleSelectedFile.bind(this);
  }

  handleSelectedFile(e) {
    console.log(e.target.files);

    var reader = new FileReader();

    // When our uploaded file is done reading, execute this callback
    reader.onload =  function(e) {
      var text = reader.result;

      var parser = new DOMParser();
      var xmldom = parser.parseFromString(text, "text/xml");

      var geoJsonData = kml(xmldom);
      console.log(geoJsonData);

      for (var featureNum in geoJsonData.features) {
        var feature = geoJsonData.features[featureNum];
        if (!feature) { continue; }

        var propertiesDom = window.document.createRange().createContextualFragment(feature.properties.description);
        var tableRows = propertiesDom.querySelectorAll("table tr");

        geoJsonData.features[featureNum].parsedProperties = {}

        for (var rowNum in tableRows) {
          var tableRow = tableRows[rowNum];
          if (!tableRow || !(tableRow instanceof Node)) { continue; }
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

          geoJsonData.features[featureNum].parsedProperties[dataPointLabel] = dataPointValue;
        }
      }

      console.log("Able to read all of the table data");
      console.log(geoJsonData);

    }
    reader.readAsText(e.target.files[0]);
  }

  render() {
    return (
      <div>
        <h3>Upload KMZ</h3>
        <form>
          Please upload unzipped KML file for now! Will fix later.
          <input type="file" onChange={this.handleSelectedFile} />
        </form>
      </div>
    );
  }
}
