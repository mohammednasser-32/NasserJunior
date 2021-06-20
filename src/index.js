import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';
import './styling/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Illustrations from './components/Illustrations';
import Comics from './components/Comics';
import Work from './components/Work';
import Footer from './components/Footer';
import About from './components/About';

ReactDOM.render(
  <Router>
    <Route path="/" component={Header} />
    <Route exact path="/" component={Home} />
    <Route exact path="/illustrations" component={Illustrations} />
    <Route path="/comics/:language" component={Comics} />
    <Route path="/work" component={Work} />
    <Route path="/about" component={About} />
    <Footer/>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
