import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from './../components/Container';
import './OTST.css'
import Pako from 'pako';
import * as d3 from 'd3';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Select from 'react-select';
import profiles from '../components/Website Individual Information/profileData';
import { Link } from 'react-router-dom';

import sixhLM from '../components/Website Data/OTST/6hLM.png';
import sixhLA from '../components/Website Data/OTST/6hLA.png';
import sixhEMLTLA from '../components/Website Data/OTST/6hEMLTLA.png';
import sixhEMEA from '../components/Website Data/OTST/6hEMEA.png';
import sixhLMLA from '../components/Website Data/OTST/6hLMLA.png';

import fourhLTMMMA from '../components/Website Data/OTST/4hLTMMMA.png';
import fourhEAMALT from '../components/Website Data/OTST/4hEAMALT.png';
import fourhMMLMLT from '../components/Website Data/OTST/4hMMLMLT.png';
import fourhLMEA from '../components/Website Data/OTST/4hLMEA.png';

import twohLTMA from '../components/Website Data/OTST/2hLTMA.png';
import twohLTMM from '../components/Website Data/OTST/2hLTMM.png';
import twohLT from '../components/Website Data/OTST/2hLT.png';

import onehLT from '../components/Website Data/OTST/1hLT.png';

import zerohzero from '../components/Website Data/OTST/0h0.png';

