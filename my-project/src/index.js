import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import AboutUs from './components/AboutUs';
import Component1 from './components/component1';
import GettingStarted from './components/gettingStarted';
import GetYourFavourites from './components/getYourFavourites';
import EndlessExtras from './components/endlessExtras';
import CashOrCard from './components/cashOrCard';
import StarCodes from './components/starCodes';
import EarningStars from './components/earningStars';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header/>
    <Component1/>
    <GettingStarted/>
    <GetYourFavourites/>
    <EndlessExtras/>
    <CashOrCard/>
    <StarCodes/>
    <EarningStars/>
    <AboutUs/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
