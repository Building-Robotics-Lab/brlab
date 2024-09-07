import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '../components/Container'
import './ComfortGPT.css'
import { Link } from 'react-router-dom';
import * as d3 from 'd3';

import ExampleImage from './../components/Website Data/COMFORTGPToutput_example1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import profiles from '../components/Website Individual Information/profileData';

function ComfortGPT() {

    useEffect(() => {
        document.title = 'BRL - ComfortGPT';
        return () => {
            document.title = 'My React App'; // This is optional and will reset the title when the component unmounts.
        };
    }, []);

    // State for screen width and target height
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [targetHeight, setTargetHeight] = useState(30); // default height
    const [margin, settaretmargin] = useState({ top: 20, right: 20, bottom: 50, left: 70 })
    const [y_axis1, sety_axis1] = useState(20)
    const [y_axis2, sety_axis2] = useState(-60)

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            if (newWidth > 760) {
                // Batching updates for larger screens
                setTargetHeight(30);
                settaretmargin({ top: 20, right: 20, bottom: 60, left: 70 });
                sety_axis1(25);
                sety_axis2(-60);
                console.log('greater than 760');
            } else {
                // Batching updates for smaller screens
                setTargetHeight(20);
                settaretmargin({ top: 10, right: 10, bottom: 30, left: 40 });
                sety_axis1(10);
                sety_axis2(-35);
                console.log('less than 760');
            }
        };

        // Set the initial state based on the current window size
        handleResize();

        // Set up the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array to run only on mount and unmount


    // Define styles here, using targetHeight
    const styles = {
        control: (base) => ({
            ...base,
            minHeight: 'initial',
        }),
        valueContainer: (base) => ({
            ...base,
            height: `${targetHeight - 2}px`,
            padding: '0 2px',
        }),
        clearIndicator: (base) => ({
            ...base,
            padding: `${(targetHeight - 22) / 2}px`,
        }),
        dropdownIndicator: (base) => ({
            ...base,
            padding: `${(targetHeight - 22) / 2}px`,
        }),
    };

    // User Profiles
    const getProfileByName = (profileName) => {
        return profiles.find(profile => profile.ProfileName === profileName);
    };
    const mainProfile = ['Kai']
    const supportProfile = ['Connor', 'Prof', 'Ilyas']
    const Roles = ["Project Lead", "UX Designer", "PI", "UI Developer"]

    const mainUserProfile = mainProfile.map(getProfileByName).filter(Boolean);
    const supportUserProfiles = supportProfile.map(getProfileByName).filter(Boolean);

    const [temperature, setTemperature] = useState(temperature_scale[0].value);
    const temperatureScale = (option) => {
        setTemperature(option.value);
        const convertedTemperature_forDisplay = convertTemperature_forDisplay(temperature, option.value, otValues, stValues);
        setOtValues([...convertedTemperature_forDisplay[1]]);
        setStValues([...convertedTemperature_forDisplay[2]]);
    }

    // Handling changes for OT values
    const [otValues, setOtValues] = useState([...initialOtValues]);
    const [extremeOtIndices, setExtremeOtIndices] = useState({});
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
    const [stValues, setStValues] = useState([...initialStValues]);
    const [extremeStIndices, setExtremeStIndices] = useState({});
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

    const [loading, setLoading] = useState(true);
    const [plotData, setPlotData] = useState()
    useEffect(() => {
        const filteredPairs = filterPairs(otValues, stValues);
        let [toutListCelsius, setpointListCelsius] = convertTemperature_forCalculation(temperature, filteredPairs[0], filteredPairs[1]);
        fetch('https://qsqfy26d4a.execute-api.ap-southeast-1.amazonaws.com/dev', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                toutList: toutListCelsius,
                setpointList: setpointListCelsius
            })
        }).then(response => response.json()).then(data => {
            const output = JSON.parse(data['body']);
            setPlotData(output);
            setLoading(false);
        }).catch(error => {
            setLoading(false);
        });
    }, [otValues, stValues])

    let scale;
    let scale2;
    let x_heat_highlight_csv;
    let y_heat_highlight_csv;
    let x_cool_highlight_csv;
    let y_cool_highlight_csv;
    const [usescale, setusescale] = useState();
    const [usescale2, setusescale2] = useState();
    const [shouldDrawLines, setshouldDrawLines] = useState(false);
    const [showOutput, setShowOutput] = useState('none');
    useEffect(() => {
        const drawGraph = () => {
            if (!loading) {
                if (temperature === "Celsius") {
                    scale = "°C";
                    scale2 = "°C";
                } else if (temperature === "Kelvin") {
                    scale = " K";
                    scale2 = "K";
                } else if (temperature === "Fahrenheit") {
                    scale = "°F";
                    scale2 = "°F";
                }
                setusescale(scale);
                setusescale2(scale2);

                // Gray Lines
                const slope_heat = plotData['slope_heat'];
                const intercept_heat = plotData['intercept_heat'];
                const slope_cool = plotData['slope_cool'];
                const intercept_cool = plotData['intercept_cool'];
                let [x_heat, y_heat, x_cool, y_cool] = get_gray_values(slope_heat, intercept_heat, slope_cool, intercept_cool);

                // Convert to Respective Temperature Scale (Gray Lines)
                let y_heat_converted = []
                let y_cool_converted = []

                for (let i = 0; i < y_heat.length; i++) {
                    y_heat_converted.push(convertTemperature_forHighlightLines(temperature_scale[0].value, temperature, y_heat[i]));
                    y_cool_converted.push(convertTemperature_forHighlightLines(temperature_scale[0].value, temperature, y_cool[i]));
                }

                x_heat = convertTemperature_forHighlightLines(temperature_scale[0].value, temperature, x_heat);
                y_heat = y_heat_converted
                x_cool = convertTemperature_forHighlightLines(temperature_scale[0].value, temperature, x_cool);
                y_cool = y_cool_converted

                // Highlight Lines
                const cintercept = plotData['cintercept'];
                const cslope = plotData['cslope'];
                const hintercept = plotData['hintercept'];
                const hslope = plotData['hslope'];
                let [x_heat_highlight, y_heat_highlight, x_cool_highlight, y_cool_highlight] = get_highlight_values(hslope, hintercept, cslope, cintercept);

                // Convert to Respective Temperature Scale (Highlight Lines)
                x_heat_highlight = convertTemperature_forHighlightLines(temperature_scale[0].value, temperature, x_heat_highlight);
                y_heat_highlight = convertTemperature_forHighlightLines(temperature_scale[0].value, temperature, y_heat_highlight);
                x_cool_highlight = convertTemperature_forHighlightLines(temperature_scale[0].value, temperature, x_cool_highlight);
                y_cool_highlight = convertTemperature_forHighlightLines(temperature_scale[0].value, temperature, y_cool_highlight);

                // Convert to Respective Temperature Scale (CSV)
                [x_heat_highlight_csv, y_heat_highlight_csv, x_cool_highlight_csv, y_cool_highlight_csv] = save_to_csv(hslope, hintercept, cslope, cintercept);
                x_heat_highlight_csv = convertTemperature_forHighlightLines(temperature_scale[0].value, temperature, x_heat_highlight_csv);
                y_heat_highlight_csv = convertTemperature_forHighlightLines(temperature_scale[0].value, temperature, y_heat_highlight_csv);
                x_cool_highlight_csv = convertTemperature_forHighlightLines(temperature_scale[0].value, temperature, x_cool_highlight_csv);
                y_cool_highlight_csv = convertTemperature_forHighlightLines(temperature_scale[0].value, temperature, y_cool_highlight_csv);

                // Plotting part
                let xy_heat_highlight_dict = x_heat_highlight.map((x_value, i) => {
                    return { xval: x_value, yval: y_heat_highlight[i] };
                });

                let xy_cool_highlight_dict = x_cool_highlight.map((x_value, i) => {
                    return { xval: x_value, yval: y_cool_highlight[i] };
                });

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
                } else if (scale === " K") {
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

                const svgContainer = d3.select('#graph')
                svgContainer.selectAll("svg").remove();

                console.log(margin)

                let width = document.getElementById('graph').offsetWidth - margin.left - margin.right;
                let height = document.getElementById('graph').offsetHeight - margin.top - margin.bottom;

                let x = d3.scaleLinear()
                    .range([0, width]);
                let y = d3.scaleLinear()
                    .range([height, 0]);

                const svg = svgContainer
                    .append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", `translate(${margin.left}, ${margin.top})`);

                let xExtent = d3.extent(x_heat.concat(x_cool));
                let yExtent = d3.extent(y_heat.flat().concat(y_cool.flat()));

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

                let legends = [{ color: "lightgray", label: "Comfort Archetypes" }];
                if (shouldDrawLines) {
                    legends.push({ color: "red", label: "Heating Setpoint" });
                    legends.push({ color: "blue", label: "Cooling Setpoint" });
                }

                var legend = svg.selectAll('.legend')
                    .data(legends)
                    .enter().append('g')
                    .attr('className', 'legend')
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

                if (!hasExtremeValue() && shouldDrawLines) {
                    let tooltip = d3.select("body").append("div")
                        .attr("class", "tooltip")
                        .style("opacity", 0);

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
                            tooltip.html(`Outdoor Temperature (${scale2}): ${Number(d.xval).toFixed(2)} <br/> Preferred Setpoint (${scale2}): ${Number(d.yval).toFixed(2)}`)
                                .style('left', (xPos + 60 + document.getElementById('graph').offsetLeft) + 10 + 'px')
                                .style('top', (yPos + 30 + document.getElementById('graph').offsetTop) + 10 + 'px');

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
                            tooltip.html(`Outdoor Temperature (${scale2}): ${Number(d.xval).toFixed(2)} <br/> Preferred Setpoint (${scale2}): ${Number(d.yval).toFixed(2)}`)
                                .style('left', (xPos + 60 + document.getElementById('graph').offsetLeft) + 'px')
                                .style('top', (yPos + 30 + document.getElementById('graph').offsetTop) + 'px');

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
                    .attr("y", `${y_axis1}`)
                    .style("text-anchor", "middle")
                    .text(`Outdoor Temperature (${scale2})`);

                svg.append("text")
                    .attr("transform", "rotate(-90)") // Rotate the text 90 degrees
                    .attr("y", `${y_axis2}`)
                    .attr("x", 0 - (height / 2)) // Position at the middle of the y-axis
                    .attr("dy", "1em") // Move slightly away from the axis
                    .style("text-anchor", "middle")
                    .text(`Preferred Setpoint (${scale2})`);
            }
        }

        drawGraph();

        window.addEventListener('resize', drawGraph);

        return () => {
            window.removeEventListener('resize', drawGraph)
        }
    }, [margin, temperature, plotData, shouldDrawLines])

    const SimulateButton = () => {
        setshouldDrawLines(true);
        setShowOutput('flex')
    }

    const Reset = () => {
        setOtValues([...initialOtValues]);
        setStValues([...initialStValues]);
        setExtremeOtIndices({});
        setExtremeStIndices({});
        setTemperature(temperature_scale[0].value);
        setshouldDrawLines(false);
        setShowOutput('none');

        const addButton = document.querySelector('.addRowButton');
        addButton.style.borderColor = '';
        addButton.style.color = '';
        addButton.style.pointerEvents = '';
        addButton.style.opacity = '1';

        const removeButton = document.querySelector('.removeRowButton');
        removeButton.style.borderColor = '';
        removeButton.style.color = '';
        removeButton.style.pointerEvents = '';
        removeButton.style.opacity = '1';
    }

    const AddRow = () => {
        if (otValues.length < 20) {
            setOtValues([...otValues, null]);
            setStValues([...stValues, null]);
            const addButton = document.querySelector('.addRowButton');
            addButton.style.borderColor = '';
            addButton.style.color = '';
            addButton.style.pointerEvents = '';
            addButton.style.opacity = '1';

            const removeButton = document.querySelector('.removeRowButton');
            removeButton.style.borderColor = '';
            removeButton.style.color = '';
            removeButton.style.pointerEvents = '';
            removeButton.style.opacity = '1';
        } else {
            const addButton = document.querySelector('.addRowButton');
            addButton.style.borderColor = 'red';
            addButton.style.color = 'red';
            addButton.style.pointerEvents = 'none';
            addButton.style.opacity = '0.5';
        }

        // // Directly change the border color of the button
        // const addButton = document.querySelector('.addRowButton');
        // if (addButton) {

        //     // addButton.style.borderColor = otValues.length === 20 ? 'red' : 'initial';
        // }
    };

    const RemoveRow = () => {
        const otNewValues = [...otValues];
        const stNewValues = [...stValues];
        const otExtremeNewValues = { ...extremeOtIndices };
        const stExtremeNewValues = { ...extremeStIndices };

        if (otNewValues.length > 1) {
            const lastRowIndex = otNewValues.length - 1;

            otNewValues.pop();
            stNewValues.pop();

            if (otExtremeNewValues.hasOwnProperty(lastRowIndex)) {
                delete otExtremeNewValues[lastRowIndex];
            }

            if (stExtremeNewValues.hasOwnProperty(lastRowIndex)) {
                delete stExtremeNewValues[lastRowIndex];
            }

            const addButton = document.querySelector('.addRowButton');
            addButton.style.borderColor = '';
            addButton.style.color = '';
            addButton.style.pointerEvents = '';
            addButton.style.opacity = '1';

            const removeButton = document.querySelector('.removeRowButton');
            removeButton.style.borderColor = '';
            removeButton.style.color = '';
            removeButton.style.pointerEvents = '';
            removeButton.style.opacity = '1';
        } else {
            const removeButton = document.querySelector('.removeRowButton');
            removeButton.style.borderColor = 'red';
            removeButton.style.color = 'red';
            removeButton.style.pointerEvents = 'none';
            removeButton.style.opacity = '0.5';
        }

        setOtValues(otNewValues);
        setStValues(stNewValues);
        setExtremeOtIndices(otExtremeNewValues);
        setExtremeStIndices(stExtremeNewValues);
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
        csvRows.push(`Outdoor Temperature Heat (${scale}), Predicted Setpoint Heat (${scale}), Outdoor Temperature Cool (${scale}), Predicted Setpoint Cool (${scale})`);
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

    return (
        <div className='ComfortGPT'>
            <Helmet>
                <title>ComfortGPT</title>
                <meta name="description" content="ComfortGPT employs generative pre-trained models built on the data from thousands of ECOBEE thermostat users, to directly predict temperature setpoints while minimizing the reliance on occupant interactions." />
            </Helmet>
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
                        <p className='user_exp'>*For the best user experience, this tool is optimised for desktop use.</p>
                    </div>
                </div>
            </Container>

            <Container useOrange={true}>
                <div className="second_section">
                    <div className="inputs">
                        <div className="table_inputs">
                            <p>Temperature Scale:</p>
                            <Select options={temperature_scale} value={temperature_scale.find(option => option.value === temperature)} defaultValue={temperature_scale[0]} onChange={temperatureScale} isSearchable={false} styles={styles} />
                            <p>Outdoor Temperature</p>
                            <p>Preferred Setpoint</p>
                            {otValues.map((otValue, index) => (
                                <React.Fragment key={index}>
                                    <input type="number" key={`ot_${index}`} value={otValue} onChange={e => handleOTChange(index, e.target.value)} style={{
                                        borderColor: extremeOtIndices[index] ? 'red' : '',
                                        animation: extremeOtIndices[index] ? 'shaking 0.2s cubic-bezier(.36,.07,.19,.97) both' : 'none'
                                    }} />
                                    {stValues[index] !== undefined && (
                                        <input type="number" key={`st_${index}`} value={stValues[index]} onChange={e => handleSTChange(index, e.target.value)} style={{
                                            borderColor: extremeStIndices[index] ? 'red' : '',
                                            animation: extremeStIndices[index] ? 'shaking 0.2s cubic-bezier(.36,.07,.19,.97) both' : 'none'
                                        }} />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="CalculateButton">
                            <Link onClick={SimulateButton} className={hasExtremeValue() ? "disabled red-button" : "enabled green-button"}><p id='CalculateButton'>Calculate</p></Link>
                        </div>
                        <div className="additional_buttons">
                            <div className="HomeButtons">
                                <Link onClick={AddRow}><p className='AdditionalButtonsCGPT addRowButton' id='JoinButton'>Add Row</p></Link>
                            </div>
                            <div className="HomeButtons">
                                <Link onClick={Reset}><p className='AdditionalButtonsCGPT' id='JoinButton'>Reset</p></Link>
                            </div>
                            <div className="HomeButtons">
                                <Link onClick={RemoveRow} ><p className='AdditionalButtonsCGPT removeRowButton' id='JoinButton'>Remove Row</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="outputs" id='graph'>
                        {loading &&
                            <FontAwesomeIcon className='loading_thing' icon={faSpinner} spin size="3x" style={{ color: "#2d6353" }} />
                        }
                    </div>
                </div>
                <div className="output" id='output' style={{ display: showOutput }}>
                    <div className="output1">
                        <h5>For an Outdoor Temperature below <span id="below"></span><span id="scale_thing"></span>:</h5>
                        <p><b>Preferred Setpoint</b> = (<i>Slope</i> * <i>Outdoor Temperature</i>) + <i>Intercept</i></p>
                        <p><b>Preferred Setpoint</b> = (<span id="heatingSlope"></span> * <i>Outdoor Temperature</i>) + <span id="heatingIntercept"></span></p>
                    </div>

                    <div className="output2">
                        <h5>For an Outdoor Temperature above <span id="above"></span><span id="scale_thing"></span>:</h5>
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
                        <h3>About the Tool</h3>
                        <p>
                            ComfortGPT employs generative pre-trained models built on the data from thousands of ECOBEE thermostat users, to directly predict temperature setpoints while minimizing the reliance on occupant interactions. See Chen Kai's publications <Link to="/publication/warm,_moderate,_or"><b className='paper_link'>here</b></Link> and <Link to="/publication/comfortgpt:_a_transformer-based"><b className='paper_link'>here</b></Link> for a more in-depth description and analysis of the data behind this tool.
                        </p>
                        <h3>Guidelines</h3>
                        <p>
                            <b>1. Select the 'Temperature Scale'</b> <br />Start by selecting the temperature scale you want to use for your calculations between Celsius, Fahrenheit, and Kelvin.<br /><br />
                            <b>2. Input 'Outdoor Temperature' and 'Preferred Setpoint'</b> <br />Input the outdoor temperature and preferred setpoints. Ensure the data entered aligns with the temperature scale selected in the first step and that both columns of a row are filled.<br /><br />
                            <b>3. Add or remove rows to your preference</b><br /><br />
                            <b>4. Click 'Calculate' to obtain the slope and generate results</b><br /><br />
                            <b>5. Click 'Download .csv file' to get the generated results</b><br /><br />
                            <b>6. Click 'Reset' to revert changes to default settings</b><br /><br />
                            <b>7. Please view the image to the right for a sample output</b><br />
                        </p>
                    </div>
                    <div className="guidelines_image">
                        <img src={ExampleImage} alt="An example of what the interactive tool above should look like when being used." />
                    </div>
                </div>
            </Container>

            {/* <Container useOrange={true}>
                <div className='first_section'>
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
            </Container> */}

            <Footer />
        </div>
    )
}

// const targetHeight = 10;

// const styles = {
//   control: (base) => ({
//     ...base,
//     minHeight: 'initial',
//   }),
//   valueContainer: (base) => ({
//     ...base,
//     height: `${targetHeight - 1 - 1}px`,
//     padding: '0 8px',
//   }),
//   clearIndicator: (base) => ({
//     ...base,
//     padding: `${(targetHeight - 20 - 1 - 1) / 2}px`,
//   }),
//   dropdownIndicator: (base) => ({
//     ...base,
//     padding: `${(targetHeight - 20 - 1 - 1) / 2}px`,
//   }),
// };

export default ComfortGPT

const temperature_scale = [
    { value: 'Celsius', label: 'Celsius (°C)' },
    { value: 'Fahrenheit', label: 'Fahrenheit (°F)' },
    { value: 'Kelvin', label: 'Kelvin (K)' },
];

const initialOtValues = [-3, 6, 7, "", "", "", ""];
const initialStValues = [23, 22, 22, "", "", "", ""];

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

const resetExtremeIndex = (setExtremeIndices, index) => {
    setExtremeIndices(prevState => ({ ...prevState, [index]: false }));
    setTimeout(() => {
        setExtremeIndices(prevState => ({ ...prevState, [index]: true }));
    }, 0);
};

function save_to_csv(hslope, hintercept, cslope, cintercept) {
    let x_heat_highlight_csv = Array.from({ length: (17 - -6) / 1 }, (_, i) => -6 + i * 1);
    let y_heat_highlight_csv = x_heat_highlight_csv.map((value) => hslope * value + hintercept);
    let x_cool_highlight_csv = Array.from({ length: (35 - 16) / 1 }, (_, i) => 17 + i * 1);
    let y_cool_highlight_csv = x_cool_highlight_csv.map((value) => cslope * value + cintercept);

    return [x_heat_highlight_csv, y_heat_highlight_csv, x_cool_highlight_csv, y_cool_highlight_csv];

}

function deleteLastItem(dict) {
    const keys = Object.keys(dict);
    if (keys.length > 0) {
        const lastKey = keys[keys.length - 1];
        delete dict[lastKey];
    }
}