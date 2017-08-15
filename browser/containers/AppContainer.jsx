import React, { Component } from 'react';
import axios from 'axios';
import { Route, IndexRedirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import PlantSideBar from '../components/PlantSidebar.jsx';
import CritterSideBar from '../components/CritterSidebar.jsx';
import DumbComponent from '../components/DumbComponent.jsx';
// import AllProducts from '../components/AllProducts';
// import {connect} from 'react-redux';
// import { logoutUser, receiveProducts} from '../action-creators'

class AppContainer extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div id="left-bar" className="bar col-lg-2">
              <PlantSideBar />
            </div>
            <div className="bar col-lg-8">
              <Route path="/" component={DumbComponent} />
            </div>
            <div id="right-bar" className="bar col-lg-2">
              <CritterSideBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppContainer;