function OTST() {
    const temperature_scale = [
        { value: 'Celsius', label: 'Celsius (°C)' },
        { value: 'Fahrenheit', label: 'Fahrenheit (°F)' }
    ];
    const [temperature, setTemperature] = useState(temperature_scale[0].value);
    const [prevTemperature, setprevTemperature] = useState(temperature_scale[0].value);
    const temperatureScale = (option) => {
        setTemperature(option.value);
    }

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
    const [climate, setClimate] = useState(climate_zone[0].value);
    const climateZone = (option) => {
        setClimate(option.value);
    }

    const occupancy_rate = [
        { value: 0, label: 'Lightly Occupied (25%)' },
        { value: 1, label: 'Mildly Occupied (50%)' },
        { value: 2, label: 'Most Occupied (75%)' },
        { value: 3, label: 'Fully Occupied(100%)' }
    ];
    const [or, setOR] = useState(occupancy_rate[0].value);
    const occupancyRate = (option) => {
        setOR(option.value);
    }

    const [otValue, setotValue] = useState(25)
    const handleOTChange = (event) => {
        setotValue(event.target.value);
    }

    const initialItems = [false, false, false, false, true, false, false, false, true, false, false, true, false, true]
    const [checkedItems, setCheckedItems] = useState([...initialItems]);
    const labels = [
        "LM", "LA", "2h EM; 1h LT; 2h LA", "3h EM; 3h EA", "3h LM; 3h LA",
        "2h LT; 1h MM; 1h MA", "1h EA; 1h MA; 2h LT", "1h MM; 1h LM; 2h LT", "2h LM; 2h EA",
        "1h LT; 1h MA", "1h LT; 1h MM", "LT",
        "LT",
        "0"]
    const fulllabels = [
        "Late-Morning", "Late-Afternoon", "2h Early-Morning; 1h Lunchtime; 2h Late-Afternoon", "3h Early-Morning; 3h Early-Afternoon", "3h Late-Morning; 3h Late-Afternoon",
        "2h Lunchtime; 1h Mid-Morning; 1h Mid-Afternoon", "1h Early-Afternoon; 1h Mid-Afternoon; 2h Lunchtime", "1h Mid-Morning; 1h Late-Morning; 2h Lunchtime", "2h Late-Morning; 2h Early-Afternoon",
        "1h Lunchtime; 1h Mid-Afternoon", "1h Lunchtime; 1h Mid-Morning", "Lunchtime",
        "Lunchtime",
        "0h Unoccupied"]
    const label_imgs = [sixhLM, sixhLA, sixhEMLTLA, sixhEMEA, sixhLMLA, fourhLTMMMA, fourhEAMALT, fourhMMLMLT, fourhLMEA, twohLTMA, twohLTMM, twohLT, onehLT, zerohzero]
    const [lab, setLab] = useState()
    const [short_lab, set_short_lab] = useState();
    const [sel_col, set_sel_col] = useState();
    const handleCheckboxChange = (index) => (event) => {
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems[index] = event.target.checked;
        setCheckedItems(updatedCheckedItems);
    };

    const getProfileByName = (profileName) => {
        return profiles.find(profile => profile.ProfileName === profileName);
    };
    const mainProfile = ['Riccardo']
    const supportProfile = ['Connor', 'Prof', 'Ilyas']
    const Roles = ["Project Lead", "UX Designer", "Collaborator/else?", "UI Developer"]

    const mainUserProfile = mainProfile.map(getProfileByName).filter(Boolean);
    const supportUserProfiles = supportProfile.map(getProfileByName).filter(Boolean);

    const [climateData, setClimateData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // Fetch data once when the component mounts
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
            setError(error);
            setLoading(false);
        });
    }, []);

    // Convert temperature when needed
    useEffect(() => {
        if (!loading) {
            const convertedData = {}; // Replace this with the actual conversion logic
            for (const [key, value] of Object.entries(climateData)) {
                convertedData[key] = convertTemperature(prevTemperature, temperature, value);
            }
            setClimateData(convertedData);
            setprevTemperature(temperature);
        }
    }, [temperature]);

    const [forCSVdata, setforCSVdata] = useState({ x_values: [], y_values: [], e_values: [], b_values: [] });
    const [x_val_extent, set_x_val_extent] = useState();
    
    const [col1, setcol1] = useState([]);
    const [col2, setcol2] = useState([]);
    const [col3, setcol3] = useState([]);
    const [col4, setcol4] = useState([]);
    const [col5, setcol5] = useState([]);
    const [col6, setcol6] = useState([]);
    const [col7, setcol7] = useState([]);
    const [col8, setcol8] = useState([]);
    const [col9, setcol9] = useState([]);
    const [col10, setcol10] = useState([]);
    const [col11, setcol11] = useState([]);
    const [col12, setcol12] = useState([]);
    const [isCalculated, setIsCalculated] = useState(false);

    useEffect(() => {
        const drawGraph = () => {
            if (!loading) {
                let scale;
                if (temperature === 'Celsius') {
                    scale = '°C';
                } else {
                    scale = '°F';
                }

                let scale_text = document.getElementById('scale');
                scale_text.textContent = scale;

                let scale_text2 = document.getElementById('scale2');
                scale_text2.textContent = scale;

                let scale_text3 = document.getElementById('scale3');
                scale_text3.textContent = scale;

                let all_colors = ["#7986CB", "#1A237E", "#303F9F", "#3F51B5", "blue", "#388E3C", "#4CAF50", "#81C784", "green", "#FBC02D", "#FBC02D", "khaki", "#8E24AA", "red"];
                const filteredColors = all_colors.filter((_, index) => checkedItems[index]);
                set_sel_col(filteredColors);

                let data_climate = climateData[climate]
                const data_or = data_climate.map(each_or => each_or[or]);
                const data_op_checked = data_or.map(each_op => {
                    return each_op.filter((_, index) => checkedItems[index]);
                });

                const selectedLabels = fulllabels.filter((_, index) => checkedItems[index]);
                setLab(selectedLabels);
                const short_selectedLabels = labels.filter((_, index) => checkedItems[index]);
                set_short_lab(short_selectedLabels);

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

                setforCSVdata({ x_values, y_values, e_values, b_values }); // update csvdata

                let xExtent = d3.extent(x_values.flat());
                let yExtent = d3.extent(y_values.flat());

                x.domain([xExtent[0] - 1, xExtent[1] + 1]);
                y.domain([yExtent[0] - 1, yExtent[1] + 1]);

                set_x_val_extent(xExtent);

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

                // For legends
                const legend_labels = labels.filter((_, index) => checkedItems[index]);
                const legend_colors = all_colors.filter((_, index) => checkedItems[index]);
                const legends = legend_labels.map((label, index) => {
                    return { color: legend_colors[index], label: label };
                });

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




                for (let i = 0; i < x_values.length; i++) {
                    const currentX = x_values[i];
                    const currentY = y_values[i];
                    const currentE = e_values[i];
                    const currentB = b_values[i];

                    // Prepare data for the current line
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
                            tooltip.html(`Outdoor Temperature (${scale}): ${Number(d.x).toFixed(1)} <br/> Optimal Setpoint (${scale}): ${Number(d.y).toFixed(1)} <br/> Energy Savings (%): ${Number(((Math.abs(d.e - d.b) / (d.b)) * 100)).toFixed(2)}`)
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

                    if (isCalculated) {
                        // Find the closest index for the specific x_value (assuming you have that value stored in a variable)
                        let closestIndex = findClosestIndex(currentX, Number(otValue));

                        // Extract the corresponding y_value based on the closestIndex
                        let closestY = currentY[closestIndex];

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
                    }
                }
            }
        };

        drawGraph();

        window.addEventListener('resize', drawGraph);

        return () => {
            window.removeEventListener('resize', drawGraph)
        }

    }, [climate, climateData, or, checkedItems, isCalculated]);

    const Reset = () => {
        setCheckedItems([...initialItems]);
        setTemperature(temperature_scale[0].value);
        // setprevTemperature(temperature_scale[0].value);
        setOR(occupancy_rate[0].value);
        setClimate(climate_zone[0].value)
        setotValue("");
        setexceedValue(false);
        setIsCalculated(false);
    }

    const [exceedValue, setexceedValue] = useState(false)
    
    const CalculateButton = () => {
        const { x_values, y_values, e_values, b_values } = forCSVdata;
        let inputValue = Number(otValue);

        if (inputValue < x_val_extent[1] && inputValue > x_val_extent[0]) {
            const newcol1 = [] // Temp Scale
            const newcol2 = [] // Climate
            const newcol3 = [] // Patt
            const newcol4 = [] // Rate
            const newcol5 = [] // OT
            const newcol6 = [] // SP
            const newcol7 = [] // E
            const newcol8 = [] // B
            const newcol9 = [] // Savings
            const newcol10 = []
            const newcol11 = []
            const newcol12 = []

            let scale;
            let scale2;
            if (temperature === 'Celsius') {
                scale = 'Celsius (°C)';
                scale2 = '°C'
            } else {
                scale = 'Fahrenheit (°F)';
                scale2 = '°F'
            }

            const closestIndices = findClosestIndices(x_values, inputValue);
            closestIndices.forEach((element, index) => {
                newcol1.push(scale)
                newcol2.push(climate)
                newcol3.push(lab[index])
                newcol4.push(occupancy_rate[or].label)
                newcol5.push(inputValue)
                newcol6.push(Number((y_values[index][element]).toFixed(1)))
                newcol7.push((e_values[index][element]));
                newcol8.push(b_values[index][element]);

                let savings = Number(((Math.abs(e_values[index][element] - b_values[index][element]) / (b_values[index][element])) * 100).toFixed(2))

                newcol9.push(savings);
                newcol10.push(scale2);
                newcol11.push(sel_col[index])
                newcol12.push(short_lab[index])
            });
            setcol1(newcol1);
            setcol2(newcol2);
            setcol3(newcol3);
            setcol4(newcol4);
            setcol5(newcol5);
            setcol6(newcol6);
            setcol7(newcol7);
            setcol8(newcol8);
            setcol9(newcol9);
            setcol10(newcol10);
            setcol11(newcol11);
            setcol12(newcol12);
            setexceedValue(false)
            setIsCalculated(true);
        } else {
            setexceedValue(true)
            setIsCalculated(false);
            let scale_text_lower = document.getElementById('lower');
            scale_text_lower.textContent = x_val_extent[0].toFixed(1);

            let scale_text_higher = document.getElementById('higher');
            scale_text_higher.textContent = x_val_extent[1].toFixed(1);
        }
    }

    const DownloadCSV = () => {
        if (!otValue) {
            setexceedValue(true);
            let scale_text_lower = document.getElementById('lower');
            scale_text_lower.textContent = x_val_extent[0].toFixed(1);

            let scale_text_higher = document.getElementById('higher');
            scale_text_higher.textContent = x_val_extent[1].toFixed(1);
        } else {
            CalculateButton();
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
    }

    return (
        <div className="OTST">
            <NavBar />

            <Container>
                <div className="first_section">
                    <div className='heading_and_links'>
                        <h1>Optimal Temperature Setpoint Tool</h1>
                        <h3>For source code and to report bugs</h3>
                        <div className="Github_stuff">
                            <div className="GitHub_Code">
                                <b><a className='icon' href="https://github.com/Building-Robotics-Lab/brlab" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></b>
                                <b><a className='text' href="https://github.com/Building-Robotics-Lab/brlab" target="_blank">Code</a></b>
                            </div>
                            <div className="GitHub_Bugs">
                                <b><a className='icon' href="https://github.com/Building-Robotics-Lab/brlab/issues/new" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></b>
                                <b><a className='text' href="https://github.com/Building-Robotics-Lab/brlab/issues/new" target="_blank">Bugs</a></b>
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
                                        <Link to={`/individual_profile/${profile.ProfileName}`} target="_blank">
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
                <div className='second_section'>
                    <div className='second_section_up'>
                        <div className='up_left'>
                            <div>
                                <p>Tempreature Scale:</p>
                                <Select options={temperature_scale} value={temperature_scale.find(scale => scale.value === temperature)} defaultValue={temperature_scale[0]} onChange={temperatureScale} style={{ width: '600px' }} isSearchable={false} />
                            </div>
                            <div>
                                <p>Choose Climate Zone:</p>
                                <Select options={climate_zone} value={climate_zone.find(zone => zone.value === climate)} defaultValue={climate_zone[0]} onChange={climateZone} style={{ width: '600px' }} isSearchable={false} />
                            </div>
                            <div>
                                <p>Choose Occupancy Rate:</p>
                                <Select options={occupancy_rate} value={occupancy_rate.find(rate => rate.value === or)} defaultValue={occupancy_rate[0]} onChange={occupancyRate} style={{ width: '600px' }} isSearchable={false} />
                            </div>
                            <div>
                                <p>Enter Outdoor Temperature (<span id='scale'></span>)</p>
                                <input type="number" value={otValue} onChange={handleOTChange} className={exceedValue ? "error-input" : ""} />
                            </div>
                            <div className='Buttons'>
                                <div className="HomeButtons">
                                    <Link onClick={CalculateButton}><p id='JoinButton'>Calculate</p></Link>
                                </div>
                                <div className="HomeButtons">
                                    <Link onClick={Reset}><p id='JoinButton'>Reset</p></Link>
                                </div>
                                <div className="HomeButtons">
                                    <Link onClick={DownloadCSV} className={exceedValue ? "disabled-button" : ""}><p id='JoinButton'>Download .csv File</p></Link>
                                </div>
                            </div>
                            {isCalculated && (
                                <div className='all_outputs'>
                                    {col1.map((_, index) => (
                                        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                            <svg width="30" height="20">
                                                <rect x="0" y="7" width="19" height="5" style={{ fill: col11[index] }} />
                                            </svg>
                                            <p>
                                                <b><span id={`output_label_${index}`}>{col12[index]}</span></b>:
                                                Optimal Setpoint (<span id={`output_scale_${index}`}>{col10[index]}</span>):
                                                <span id={`output_sp_${index}`}> {col6[index]}</span>;
                                                Energy Savings (%): <span id={`output_savings_${index}`}>{col9[index]}</span>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className="error_input">
                                <p style={{ display: exceedValue ? "block" : "none" }}>Enter Outdoor Temperature between <span id='lower'></span><span id='scale2'></span> and <span id='higher'></span><span id='scale3'></span></p>
                            </div>
                        </div>
                        <div className='up_right'>
                            <div>
                                <section>
                                    <p>0 Hours Unoccupied</p>
                                    <div>
                                        <input type="checkbox" checked={checkedItems[13]} onChange={handleCheckboxChange(13)} />
                                        <img src={label_imgs[13]}></img>
                                        <label>{labels[13]}</label>
                                    </div>
                                </section>
                                <section>
                                    <p>1 Hour Unoccupied</p>
                                    <div>
                                        <input type="checkbox" checked={checkedItems[12]} onChange={handleCheckboxChange(12)} />
                                        <img src={label_imgs[12]}></img>
                                        <label>{labels[12]}</label>
                                    </div>
                                </section>
                                <section>
                                    <p>2 Hours Unoccupied</p>
                                    {checkedItems.slice(9, 12).map((isChecked, index) => (
                                        <div key={index + 9}>
                                            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange(index + 9)} />
                                            <img src={label_imgs[index + 9]}></img>
                                            <label>{labels[index + 9]}</label>
                                        </div>
                                    ))}
                                </section>
                            </div>
                            <div>
                                <section>
                                    <p>4 Hours Unoccupied</p>
                                    {checkedItems.slice(5, 9).map((isChecked, index) => (
                                        <div key={index + 5}>
                                            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange(index + 5)} />
                                            <img src={label_imgs[index + 5]}></img>
                                            <label>{labels[index + 5]}</label>
                                        </div>
                                    ))}
                                </section>
                                <section>
                                    <p>6 Hours Unoccupied</p>
                                    {checkedItems.slice(0, 5).map((isChecked, index) => (
                                        <div key={index}>
                                            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange(index)} />
                                            <img src={label_imgs[index]}></img>
                                            <label>{labels[index]}</label>
                                        </div>
                                    ))}
                                </section>
                            </div>
                            <div class="legend">
                                <p>EM: Early-Morning; MM: Mid-Morning; LM: Late-Morning; EA: Early-Afternoon; MA: Mid-Afternoon; LA: Late-Afternoon; LT: Lunchtime</p>
                            </div>
                        </div>
                    </div>
                    <div className='second_section_down' id='graph'>

                    </div>
                </div>
            </Container>

            <Footer />
        </div>
    );
}

export default OTST;

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

function findClosestIndices(arrays, target) {
    return arrays.map(arr => {
        let closest = arr[0];
        let index = 0;

        for (let i = 1; i < arr.length; i++) {
            if (Math.abs(arr[i] - target) < Math.abs(closest - target)) {
                closest = arr[i];
                index = i;
            }
        }

        return index;
    });
}

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
