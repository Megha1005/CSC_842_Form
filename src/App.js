import React, {Component} from 'react';
import './App.css';
// import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ver from './ver';
import DataSurvey from './Components/DataSurvey';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="root">
          <Switch>
            <Route exact path="/" component={DataSurvey}/>
            <Route path="/ver" component={ver}/>

            {/* <Route path={"/ver"} 
            render={(props) => <YourComp {...props} keyProp={someValue} key={randomGen()}/>} /> */}
          </Switch>
        </div>
        </Router>
    );

  }
}

export default (App) ;
