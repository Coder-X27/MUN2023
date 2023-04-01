import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MUNConference from './Components/About/MunConference';
import ZeroHourSummit from './Components/About/ZeroHourSummit';
import Agendas from './Components/Agendas';
import Home from './Components/Home/Home';
import Footer from './Components/Layout/Footer/Footer';
import Header from './Components/Layout/Header/Header';
<<<<<<< HEAD
import MUNConference from './Components/Home/MUNConference';
import ZeroHourSummit from './Components/Home/ZeroHourSummit';
import Gallery from './Components/Home/Gallery';
=======
import Registration from './Components/Registration';
import Contact from './Components/Contact';
>>>>>>> master
function App() {
  window.addEventListener('contextmenu',e=>{
    e.preventDefault();
  })
  return (
    <Router>
    <Header/>
    <Routes>
      <Route element={<Home/>} exact path='/'/>
<<<<<<< HEAD
      <Route element={<MUNConference/>} exact path='/MUNConference'/>
      <Route element={<ZeroHourSummit/>} exact path='/ZeroHourSummit'/>
      <Route element={<Gallery/>} exact path='/Gallery'/>
=======
      <Route element={<MUNConference/>} exact path='/munconference'/>
      <Route element={<ZeroHourSummit/>} exact path='/zerohoursummit'/>
      <Route element={<Registration/>} exact path='/register'/>
      <Route element={<Agendas/>} exact path='/agenda'/>
      <Route element={<ZeroHourSummit/>} exact path='/gallery'/>
      <Route element={<ZeroHourSummit/>} exact path='/sponsers'/>
      <Route element={<Contact/>} exact path='/Contact'/>
      <Route element={<ZeroHourSummit/>} exact path='/team'/>
>>>>>>> master
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
