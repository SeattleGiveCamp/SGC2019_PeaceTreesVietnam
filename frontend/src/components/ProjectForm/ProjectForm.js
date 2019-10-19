import React from 'react';
import formStyle from './project-form.module.scss';
import DynamicSelect from '../../components/DynamicSelect/DynamicSelect';

// TODO: This is just test data, remove when can populate from database call.
const arrayOfProjectCategories = [
  {
    id: '1 - Community Center',
    name: 'Community Center'
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
    id: '4 - Domestic Violence Shelter',
    name: 'Domestic Violence Shelter'
  },
  {
    id: '5 - Agricultural Project',
    name: 'Agricultural Project'
  }
];

const arrayOfSponsors = [
  {
    id: '1 - Sponsor 1',
    name: 'Sponsor 1'
  },
  {
    id: '2 - Sponsor 2',
    name: 'Sponsor 2'
  },
  {
    id: '3 - Sponsor 3',
    name: 'Sponsor 3'
  },
  {
    id: '4 - Sponsor 4',
    name: 'Sponsor 4'
  },
  {
    id: '5 - Add a New Sponsor',
    name: 'Add a New Sponsor'
  }
];

const arrayOfProjStatus = [
  {
    id: '1 - Paused',
    name: 'Paused'
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
    id: '4 - Complete',
    name: 'Complete'
  }
];

export default class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'Select a Category'
    };
  }

  handleSelectChange = selectedValue => {
    this.setState({
      selectedValue: selectedValue
    });

    console.log(selectedValue, 'selectedValue');
  };

  render() {
    return (
      <>
        <section>
          <p>X</p>
          <h1>Add a New Project</h1>
          <form>
            <div>
              <label>Project Name</label>
              <input></input>
            </div>
            <div>
              {/* TODO: Ask client if this is always a city/village. Could the value be populated with an API call using the lat/long? */}
              <label>Location Name</label>
              <input></input>
            </div>
            <div>
              <label>Latitude</label>
              <input type='number'></input>
            </div>
            <div>
              <label>Longitude</label>
              <input type='number'></input>
            </div>
            <div>
              <label>Type of Project</label>
              {/* TODO: Allow Multiple Selections */}
              <DynamicSelect
                arrayOfData={arrayOfProjectCategories}
                onSelectChange={this.handleSelectChange}
              />{' '}
            </div>
            <div>
              {/* TODO: Only Show this div if school is selected as a category */}
              {/* TODO: Ask client if any other project types have students */}
              <label>Number of Students</label>
              <input type='number'></input>
            </div>
            <div className='description-area'>
              <label>Project Description</label>
              <textarea></textarea>
            </div>
            <div>
              <label>Sponsors</label>
              <DynamicSelect
                arrayOfData={arrayOfSponsors}
                onSelectChange={this.handleSelectChange}
              />{' '}
            </div>
            <div>
              <label>Dedicated To</label>
              <input></input>
            </div>
            <div>
              <label>Current Status</label>
              <DynamicSelect
                arrayOfData={arrayOfProjStatus}
                onSelectChange={this.handleSelectChange}
              />{' '}
            </div>
            <button>Save Project</button>
          </form>
        </section>
      </>
    );
  }
}
