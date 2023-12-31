import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '../components/Container'
import './ComfortGPT.css'
import { Link } from 'react-router-dom';
import * as d3 from 'd3';

import ExampleImage from './../components/Website Data/output_example.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Select from 'react-select';
import profiles from '../components/Website Individual Information/profileData';


function ComfortGPT() {

  // For Temperature Scale
  const options = [
    { value: 'Celsius', label: 'Celsius (°C)' },
    { value: 'Fahrenheit', label: 'Fahrenheit (°F)' },
    { value: 'Kelvin', label: 'Kelvin (K)' },
  ];
  const [initialTemperatureScale, setInitialTemperatureScale] = useState(options[0].value);
  const [drawLines, setDrawLines] = useState(false)
  const [temperature, setTemperature] = useState(options[0].value);

  const handleChange = (option) => {
    setTemperature(option.value);
    const convertedTemperature_forDisplay = convertTemperature_forDisplay(initialTemperatureScale, option.value, otValues, stValues);
    setInitialTemperatureScale(option.value); // Update the initialTemperatureScale
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
    if (otValues.length < 20) {
      setOtValues([...otValues, null]);
      setStValues([...stValues, null]);
    }
    SimulateButton(drawLines);
  };

  // Remove Row Button
  const RemoveRow = () => {
    const otNewValues = [...otValues];
    const stNewValues = [...stValues];

    if (otNewValues.length > 1) {
      otNewValues.pop();
      stNewValues.pop();
    }

    setOtValues(otNewValues);
    setStValues(stNewValues);
    SimulateButton(drawLines);
  };

  // Reset Button
  const [isReset, setIsReset] = useState(false);  // Add a new state to track reset status

  const Reset = () => {
    setOtValues([...initialOtValues]);
    setStValues([...initialStValues]);
    setExtremeOtIndices({});
    setExtremeStIndices({});
    setTemperature(options[0].value);
    setInitialTemperatureScale(options[0].value);
    setDrawLines(false);
    SimulateButton(false);
    setShowOutput('none');
    setIsReset(true);  // Set the reset flag when the reset function is triggered
  };

  useEffect(() => {
    if (!isReset) {
      const handleResize = () => {
        SimulateButton(drawLines);
      };
      SimulateButton(drawLines);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    } else {
      setIsReset(false);  // Reset the flag after handling it
    }
  }, [initialTemperatureScale, temperature, drawLines, otValues, stValues, extremeOtIndices, extremeStIndices, initialOtValues, initialStValues]);

  let x_heat_highlight_csv;
  let y_heat_highlight_csv;
  let x_cool_highlight_csv;
  let y_cool_highlight_csv;
  let scale_csv;

  // Simulate Button
  const SimulateButton = async (inputVar) => {
    let shouldDrawLines = inputVar;
    setDrawLines(shouldDrawLines)
    if (shouldDrawLines === true) {
      setShowOutput('flex')
    } else {
      setShowOutput('none')
    }

    const filteredPairs = filterPairs(otValues, stValues);
    let [toutListCelsius, setpointListCelsius] = convertTemperature_forCalculation(temperature, filteredPairs[0], filteredPairs[1]);
    let [cintercept, cslope, hintercept, hslope, slope_heat, intercept_heat, slope_cool, intercept_cool] = await fetchData(toutListCelsius, setpointListCelsius);

    let [x_heat_highlight, y_heat_highlight, x_cool_highlight, y_cool_highlight] = get_highlight_values(hslope, hintercept, cslope, cintercept);
    let [x_heat, y_heat, x_cool, y_cool] = get_gray_values(slope_heat, intercept_heat, slope_cool, intercept_cool);
    [x_heat_highlight_csv, y_heat_highlight_csv, x_cool_highlight_csv, y_cool_highlight_csv] = save_to_csv(hslope, hintercept, cslope, cintercept);

    // Convert to Respective Temperature Scale (Highlight Lines)
    x_heat_highlight = convertTemperature_forHighlightLines(options[0].value, temperature, x_heat_highlight);
    y_heat_highlight = convertTemperature_forHighlightLines(options[0].value, temperature, y_heat_highlight);
    x_cool_highlight = convertTemperature_forHighlightLines(options[0].value, temperature, x_cool_highlight);
    y_cool_highlight = convertTemperature_forHighlightLines(options[0].value, temperature, y_cool_highlight);

    // Convert to Respective Temperature Scale (Gray Lines)
    let y_heat_converted = []
    let y_cool_converted = []

    for (let i = 0; i < y_heat.length; i++) {
      y_heat_converted.push(convertTemperature_forHighlightLines(options[0].value, temperature, y_heat[i]));
      y_cool_converted.push(convertTemperature_forHighlightLines(options[0].value, temperature, y_cool[i]));
    }

    x_heat = convertTemperature_forHighlightLines(options[0].value, temperature, x_heat);
    y_heat = y_heat_converted
    x_cool = convertTemperature_forHighlightLines(options[0].value, temperature, x_cool);
    y_cool = y_cool_converted

    // Convert to Respective Temperature Scale (CSV)
    x_heat_highlight_csv = convertTemperature_forHighlightLines(options[0].value, temperature, x_heat_highlight_csv);
    y_heat_highlight_csv = convertTemperature_forHighlightLines(options[0].value, temperature, y_heat_highlight_csv);
    x_cool_highlight_csv = convertTemperature_forHighlightLines(options[0].value, temperature, x_cool_highlight_csv);
    y_cool_highlight_csv = convertTemperature_forHighlightLines(options[0].value, temperature, y_cool_highlight_csv);

    let scale;

    if (temperature === "Celsius") {
      scale = "°C";
      scale_csv = "°C";
    } else if (temperature === "Kelvin") {
      scale = "K";
      scale_csv = "K";
    } else if (temperature === "Fahrenheit") {
      scale = "°F";
      scale_csv = "°F";
    }

    let spanCoolingSlope = document.getElementById('coolingSlope');
    spanCoolingSlope.textContent = Number(cslope).toFixed(2);

    let spanCoolingIntercept = document.getElementById('coolingIntercept');
    spanCoolingIntercept.textContent = Number(cintercept).toFixed(2);

    let spanHeatingSlope = document.getElementById('heatingSlope');
    spanHeatingSlope.textContent = Number(hslope).toFixed(2);

    let spanHeatingIntercept = document.getElementById('heatingIntercept');
    spanHeatingIntercept.textContent = Number(hintercept).toFixed(2);

    let scale_thing = document.querySelectorAll('#scale_thing');
    for (let i = 0; i < scale_thing.length; i++) {
      scale_thing[i].textContent = scale;
    }

    let above_val;
    let below_val;

    if (scale === "°C") {
      above_val = 16;
      below_val = 16;
    } else if (scale === "K") {
      above_val = 289.15;
      below_val = 289.15;
    } else if (scale === "°F") {
      above_val = 60.8;
      below_val = 60.8;
    }

    let above = document.getElementById('above');
    above.textContent = above_val;

    let below = document.getElementById('below');
    below.textContent = below_val;

    // Plot stuff

    let xy_heat_highlight_dict = x_heat_highlight.map((x_value, i) => {
      return { xval: x_value, yval: y_heat_highlight[i] };
    });

    let xy_cool_highlight_dict = x_cool_highlight.map((x_value, i) => {
      return { xval: x_value, yval: y_cool_highlight[i] };
    });

    let combined_data = xy_heat_highlight_dict.concat(xy_cool_highlight_dict);

    const svgContainer = d3.select('#graph')
    svgContainer.selectAll("svg").remove();

    const margin = { top: 20, right: 20, bottom: 50, left: 60 };

    let width = document.getElementById('graph').offsetWidth - margin.left - margin.right;
    let height = document.getElementById('graph').offsetHeight - margin.top - margin.bottom;

    const x = d3.scaleLinear()
      .range([0, width]);

    const y = d3.scaleLinear()
      .range([height, 0]);

    const svg = svgContainer
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);


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

    let legends = [{ color: "lightgray", label: "Comfort Archetypes" }];
    if (shouldDrawLines) {
      legends.push({ color: "red", label: "Heating Setpoint" });
      legends.push({ color: "blue", label: "Cooling Setpoint" });
    }

    var legend = svg.selectAll('.legend')
      .data(legends)
      .enter().append('g')
      .attr('class', 'legend')
      .attr('transform', function (d, i) { return 'translate(' + (50) + ',' + (i * 20) + ')'; });

    legend.append('rect')
      .attr('x', -30)
      .attr('y', 7)
      .attr('width', 19)
      .attr('height', 5)
      .style('fill', d => d.color);

    legend.append('text')
      .attr('x', -5)
      .attr('y', 9.5)
      .attr('dy', '0.32em')
      .text(function (d) { return d.label; });

    for (let i = 0; i < y_heat.length; i++) {
      let y_heat_dict = x_heat.map((x_value, j) => {  // Use a different variable name (j)
        return { xval: x_value, yval: y_heat[i][j] };
      });

      svg.append("path")
        .datum(y_heat_dict)
        .attr("fill", "none")
        .attr("stroke", "lightgray")
        .attr("stroke-width", 1)
        .attr("d", line)

      let y_cool_dict = x_cool.map((x_value, j) => {  // Use a different variable name (j)
        return { xval: x_value, yval: y_cool[i][j] };
      });

      svg.append("path")
        .datum(y_cool_dict)
        .attr("fill", "none")
        .attr("stroke", "lightgray")
        .attr("stroke-width", 1)
        .attr("d", line)
    }

    let hoverLineHorizontal = svg.append("line")
      .style("stroke", "black")
      .style("stroke-width", 2)
      .style("stroke-dasharray", "5,5")
      .style("opacity", 0);

    let hoverLineVertical = svg.append("line")
      .style("stroke", "black")
      .style("stroke-width", 2)
      .style("stroke-dasharray", "5,5")
      .style("opacity", 0);

    if (shouldDrawLines) {
      svg.append("path")
        .datum(xy_heat_highlight_dict)
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 5)
        .attr("d", line)

      svg.append("path")
        .datum(xy_cool_highlight_dict)
        .attr("fill", "none")
        .attr("stroke", "blue")
        .attr("stroke-width", 5)
        .attr("d", line)

      // Hover to show points on the heat and cool lines
      svg.selectAll('.heat-point')
        .data(xy_heat_highlight_dict)
        .enter().append('circle')
        .attr('class', 'heat-point')
        .attr('cx', d => x(d.xval))
        .attr('cy', d => y(d.yval))
        .attr('r', 3)
        .attr('fill', 'red')
        .attr('opacity', 0)
        .on('mouseover', function (event, d) {
          let [xPos, yPos] = d3.pointer(event, svg.node());
          tooltip.transition()
            .duration(200)
            .style('opacity', 0.9);
          tooltip.html(`Outdoor Temperature (${scale}): ${Number(d.xval).toFixed(2)} <br/> Preferred Setpoint (${scale}): ${Number(d.yval).toFixed(2)}`)
            .style('left', (xPos + document.getElementById('graph').offsetLeft) + 10 + 'px')
            .style('top', (yPos + document.getElementById('graph').offsetTop) + 10 + 'px');

          hoverLineVertical.attr("x1", x(d.xval))
            .attr("y1", y(d.yval))
            .attr("x2", x(d.xval))
            .attr("y2", height)  // y(0) assuming the x-axis is at y=0
            .style("opacity", 1);

          hoverLineHorizontal.attr("x1", x(d.xval))
            .attr("y1", y(d.yval))
            .attr("x2", 0)
            .attr("y2", y(d.yval))  // y(0) assuming the x-axis is at y=0
            .style("opacity", 1);


        })
        .on('mouseout', function (d) {
          tooltip.transition()
            .duration(500)
            .style('opacity', 0);

          hoverLineVertical.style("opacity", 0);  // hide the line
          hoverLineHorizontal.style("opacity", 0);  // hide the line
        });

      svg.selectAll('.cool-point')
        .data(xy_cool_highlight_dict)
        .enter().append('circle')
        .attr('class', 'cool-point')
        .attr('cx', d => x(d.xval))
        .attr('cy', d => y(d.yval))
        .attr('r', 3)
        .attr('fill', 'blue')
        .attr('opacity', 0)
        .on('mouseover', function (event, d) {
          let [xPos, yPos] = d3.pointer(event, svg.node());
          tooltip.transition()
            .duration(200)
            .style('opacity', 0.9);
          tooltip.html(`Outdoor Temperature (${scale}): ${Number(d.xval).toFixed(2)} <br/> Preferred Setpoint (${scale}): ${Number(d.yval).toFixed(2)}`)
            .style('left', (xPos + document.getElementById('graph').offsetLeft) + 'px')
            .style('top', (yPos + document.getElementById('graph').offsetTop) + 'px');

          hoverLineVertical.attr("x1", x(d.xval))
            .attr("y1", y(d.yval))
            .attr("x2", x(d.xval))
            .attr("y2", height)  // y(0) assuming the x-axis is at y=0
            .style("opacity", 1);

          hoverLineHorizontal.attr("x1", x(d.xval))
            .attr("y1", y(d.yval))
            .attr("x2", 0)
            .attr("y2", y(d.yval))  // y(0) assuming the x-axis is at y=0
            .style("opacity", 1);
        })
        .on('mouseout', function (d) {
          tooltip.transition()
            .duration(500)
            .style('opacity', 0);

          hoverLineVertical.style("opacity", 0);  // hide the line
          hoverLineHorizontal.style("opacity", 0);  // hide the line
        });
    } else {
      // Remove existing red and blue lines
      svg.selectAll('path')
        .filter(function () {
          return d3.select(this).attr('stroke') === 'red' || d3.select(this).attr('stroke') === 'blue';
        })
        .remove();

      // Remove existing red and blue points
      svg.selectAll('.heat-point, .cool-point')
        .remove();
    }

    // X Axis Label and Y Axis Label
    svg.append("text")
      .attr("transform", `translate(${width / 2} ,${height + 15})`) // Position at the middle of the x-axis, and move slightly below the axis
      .attr("y", 20) // Position it to the left of the y-axis
      .style("text-anchor", "middle")
      .text(`Outdoor Temperature (${scale})`);

    svg.append("text")
      .attr("transform", "rotate(-90)") // Rotate the text 90 degrees
      .attr("y", -50) // Position it to the left of the y-axis
      .attr("x", 0 - (height / 2)) // Position at the middle of the y-axis
      .attr("dy", "1em") // Move slightly away from the axis
      .style("text-anchor", "middle")
      .text(`Preferred Setpoint (${scale})`);
  }

  // Download CSV
  const DownloadCSV = () => {
    const csvContent = generateCSVContent();

    // Create a Blob object from the CSV content
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    // Create a temporary anchor element to initiate the download
    const link = document.createElement("a");
    if (link.download !== undefined) {
      // Set the link's attributes
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "data.csv");

      // Append the link to the document body
      document.body.appendChild(link);

      // Simulate a click event on the link
      link.click();

      // Clean up resources
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  }

  function generateCSVContent() {
    // Generate the CSV content based on the arrays
    const csvRows = [];

    // Create the header row
    csvRows.push(`Outdoor Temperature Heat (${scale_csv}), Predicted Setpoint Heat (${scale_csv}), Outdoor Temperature Cool (${scale_csv}), Predicted Setpoint Cool (${scale_csv})`);
    // "x_heat_highlight,y_heat_highlight,x_cool_highlight,y_cool_highlight"
    // Determine the maximum length among the arrays
    const maxLength = Math.max(
      x_heat_highlight_csv.length,
      y_heat_highlight_csv.length,
      x_cool_highlight_csv.length,
      y_cool_highlight_csv.length
    );

    // Populate the rows with the array values
    for (let i = 0; i < maxLength; i++) {
      const row = [
        i < x_heat_highlight_csv.length ? x_heat_highlight_csv[i] : "",
        i < y_heat_highlight_csv.length ? y_heat_highlight_csv[i] : "",
        i < x_cool_highlight_csv.length ? x_cool_highlight_csv[i] : "",
        i < y_cool_highlight_csv.length ? y_cool_highlight_csv[i] : ""
      ];
      csvRows.push(row.join(","));
    }

    return csvRows.join("\n");
  }

  const getProfileByName = (profileName) => {
    return profiles.find(profile => profile.ProfileName === profileName);
  };
  const mainProfile = ['Kai']
  const supportProfile = ['Connor', 'Prof', 'Ilyas']
  const Roles = ["Project Lead", "UX Designer", "Collaborator/else?", "UI Developer"]

  const mainUserProfile = mainProfile.map(getProfileByName).filter(Boolean);
  const supportUserProfiles = supportProfile.map(getProfileByName).filter(Boolean);

  const [showOutput, setShowOutput] = useState('none');

  return (
    <div className="ComfortGPT">
      <NavBar />

      <Container>
        <div className="first_section">
          <div className='heading_and_links'>
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
          <div className='contacts'>
            <div>
              <h3>Tool Contacts</h3>
            </div>
            <div className='Main'>
              {mainUserProfile.map((profile, index) => (
                <div className="each_profile" key={index}>
                  <div className="profile_image">
                    <Link to={`/profile/${profile.ProfileName}`} target="_blank">
                      <img src={profile.ProfilePic} alt={profile.Name} />
                    </Link>
                  </div>
                  <div className="profile_data">
                    <a href={profile.ProfileLink} target="_blank" rel="noopener noreferrer">
                      <h5><b>{profile.Name}</b></h5>
                    </a>
                    <p>{Roles[0]}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='Supports'>
              {supportUserProfiles.map((profile, index) => (
                <div className="each_profile" key={index}>
                  <div className="profile_image">
                    <Link to={profile.ProfileName !== 'Prof' ? `/profile/${profile.ProfileName}` : profile.ProfileLink} target="_blank">
                      <img src={profile.ProfilePic} alt={profile.Name} />
                    </Link>
                  </div>
                  <div className="profile_data">
                    <a href={profile.ProfileLink} target="_blank" rel="noopener noreferrer">
                      <h5><b>{profile.Name}</b></h5>
                    </a>
                    <p>{Roles.slice(1, Roles.length)[index]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Container useOrange={true}>
        <div className="second_section">
          <div className="inputs">
            <div className="table_inputs">
              <p>Temperature Scale:</p>
              <Select options={options} value={options.find(option => option.value === temperature)} defaultValue={options[0]} onChange={handleChange} style={{ width: '600px' }} isSearchable={false} />
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
              <Link
                onClick={() => {
                  if (!hasExtremeValue()) {
                    SimulateButton(true);
                  }
                }}
                className={hasExtremeValue() ? "disabled red-button" : "enabled green-button"}
              >
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
        <div className="output" id='output' style={{ display: showOutput }}>
          <div class="output1">
            <h5>For an Outdoor Temperature below <span id="below"></span> <span id="scale_thing"></span>:</h5>
            <p><b>Preferred Setpoint</b> = (<i>Slope</i> * <i>Outdoor Temperature</i>) + <i>Intercept</i></p>
            <p><b>Preferred Setpoint</b> = (<span id="heatingSlope"></span> * <i>Outdoor Temperature</i>) + <span id="heatingIntercept"></span></p>
          </div>

          <div class="output2">
            <h5>For an Outdoor Temperature above <span id="above"></span> <span id="scale_thing"></span>:</h5>
            <p><b>Preferred Setpoint</b> = (<i>Slope</i> * <i>Outdoor Temperature</i>) + <i>Intercept</i></p>
            <p><b>Preferred Setpoint</b> = (<span id="coolingSlope"></span> * <i>Outdoor Temperature</i>) + <span id="coolingIntercept"></span></p>
          </div>
        </div>
        <div className="HomeButtons" id="DownloadCSV" style={{ display: showOutput }}>
          <Link onClick={DownloadCSV} ><p id='JoinButton'>Download .csv File</p></Link>
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