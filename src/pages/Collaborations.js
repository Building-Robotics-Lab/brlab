import React, { useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Carousel from './../components/Carousel2';
import Container from '../components/Container';
import './Collaborations.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseSignal, faBuildingLock, faBuildingUser, faHouseLaptop, faTreeCity, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import AWSLogo from './../components/Website Data/AWS logo21.png'
import TraneLogo from './../components/Website Data/tt_logo_color_rgb.jpg'
import GreenologyLogo from './../components/Website Data/Greenology logo2.png'
import CoLogo from './../components/Website Data/Co Innovation lab logo.jpg'

import Theme1 from './../components/Website Data/Kai_OPC.jpg'
import Theme1_2 from './../components/Website Data/Riccardo1.jpg'

import Theme2 from './../components/Website Data/Iqbal_DT2.png'
import Theme2_1 from './../components/Website Data/Ilyas_rPPG@2x.png'
import Theme2_2 from './../components/Website Data/Riccardo2.jpg'

import Theme3_0 from './../components/Website Data/Iqbal_VGS.jpg'
import T2Lab from './../components/Website Data/Kelly_T2.png'

import IqbalPublication2 from './../components/Website Data/iqbal-publication2.jpg'
import AliPublication6 from './../components/Website Data/sensors-22-03444-g006.png'
import AliPublication12 from './../components/Website Data/fbuil-06-00049-g007.jpeg'

const slides = [
    {
        image: IqbalPublication2,
        title: '<b><i>Building and Environment</i> publication announcement!</b>',
        link: '/publication/porous_plant',
    },
    {
        image: AliPublication6,
        title: '<b><i>Sensors</i> publication announcement!</b>',
        link: '/publication/towards_personalization',
    },
    {
        image: AliPublication12,
        title: '<b><i>Frontiers in Built Environment</i> publication announcement!</b>',
        link: '/publication/artificial_intelligence',
    },
];

function Collaborations() {
    const collabRef = useRef(null);

    useEffect(() => {
        document.title = 'BRL - Collaborations';
        return () => {
            document.title = 'My React App'; // This is optional and will reset the title when the component unmounts.
        };
    }, []); // Empty dependency array ensures this runs only once when the component mounts.

    function handleThemeClick(themeId) {
        const themeElement = document.getElementById(themeId);
        if (themeElement) {
            themeElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        const updateMinHeightTitle = () => {
            const AllH4Height = collabRef.current.querySelectorAll('.themes .each_theme .each_theme_data h4')

            // Reset heights to auto before recalculating
            AllH4Height.forEach((each_h4) => {
                each_h4.style.height = 'auto';
            });

            let AllHeight = [];
            AllH4Height.forEach((each_h4) => {
                const style = getComputedStyle(each_h4);
                const height =
                    each_h4.clientHeight -
                    parseFloat(style.paddingTop) -
                    parseFloat(style.paddingBottom);
                AllHeight.push(height);
            });

            const minHeight = Math.max(...AllHeight);

            AllH4Height.forEach((each_h4) => {
                each_h4.style.height = `${minHeight}px`;
            });
        }

        // Initial update
        updateMinHeightTitle();

        // Update on window resize
        window.addEventListener('resize', updateMinHeightTitle);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateMinHeightTitle);
        };
    }, []);

    return (
        <div className="Collaborations" ref={collabRef}>
            <NavBar />

            <Container>
                <div className="first_section">
                    <div className="title_section">
                        <h1><b>Industry Collaborations [work in progress]</b></h1>
                        <h3><b>Our interdisciplinary approach aims to create a sustainable future by leveraging sensing, learning, control systems, and other smart building technologies that prioritise environmental sustainability and the human experience.</b></h3>
                        <h5>Are you an industry partner on a similar mission or have an idea for a project we could collaborate on for smart buildings and intelligent environments?</h5>
                    </div>
                    <div className="industry_partners">
                        <a href="https://aws.amazon.com/" target="_blank">
                            <div className="img_container">
                                <img src={AWSLogo} alt="Logo of Amazon Web Services." />
                            </div>
                        </a>
                        <a href="https://www.tranetechnologies.com/en/index.html" target="_blank">
                            <div className="img_container">
                                <img src={TraneLogo} alt="Logo of Trane Technologies." />
                            </div>
                        </a>
                        <a href="https://greenology.sg/" target="_blank">
                            <div className="img_container">
                                <img src={GreenologyLogo} alt="Logo of Greenology." />
                            </div>
                        </a>
                        <a href="https://smartlab.expert/" target="_blank">
                            <div className="img_container">
                                <img src={CoLogo} alt="Logo of Smart-Urban Co-Innoation Lab." />
                            </div>
                        </a>
                    </div>
                    <div className="HomeButtons">
                        <Link to="mailto:ghahramani@nus.edu.sg" target='_blank'><p id='JoinButton'>CONTACT US</p></Link>
                    </div>
                </div>
            </Container>

            <Container useOrange={true}>
                <div className="second_section">
                    <div className="title_section">
                        <h2><b>Capabilities to Offer</b></h2>
                    </div>
                    <div className="themes">
                        <div class="each_theme">
                            <div className='each_theme_image'>
                                <FontAwesomeIcon icon={faHouseSignal} />
                            </div>
                            <div className='each_theme_data'>
                                <h4><b>FIELD DEPLOYMENT</b></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div class="each_theme">
                            <div className='each_theme_image'>
                                <FontAwesomeIcon icon={faBuildingLock} />
                            </div>
                            <div className='each_theme_data'>
                                <h4><b>SENSING & AUTOMATION</b></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div class="each_theme">
                            <div className='each_theme_image'>
                                <FontAwesomeIcon icon={faBuildingUser} />
                            </div>
                            <div className='each_theme_data'>
                                <h4><b>CONTROLS</b></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div class="each_theme">
                            <div className='each_theme_image'>
                                <FontAwesomeIcon icon={faHouseLaptop} />
                            </div>
                            <div className='each_theme_data'>
                                <h4><b>ARTIFICIAL INTELLIGENCE</b></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div class="each_theme">
                            <div className='each_theme_image'>
                                <FontAwesomeIcon icon={faTreeCity} />
                            </div>
                            <div className='each_theme_data'>
                                <h4><b>USER INTERFACES</b></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div class="each_theme">
                            <div className='each_theme_image'>
                                <FontAwesomeIcon icon={faHouse} />
                            </div>
                            <div className='each_theme_data'>
                                <h4><b>ADDITIONAL RELATED AREAS</b></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container sectionName='theme1_section'>
                <div className="title">
                    <h1>Experimental Sites</h1>
                </div>
                <div className="whole_theme">
                    <div className='theme_section'>
                        <div className="theme_details">
                            <img src={T2Lab} alt="A thermal comfort graph with Predicted Setpoint Temperature on the y-axis and Daily Mean Outdoor Temperature on the x-axis from a related publication by CHEN Kai."></img>
                            <h4><b>FEC1 Living Lab</b></h4>
                            <h6><b>BLAH BLAH BLAH BLAH. </b></h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className='theme_section' id='theme1_section'>
                        <div className="theme_details">
                            <img src={T2Lab} alt="A HVAC optimisation graph with Setpoint Temperature on the y-axis and Outdoor Temperature on the x-axis from a related publication by Riccardo Talami."></img>
                            <h4><b>Smart HVAC Lab</b></h4>
                            <h6><b>BLAH BLAH BLAH BLAH.</b></h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className='theme_section'>
                        <div className="theme_details">
                            <img src={T2Lab} alt="The NUS Tropical Technologies Laboratory with building greenery, building-integrated photovoltaic, and various façades."></img>
                            <h4><b>NUS-CDL Tropical Technologies Lab</b></h4>
                            <h6><b>BLAH BLAH BLAH BLAH. </b></h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className='theme_section' id='theme1_section'>
                        <div className="theme_details">
                            <img src={T2Lab} alt="A HVAC optimisation graph with Setpoint Temperature on the y-axis and Outdoor Temperature on the x-axis from a related publication by Riccardo Talami."></img>
                            <h4><b>NUS-CDL Smart Green Home</b></h4>
                            <h6><b>BLAH BLAH BLAH BLAH.</b></h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container useOrange={true} sectionName='theme2_section'>
                <div className="title">
                    <h1>Past Deliverables</h1>
                    <Carousel slides={slides} />
                </div>
                {/*
                <div className="whole_theme">
                    <div className='theme_section'>
                        <div className="theme_details">
                            <img src={Theme2} alt="A split-screen of a simulated human walking around the lab and automatically being detected by the building systems as the real human walks around testing the program for the Human-Centred AI theme."></img>
                            <h4><b>Towards a Semantics-Driven Human-Centric Digital Twin</b></h4>
                            <h6><b>Our research delves into the creation of a semantically-enhanced digital twin by harnessing geospatially-tagged data and advanced sensors to empower users with intuitive controls and features that elevate indoor comfort and bolster building energy.</b></h6>
                            <p>In the realm of the built environment, a glaring gap persists: the lack of an effective digital twin tailored for the occupancy phase. Current systems are plagued by over 50% resource wastage due to inefficient utilisation of spaces, assets, and systems. Most building management systems (BMS) are siloed, focusing primarily on HVAC, and are ill-equipped to communicate with other systems or occupants. This fragmentation is exacerbated by non-standard naming conventions, which then cumulatively impede buildings from readily adopting smart building solutions. Beyond mere 3D representations, elements in the digital twin should mirror their real-world functional impacts, necessitating defined semantic relationships. Our research, which looks towards a semantics-driven human-centric digital twin, aims to remedy these challenges. By leveraging semantics, geospatial data, and advanced sensors, we envision a cohesive digital-physical built environment interface that enhances user experience, indoor comfort, and energy efficiency.</p>
                            <p>This project is led by <Link to="/profile/Iqbal"><b>Iqbal Shah</b></Link>, supported by <Link to="/profile/Ilyas"><b>Ilyas Dawoodjee</b></Link>.</p>
                        </div>
                        <h4 className="keyObjs"><b>Key Objectives</b></h4>
                        <div className="theme_deliverables">
                            <p>Development of automation algorithms focusing on the generation of semantics for digital twin applications.</p>
                            <p>Smart personalised cooling systems utilising semantics to optimise and tailor cooling experiences for individual preferences.</p>
                            <p>Human-centric smart interfaces that prioritise comfort and well-being, ensuring intuitive and adaptive interactions between users and the environment.</p>
                            <p>Through developing a semantically-connected digital twin system with user-centric interfaces, we aim to provide stakeholders a versatile tool for creating virtual replicas of various built environments for a true metaverse.</p>
                        </div>
                    </div>
                    <div className='theme_section' id='theme2_section'>
                        <div className="theme_details">
                            <img src={Theme2_1} alt="Showcasing various graphs and charts that highlight the variables that go into remote photoplethysmography (RPPG) research."></img>
                            <h4><b>Non-Intrusive Sensing of Human Health</b></h4>
                            <h6><b>To develop non-intrusive and scalable sensing systems for cardiovascular parameters such as human heart rate, respiration rate, and heart rate variability by leveraging novel, low-cost RGB cameras.</b></h6>
                            <p>Cardiovascular parameters are commonly measured via electrocardiogram (ECG). Here, chest leads are attached to the patient’s chest and electrical signals are captured every time the heart beats. However, ECGs are difficult to run continuously. An alternative method, photoplethysmography (PPG), uses an optical technique to measure changes in blood volume in the microvascular bed of tissue by shining a light onto the skin and detecting the reflected light. PPG methods also require constant contact to the skin to obtain a continuous reading of cardiovascular parameters. Though such techniques can be labeled as non-invasive since they are typically embedded in smartwatches, they do remain intrusive and may be distracting in a work setting. Furthermore, some individuals find wearables uncomfortable or experience skin sensitivity issues. Remote PPG (rPPG) methods address these challenges by leveraging the base principle of PPG, and using the average reflected visible light from a specific region of a subject’s face captured via camera images as an input.</p>
                            <p>This project is led by <Link to="/profile/Ilyas"><b>Ilyas Dawoodjee</b></Link>.</p>
                        </div>
                        <h4 className="keyObjs"><b>Key Objectives</b></h4>
                        <div className="theme_deliverables">
                            <p>Recreate and implement state-of-the-art algorithms as outlined from the 120+ papers filtered from the 2,000+ papers.</p>
                            <p>Develop a user-friendly framework that allows future rPPG researchers to generate evaluation results at the click of a button.</p>
                            <p>Apply these algorithms to widely-used public datasets to obtain results for a fair comparison.</p>
                            <p>Visit <Link to="https://github.com/blank-ed/remote_PPG"><b>GitHub - rPPG</b></Link> to find the actual implementations of the state-of-the-art rPPG algorithms.</p>
                        </div>
                    </div>
                    <div className='theme_section' id='theme2_section'>
                        <div className="theme_details">
                            <img src={Theme2_2} alt="Pointing out the various building elements that go into indoor environmental quality (IEQ) sensing: indoor air quality (carbon dioxide, particulate matter, total volatile organic compounds), visual (horizontal illuminance), acoustics (sound), and thermal (temperature and humidity)."></img>
                            <h4><b>Human-Centric Indoor Environmental Quality (IEQ) Sensing </b></h4>
                            <h6><b>This research aims to develop and deploy low-cost and user-friendly sensing devices for personal monitoring of IEQ and enhanced human well-being.</b></h6>
                            <p>As smart buildings become more prevalent, there has been an increasing interest in understanding building occupants’ needs and preferences. Since occupant satisfaction is related to the indoor environmental quality (IEQ) of buildings, it is crucial to ensure that the indoor environment is comfortable, healthy, and conducive to the occupants’ well-being. As such, it is necessary to explore approaches to make personalized and condition-specific predictions directly from the data collected in their everyday environments, capitalizing on the Internet of Things (IoT) and machine learning (ML). With the advancement of sensor technologies, this can be achieved with a wide variety of occupant-centric sensors, and a large amount of data can be leveraged to investigate thermal, visual, acoustic, and indoor air quality (IAQ) in buildings.</p>
                            <p>This project is led by <Link to="/profile/Riccardo"><b>Riccardo Talami</b></Link>, supported by <Link to="/profile/Ilyas"><b>Ilyas Dawoodjee</b></Link>.</p>
                        </div>
                        <h4 className="keyObjs"><b>Key Objectives</b></h4>
                        <div className="theme_deliverables">
                            <p>Investigate the optimal occupant-centric spatial positioning of IEQ low-cost multi-sensing devices.</p>
                        </div>
                    </div>
                </div>
                */}
            </Container>
            <Footer />
        </div>
    );
}

export default Collaborations;