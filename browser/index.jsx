import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import axios from 'axios';
import '../public/index.scss';

import AppContainer from './containers/AppContainer.jsx';

ReactDOM.render(<AppContainer />, document.getElementById('app'));
