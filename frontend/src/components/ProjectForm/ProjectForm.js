import React from "react";
import DynamicSelect from "../../components/DynamicSelect/DynamicSelect";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as mapActions from "../../action/map-actions";
// TODO: This is just test data, remove when can populate from database call.
const arrayOfProjectCategories = [
  {
    id: "1 - Community Project",
    name: "Community Project"
  },
  {
    id: "2 - Library",
    name: "Library"
  },
  {
    id: "3 - Kindergarten",
    name: "Kindergarten"
  },
  {
    id: "4 - Economic Development Project",
    name: "Economic Development Project"
  },
  {
    id: "5 - Other",
    name: "Other"
  }
];

const arrayOfProjStatus = [
  {
    id: "1 - Repurposed",
    name: "Repurposed"
  },
  {
    id: "2 - Planned",
    name: "Planned"
  },
  {
    id: "3 - Under Construction",
    name: "Under Construction"
  },
  {
    id: "4 - Under Cultivation",
    name: "Under Cultivation"
  },
  {
    id: "5 - Complete",
    name: "Complete"
  }
];

// const formInputDefaultState = {
//   projectName: '',
//   location: '',
//   latitude: '',
//   longitude: '',
//   projectType: '',
//   description: '',
//   sponsors: '',
//   dedicatedTo: '',
//   projectStatus: '',
//   completedYear: '',
//   plantedYear: '',
//   imageUrl: '',
//   pageUrl: ''
// };

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      selectedValue: "Select a Category",
      hasChildren: false,
      projectName: "",
      location: "",
      latitude: "",
      longitude: "",
      projectType: "",
      description: "",
      sponsors: "",
      dedicatedTo: "",
      projectStatus: "",
      completedYear: "",
      plantedYear: "",
      imageUrl: "",
      pageUrl: ""
    };
  }

  handleSelectChange = (selectedValue, hasChildren) => {
    this.setState({
      selectedValue: selectedValue,
      hasChildren: hasChildren
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("projectName", this.state.projectName);
    formData.append("location", this.state.location);
    formData.append("latitude", this.state.latitide);
    formData.append("longitude", this.state.longitude);
    formData.append("projectType", this.state.projectType);
    formData.append("description", this.state.description);
    formData.append("sponsors", this.state.sponsors);
    formData.append("dedicatedTo", this.state.dedicatedTo);
    formData.append("projectStatus", this.state.projectStatus);
    formData.append("completedYear", this.state.completedYear);
    formData.append("plantedYear", this.state.plantedYear);
    formData.append("imageUrl", this.state.imageUrl);
    formData.append("pageUrl", this.state.pageUrl);

    console.log("submit");
    this.props.addProject(formData);

    // fetch('https://ptbackendapp.herokuapp.com/', {
    //   method: 'POST',

    //   body: formData //data is an object

    //   // headers: { 'Content-Type': 'application/json' }
    // })
    //   .then(res => console.log(res))

    //   .catch(error => console.error('Error:', error))

    //   .then(response => console.log('Success:', response));
  }

  showYear = () => {
    return (
      <div>
      <div style={{justifyContent: "flex-start"}}>
        <label>Year Completed</label>
        </div>
        <br/>
        <input
          name="completedYear"
          value={this.state.completedYear}
          required
          type="text"
          onChange={this.handleChange}
        ></input>
      </div>
    );
  };

  showPlanted = () => {
    return (
      <div>
      <div style={{justifyContent: "flex-start"}}>
        <label>Year Planted</label>
      </div>
      <br/>
        <input
          name="plantedYear"
          value={this.state.plantedYear}
          required
          type="text"
          onChange={this.handleChange}
        ></input>
      </div>
    );
  };

  render() {
    return (
      <>
      <Container fixed>
        <section style={{margin: "50px 0", boxShadow: "2px 1px 30px grey", border: "none"}}>
          <p>X</p>
          <h1 style={{marginBottom: "30px"}}>Add a New Project</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                name='projectName'
                value={this.state.projectName}
                required
                onChange={this.handleChange}
                placeholder="Project Name"
              ></input>
            </div>
            <div>
              <input
                name='location'
                value={this.state.location}
                required
                onChange={this.handleChange}
                placeholder="Location"
              ></input>
            </div>
            <div>
              <input
                required
                name='latitude'
                type='number'
                step='0.0000001'
                value={this.state.latitude}
                onChange={this.handleChange}
                placeholder="Latitude"
              ></input>
            </div>
            <div>
              <input
                required
                name='longitude'
                type='number'
                step='0.0000001'
                value={this.state.longitude}
                onChange={this.handleChange}
                placeholder="Longitude"
              ></input>
            </div>
            <div style={{justifyContent: "flex-start"}}>
            <label>Type of Project</label>
            </div>
            <div>
              <DynamicSelect
                name={'projectType'}
                id="projectType"
                arrayOfData={arrayOfProjectCategories}
                onSelectChange={this.handleSelectChange}
                required
                value={this.state.projectType}
                onChange={this.handleChange}
                placeholder="Type of Project"
                />
            </div>
            <div className='description-area'>
              <textarea
                value={this.state.description}
                name='description'
                onChange={this.handleChange}
                placeholder="Project Description"
              ></textarea>
            </div>
            <div>
              <input
                name='sponsors'
                value={this.state.sponsors}
                type='text'
                onChange={this.handleChange}
                placeholder="Sponsors"
              ></input>
            </div>
            <div>
              <input
                name='dedicatedTo'
                value={this.state.dedicatedTo}
                onChange={this.handleChange}
                placeholder="Dedicated To"
              ></input>
            </div>
            <div style={{justifyContent: "flex-start"}}>
            <label>Current Status</label>
            </div>
            <div>
              <DynamicSelect
              name={'projectStatus'}
              arrayOfData={arrayOfProjStatus}
              onSelectChange={this.handleSelectChange}
              required
              value={this.state.projectStatus}
              onChange={this.handleChange}
              placeholder="Current Status"
              style={{margin: 0}}
              />
            </div>
            {this.state.selectedValue === '5 - Complete'
              ? this.showYear()
              : undefined}
            {this.state.selectedValue === '4 - Under Cultivation'
              ? this.showPlanted()
              : undefined}
            <div style={{justifyContent: "flex-start"}}>
              <a href="/manual" style={{color: "black", fontSize: "1rem", margin: 0, textDecoration: "none"}}><i class="fas fa-info-circle"></i>  Click here to see instructions on image URL and Project Page URL</a>
            </div>
            <div>
              <input
                name='imageUrl'
                value={this.state.imageUrl}
                type='url'
                onChange={this.handleChange}
                placeholder="Image URL"
              ></input>
            </div>
            <div>
              <input
                name='pageUrl'
                value={this.state.pageUrl}
                type='url'
                onChange={this.handleChange}
                placeholder="Project Page URL"
              ></input>
            </div>
            <div style={{justifyContent: "center", margin: "10px 0"}}>
              <Button variant="contained" style={{width: "200px", background: "black", color:"white"}}>Save Project</Button>
            </div>
          </form>
        </section>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addProject: formData => dispatch(mapActions.addProject(formData))
  // getAllOrdnances: () => dispatch(mapActions.getAllOrdnances())
});

export default connect(
  null,
  mapDispatchToProps
)(ProjectForm);
