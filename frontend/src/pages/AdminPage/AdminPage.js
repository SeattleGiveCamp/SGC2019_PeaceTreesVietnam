import React from "react";
import { Link } from "react-router-dom";
import { kml } from "./togeojson";
import { connect } from "react-redux";
import {
  Card,
  CardContent,
  Button,
  CardActions
} from "@material-ui/core";
import "./AdminPage.scss";
import * as ordnanceActions from "../../action/ordnance-actions";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelectedFile = this.handleSelectedFile.bind(this);
    this.state = {
      ordnanceData: null,
      uploaded: false,
      csvLink: null,
      csvLinkHref: null
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

      var ordnanceList = [{ lat: "lat", lon: "lon" }];

      for (var featureNum in geoJsonData.features) {
        var feature = geoJsonData.features[featureNum];
        if (!feature) {
          continue;
        }

        var coordinates = feature.geometry.coordinates;

        var lon = +coordinates[0].toFixed(5);
        var lat = +coordinates[1].toFixed(5);

        ordnanceList.push({ lat: lat, lon: lon });
      }

      console.log("Able to read all of the table data");
      // This is the final data, which shall be processed further once we move this code to the server.
      var csvContent = "";
      ordnanceList.forEach(function(ordnanceCoords) {
        let row = ordnanceCoords.lat + "," + ordnanceCoords.lon;
        csvContent += row + "\r\n";
      });

      ordnanceList.shift();
      this.setState({ ordnanceList });
      console.log(ordnanceList);

      // Create a link, and click it to download the data
      var element = window.document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf=8," + encodeURIComponent(csvContent)
      );
      const link =
        "data:text/plain;charset=utf=8," + encodeURIComponent(csvContent);
      element.setAttribute("download", "mine-data.csv");
      this.setState({ csvLinkHref: link });
      this.setState({ csvLink: "mine-data.csv" });
      // element.click();
    };

    // Read the uploaded file as text
    reader.readAsText(e.target.files[0]);
  };

  uploadFile = () => {
    this.props.postOrdnanceData(this.state.ordnanceData);
    this.setState({ uploaded: true });
  };

  render() {
    return (
      <div class="container">
        <h1>Admin Dashboard</h1>
        <div className="dashboard">
          <Card className="card">
            <CardContent>
              <h3>Upload mine data KML file</h3>
              <form>
                {this.state.uploaded ? (
                  <p>
                    Upload Successful. Click{" "}
                    <a
                      href={this.state.csvLinkHref}
                      download={this.state.csvLink}
                    >
                      here
                    </a>{" "}
                    if you'd like to download the data as a .csv.
                  </p>
                ) : (
                  <p>
                    Please upload unzipped KML file for now! Will provide
                    support for KMZ later.
                  </p>
                )}
                <div>
                  <input
                    type="file"
                    onChange={this.handleSelectedFile}
                    className="upload"
                    accept="application/vnd.google-earth.kml+xml,application/vnd.google-earth.kmz"
                  />
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={this.uploadFile}
                  >
                    Upload
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <h3>Add project</h3>
              Add a new project to the database. This will update the map.
            </CardContent>
            <CardActions>
              <Link to="/form">
                <Button variant="outlined" size="small">
                  Add Project
                </Button>
              </Link>
            </CardActions>
          </Card>

          <Card className="card">
            <CardContent>
              <h3>Project table</h3>
              View all existing projects. This is also where you will update or
              delete current projects. Changes made here will update the map.
            </CardContent>
            <CardActions>
              <Link to="/table">
                <Button variant="outlined" size="small">
                  View All Projects
                </Button>
              </Link>
            </CardActions>
          </Card>
          <Card className="card">
            <CardContent>
              <h3>Logout</h3>
              Logout from dashboard.
            </CardContent>
            <CardActions>
              <Link to="/logout">
                <Button variant="outlined" size="small">
                  Logout
                </Button>
              </Link>
            </CardActions>
          </Card>
        </div>
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
