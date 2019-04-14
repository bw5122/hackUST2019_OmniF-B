import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import TopBar from '../components/TopBar.js'
import HighLevelSummary from '../components/HighLevelSummary.js'
import "../styles/HighLevelSummary.css"
import TimeSlider from '../components/TimeSlider.js'
import FoodTruckMarker from '../components/FoodTruckMarker.js'
import SchoolMarker from '../components/SchoolMarker.js'
import KFCMarker from '../components/KFCMarker.js'
import CBDMarker from '../components/CBDMarker.js'
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import Marker from '../components/Marker';
import RouteMarker from '../components/RouteMarker';
import TrucksInfoSummary from '../components/TrucksInfoSummary';
import  routes from "../assets/demoRoutes.json"




const AnyReactComponent = ({ text }) => <div>{text}</div>;


var pointsData = []
var a1, b1, total = 0
var mapObj, mapsObj
var mapTrigger, routeTrigger;


function getMapOptions () {

    return {
        streetViewControl: false,
        scaleControl: true,
        fullscreenControl: false,
        styles: [{
            featureType: "poi.business",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }],
        gestureHandling: "greedy",
        disableDoubleClickZoom: true,
        minZoom: 11,
        maxZoom: 18,


        zoomControl: false,
        //clickableIcons: false
    };
}



class SimpleMap extends Component {

  static defaultProps = {
    center: {
      lat: 22.28,
      lng: 114.15
    },
    zoom: 15,
    mapTypeId: 'satellite'
  };

  constructor(props){
    super(props);
    this.state = {
      points:[],
      forActiveUpdate: false,
      showTruckInfo: false,
      truckPos:{"lat": -1, "lng": -2}
    }
    this._onChildClick = this._onChildClick.bind(this)
    this.getPoints(0)
  }

  handleApiLoaded(map, maps){
    mapObj = map;
    mapsObj = maps;
    this.handleGoogleMapApi(map)
  }


  getPoints(time) {
    pointsData = []
    if (time >= 0 && time <= 7) {
        total = 1500
        a1 = 500
        b1 = 1000
    } else if (time >= 8 && time <= 10) {
        total = 3000
        a1 = 500
        b1 = 1750
    } else if (time >= 11 && time <= 13) {
        total = 3000
        a1 = 750
        b1 = 2250
    } else if (time >= 14 && time <= 16) {
        total = 3000
        a1 = 750
        b1 = 1500
    } else if (time == 17) {
        total = 3000
        a1 = 1000
        b1 = 2000
    } else if (time >= 18 && time <= 21) {
       total = 3000
       a1 = 750
       b1 = 2250
    } else {
       total = 2100
       a1 = 700
       b1 = 1400
    }
    var a = 0;
    var points = []
  //  total = total/2
    while (a < total) {
        var la = 22.275 + Math.random() / 250 + Math.random() / 100 + Math.random() / 1000 + Math.random() / 10000
        var lo = 114.14 + Math.random() / 100 + Math.random() / 100 + Math.random() / 1000 + Math.random() / 10000
        if (la < 22.276 && lo < 114.149) {
            continue;
        }
        if (a > a1) {
            lo = 114.15 + Math.random() / 100 + Math.random() / 100 + Math.random() / 1000 + Math.random() / 10000
            la = 22.275 + Math.random() / 150 + Math.random() / 1000 + Math.random() / 10000
        }
        if (a > b1) {
            lo = 114.13 + Math.random() / 100 + Math.random() / 100 + Math.random() / 1000 + Math.random() / 10000
            la = 22.282 + Math.random() / 150 + Math.random() / 1000 + Math.random() / 10000
        }
        let point = { "lat": la, "lng":lo};

        pointsData.push(point)
        a += 1;
    }
    return points;
  }

