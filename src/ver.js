import React from "react";

import "./App.css";
import {Form, FormGroup} from "reactstrap";
import {GoogleApiWrapper} from "google-maps-react";
import RenderMaps from "./Components/RenderMaps";

class ver extends React.Component {
  state = {
    fields: {},
    apiStatus: false,
    latitude: 0,
    longitude: 0
  };
  
  
  render() {
    // console.log('this.props => ', this.props);
    const {values = {}} = this.props.location;
    const {
      firstName, lastName, state,address,zipcode, birthDate,
      education, feet, inches, phoneNumber, email
    } = values;
    // const {apiStatus, latitude, longitude} = this.state;
  
    return (
      <div className="ver">
        <div className="container">
          <div>
            <div className="card">
      <span><div className="card-header font-weight:bold text-center ">
      </div></span></div>
            <Form className="login-form">
              <h1><span className="font-weight-bold">Data Survey Verification Form</span></h1>
              <FormGroup>
                <h5> First Name :  {firstName}</h5>
                <h5> Last Name :  {lastName} </h5>
                <h5> State :  {state} </h5>
                <h5> Address :  {address}</h5> 
                <h5> Zipcode :  {zipcode}</h5>
                <h5> Education:  {education}</h5>
                <h5> Birthdate :  {birthDate}</h5>
                <h5> Height : Feet:  {feet} inches:  {inches}</h5>
                <h5> Phone Number:  {phoneNumber}</h5>
                <h5> Email :  {email}</h5>
              </FormGroup>
            </Form>
            <div>
  
  
              <RenderMaps address={address}/>
            </div>
          </div>
        </div>
              <h1><span className="font-weight-bold">Thank you for taking this survey !! </span></h1>
      </div>
    );
  }
}

export default GoogleApiWrapper({apiKey:'AIzaSyCq0PCyticO-YMJtoZ89VlJPrmhgQuJKes'})(ver);