import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Calendar from './components/Calendar';
import BannerImg from './components/BannerImg';
import BannerEvents from './components/ BannerEvents';

import Footer from './components/Footer';

function App() {
  return (
    <div className="General">
    <div className="App">
     <Header />
     <br></br>
     <BannerImg />
     <Banner />
     <br></br>
     <br></br>
     <BannerEvents/>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <Calendar />
     <Footer />
     </div>
     </div>
  );
}

export default App;
