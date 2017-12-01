import './index.scss';

import React from 'react'; 
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('app')
)
