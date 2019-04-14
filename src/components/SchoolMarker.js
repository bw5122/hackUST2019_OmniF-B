import React from 'react';
import logo from "../assets/school.png"

//import {greatPlaceStyle} from './my_great_place_styles.js';

export default class SchoolMarker extends React.Component {

  static defaultProps = {};

  render() {
    return (
       <div >
        <img src={logo} alt="Logo" style={{width: 50, height: 50}}/>
       </div>
    );
  }
}
