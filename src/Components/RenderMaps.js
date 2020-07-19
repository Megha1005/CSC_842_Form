import React from "react";
import {GoogleApiWrapper, Map, Marker} from "google-maps-react";

const axios = require('axios').default;


class RenderMaps extends React.Component {
  // initializes state
  constructor(props) {
    
    super(props)
    this.state = {
      latitude: "",
      longitude: "",
      address: "",
      apiStatus: false
    }
  }
  
  mapStyles = {
    width: '40%',
    height: '50%',
    margin: '5%'
  };
  
  
  componentDidMount() {
    // console.log("zzz this props =>", this.props);
    const {address} = this.props;
    // console.log("address => ", address);
    const encodedAddress = encodeURI(address);

    let self = this;
    
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCq0PCyticO-YMJtoZ89VlJPrmhgQuJKes`)
      .then(function (response) {
        // handle success
        console.log(response);
        const {data} = response;
        const {results} = data;
        const values = results[0];
        const {geometry} = values;
        const {location} = geometry;
        const {lat, lng} = location;
        self.setState({apiStatus: true})
        self.setState({latitude: lat, longitude: lng});
        console.log('location = ', location);
        
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  
  
  render() {
    const {latitude, longitude, apiStatus} = this.state;
    console.log('apiStatus => ', apiStatus);
    console.log('latitude => ', latitude);
    return (
      <div>
        <form onSubmit={(e) => console.log('submit')}>
          {/*  render the output map here*/}
          {latitude > 0 && <Map
            google={this.props.google}
            zoom={12}
            style={this.mapStyles}
            initialCenter={{lat: latitude, lng: longitude}}
          >
            <Marker position={{lat: latitude, lng: longitude}}/>
          </Map>}
        </form>
      </div>
    )
  }
}

export default GoogleApiWrapper(
  (props) => ({
      apiKey: "AIzaSyCq0PCyticO-YMJtoZ89VlJPrmhgQuJKes",
    }
  ))(RenderMaps)