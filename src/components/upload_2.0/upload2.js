import React, { useEffect, useState } from "react";
import "./upload2.css";
import Select from "react-select";
import { Country, State, City }  from 'country-state-city';
import Upload from "../upload/upload"
import "../signup/signup.css";
function Upload2() {
    const [state,setState] = useState("");
    const [city, setCity] = useState("");


  const updatedStates = (countryId) =>
  State
      .getStatesOfCountry(countryId)
      .map((state) => ({ label: state.name, value: state.id, ...state }));
  const updatedCities = (countryId, stateId) =>
  City
      .getCitiesOfState(countryId, stateId)
      .map((city) => ({ label: city.name, value: city.id, ...city }));

  

  useEffect(() => {console.log(state)}, [state]); 
  
  let operators = [
    {
      'value':'A',
      'label':'A'

    },
    {
      'value':'B',
      'label':'B'
    },
    {
      'value':'C',
      'label':'C'
    }
  ] 


  return (
  <div className="main">
      <div class="gfg-div">
    <div className="banner">
          <h1>Upload Banner </h1>
          <Upload />
    </div>
     <div clasName="css-1s2u09g-control">
        <Select
          placeholder="State"
          id="state"
          name="state"
          options={updatedStates("IN")}
          // value={state.label}
          onChange={(value) => {
            setState(value);
            console.log(value.name)
          }}
        />
      </div>
      <div clasName="css-1s2u09g-control"> 
        <Select
          placeholder="City"
          id="city"
          name="city"
          options={updatedCities("IN", state.isoCode)}
          // value={city.name}
          onChange={(value) => { 
            setCity(value);
            console.log(value.name)
          }}
        />
       </div>
       <div clasName="css-1s2u09g-control"> 
        <Select
          placeholder="Operator"
          id="operator"
          name="operator"
          options={operators}
          // value={city.name}

        />
       </div>

        <div onClick={() => window.location.reload(false)}>
        <button type="submit" className="gfg-button">Submit</button>
        </div>

    </div>
  </div>
  );
}

export default Upload2;