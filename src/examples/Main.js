import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import TopBar from '../components/TopBar.js'
import HighLevelSummary from '../components/HighLevelSummary.js'
import "../styles/HighLevelSummary.css"
import TimeSlider from '../components/TimeSlider.js'
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';



const AnyReactComponent = ({ text }) => <div>{text}</div>;


var pointsData = []
var a1, b1, total = 0

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

        mapTypeControl: true,
        mapTypeId: 'satellite',

        zoomControl: false,
        clickableIcons: false
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
      forActiveUpdate: false
    }
    this.getPoints(0)
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
    } else if (time >= 17) {
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
    total = total/2
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

  handleChange = (event, value) => {
    console.log(value)
    this.getPoints(value)
    this.setState({
      forActiveUpdate: !this.state.forActiveUpdate
    })
  };

  render() {
  /*  const { places } = this.state;
    const data = places.map(place => ({
      lat: place.geometry.location.lat,
      lng: place.geometry.location.lng,
      weight: Math.floor(Math.random() * Math.floor(5)),
    }));*/
    const data = pointsData.map(point => ({
      lat: point.lat,
      lng: point.lng,
      //weight: Math.floor(Math.random() * Math.floor(5)),
    }))

    const heatmapData = {
      positions: data,
      options: {
        radius: 15,
        opacity: 0.5,
      },
    };

    return (
      // Important! Always set the container height explicitly
      <div>
        <TopBar/>
        <div className="Summary">
          <HighLevelSummary/>
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
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
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
