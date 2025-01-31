import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';
import './styling/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import ImageSection from './components/ImageSection';
import Work from './components/Work';
import Footer from './components/Footer';

ReactDOM.render(
  <Router>
    <Route path="/" component={Header} />
    <Route exact path="/" component={Home} />
      <Route
        path="/comics"
        render={() => <ImageSection tag='comics' />}
      />
     <Route path="/projects" component={Work} />
    <Footer/>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
