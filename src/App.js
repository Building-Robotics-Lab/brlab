import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Research from './pages/Research';
import ComfortGPT from './pages/ComfortGPT';
import OTST from './pages/OTST';
import Our_Team from './pages/Our_Team';
import News from './pages/News';
import Publications from './pages/Publications';
import Join_the_Lab from './pages/Join_the_Lab';

import IndividualProfile from './pages/IndividualProfile';
import profiles from './components/Website Individual Information/profileData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/research' element={<Research />} />
          <Route path='/comfortgpt' element={<ComfortGPT />} />
          <Route path='/optimal_temperature_setpoint_tool' element={<OTST />} />
          <Route path='/our_team' element={<Our_Team />} />
          <Route path='/news' element={<News />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/join_the_lab' element={<Join_the_Lab />} />
          <Route path="/individual_profile/:profileName" element={<IndividualProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
