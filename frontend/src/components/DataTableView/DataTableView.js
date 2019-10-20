import React from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import tableStyle from "./data-table.module.scss";
import { Edit, Remove } from "@material-ui/icons";
import * as mapActions from "../../action/map-actions";

class ProjectTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { title: "Name", field: "projectName" },
        { title: "Status", field: "projectStatus" },
        { title: "Location", field: "location" },
        { title: "Latitude", field: "latitude" },
        { title: "Longitude", field: "longitude" },
        { title: "Type", field: "projectType" },
        { title: "Description", field: "description" },
        { title: "Sponsors", field: "sponsors" },
        { title: "Dedicated", field: "dedicatedTo" },
        { title: "Completed", field: "completedYear" },
        { title: "Planted", field: "plantedYear" },
        { title: "Image URL", field: "imageUrl" },
        { title: "Page URL", field: "pageUrl" }
      ]
    };
  }

  componentDidMount() {
    // On mount, get all projects from DB
    this.props.getAllProjects();
  }

  render() {
    const mapData = this.props.mapData;

    return (
      <div>
        {Object.entries(mapData).length > 0 ? (
          <MaterialTable
            title="Projects"
            columns={this.state.columns}
            data={mapData}
            editable={{
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    this.props.updateProject(newData, oldData);
                  }, 600);
                }),
              onRowDelete: oldData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    this.props.deleteProject(oldData);
                  }, 600);
                })
            }}
          />
        ) : (
          undefined
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mapData: state.mapData
});

const mapDispatchToProps = dispatch => ({
  getAllProjects: () => dispatch(mapActions.getAllProjects()),
  deleteProject: project => dispatch(mapActions.deleteProject(project)),
  updateProject: (newData, oldData) =>
    dispatch(mapActions.updateProject(newData, oldData))
  // getAllOrdnances: () => dispatch(mapActions.getAllOrdnances())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectTable);
