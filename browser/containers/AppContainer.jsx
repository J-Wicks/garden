import React, { Component } from 'react';
import axios from 'axios';
import { Route, IndexRedirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

import DumbComponent from '../components/DumbComponent.jsx'
// import AllProducts from '../components/AllProducts';
// import {connect} from 'react-redux';
// import { logoutUser, receiveProducts} from '../action-creators'

class AppContainer extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div id="left-bar" className="bar col-sm-2">
              Bar Goes Here
            </div>
            <div id="display-space" className="col-sm-8">
              <Route path="/" component={DumbComponent} />
            </div>
            <div id="right-bar" className="bar col-sm-2">
              Bar Goes Here
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppContainer;
