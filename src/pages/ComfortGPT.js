import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from './../components/Container'
import './ComfortGPT.css'

function ComfortGPT() {
  return (
    <div className="ComfortGPT">
      <NavBar />

      <Container>
        <div className="first_section">
          <h1>ComfortGPT</h1>
          <h3>For source code and to report bugs</h3>
          <div class="Github_stuff">
            <div class="GitHub_Code">
              <button class="GitHub_Code fa-brands fa-github fa-3x" id="GitHub_Code"></button>
              <b><a href="https://github.com/Building-Robotics-Lab/ComfortGPT" target="_blank">Code</a></b>
            </div>
            <div class="GitHub_Bugs">
              <button class="GitHub_Bugs fa-brands fa-github fa-3x" id="GitHub_Bugs"></button>
              <b><a href="https://github.com/Building-Robotics-Lab/ComfortGPT/issues/new" target="_blank">Bugs</a></b>
            </div>
          </div>
        </div>
      </Container>

      <Container useOrange={true}>

      </Container>

      <Container>

      </Container>

      <Footer />
    </div>
  );
}

export default ComfortGPT;