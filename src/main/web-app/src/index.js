import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
// import { buildProvider } from './redux/store.js';
import { buildProvider } from './mobx/user/store.js';
import Routing from './view/App.js';
import './index.css'

const Provider = buildProvider();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <Router>
      <Routing />
    </Router>
  </Provider>
);