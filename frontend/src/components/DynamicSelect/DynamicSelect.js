import React, { Component } from 'react';

class DynamicSelect extends Component {
  constructor(props) {
    super(props);
  }

  //On the change event for the select box pass the selected value back to the parent
  handleChange = event => {
    let selectedValue = event.target.value;
    let hasChildren = false;
    this.props.onSelectChange(selectedValue, hasChildren);

    if (selectedValue === '3 - Kindergarten') {
      console.log('i match');
      hasChildren = true;
      this.props.onSelectChange(selectedValue, hasChildren);
    }
  };

  render() {
    let arrayOfData = this.props.arrayOfData;
    let options = arrayOfData.map(data => (
      <option key={data.id} value={data.id}>
        {data.name}
      </option>
    ));

    return (
      <select
        name='customSearch'
        className='custom-search-select'
        onChange={this.handleChange}
      >
        <option>Please Select</option> 
        {options}
      </select>
    );
  }
}

export default DynamicSelect;
