import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Calendar from './components/Calendar';

function App() {
  return (
    <div className="General">
    <div className="App">
     <Header />
     <Banner />
     <Calendar />
     </div>
     </div>
  );
}

export default App;
