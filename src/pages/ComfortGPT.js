import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from './../components/Container'
import './ComfortGPT.css'
import { Link } from 'react-router-dom';
import * as d3 from 'd3';

import ExampleImage from './../components/Website Data/output_example.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Select from 'react-select';


function ComfortGPT() {
  // For Temperature Scale
  const options = [
    { value: 'Celsius', label: 'Celsius (°C)' },
    { value: 'Fahrenheit', label: 'Fahrenheit (°F)' },
    { value: 'Kelvin', label: 'Kelvin (K)' },
  ];
  const [initialTemperatureScale, setInitialTemperatureScale] = useState(options[0].value);
  const [test, setTest] = useState(options[0].value);

  const [temperature, setTemperature] = useState(null);
  useEffect(() => {
    setTemperature(options[0].value);
  }, []);

  const handleChange = (option) => {
    setTemperature(option.value);
    const convertedTemperature_forDisplay = convertTemperature_forDisplay(initialTemperatureScale, option.value, otValues, stValues);
    setInitialTemperatureScale(convertedTemperature_forDisplay[0]); // Update the initialTemperatureScale
    setOtValues([...convertedTemperature_forDisplay[1]]);
    setStValues([...convertedTemperature_forDisplay[2]]);
  };

  // For Initial OT and ST Values, Changing Values, Add Rows, Remove Rows and Reset Rows
  const initialOtValues = [-3, 6, 7, "", "", "", ""];
  const initialStValues = [23, 22, 22, "", "", "", ""];
  const [otValues, setOtValues] = useState([...initialOtValues]);
  const [stValues, setStValues] = useState([...initialStValues]);
  const [extremeOtIndices, setExtremeOtIndices] = useState({});
  const [extremeStIndices, setExtremeStIndices] = useState({});

  // Handling changes for OT values
  const handleOTChange = (index, value) => {
    const values = [...otValues];
    values[index] = value === "" ? null : Number(value);
    setOtValues(values);

    const { lower_ot_value, higher_ot_value } = getExtremeValues(temperature);
    let isExtreme = (value < lower_ot_value) || (value > higher_ot_value);
    if (isExtreme) {
      resetExtremeIndex(setExtremeOtIndices, index);
    } else {
      setExtremeOtIndices({
        ...extremeOtIndices,
        [index]: false
      });
    }

  };

  // Handling changes for ST values
  const handleSTChange = (index, value) => {
    const values = [...stValues];
    values[index] = value === "" ? null : Number(value);
    setStValues(values);

    const { lower_sp_value, higher_sp_value } = getExtremeValues(temperature);
    let isExtreme = (value < lower_sp_value) || (value > higher_sp_value);

    if (isExtreme) {
      resetExtremeIndex(setExtremeStIndices, index);
    } else {
      setExtremeStIndices({
        ...extremeStIndices,
        [index]: false
      });
    }
  };

  // to disable the calculate button if there is an extreme value
  const hasExtremeValue = () => {
    return Object.values(extremeOtIndices).some(Boolean) || Object.values(extremeStIndices).some(Boolean);
  };

  // Add Row Button
  const AddRow = () => {
    setOtValues([...otValues, null]);
    setStValues([...stValues, null]);
  };

  // Remove Row Button
  const RemoveRow = () => {
    const otNewValues = [...otValues];
    const stNewValues = [...stValues];

    otNewValues.pop();
    stNewValues.pop();

    setOtValues(otNewValues);
    setStValues(stNewValues);
  };

  // Reset Button
  const Reset = () => {
    setOtValues([...initialOtValues]);
    setStValues([...initialStValues]);
    setExtremeOtIndices({});
    setExtremeStIndices({});
    setTemperature(options[0].value)
  };

  // Simulate Button
  const SimulateButton = async () => {
    const filteredPairs = filterPairs(otValues, stValues);
    let [toutListCelsius, setpointListCelsius] = convertTemperature_forCalculation(temperature, filteredPairs[0], filteredPairs[1]);
    let [cintercept, cslope, hintercept, hslope, slope_heat, intercept_heat, slope_cool, intercept_cool] = await fetchData(toutListCelsius, setpointListCelsius);

    let [x_heat_highlight, y_heat_highlight, x_cool_highlight, y_cool_highlight] = get_highlight_values(hslope, hintercept, cslope, cintercept);
    let [x_heat, y_heat, x_cool, y_cool] = get_gray_values(slope_heat, intercept_heat, slope_cool, intercept_cool);
    let [x_heat_highlight_csv, y_heat_highlight_csv, x_cool_highlight_csv, y_cool_highlight_csv] = save_to_csv(hslope, hintercept, cslope, cintercept);

    // Convert to Respective Temperature Scale (Highlight Lines)
    let x_heat_highlight_converted = convertTemperature_forHighlightLines(test, temperature, x_heat_highlight);
    let y_heat_highlight_converted = convertTemperature_forHighlightLines(test, temperature, y_heat_highlight);
    let x_cool_highlight_converted = convertTemperature_forHighlightLines(test, temperature, x_cool_highlight);
    let y_cool_highlight_converted = convertTemperature_forHighlightLines(test, temperature, y_cool_highlight);

    let xy_heat_highlight_dict = x_heat_highlight.map((x_value, i) => {
      return { xval: x_value, yval: y_heat_highlight[i] };
    });

    let xy_cool_highlight_dict = x_cool_highlight.map((x_value, i) => {
      return { xval: x_value, yval: y_cool_highlight[i] };
    });

    let combined_data = xy_heat_highlight_dict.concat(xy_cool_highlight_dict);

    let width = document.getElementById('graph').offsetWidth;
    let height = document.getElementById('graph').offsetHeight;

    const x = d3.scaleLinear()
      .range([0, width]);

    const y = d3.scaleLinear()
      .range([height, 0]);

    const svgContainer = d3.select('#graph')

    svgContainer.selectAll("svg").remove();
    d3.select("#graph").selectAll("*").remove();

    const svg = svgContainer
      .append("svg")
      .attr("width", width - 30)
      .attr("height", height + 30)
      .append("g")

    let xExtent = d3.extent(combined_data, d => d.xval);
    let yExtent = d3.extent(combined_data, d => d.yval);

    let num = 5;
    if (temperature === "Fahrenheit") {
      num = 10;
    }

    x.domain([xExtent[0] - num, xExtent[1] + num]);
    y.domain([yExtent[0] - num, yExtent[1] + num]);

    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x))

    svg.append("g")
      .call(d3.axisLeft(y));

    const line = d3.line()
      .x(d => x(d.xval))
      .y(d => y(d.yval))

    let tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);
  }

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
            <div className="table_inputs">
              <p>Temperature Scale:</p>
              <Select options={options} defaultValue={options[0]} onChange={handleChange} style={{ width: '600px' }} isSearchable={false} />
              <p>Outdoor Temperature</p>
              <p>Preferred Setpoint</p>
              {otValues.map((otValue, index) => (
                <React.Fragment key={index}>
                  <input type="number" key={`ot_${index}`} value={otValue} onChange={e => handleOTChange(index, e.target.value)} style={{
                    borderColor: extremeOtIndices[index] ? 'red' : '',
                    animation: extremeOtIndices[index] ? 'shake 0.42s cubic-bezier(.36,.07,.19,.97) both' : 'none'
                  }} />
                  {stValues[index] !== undefined && (
                    <input type="number" key={`st_${index}`} value={stValues[index]} onChange={e => handleSTChange(index, e.target.value)} style={{
                      borderColor: extremeStIndices[index] ? 'red' : '',
                      animation: extremeStIndices[index] ? 'shake 0.42s cubic-bezier(.36,.07,.19,.97) both' : 'none'
                    }} />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="CalculateButton">
              <Link onClick={hasExtremeValue() ? undefined : SimulateButton} className={hasExtremeValue() ? "disabled red-button" : "enabled green-button"}>
                <p id='CalculateButton'>Calculate</p>
              </Link>
            </div>
            <div className="additional_buttons">
              <div className="HomeButtons">
                <Link onClick={AddRow}><p id='JoinButton'>Add Row</p></Link>
              </div>
              <div className="HomeButtons">
                <Link onClick={Reset}><p id='JoinButton'>Reset</p></Link>
              </div>
              <div className="HomeButtons">
                <Link onClick={RemoveRow} ><p id='JoinButton'>Remove Row</p></Link>
              </div>
            </div>
          </div>
          <div className="outputs" id='graph'>

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

const filterPairs = (ot, st) => {
  const newOt = [];
  const newSt = [];

  for (let i = 0; i < ot.length; i++) {
    if (ot[i] !== "" && ot[i] !== null && st[i] !== "" && st[i] !== null) {
      newOt.push(ot[i]);
      newSt.push(st[i]);
    }
  }

  return [newOt, newSt];
};

const convertTemperature_forCalculation = (scale, otValues, stValues) => {
  let converted_otValues;
  let converted_stValues;

  if (scale === "Celsius") {
    converted_otValues = otValues;
    converted_stValues = stValues;
  } else if (scale === "Fahrenheit") {
    converted_otValues = otValues.map(temp => Math.round((temp - 32) * 5 / 9));
    converted_stValues = stValues.map(temp => Math.round((temp - 32) * 5 / 9));
  } else if (scale === 'Kelvin') {
    converted_otValues = otValues.map(temp => temp - 273.15);
    converted_stValues = stValues.map(temp => temp - 273.15);
  }

  return [converted_otValues, converted_stValues];
}

const convertTemperature_forDisplay = (prevScale, selectedScale, otValues, stValues) => {
  const convertTemp = (temp, conversionFunction) => {
    return temp === "" || temp === null ? temp : conversionFunction(temp);
  };

  const conversions = {
    "CelsiusCelsius": temp => temp,
    "CelsiusFahrenheit": temp => (temp * 9 / 5) + 32,
    "CelsiusKelvin": temp => temp + 273.15,
    "FahrenheitCelsius": temp => Math.round((temp - 32) * 5 / 9),
    "FahrenheitFahrenheit": temp => temp,
    "FahrenheitKelvin": temp => ((temp - 32) * 5 / 9) + 273.15,
    "KelvinCelsius": temp => temp - 273.15,
    "KelvinFahrenheit": temp => ((temp - 273.15) * 9 / 5) + 32,
    "KelvinKelvin": temp => temp
  };

  const conversionKey = prevScale + selectedScale;

  let converted_otValues = otValues.map(temp => convertTemp(temp, conversions[conversionKey]));
  let converted_stValues = stValues.map(temp => convertTemp(temp, conversions[conversionKey]));

  return [selectedScale, converted_otValues, converted_stValues];
};

const convertTemperature_forHighlightLines = (prevScale, selectedScale, inputList) => {
  const convertTemp = (temp, conversionFunction) => {
    return temp === "" || temp === null ? temp : conversionFunction(temp);
  };

  const conversions = {
    "CelsiusCelsius": temp => Number(temp),
    "CelsiusFahrenheit": temp => (Number(temp) * 9 / 5) + 32,
    "CelsiusKelvin": temp => Number(temp) + 273.15,
    "FahrenheitCelsius": temp => Math.round((Number(temp) - 32) * 5 / 9),
    "FahrenheitFahrenheit": temp => Number(temp),
    "FahrenheitKelvin": temp => ((Number(temp) - 32) * 5 / 9) + 273.15,
    "KelvinCelsius": temp => Number(temp) - 273.15,
    "KelvinFahrenheit": temp => ((Number(temp) - 273.15) * 9 / 5) + 32,
    "KelvinKelvin": temp => Number(temp)
  };

  const conversionKey = prevScale + selectedScale;

  let convertedList = inputList.map(temp => convertTemp(temp, conversions[conversionKey]));

  return convertedList;
};

const getExtremeValues = (scale) => {
  let extremeValues = {};
  if (scale === 'Celsius') {
    extremeValues = {
      lower_ot_value: -50,
      higher_ot_value: 50,
      lower_sp_value: -15,
      higher_sp_value: 30
    };
  } else if (scale === 'Kelvin') {
    extremeValues = {
      lower_ot_value: 23.15,
      higher_ot_value: 323.15,
      lower_sp_value: 258.15,
      higher_sp_value: 303.15
    };
  } else if (scale === 'Fahrenheit') {
    extremeValues = {
      lower_ot_value: -58,
      higher_ot_value: 122,
      lower_sp_value: 5,
      higher_sp_value: 86
    };
  }
  return extremeValues;
};

// To retrigger the shake if the user re-enter extreme values
const resetExtremeIndex = (setExtremeIndices, index) => {
  setExtremeIndices(prevState => ({ ...prevState, [index]: false }));
  setTimeout(() => {
    setExtremeIndices(prevState => ({ ...prevState, [index]: true }));
  }, 0);
};

async function fetchData(toutList, setpointList) {
  try {
    const response = await fetch('https://qsqfy26d4a.execute-api.ap-southeast-1.amazonaws.com/dev', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        toutList: toutList,
        setpointList: setpointList
      })
    });

    const data = await response.json();
    const output = JSON.parse(data['body']);

    const cintercept = output['cintercept'];
    const cslope = output['cslope'];
    const hintercept = output['hintercept'];
    const hslope = output['hslope'];
    const slope_heat = output['slope_heat'];
    const intercept_heat = output['intercept_heat'];
    const slope_cool = output['slope_cool'];
    const intercept_cool = output['intercept_cool'];

    return [cintercept, cslope, hintercept, hslope, slope_heat, intercept_heat, slope_cool, intercept_cool];

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

function get_highlight_values(hslope, hintercept, cslope, cintercept) {
  let x_heat_highlight = Array.from({ length: (16 - -6) / 0.01 }, (_, i) => (-6 + i * 0.01).toFixed(2));
  let y_heat_highlight = x_heat_highlight.map((value) => (hslope * value + hintercept).toFixed(2));
  let x_cool_highlight = Array.from({ length: (35 - 16) / 0.01 }, (_, i) => (16 + i * 0.01).toFixed(2));
  let y_cool_highlight = x_cool_highlight.map((value) => (cslope * value + cintercept).toFixed(2));

  return [x_heat_highlight, y_heat_highlight, x_cool_highlight, y_cool_highlight];
}

function get_gray_values(slope_heat, intercept_heat, slope_cool, intercept_cool) {
  let x_heat = Array.from({ length: (16 - -6) / 0.1 }, (_, i) => -6 + i * 0.1);
  let y_heat = [];
  let x_cool = Array.from({ length: (35 - 16) / 0.1 }, (_, i) => 16 + i * 0.1);
  let y_cool = [];
  for (let i = 0; i < intercept_heat.length; i++) {
    y_heat.push(x_heat.map((value) => slope_heat[i] * value + intercept_heat[i]));
    y_cool.push(x_cool.map((value) => slope_cool[i] * value + intercept_cool[i]));
  }

  return [x_heat, y_heat, x_cool, y_cool];
}

function save_to_csv(hslope, hintercept, cslope, cintercept) {
  let x_heat_highlight_csv = Array.from({ length: (17 - -6) / 1 }, (_, i) => -6 + i * 1);
  let y_heat_highlight_csv = x_heat_highlight_csv.map((value) => hslope * value + hintercept);
  let x_cool_highlight_csv = Array.from({ length: (35 - 16) / 1 }, (_, i) => 17 + i * 1);
  let y_cool_highlight_csv = x_cool_highlight_csv.map((value) => cslope * value + cintercept);

  return [x_heat_highlight_csv, y_heat_highlight_csv, x_cool_highlight_csv, y_cool_highlight_csv];

}