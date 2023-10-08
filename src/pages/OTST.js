import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import './OTST.css'
import Pako from 'pako';
import * as d3 from 'd3';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import profiles from '../components/Website Individual Information/profileData';
import { Link } from 'react-router-dom';

function OTST() {

    useEffect(() => {
        document.title = 'BRL - OTST';
        return () => {
            document.title = 'My React App'; // This is optional and will reset the title when the component unmounts.
        };
    }, []); // Empty dependency array ensures this runs only once when the component mounts.

    // For First Section
    const getProfileByName = (profileName) => {
        return profiles.find(profile => profile.ProfileName === profileName);
    };
    const mainProfile = ['Riccardo']
    const supportProfile = ['Connor', 'Prof', 'Ilyas']
    const Roles = ["Project Lead", "UX Designer", "Collaborator/else?", "UI Developer"]

    const mainUserProfile = mainProfile.map(getProfileByName).filter(Boolean);
    const supportUserProfiles = supportProfile.map(getProfileByName).filter(Boolean);

    // For Graph
    const [size, setSize] = useState(building_size[0].value);
    const buildingSize = (option) => {
        setSize(option.value)
    }

    const [temperature, setTemperature] = useState(temperature_scale[0].value);
    const [prevTemperature, setprevTemperature] = useState(temperature_scale[0].value);
    const temperatureScale = (option) => {
        const newScale = option.value;

        // Convert the otValue
        if (temperature === 'Celsius' && newScale === 'Fahrenheit') {
            setotValue((otValue * 9 / 5) + 32);
        } else if (temperature === 'Fahrenheit' && newScale === 'Celsius') {
            setotValue((otValue - 32) * 5 / 9);
        }

        // Update the temperature scale
        setTemperature(newScale);
    }

    const [climate, setClimate] = useState(climate_zone[0].value);
    const climateZone = (option) => {
        setClimate(option.value);
    }

    const [or, setOR] = useState(occupancy_rate[0].value);
    const occupancyRate = (option) => {
        setOR(option.value);
    }

    const [otValue, setotValue] = useState(25)
    const handleOTChange = (event) => {
        setotValue(event.target.value);
    }

    const labels = ["LM", "LA", "2h EM; 1h LT; 2h LA", "3h EM; 3h EA", "3h LM; 3h LA", "2h LT; 1h MM; 1h MA", "1h EA; 1h MA; 2h LT", "1h MM; 1h LM; 2h LT", "2h LM; 2h EA", "1h LT; 1h MA", "1h LT; 1h MM", "LT", "LT", "0"]
    const fulllabels = ["Late-Morning", "Late-Afternoon", "2h Early-Morning; 1h Lunchtime; 2h Late-Afternoon", "3h Early-Morning; 3h EA", "3h Late-Morning; 3h Late-Afternoon", "2h Lunchtime; 1h Mid-Morning; 1h Mid-Afternoon", "1h EA; 1h Mid-Afternoon; 2h Lunchtime", "1h Mid-Morning; 1h Late-Morning; 2h Lunchtime", "2h Late-Morning; 2h EA", "1h Lunchtime; 1h Mid-Afternoon", "1h Lunchtime; 1h Mid-Morning", "Lunchtime", "Lunchtime", "0"]
    const initialItems = [false, false, false, false, true, false, false, false, true, false, false, true, false, true]
    const options = labels.map((label, index) => ({
        value: index,
        label: label,
        isChecked: initialItems[index]
    }));
    const [selectedOptions, setSelectedOptions] = useState(options.filter(option => option.isChecked));

    const handle0HourChange = (selectedItems) => {
        const updatedOptions = [...selectedOptions.filter(option => option.value < 13 || option.value > 13), ...selectedItems];
        setSelectedOptions(updatedOptions);
    };
    const handle1HourChange = (selectedItems) => {
        const updatedOptions = [...selectedOptions.filter(option => option.value < 12 || option.value > 12), ...selectedItems];
        setSelectedOptions(updatedOptions);
    };
    const handle2HoursChange = (selectedItems) => {
        const updatedOptions = [
            ...selectedOptions.filter(option => option.value < 9 || option.value > 11),
            ...selectedItems
        ];
        setSelectedOptions(updatedOptions);
    };
    const handle4HoursChange = (selectedItems) => {
        const updatedOptions = [
            ...selectedOptions.filter(option => option.value < 5 || option.value > 8),
            ...selectedItems
        ];
        setSelectedOptions(updatedOptions);
    };
    const handle6HoursChange = (selectedItems) => {
        const updatedOptions = [
            ...selectedOptions.filter(option => option.value > 4),
            ...selectedItems
        ];
        setSelectedOptions(updatedOptions);
    };

    const formatLabel = (option, meta) => {
        if (meta.context === 'menu') {
            return fulllabels[option.value];  // Display full label from the fulllabels array
        }
        return option.label;  // Display abbreviation from the labels array
    };

    // Fetch Data on Load
    const [climateData, setClimateData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://a4p9ygse26.execute-api.ap-southeast-1.amazonaws.com/dev', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        }).then(response => response.json()).then(data => {
            // Decode and decompress the gzipped data
            let decodedData = atob(data['body']);
            let compressedData = new Uint8Array(decodedData.length);
            for (let i = 0; i < decodedData.length; i++) {
                compressedData[i] = decodedData.charCodeAt(i);
            }
            let decompressedData = Pako.inflate(compressedData, { to: 'string' });

            // Parse the decompressed string into a JSON object
            let output = JSON.parse(decompressedData);

            setClimateData(output);
            setLoading(false);
            setTemperature(temperature_scale[0].value);
            setprevTemperature(temperature_scale[0].value);
        }).catch(error => {
            setLoading(false);
        });
    }, []);

    // Convert temperature when needed
    useEffect(() => {
        if (!loading) {
            const convertedData = {};
            for (const [key, value] of Object.entries(climateData)) {
                convertedData[key] = convertTemperature(prevTemperature, temperature, value);
            }
            setClimateData(convertedData);
            setprevTemperature(temperature);
        }
    }, [temperature]);

    // Render graph after data is loaded
    let scale;
    let baseline;
    const [col1, setcol1] = useState([]); // Temp Scale
    const [col2, setcol2] = useState([]); // Climate
    const [col3, setcol3] = useState([]); // Patt
    const [col3_2, setcol3_2] = useState([]); // Patt Shortened
    const [col4, setcol4] = useState([]); // Rate
    const [col5, setcol5] = useState([]); // Outdoor Temperature
    const [col6, setcol6] = useState([]); // Setpoint
    const [col7, setcol7] = useState([]); // Energy
    const [col8, setcol8] = useState([]); // Baseline
    const [col9, setcol9] = useState([]); // Savings
    const [col10, setcol10] = useState([]); // Legend Color
    const [exceedValue, setexceedValue] = useState(false)
    const [usescale, setusescale] = useState();
    const [usebaseline, setusebaseline] = useState();
    useEffect(() => {
        const drawGraph = () => {
            if (!loading) {
                if (temperature === 'Celsius') {
                    scale = '°C';
                    baseline = "22.5"
                } else {
                    scale = '°F';
                    baseline = "72.5"
                }
                setusescale(scale)
                setusebaseline(baseline)

                let scale_text = document.getElementById('scale');
                scale_text.textContent = scale;

                let all_colors = ["#7986CB", "#1A237E", "#303F9F", "#3F51B5", "blue", "#388E3C", "#4CAF50", "#81C784", "green", "#FBC02D", "#FBC02D", "khaki", "#8E24AA", "red"];
                const filteredColors = selectedOptions.map(element => all_colors[element.value]);
                setcol10(filteredColors)
                const filteredLabels = selectedOptions.map(element => labels[element.value]);
                setcol3_2(filteredLabels);
                const filteredFullLabels = selectedOptions.map(element => fulllabels[element.value]);

                let data_climate = climateData[climate]
                // const data_building = data_climate[size]
                const data_or = data_climate.map(each_or => each_or[or]);
                const indices = selectedOptions.map(option => option.value);
                const data_op_checked = data_or.map(subArray => indices.map(index => subArray[index]));

                const svgContainer = d3.select("#graph");
                svgContainer.select("svg").remove();

                const margin = { top: 20, right: 30, bottom: 40, left: 80 };
                const width = document.getElementById('graph').offsetWidth - margin.left - margin.right;
                const height = (document.getElementById('graph').offsetHeight - margin.top - margin.bottom);

                const x = d3.scaleLinear()
                    .range([0, width]);

                const y = d3.scaleLinear()
                    .range([height, 0]);

                const svg = svgContainer
                    .append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", `translate(${margin.left},${margin.top})`);

                let x_values = data_op_checked[0];
                let y_values = data_op_checked[1];
                let e_values = data_op_checked[2];
                let b_values = data_op_checked[3];

                let xExtent = d3.extent(x_values.flat());
                let yExtent = d3.extent(y_values.flat());

                x.domain([xExtent[0] - 1, xExtent[1] + 1]);
                y.domain([yExtent[0] - 1, yExtent[1] + 1]);

                svg.append("g")
                    .attr("transform", `translate(0, ${height})`)
                    .call(d3.axisBottom(x))

                svg.append("g")
                    .call(d3.axisLeft(y))

                const line = d3.line()
                    .x(d => x(d.x))
                    .y(d => y(d.y))

                let tooltip = d3.select("body").append("div")
                    .attr("class", "tooltip")
                    .style("opacity", 0);

                svg.append("text")
                    .attr("transform", `translate(${width / 2} ,${height + margin.top + 15})`) // Position at the middle of the x-axis, and move slightly below the axis
                    .style("text-anchor", "middle")
                    .text(`Outdoor Temperature (${scale})`);

                svg.append("text")
                    .attr("transform", "rotate(-90)") // Rotate the text 90 degrees
                    .attr("y", 20 - margin.left) // Position it to the left of the y-axis
                    .attr("x", 0 - (height / 2)) // Position at the middle of the y-axis
                    .attr("dy", "1em") // Move slightly away from the axis
                    .style("text-anchor", "middle")
                    .text(`Optimal Setpoint (${scale})`);

                // const legends = filteredLabels.map((label, index) => {
                //     return { color: filteredColors[index], label: label };
                // });

                // var legend = svg.selectAll('.legend')
                //     .data(legends)
                //     .enter().append('g')
                //     .attr('class', 'legend')
                //     .attr('transform', function (d, i) { return 'translate(' + (50) + ',' + (i * 20) + ')'; });

                // legend.append('rect')
                //     .attr('x', -30)
                //     .attr('y', 7)
                //     .attr('width', 19)
                //     .attr('height', 5)
                //     .style('fill', d => d.color);

                // legend.append('text')
                //     .attr('x', -5)
                //     .attr('y', 9.5)
                //     .attr('dy', '0.32em')
                //     .text(function (d) { return d.label; });

                const temporary_col1 = [] // Temp Scale
                const temporary_col2 = [] // Climate
                const temporary_col3 = [] // Patt
                const temporary_col4 = [] // Rate
                const temporary_col5 = [] // Outdoor Temperature
                const temporary_col6 = [] // Setpoint
                const temporary_col7 = [] // Energy
                const temporary_col8 = [] // Baseline
                const temporary_col9 = [] // Savings

                for (let i = 0; i < x_values.length; i++) {
                    const currentX = x_values[i];
                    const currentY = y_values[i];
                    const currentE = e_values[i];
                    const currentB = b_values[i];

                    const plot_data = currentX.map((x, j) => ({ x, y: currentY[j], e: currentE[j], b: currentB[j] }));

                    // Plot the line
                    svg.append("path")
                        .datum(plot_data)
                        .attr("fill", "none")
                        .attr("stroke", filteredColors[i % filteredColors.length])  // Cycle through colors if there are more lines than colors
                        .attr("stroke-width", 3)
                        .attr("d", line);

                    let hoverLineHorizontal = svg.append("line")
                        .style("stroke", "gray")
                        .style("stroke-width", 2)
                        .style("stroke-dasharray", "5,5")
                        .style("opacity", 0);

                    let hoverLineVertical = svg.append("line")
                        .style("stroke", "gray")
                        .style("stroke-width", 2)
                        .style("stroke-dasharray", "5,5")
                        .style("opacity", 0);

                    // Hover to show points on the heat and cool lines
                    svg.selectAll(`.heat-point-${i}`)
                        .data(plot_data)
                        .enter().append('circle')
                        .attr('class', `heat-point-${i}`)
                        .attr('cx', d => x(d.x))
                        .attr('cy', d => y(d.y))
                        .attr('r', 3)
                        .attr('fill', 'red')
                        .attr('opacity', 0)
                        .on('mouseover', function (event, d) {
                            let [xPos, yPos] = d3.pointer(event, svg.node());
                            tooltip.transition()
                                .duration(200)
                                .style('opacity', 0.9);
                            tooltip.html(`Outdoor Temperature (${scale}): ${Number(d.x).toFixed(1)} <br/> Optimal Setpoint (${scale}): ${Number(d.y).toFixed(1)} <br/> Energy Savings Compared to ${baseline}${scale} (%): ${Number(((Math.abs(d.e - d.b) / (d.b)) * 100)).toFixed(2)}`)
                                .style('left', (xPos + margin.left + document.getElementById('graph').offsetLeft) + 'px')
                                .style('top', (yPos + document.getElementById('graph').offsetTop) + 'px');

                            hoverLineVertical.attr("x1", x(d.x))
                                .attr("y1", y(d.y))
                                .attr("x2", x(d.x))
                                .attr("y2", height)
                                .style("opacity", 1);

                            hoverLineHorizontal.attr("x1", x(d.x))
                                .attr("y1", y(d.y))
                                .attr("x2", 0)
                                .attr("y2", y(d.y))
                                .style("opacity", 1);
                        })
                        .on('mouseout', function (d) {
                            tooltip.transition()
                                .duration(100)
                                .style('opacity', 0);

                            hoverLineVertical.style("opacity", 0); // hide the vertical line
                            hoverLineHorizontal.style("opacity", 0); // hide the horizontal line
                        });

                    if (Number(otValue) < xExtent[1] && Number(otValue) > xExtent[0]) {
                        setexceedValue(false)
                        let scale_text_lower = document.getElementById('scale2');
                        scale_text_lower.textContent = scale;
                        let scale_text_higher = document.getElementById('scale3');
                        scale_text_higher.textContent = scale;

                        let scale_lower = document.getElementById('lower');
                        scale_lower.textContent = Number(xExtent[0]).toFixed(1);
                        let scale_higher = document.getElementById('higher');
                        scale_higher.textContent = Number(xExtent[1]).toFixed(1);

                        // Find the closest index for the specific x_value (assuming you have that value stored in a variable)
                        let closestIndex = findClosestIndex(currentX, Number(otValue));

                        // Extract the corresponding y_value based on the closestIndex
                        let closestY = currentY[closestIndex];
                        let closestE = currentE[closestIndex];
                        let closestB = currentB[closestIndex];

                        // Highlight the point by adding a circle
                        svg.append("circle")
                            .attr("cx", x(currentX[closestIndex]))
                            .attr("cy", y(closestY))
                            .attr("r", 6)  // Radius of circle
                            .attr("fill", filteredColors[i % filteredColors.length]);

                        // Add vertical line
                        svg.append("line")
                            .attr("x1", x(currentX[closestIndex]))
                            .attr("y1", y(closestY))
                            .attr("x2", x(currentX[closestIndex]))
                            .attr("y2", height)
                            .style("stroke", 'black')
                            .style("stroke-width", 2)
                            .style("stroke-dasharray", "5,5");

                        // Add horizontal line
                        svg.append("line")
                            .attr("x1", x(currentX[closestIndex]))
                            .attr("y1", y(closestY))
                            .attr("x2", 0)
                            .attr("y2", y(closestY))
                            .style("stroke", filteredColors[i % filteredColors.length])
                            .style("stroke-width", 2)
                            .style("stroke-dasharray", "5,5");

                        // Populate the columns for download csv
                        temporary_col1.push(temperature + ' (' + scale + ')') // Temp Scale
                        temporary_col2.push(climate) // Climate
                        temporary_col3.push(fulllabels[i]) // Patt
                        temporary_col4.push(occupancy_rate[or]) // Rate
                        temporary_col5.push(Number(otValue)) // Outdoor Temperature
                        temporary_col6.push(closestY) // Setpoint
                        temporary_col7.push(closestE) // Energy
                        temporary_col8.push(closestB) // Baseline

                        let savings = Number(((Math.abs(closestE - closestB) / (closestB)) * 100).toFixed(2))

                        temporary_col9.push(savings) // Savings
                    } else {
                        let scale_lower = document.getElementById('lower');
                        scale_lower.textContent = Number(xExtent[0]).toFixed(1);
                        let scale_higher = document.getElementById('higher');
                        scale_higher.textContent = Number(xExtent[1]).toFixed(1);
                        setexceedValue(true);
                    }
                }

                setcol1(temporary_col1);
                setcol2(temporary_col2);
                setcol3(temporary_col3);
                setcol4(temporary_col4);
                setcol5(temporary_col5);
                setcol6(temporary_col6);
                setcol7(temporary_col7);
                setcol8(temporary_col8);
                setcol9(temporary_col9);
            }
        };

        drawGraph();

        window.addEventListener('resize', drawGraph);

        return () => {
            window.removeEventListener('resize', drawGraph)
        }
    }, [climate, climateData, or, selectedOptions, otValue, exceedValue])

    const Reset = () => {
        setTemperature(temperature_scale[0].value);
        setOR(occupancy_rate[0].value);
        setClimate(climate_zone[0].value);
        setSelectedOptions(options.filter(option => option.isChecked));
        setotValue(25);
        setexceedValue(false);
    }

    const DownloadCSV = () => {
        let csvContent = "Temperature Scale,Climate Zone,Unoccupied Periods,Occupancy Rate,Outdoor Temperature,Optimal Setpoint,HVAC Energy Consumption (J),HVAC Baseline Energy Consumption (J),Energy Savings (%)\n";
        // Assuming col1, col2, ... col9 are of the same length
        for (let i = 0; i < col1.length; i++) {
            let row = [col1[i], col2[i], col3[i], col4[i], col5[i], col6[i], col7[i], col8[i], col9[i]].join(",");
            csvContent += row + "\n";
        }

        // Create Blob
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

        // Create a download link and click it
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'data.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className='OTST'>
            <NavBar />

            <Container>
                <div className="first_section">
                    <div className='heading_and_links'>
                        <h1>Optimal Temperature Setpoint Tool</h1>
                        <h3>For source code and to report bugs</h3>
                        <div className="Github_stuff">
                            <div className="GitHub_Code">
                                <b><a className='icon' href="https://github.com/Building-Robotics-Lab/brlab" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></b>
                                <b><a className='text' href="https://github.com/Building-Robotics-Lab/brlab" rel="noreferrer" target="_blank">Code</a></b>
                            </div>
                            <div className="GitHub_Bugs">
                                <b><a className='icon' href="https://github.com/Building-Robotics-Lab/brlab/issues/new" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></b>
                                <b><a className='text' href="https://github.com/Building-Robotics-Lab/brlab/issues/new" rel="noreferrer" target="_blank">Bugs</a></b>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container useOrange={true}>
                <div className="second_section">
                    <div className="inputs">
                        <div className="inputs_left">
                            <div className='select_options'>
                                <p>Building Size:</p>
                                <Select options={building_size} value={building_size.find(building => building.value === size)} defaultValue={building_size[0]} onChange={buildingSize} style={{ width: '600px' }} isSearchable={false} />
                            </div>
                            <div className='select_options'>
                                <p>Tempreature Scale:</p>
                                <Select options={temperature_scale} value={temperature_scale.find(scale => scale.value === temperature)} defaultValue={temperature_scale[0]} onChange={temperatureScale} style={{ width: '600px' }} isSearchable={false} />
                            </div>
                            <div className='select_options'>
                                <p>Choose Climate Zone:</p>
                                <Select options={climate_zone} value={climate_zone.find(zone => zone.value === climate)} defaultValue={climate_zone[0]} onChange={climateZone} style={{ width: '600px' }} isSearchable={false} />
                            </div>
                            <div className='select_options'>
                                <p>Choose Occupancy Rate:</p>
                                <Select options={occupancy_rate} value={occupancy_rate.find(rate => rate.value === or)} defaultValue={occupancy_rate[0]} onChange={occupancyRate} style={{ width: '600px' }} isSearchable={false} />
                            </div>
                            <div className='select_options'>
                                <p>Enter Outdoor Temperature (<span id='scale'></span>)</p>
                                <input type="number" value={otValue} onChange={handleOTChange} className={exceedValue ? "error-input" : ""} />
                            </div>
                            <div className="error_input">
                                <p style={{ display: exceedValue ? "block" : "none" }}>Enter Outdoor Temperature between <span id='lower'></span><span id='scale2'></span> and <span id='higher'></span><span id='scale3'></span></p>
                            </div>
                            {!exceedValue && (
                                <div className='all_outputs'>
                                    {col1.map((_, index) => (
                                        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                            <svg width="30" height="20">
                                                <rect x="0" y="7" width="19" height="5" style={{ fill: col10[index] }} />
                                            </svg>
                                            <p>
                                                <b><span id={`output_label_${index}`}>{col3_2[index]}</span></b>:
                                                Optimal Setpoint (<span id={`output_scale_${index}`}>{usescale}</span>):
                                                <b><span id={`output_sp_${index}`}> {col6[index].toFixed(1)}</span></b>;
                                                Energy Savings Compared to <span id={`output_baseline_${index}`}>{usebaseline}</span><span id={`output_scale_${index}`}>{usescale}</span> (%): <b><span id={`output_savings_${index}`}>{col9[index]}</span></b>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="inputs_right">
                            <div className='unoccupied_periods'>
                                <p>0 Hours Unoccupied</p>
                                <Select isMulti name="0-hours-unoccupied" formatOptionLabel={formatLabel} options={options.slice(13, 14)} value={selectedOptions.filter(option => option.value >= 13 && option.value < 14)} onChange={handle0HourChange} />
                            </div>
                            <div className='unoccupied_periods'>
                                <p>1 Hour Unoccupied</p>
                                <Select isMulti name="1-hour-unoccupied" formatOptionLabel={formatLabel} options={options.slice(12, 13)} value={selectedOptions.filter(option => option.value >= 12 && option.value < 13)} onChange={handle1HourChange} />
                            </div>
                            <div className='unoccupied_periods'>
                                <p>2 Hours Unoccupied</p>
                                <Select isMulti name="2-hours-unoccupied" formatOptionLabel={formatLabel} options={options.slice(9, 12)} value={selectedOptions.filter(option => option.value >= 9 && option.value < 12)} onChange={handle2HoursChange} />
                            </div>
                            <div className='unoccupied_periods'>
                                <p>4 Hours Unoccupied</p>
                                <Select isMulti name="4-hours-unoccupied" formatOptionLabel={formatLabel} options={options.slice(5, 9)} value={selectedOptions.filter(option => option.value >= 5 && option.value < 9)} onChange={handle4HoursChange} />
                            </div>
                            <div className='unoccupied_periods'>
                                <p>6 Hours Unoccupied</p>
                                <Select isMulti name="6-hours-unoccupied" formatOptionLabel={formatLabel} options={options.slice(0, 5)} value={selectedOptions.filter(option => option.value >= 0 && option.value < 5)} onChange={handle6HoursChange} />
                            </div>
                            <div className="legend">
                                <p><b>EM</b>: Early-Morning; <b>MM</b>: Mid-Morning; <b>LM</b>: Late-Morning; <br /><b>EA</b>: Early-Afternoon; <b>MA</b>: Mid-Afternoon; <b>LA</b>: Late-Afternoon; <b>LT</b>: Lunchtime</p>
                            </div>
                            <div className='Buttons'>
                                <div className="HomeButtons">
                                    <Link onClick={Reset}><p id='JoinButton'>Reset</p></Link>
                                </div>
                                <div className="HomeButtons">
                                    <Link onClick={DownloadCSV} className={exceedValue ? "disabled-button" : ""}><p id='JoinButton'>Download .csv File</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="outputs" id='graph'>
                        {loading &&
                            <FontAwesomeIcon className='loading_thing' icon={faSpinner} spin size="3x" style={{ color: "#2d6353" }} />
                        }
                    </div>

                </div>
            </Container>

            {/* <Container>
                <div className="first_section">
                    <div className='contacts'>
                        <div>
                            <h3>Tool Contacts</h3>
                        </div>
                        <div className='Main'>
                            {mainUserProfile.map((profile, index) => (
                                <div className="each_profile" key={index}>
                                    <div className="profile_image">
                                        <Link to={`/individual_profile/${profile.ProfileName}`} target="_blank">
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
                                        <Link to={profile.ProfileName !== 'Prof' ? `/individual_profile/${profile.ProfileName}` : profile.ProfileLink} target="_blank">
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
            </Container> */}

            <Footer />
        </div>
    )
}

export default OTST

const temperature_scale = [
    { value: 'Celsius', label: 'Celsius (°C)' },
    { value: 'Fahrenheit', label: 'Fahrenheit (°F)' }
];

const climate_zone = [
    { value: 'Singapore', label: '0A (Extremely Hot, Humid)' },
    { value: 'Miami', label: '1A (Very Hot, Humid)' },
    { value: 'Houston', label: '2A (Hot, Humid)' },
    { value: 'Phoenix', label: '2B (Hot, Dry)' },
    { value: 'Atlanta', label: '3A (Warm, Humid)' },
    { value: 'Los Angeles', label: '3B-Coast (Warm, Marine)' },
    { value: 'Las Vegas', label: '3B (Warm, Dry)' },
    { value: 'San Francisco', label: '3C (Warm, Marine)' },
    { value: 'Baltimore', label: '4A (Mild, Humid)' },
    { value: 'Albuquerque', label: '4B (Mild, Dry)' },
    { value: 'Seattle', label: '4C (Mild, Marine)' },
    { value: 'Chicago', label: '5A (Cold, Humid)' },
    { value: 'Boulder', label: '5B (Cold, Dry)' },
    { value: 'Minneapolis', label: '6A (Cold, Humid)' },
    { value: 'Helena', label: '6B (Cold, Dry)' },
    { value: 'Duluth', label: '7 (Very Cold)' },
    { value: 'Fairbanks', label: '8 (Sub-Arctic)' }
];

const occupancy_rate = [
    { value: 0, label: 'Lightly Occupied (25%)' },
    { value: 1, label: 'Mildly Occupied (50%)' },
    { value: 2, label: 'Most Occupied (75%)' },
    { value: 3, label: 'Fully Occupied (100%)' }
];

const building_size = [
    { value: 0, label: 'Small Building' },
    { value: 1, label: 'Medium Building' },
    { value: 2, label: 'Large Building' },
];


const convertTemperature = (prevScale, selectedScale, inputList) => {
    const convertTemp = (temp, conversionFunction) => {
        return temp === "" || temp === null ? temp : conversionFunction(temp);
    };

    const conversions = {
        "CelsiusCelsius": temp => temp,
        "CelsiusFahrenheit": temp => (temp * 9 / 5) + 32,
        "FahrenheitCelsius": temp => (temp - 32) * 5 / 9,
        "FahrenheitFahrenheit": temp => temp,
    };

    const conversionKey = prevScale + selectedScale;

    // Map over each Array(4) in the outer array
    let convertedList = inputList.map(array4 => {
        // Map over each of the 14 Arrays within each Array(4)
        return array4.map(array14 => {
            // Map over each Array(56) within each of the 14 Arrays
            return array14.map(array56 => {
                // Map over each float value within the Array(56) and convert it
                return array56.map(floatValue => convertTemp(floatValue, conversions[conversionKey]));
            });
        });
    });

    return convertedList;
};

function findClosestIndex(array, target) {
    let closest = array[0];
    let index = 0;

    for (let i = 1; i < array.length; i++) {
        if (Math.abs(array[i] - target) < Math.abs(closest - target)) {
            closest = array[i];
            index = i;
        }
    }

    return index;
}

