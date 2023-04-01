import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import Footer from './Components/Layout/Footer/Footer';
import Header from './Components/Layout/Header/Header';
import MUNConference from './Components/Home/MUNConference';
import ZeroHourSummit from './Components/Home/ZeroHourSummit';
function App() {
  window.addEventListener('contextmenu',e=>{
    e.preventDefault();
  })
  return (
    <Router>
    <Header/>
    <Routes>
      <Route element={<Home/>} exact path='/'/>
      <Route element={<MUNConference/>} exact path='/MUNConference'/>
      <Route element={<ZeroHourSummit/>} exact path='/ZeroHourSummit'/>
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
