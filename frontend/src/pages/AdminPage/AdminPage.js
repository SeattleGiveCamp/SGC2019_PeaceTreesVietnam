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

      // Convert our file to an XML dom
      var parser = new DOMParser();
      var xmldom = parser.parseFromString(text, "text/xml");

      // Read our XML file as JSON
      var geoJsonData = kml(xmldom);

      // We need to do some additional work to "fully" convert the `geoJsonData` to JSON.
      
      for (var featureNum in geoJsonData.features) {
        var feature = geoJsonData.features[featureNum];
        if (!feature) { continue; }

        // In geoJsonData.features array, each element (object) has a `.properties.description` string containing raw HTML
        // Parse that raw HTML string into an actual JS DOM object
        var propertiesDom = window.document.createRange().createContextualFragment(feature.properties.description);
        // We want to convert the table rows to JSON
        var tableRows = propertiesDom.querySelectorAll("table tr");

        // And this JSON will be stored under a new key, `parsedProperties`
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

          // We add a key-value pair in the format:
          // {label: value} as defined above
          geoJsonData.features[featureNum].parsedProperties[dataPointLabel] = dataPointValue;
        }
      }

      console.log("Able to read all of the table data");
      // This is the final data, which shall be processed further once we move this code to the server.
      console.log(geoJsonData);
    }

    // Read the uploaded file as text
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
