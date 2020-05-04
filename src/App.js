import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Calendar from './components/Calendar';
import BannerImg from './components/BannerImg';

function App() {
  return (
    <div className="General">
    <div className="App">
     <Header />
     <br></br>
     <BannerImg />
     <Banner />
     <br></br>
     <Calendar />
     </div>
     </div>
  );
}

export default App;
