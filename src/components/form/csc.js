import React, { Component } from 'react';
import "./csc.css"
// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Upload from "../upload/upload"

class CSC extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: ''};
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }



  render () {
    const { country, region } = this.state;
    return (
      <div className='main'>
        <div classname='sub'> 
        <Upload />
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)} />
        <RegionDropdown
         className='region'
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)} />
        </div>
      </div>
    );
  }
}

export default CSC;