import React from 'react';
import formStyle from './project-form.module.scss';
import DynamicSelect from '../../components/DynamicSelect/DynamicSelect';

// TODO: This is just test data, remove when can populate from database call.
const arrayOfProjectCategories = [
  {
    id: '1 - Community Project',
    name: 'Community Project'
  },
  {
    id: '2 - Library',
    name: 'Library'
  },
  {
    id: '3 - Kindergarten',
    name: 'Kindergarten'
  },
  {
    id: '4 - Economic Development Project',
    name: 'Economic Development Project'
  },
  {
    id: '5 - Other',
    name: 'Other'
  }
];

const arrayOfProjStatus = [
  {
    id: '1 - Repurposed',
    name: 'Repurposed'
  },
  {
    id: '2 - Planned',
    name: 'Planned'
  },
  {
    id: '3 - Under Construction',
    name: 'Under Construction'
  },
  {
    id: '4 - Under Cultivation',
    name: 'Under Cultivation'
  },
  {
    id: '5 - Complete',
    name: 'Complete'
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

export default class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      selectedValue: 'Select a Category',
      hasChildren: false,
      projectName: '',
      location: '',
      latitude: '',
      longitude: '',
      projectType: '',
      description: '',
      sponsors: '',
      dedicatedTo: '',
      projectStatus: '',
      completedYear: '',
      plantedYear: '',
      imageUrl: '',
      pageUrl: ''
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
    console.log(event.target);
    console.log(this.state.projectName);
    formData.append('projectName', this.state.projectName);
    formData.append('location', this.state.location);
    formData.append('latitude', this.state.latitide);
    formData.append('longitude', this.state.longitude);
    formData.append('projectType', this.state.projectType);
    formData.append('description', this.state.description);
    formData.append('sponsors', this.state.sponsors);
    formData.append('dedicatedTo', this.state.dedicatedTo);
    formData.append('projectStatus', this.state.projectStatus);
    formData.append('completedYear', this.state.completedYear);
    formData.append('plantedYear', this.state.plantedYear);
    formData.append('imageUrl', this.state.imageUrl);
    formData.append('pageUrl', this.state.pageUrl);

    fetch('https://ptbackendapp.herokuapp.com/', {
      method: 'POST',

      body: formData //data is an object

      // headers: { 'Content-Type': 'application/json' }
    })
      .then(res => console.log(res))

      .catch(error => console.error('Error:', error))

      .then(response => console.log('Success:', response));
  }

  showYear = () => {
    return (
      <div>
        <label>Year Completed</label>
        <input
          name='completedYear'
          value={this.state.completedYear}
          required
          type='text'
          onChange={this.handleChange}
        ></input>
      </div>
    );
  };

  showPlanted = () => {
    return (
      <div>
        <label>Year Planted</label>
        <input
          name='plantedYear'
          value={this.state.plantedYear}
          required
          type='text'
          onChange={this.handleChange}
        ></input>
      </div>
    );
  };

  render() {
    return (
      <>
        <section>
          <p>X</p>
          <h1>Add a New Project</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Project Name</label>
              <input
                name='projectName'
                value={this.state.projectName}
                required
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label>Location</label>
              <input
                name='location'
                value={this.state.location}
                required
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label>Latitude</label>
              <input
                required
                name='latitude'
                type='number'
                step='0.0000001'
                value={this.state.latitude}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label>Longitude</label>
              <input
                required
                name='longitude'
                type='number'
                step='0.0000001'
                value={this.state.longitude}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label>Type of Project</label>
              <DynamicSelect
                name={'projectType'}
                arrayOfData={arrayOfProjectCategories}
                onSelectChange={this.handleSelectChange}
                required
                value={this.state.projectType}
                onChange={this.handleChange}
              />
            </div>
            <div className='description-area'>
              <label>Project Description</label>
              <textarea
                value={this.state.description}
                name='description'
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div>
              <label>Sponsors</label>
              <input
                name='sponsors'
                value={this.state.sponsors}
                type='text'
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label>Dedicated To</label>
              <input
                name='dedicatedTo'
                value={this.state.dedicatedTo}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label>Current Status</label>
              <DynamicSelect
                name={'projectStatus'}
                arrayOfData={arrayOfProjStatus}
                onSelectChange={this.handleSelectChange}
                required
                value={this.state.projectStatus}
                onChange={this.handleChange}
              />
            </div>
            {this.state.selectedValue === '5 - Complete'
              ? this.showYear()
              : undefined}
            {this.state.selectedValue === '4 - Under Cultivation'
              ? this.showPlanted()
              : undefined}
            <div>
              <label>Image URL</label>
              <input
                name='imageUrl'
                value={this.state.imageUrl}
                type='url'
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label>Project Page URL</label>
              <input
                name='pageUrl'
                value={this.state.pageUrl}
                type='url'
                onChange={this.handleChange}
              ></input>
            </div>
            <button>Save Project</button>
          </form>
        </section>
      </>
    );
  }
}
