import React from 'react';
import logo from "../assets/red_dot.png"

//import {greatPlaceStyle} from './my_great_place_styles.js';

export default class RouteMarker extends React.Component {

  static defaultProps = {};

  render() {
    return (
       <div >
        <img src={logo} alt="Logo" style={{width: 10, height: 10}}/>
       </div>
    );
  }
}