  handleChange = (event, time) => {
    this.getPoints(time)
    let lat, lng = 0;
    if (time >= 0 && time <= 7) {
      lat = -1
      lng = -1
    } else if (time >= 8 && time <= 10) {
        routeTrigger.setMap(mapTrigger)
        lat = 22.287782
        lng = 114.142380
    } else if (time >= 11 && time <= 13) {
        lat = 22.28197
        lng = 114.156220
    } else if (time >= 14 && time <= 16) {
        lat = 22.286115
        lng = 114.136765
    } else if (time == 17) {

    } else if (time >= 18 && time <= 21) {

    } else {

    }
    this.setState({
      forActiveUpdate: !this.state.forActiveUpdate,
      truckPos: {"lat": lat, "lng":lng}
    })


  };

  handleGoogleMapApi(google){
    console.log("google: ", google)
      var flightPath = new google.maps.Polyline({
        path: routes.routes,
        geodesic: true,
        strokeColor: '#33BD4E',
        strokeOpacity: 1,
        strokeWeight: 5
      });

      routeTrigger = flightPath
      mapTrigger = google.map
    //  flightPath.setMap(google.map);
  }


  showTruckInfo(){
    console.log("show truck info")
  }

  _onChildClick(){
      console.log("click")
      this.setState({
        showTruckInfo: true
      })
  }

  _onChildMouseEnter(){
    console.log("enter")
  }

  _onChildMouseLeave(){
    console.log("leave")

  }


  render() {
  /*  const { places } = this.state;
    const data = places.map(place => ({
      lat: place.geometry.location.lat,
      lng: place.geometry.location.lng,
      weight: Math.floor(Math.random() * Math.floor(5)),
    }));*/
    /*
    var routeMarkers = routes.routes.map( function(point){
          return <RouteMarker
            lat={point.lat}
            lng={point.long}
          />
      });*/

    const data = pointsData.map(point => ({
      lat: point.lat,
      lng: point.lng,
      //weight: Math.floor(Math.random() * Math.floor(5)),
    }))

    const heatmapData = {
      positions: data,
      options: {
        radius: 12,
        opacity: 0.3,
      },
    };

    return (
      // Important! Always set the container height explicitly
      <div>
        <TopBar/>
        <div className="Summary">
          {(this.state.showTruckInfo)?<TrucksInfoSummary/>:<HighLevelSummary/>}
          <div style={{ height: '80vh', width: '75%'}}>
            <GoogleMapReact
              bootstrapURLKeys={{
                  key: 'AIzaSyAZy72bo0YNH6durffAHAoA-pTF6JGiQkE',
                  libraries: ['visualization']}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              mapTypeControlOptions={this.props.mapTypeId}
              heatmap={heatmapData}
              options={getMapOptions}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={this.handleGoogleMapApi}
              onChildClick={this._onChildClick}
              onChildMouseEnter={this._onChildMouseEnter}
              onChildMouseLeave={this._onChildMouseLeave}
            >

              <FoodTruckMarker key={1} lat={this.state.truckPos.lat} lng={this.state.truckPos.lng} onClick={this.showTruckInfo}/>
              <KFCMarker key={2} lat={22.285360} lng={114.155305}/>
              <KFCMarker key={3} lat={22.287910} lng={114.151265}/>
              <SchoolMarker key={4} lat={22.285115} lng={114.134765}/>
              <SchoolMarker key={5} lat={22.284771} lng={114.139053}/>
              <CBDMarker key={5} lat={22.281797} lng={114.158320}/>


            </GoogleMapReact>
            <Typography component="h3" style={{marginBottom:10}}>
              Daily Timeline
            </Typography>
            <Typography component="p" style={{marginBottom:-10}}>
              0:00&emsp;&emsp;&emsp;&emsp;&emsp;3:00
              &emsp;&emsp;&emsp;&emsp;&emsp;6:00
              &emsp;&emsp;&emsp;&emsp;&emsp;9:00
              &emsp;&emsp;&emsp;&emsp;&emsp;12:00
              &emsp;&emsp;&emsp;&emsp;&emsp;15:00
              &emsp;&emsp;&emsp;&emsp;&emsp;18:00
              &emsp;&emsp;&emsp;&emsp;&emsp;21:00
              &emsp;&emsp;&emsp;&emsp;&emsp;23:59
            </Typography>
            <TimeSlider min={0} max={24} handleChange={this.handleChange}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleMap;
