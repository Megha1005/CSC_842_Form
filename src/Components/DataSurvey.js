import React, {Component} from 'react';
import '../App.css';
import {Form, FormGroup, Input, Label} from "reactstrap";
import {Redirect} from "react-router";

var Recaptcha = require('react-recaptcha');
const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

export default class DataSurvey extends Component {
  constructor(props) {
    
    super(props)
    this.renderRedirect = this.renderRedirect.bind(this);
     this.Recaptchaloaded =this.Recaptchaloaded.bind(this);
     this.verifyCallback = this.verifyCallback.bind(this);
    

    
    this.state = {
      validatePage: false,
      isVerified: false,
      value: '',
      redirect: false,
      firstName: '',
      lastName: '',
      state: '',
      address: '',
      zipcode:'',
      birthDate: null,
      education: '',
      feet: 0,
      inches: 0,
      phoneNumber: null,
      email: '',
      confirmEmail: null,
      errorMessage: null,
      agreeConditions: false
    }    

  }

  
  Recaptchaloaded() {
    console.log('Recaptcha successfully loaded');
  }
  
  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true,
      })
    }
  }

 
  
  renderRedirect = (e) => {
    e.preventDefault();
    this.setState({validatePage: true});

    if(this.state.firstName.length === 0 || this.state.lastName.length === 0 ||  this.state.state.length === 0 ||
       this.state.address.length === 0 || this.state.zipcode.length === 0 ||  this.state.birthDate === null || 
       this.state.phoneNumber.length === 0 || this.state.email.length === 0 || this.state.confirmEmail.length === 0) {
        alert("Required fields marked with * cannot be empty!");
        this.setState({validatePage: false});
       }

    if(this.state.email !== this.state.confirmEmail){
      alert("Email ids dont match. Please re-enter!");
      this.setState({validatePage: false});
    } 
    
    if (this.state.phoneNumber.length !== 7) {
        alert("Phone number length should be 7 digits!");
        this.setState({validatePage: false});
    }

    if(this.state.address.length > 40) {
      alert("Address length should be less than 40 characters!");
      this.setState({validatePage: false});
    }

    if(this.state.zipcode.length !== 5) {
      alert("Zipcode should contain exactly 5 digits!");
      this.setState({validatePage: false});
    }

    if(!validEmailRegex.test(this.state.email)){
      alert("Invalid Email address !");
      this.setState({validatePage: false});
    }

    if(!this.state.agreeConditions) {
      alert("Please agree to the terms and conditions!");
      this.setState({validatePage: false});
    }

    if (this.state.validatePage)
    {
      this.setState({
      redirect: true
    })}
        
  }
  
  inputState = () => {
    return (
      <div className="mb-3">
        <label>State <span style={{"color": "red"}}>*</span></label>
        <select id="State" className="form-control" placeholder="Enter your City"
                maxLength="40" pattern="[A-Za-z\s]+" required
                onChange={(e) => this.setState({state: e.target.value})}>
          <option selected>Select one</option>
          <option value="AS">American Samoa</option>
          <option value="GU">Guam</option>
          <option value="MP">Northern Mariana Islands</option>
          <option value="PR">Puerto Rico</option>
          <option value="UM">United States Minor Outlying Islands</option>
          <option value="VI">Virgin Islands</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>    
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
          value = {this.state.city}
          onChange = {(e) => this.setState({city: e.target.value})}
        </select>
      </div>
    )
  }
  
  inputEducation = () => {
    return (
      <div className="mb-3">
        <label>Education Level (Optional)</label>
        <select id="inputEducation" name="Education"
                className="form-control"
                onChange={(e) => this.setState({education: e.target.value})}
                placeholder="Enter your highest education">
          <option>Enter your highest Education</option>
          <option> Other</option>
          <option>High School</option>
          <option>College</option>
          <option>Graduate Study</option>
          <option>PHD</option>
          
          value = {this.state.education}
          onChange = {(e) => this.setState({education: e.target.value})}
        </select>
      </div>
    
    )
    
  }
  inputHeight = () => {
    return (
      <group className="height">
        <div className="mb-3">
          <label><h5> Enter your Height in feet and inches (Optional)</h5></label>
          <div className="row">
            <div className="col-md-6">
              <label>Feet</label>
              <Input type="number" min="1"
                     value={this.state.feet}
                     onChange={(e) => this.setState({feet: e.target.value})}
                     placeholder="feet"/></div>
            <div className="col-md-6">
              <label>Inches</label>
              <Input type="number" min="0"
                     value={this.state.inches}
                     onChange={(e) => this.setState({inches: e.target.value})}
                     placeholder="Inches"/>
            </div>
          </div>
        </div>
      </group>
    )
  }
  
  
  render() {
    if (this.state.redirect) {
      const propsObj = this.state;
      return <Redirect to={{pathname: '/ver', values: propsObj}}/>
    }
    return (
      <div className="container">
        <div>
          <div className="card">
      <span><div className="card-header font-weight:bold text-center ">
      <h2>CSC 642 Summer 2020 Individual Assignment Megha Babariya</h2>
      </div></span></div>
          <Form className="login-form">
            <h1><span className="font-weight-bold">Data Survey Form</span></h1>
            <h6 className="text-center"> ( Mandatory Fields are marked with
              <span style={{"color": "red"}}>  *  </span> )</h6>
            <FormGroup>
              <div className="mb-3">
                <Label> First Name <span style={{"color": "red"}}>*</span></Label>
                <Input type="firstname" required value={this.state.firstName}    
                       onChange={(e) => this.setState({firstName: e.target.value})}
                       placeholder="Enter your First Name" maxlength="40"/>
              </div>
  
              <div className="mb-3">
                <Label> Last Name <span style={{"color": "red"}}>*</span> </Label>
                <Input type="lastName" required value={this.state.lastName}
                       onChange={(e) => this.setState({lastName: e.target.value})}
                       placeholder="Enter your Last Name" maxlength="40"/>
              </div>
  
              {this.inputState()}
  
              <div className="mb-3">
                <label>Address <span style={{"color": "red"}}>*</span></label>
                <Input type="address" required
                       value={this.state.address}
                       onChange={(e) => this.setState({address: e.target.value})}
                       placeholder="Enter your Address"/>
              </div>

              <div className="mb-3">
                <label>Zipcode <span style={{"color": "red"}}>*</span></label>
                <Input type="number" required
                       value={this.state.zipcode}
                       onChange={(e) => this.setState({zipcode: e.target.value})}
                       placeholder="Enter your Zipcode"/>
              </div>
  
              <div className="mb-3">
                <label> Birth Date <span style={{"color": "red"}}>*</span></label>
                <Input type="date" required
                       value={this.state.birthDate}
                       onChange={(e) => this.setState({birthDate: e.target.value})}
                       placeholder="mm/dd/yyyy"/>
              </div>
  
              {this.inputEducation()}
  
              {this.inputHeight()}
  
              <div className="mb-3">
                <label> Phone Number <span style={{"color": "red"}}>*</span></label>
                <Input type="inputPhone" required 
                       value={this.state.phoneNumber} pattern = "^\d{7}$"
                       onChange={(e) => this.setState({phoneNumber: e.target.value})}
                       placeholder="Enter your Phone Number"/>
              </div>
  
              <div className="mb-3">
                <label> Email <span style={{"color": "red"}}>*</span></label>
                <Input type="email" required
                       value={this.state.email}
                       onChange={(e) => this.setState({email: e.target.value})}
                       placeholder="Enter your Email Id"/>
              </div>
  
              <div className="mb-3">
                <label> Confirm Email <span style={{"color": "red"}}>*</span></label>
                <Input type="email" required className="form-control"
                       value={this.state.confirmEmail}
                       onChange={(e) => this.setState({confirmEmail: e.target.value})}
                       placeholder="Confirm your Email Id"/>
              </div>
  
              <FormGroup className="checkbox-main">
                <input type="checkbox"  required className="larger"
                value={this.state.agreeConditions}
                onChange={(e) => this.setState({agreeConditions: e.target.value})}
                />
                <label className="checkentry"> I Agree to the terms and conditions </label>
              </FormGroup>
  
              <FormGroup>
  
              </FormGroup>
              <div className="re-cap">
                <Recaptcha
                  sitekey="6Le297EZAAAAAETHt6G_7aboB2K4fBZVuX5Ko9VE"
                  render="explicit"
                  onloadCallback={this.Recaptchaloaded}
                  verifyCallback={this.verifyCallback}
                />
              </div>
              <button className="btn-primary btn-lg btn-dark btn-block"
                      onClick={this.renderRedirect}>
                Submit
              </button>
            </FormGroup>
          </Form>
        </div>
      </div>
    )
  }
}
