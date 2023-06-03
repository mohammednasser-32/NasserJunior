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
import SeriesSection from './components/SeriesSection';
import ComicsSeries from './components/ComicsSeries';
import Work from './components/Work';
import Footer from './components/Footer';
import About from './components/About';
import companyTitle from './assets/misc/company-title.png'
import wondererTitle from './assets/misc/wonderer-title.png'
import programmerDiariesTitle from './assets/misc/programmer-diaries-title.png'
import heritageTitle from './assets/misc/heritage-title.png'
import shokryTitle from './assets/misc/shokry-title.png'

ReactDOM.render(
  <Router>
    <Route path="/" component={Header} />
    <Route exact path="/" component={Home} />
    <Route
      path="/illustrations"
      render={() => <ImageSection section='Illustrations' tag='illustrations' />}
    />
    <Route
      path="/comics/english"
      render={() => <ImageSection section='English Comics' tag='english_comics' />}
    />
    <Route
      path="/comics/arabic"
      render={() => <ImageSection section='Arabic Comics' tag='arabic_comics' />}
    />
    <Route
      path="/comics-series/company"
      render={() => <SeriesSection titleImage={companyTitle} tag='company' />}
    />
    <Route
      path="/comics-series/wonderer"
      render={() => <SeriesSection titleImage={wondererTitle} tag='wanderer' />}
    />
    <Route
      path="/comics-series/programmer-diaries"
      render={() => <SeriesSection titleImage={programmerDiariesTitle} tag='code' />}
    />
    <Route
      path="/comics-series/egypts-dispersed-heritage"
      render={() => <SeriesSection titleImage={heritageTitle} tag='egypts-dispersed-heritage' />}
    />
    <Route
      path="/comics-series/shokry"
      render={() => <SeriesSection titleImage={shokryTitle} tag='shokry' />}
    />
    <Route exact path="/comics-series" component={ComicsSeries} />
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
