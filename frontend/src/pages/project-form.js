import React from 'react';

import app from '../styles/location-form.module.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <section>
          {/* TODO: Switch <p> to a button to close? */}
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
              {/* TODO: Populate Options Dynamically */}
              {/* TODO: Allow Multiple Selections */}
              <select>
                <option>Select a Category</option>
                <option>Community Center</option>
                <option>Library</option>
                <option>Kindergarten</option>
                <option>Domestic Violence Shelter</option>
                <option>Agricultural Project</option>
              </select>
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
              {/* TODO: Dynamically populate based on a list of sponsors but be able to add a new sponsor */}
              <select>
                <option>Select a Category</option>
                <option>Sponsor 1</option>
                <option>Sponsor 2</option>
                <option>Sponsor 3</option>
                {/* TODO: Add functionality to add a new sponsor after selecting add sponsor from the list */}
                <option>Add New Sponsor</option>
              </select>
            </div>
            <div>
              <label>Dedicated To</label>
              <input></input>
            </div>
            <div>
              <label>Current Status</label>
              {/* TODO: Dynamically populate based on a list of sponsors but be able to add a new sponsor */}
              <select>
                <option>Select a Category</option>
                <option>Paused</option>
                <option>Planned</option>
                <option>Under Construction</option>
                <option>Complete - In Operation</option>
              </select>
            </div>
            <button>Save Project</button>
          </form>
        </section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  api: state.data
});

const mapDispatchToProps = (dispatch, getState) => ({
  get: url => dispatch(actions.get(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
