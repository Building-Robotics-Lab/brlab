import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ScrolltoTop from './components/ScrollToTop';
import * as d3 from 'd3';

import Home from './pages/Home';
import Research from './pages/Research';
import ComfortGPT from './pages/ComfortGPT';
import OTST from './pages/OTST';
import Our_Team from './pages/Our_Team';
import News from './pages/News';
import Publications from './pages/Publications';
import Join_the_Lab from './pages/Join_the_Lab';
import Collaborations from './pages/Collaborations';

import IndividualProfile from './pages/IndividualProfile';
import IndividualPublication from './pages/IndividualPublication';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrolltoTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/research' element={<Research />} />
          <Route path='/collaborations' element={<Collaborations />}></Route>
          <Route path='/comfortgpt' element={<ComfortGPT />} />
          <Route path='/otst' element={<OTST />} />
          <Route path='/team' element={<Our_Team />} />
          <Route path='/news' element={<News />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/join' element={<Join_the_Lab />} />
          <Route path="/profile/:profileName" element={<IndividualProfile />} />
          <Route path='/publication/:id' element={<IndividualPublication />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
