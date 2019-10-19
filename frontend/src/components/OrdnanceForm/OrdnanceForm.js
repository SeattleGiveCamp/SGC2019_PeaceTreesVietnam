import React from "react";

import DynamicSelect from "../DynamicSelect/DynamicSelect";

export default class OrdnanceForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {location: "", category: "", subcategory: "", lat: 0, long: 0};
    
    this.categories = [
      {id: 'mine', name: 'mine'}
    ];

    this.subcategories = [
      {id: 'explosive', name: 'explosive'}
    ];

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubcategoryChange = this.handleSubcategoryChange.bind(this);
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLongChange = this.handleLongChange.bind(this);

    this.submitOrdnance = this.submitOrdnance.bind(this);
  }

  handleLocationChange(e) {
    this.setState({location: e.target.value});
  }

  handleCategoryChange(e) {
    // TODO: "e" is currently the selected option's value.

    // I'd like to change that to just 'event'
    var selectedValue = e;
    this.setState({category: e});
  }

  handleSubcategoryChange(e) {
    // TODO: See above Todo
    var selectedValue = e;
    this.setState({subcategory: e});
  }

  handleLatChange(e) {
    this.setState({lat: e.value});
  }

  handleLongChange(e) {
    this.setState({long: e.value});
  }

  submitOrdnance(e) {
    alert("Submitted ordnance");
  }

  render() {
    return (
      <div>
        <form>
        <div>
          <label>
            Location:
            <input type="text" value={this.state.location} onChange={this.handleLocationChange} />
          </label>
        </div>

        <div>
          <label>
            Category:
            <DynamicSelect
              name={'ordnance-category'}
              arrayOfData={this.categories}
              onSelectChange={this.handleCategoryChange} />
          </label>
        </div>

        <div>
          <label>
            Sub-category:
            <DynamicSelect
              name={'ordnance-subcategory'}
              arrayOfData={this.subcategories}
              onSelectChange={this.handleSubcategoryChange} />
          </label>
        </div>

        <div>
          <label>Lat:
            <input type="number" min="-90" max="90" value={this.state.lat} onChange={this.handleLatChange} />
          </label>

          <label>Long:
            <input type="number" min="-180" max="180" value={this.state.long} onChange={this.handleLongChange} />
          </label>
        </div>

        <div>
          <button type="submit" onClick={this.submitOrdnance}>Add</button>
        </div>
        </form>
      </div>

    );
  }
}
