import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from './../components/Container';
import './OTST.css'
import Pako from 'pako';

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
        { value: 'Fairbanks', label: '8 (Sub-Artic)' }
    ];
    const [climate, setClimate] = useState(climate_zone[0].value);
    const climateZone = (option) => {
        setClimate(option.value);
    }

    const occupancy_rate = [
        { value: 25, label: 'Lightly Occupied (25%)' },
        { value: 50, label: 'Mildly Occupied (50%)' },
        { value: 75, label: 'Most Occupied (75%)' },
        { value: 100, label: 'Fully Occupied(100%)' }
    ];
    const [or, setOR] = useState(occupancy_rate[0].value);
    const occupancyRate = (option) => {
        setOR(option.value);
    }

    const [otValue, setotValue] = useState(null)
    const handleOTChange = () => {
        setotValue(otValue)
    }

    const [checkedItems, setCheckedItems] = useState([false, false, false, false, true, false, false, false, true, false, false, true, false, true]);
    const labels = [
        "LM", "LA", "2h EM; 1h LT; 2h LA", "3h EM; 3h EA", "3h LM; 3h LA",
        "2h LT; 1h MM; 1h MA", "1h EA; 1h MA; 2h LT", "1h MM; 1h LM; 2h LT", "2h LM; 2h EA",
        "1h LT; 1h MA", "1h LT; 1h MM", "LT",
        "LT",
        "0"]
    const label_imgs = [sixhLM, sixhLA, sixhEMLTLA, sixhEMEA, sixhLMLA, fourhLTMMMA, fourhEAMALT, fourhMMLMLT, fourhLMEA, twohLTMA, twohLTMM, twohLT, onehLT, zerohzero]
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
        })
            .then(response => response.json())
            .then(data => {
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
                console.log('done loading')
            })
            .catch(error => {
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

    console.log(climateData)


    
    const CalculateButton = () => {

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
                                <p>Enter Outdoor Temperature (<span id='scale'>C</span>)</p>
                                <input type="number" value={otValue} onChange={handleOTChange} />
                            </div>
                            <div className="HomeButtons">
                                <Link onClick={CalculateButton}><p id='JoinButton'>Calculate Optimal Temperature Setpoint</p></Link>
                            </div>
                        </div>
                        <div className='up_right'>
                            <div>
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
                                    <p>1 Hour Unoccupied</p>
                                    <div>
                                        <input type="checkbox" checked={checkedItems[12]} onChange={handleCheckboxChange(12)} />
                                        <img src={label_imgs[12]}></img>
                                        <label>{labels[12]}</label>
                                    </div>
                                </section>
                                <section>
                                    <p>0 Hours Unoccupied</p>
                                    <div>
                                        <input type="checkbox" checked={checkedItems[13]} onChange={handleCheckboxChange(13)} />
                                        <img src={label_imgs[13]}></img>
                                        <label>{labels[13]}</label>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className='second_section_down' id='graph'>
                        <p>down</p>
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
