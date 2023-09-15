import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from './../components/Container'
import './ComfortGPT.css'

import ExampleImage from './../components/Website Data/output_example.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Select from 'react-select';


function ComfortGPT() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    setTemperature(options[0].value);
  }, []);

  const handleChange = (option) => {
    setTemperature(option.value);
    console.log("selected", option.value)
  };

  return (
    <div className="ComfortGPT">
      <NavBar />

      <Container>
        <div className="first_section">
          <h1>ComfortGPT</h1>
          <h3>For source code and to report bugs</h3>
          <div className="Github_stuff">
            <div className="GitHub_Code">
              <b><a className='icon' href="https://github.com/Building-Robotics-Lab/ComfortGPT" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></b>
              <b><a className='text' href="https://github.com/Building-Robotics-Lab/ComfortGPT" target="_blank">Code</a></b>
            </div>
            <div className="GitHub_Bugs">
              <b><a className='icon' href="https://github.com/Building-Robotics-Lab/ComfortGPT/issues/new" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></b>
              <b><a className='text' href="https://github.com/Building-Robotics-Lab/ComfortGPT/issues/new" target="_blank">Bugs</a></b>
            </div>
          </div>
        </div>
      </Container>

      <Container useOrange={true}>
        <div className="second_section">
          <div className="inputs">
            <div className="left_inputs">
              <p>Temperature Scale:</p>
              <p>Outdoor Tempreature</p>
              <input type="number" id="ot_input" value={-3} />
            </div>
            {/* <div className="temperature_scale">
              <p>Temperature Scale:</p>
              <Select options={options} defaultValue={options[0]} onChange={handleChange} style={{ width: '600px' }}/>
            </div> */}
            <div className="table">
              
            </div>
          </div>
          <div className="outputs">
            <p>p</p>
          </div>
        </div>
      </Container>

      <Container>
        <div className="third_section">
          <div className="guidelines_text">
            <h3>Guidelines</h3>
            <ul>
              <li><b>Select the 'Temperature Scale':</b> <br />Start by selecting the temperature scale you want to use for your calculations.</li>
              <li><b>Input 'Outdoor Temperature' and 'Preferred Setpoint':</b> <br />Input the outdoor temperature and preferred setpoints. Ensure the data entered aligns with the temperature scale selected in the first step and that both columns of a row are filled.</li>
              <li><b>Add or remove rows to your preference.</b></li>
              <li><b>Click 'Calculate' to obtain the slope and generate results.</b></li>
              <li><b>Click 'Download .csv file' to get the generated results.</b></li>
              <li><b>Click 'Reset' to revert changes to default settings.</b></li>
              <li><b>Please view the image to the right for a sample output.</b></li>
            </ul>
          </div>
          <div className="guidelines_image">
            <img src={ExampleImage} alt="" />
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default ComfortGPT;

const options = [
  { value: 'Celsius', label: 'Celsius (°C)' },
  { value: 'Fahrenheit', label: 'Fahrenheit (°F)' },
  { value: 'Kelvin', label: 'Kelvin (K)' },
];