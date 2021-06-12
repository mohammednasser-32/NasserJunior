import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';
import './styling/home.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Illustrations from './components/Illustrations';
import Comics from './components/Comics';

ReactDOM.render(
  <Router>
    <Header/>
    <Route exact path="/" component={Home} />
    <Route exact path="/illustrations" component={Illustrations} />
    <Route exact path="/comics/:language" component={Comics} />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
