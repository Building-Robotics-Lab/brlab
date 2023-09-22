import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrolltoTop from './components/ScrollToTop'
import * as d3 from 'd3';

import Home from './pages/Home';
import Research from './pages/Research';
import ComfortGPT from './pages/ComfortGPT';
import OTST from './pages/OTST';
import Our_Team from './pages/Our_Team';
import News from './pages/News';
import Publications from './pages/Publications';
import Join_the_Lab from './pages/Join_the_Lab';

import IndividualProfile from './pages/IndividualProfile';
import IndividualPublication from './pages/IndividualPublication';

function App() {
  return (
    <div className="App">

      <HashRouter>
        <ScrolltoTop />
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
          <Route path='/individual_publication/:id' element={<IndividualPublication />} />

          {/* <Route path='/individual_publication' element={<IndividualPublication />} />
          <Route path='/individual_profile' element={<IndividualProfile />} /> */}

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
