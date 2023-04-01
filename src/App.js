import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MUNConference from './Components/About/MunConference';
import ZeroHourSummit from './Components/About/ZeroHourSummit';
import Home from './Components/Home/Home';
import Footer from './Components/Layout/Footer/Footer';
import Header from './Components/Layout/Header/Header';
import Registration from './Components/Registration';
function App() {
  window.addEventListener('contextmenu',e=>{
    e.preventDefault();
  })
  return (
    <Router>
    <Header/>
    <Routes>
      <Route element={<Home/>} exact path='/'/>
      <Route element={<MUNConference/>} exact path='/munconference'/>
      <Route element={<ZeroHourSummit/>} exact path='/zerohoursummit'/>
      <Route element={<Registration/>} exact path='/register'/>
      <Route element={<ZeroHourSummit/>} exact path='/agendas'/>
      <Route element={<ZeroHourSummit/>} exact path='/gallery'/>
      <Route element={<ZeroHourSummit/>} exact path='/sponsers'/>
      <Route element={<ZeroHourSummit/>} exact path='/contact'/>
      <Route element={<ZeroHourSummit/>} exact path='/team'/>
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
