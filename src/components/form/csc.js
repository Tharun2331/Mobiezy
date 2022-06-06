import React, { Component } from 'react';
import "./csc.css"
// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { StateDropdown, RegionDropdown } from 'react-india-state-region-selector';
import Upload from "../upload/upload"
import CustomButton from "../custombutton/custombutton"
class CSC extends Component {
  constructor (props) {
    super(props);
    this.state = { State: '', region: '' };
  }

  selectState (val) {
    this.setState({ State: val });
  }
 
  selectRegion (val) {
    this.setState({ region: val });
  }




  render () {
    const { State, region } = this.state;
    return (
    <div className="upload">
        <div className="banner">
          <h1>Upload Banner </h1>
          <Upload />
        </div>
        <StateDropdown
          name="state"
          classes="state"
          value={State}
          onChange={(val) => this.selectState(val)} />
        <RegionDropdown
          placeholder="City"
          blankOptionLabel="Select Region"
          classes="city"
          State={State}
          value={region}
          onChange={(val) => this.selectRegion(val)} />
        <select  className='operator' name="Operator">
           <option>Operator</option>
           <option>A</option>
           <option>B</option>
           <option>C</option>
           <option>D</option>
        </select>
        <CustomButton className="buttons">
            Submit
        </CustomButton>
      </div>
    );
  }
}

export default CSC;

