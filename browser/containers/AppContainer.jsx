import React, { Component } from 'react';
import axios from 'axios';
// import { hashHistory } from 'react-router';
import Navbar from '../components/Navbar.jsx';
// import Footer from '../components/Footer'
// import AllProducts from '../components/AllProducts';
// import {connect} from 'react-redux';
// import { logoutUser, receiveProducts} from '../action-creators'

class AppContainer extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <span> Yo whatup </span>
        <button className="btn btn-success"> is bootstrap working </button>
      </div>
    );
  }
}

export default AppContainer;
