import React, { useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Carousel from './../components/Carousel2';
import Container from '../components/Container';
import './Collaborations.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseSignal, faBuildingLock, faBuildingUser, faHouseLaptop, faTreeCity, faHouse, faImage } from '@fortawesome/free-solid-svg-icons';
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
import FEC1 from './../components/Website Data/SDE2-FEC1.png'
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
                        <h3><b>Our interdisciplinary approach aims to create a sustainable future by leveraging smart building technologies that prioritise environmental sustainability and the human experience.</b></h3>
                        <h5>Are you an industry partner on a similar mission or have a project idea we could collaborate on for intelligent environments?</h5>
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
                                <FontAwesomeIcon icon={faTreeCity} /><h4><b>FIELD DEPLOYMENT</b></h4>
                            </div>
                            <div className='each_theme_data'>
                                <p>Our research lab offers a unique advantage to industry partners through our expertise in field deployment and access to local experiments. By collaborating with us, private companies gain the opportunity to conduct real-world trials and experiments within diverse built environments. This capability allows for the validation and optimisation of solutions in actual operational conditions, ensuring that innovations are robust and effective in practical applications. Whether testing new technologies, monitoring system performance, or assessing user interactions, our lab provides a valuable platform for industry partners to refine and validate their products in a variety of settings.</p>
                            </div>
                        </div>
                        <div class="each_theme">
                            <div className='each_theme_image'>
                                <FontAwesomeIcon icon={faHouseSignal} /><h4><b>SENSING & AUTOMATION</b></h4>
                            </div>
                            <div className='each_theme_data'>
                                <p>Our lab specialises in sensing & automation systems. Elevate your data collection capabilities with cutting-edge thermal sensors, non-intrusive health monitoring devices, and more. Leverage our expertise to integrate state-of-the-art sensing solutions into your products, enhancing precision and depth of data for improved decision-making and system performance. Streamline operations and enhance sustainability with cutting-edge automation solutions that revolutionise routine tasks and resource consumption. Collaborate to integrate adaptive and responsive automation, ensuring your products align with the principles of efficiency and sustainability.</p>
                            </div>
                        </div>
                        <div class="each_theme">
                            <div className='each_theme_image'>
                                <FontAwesomeIcon icon={faBuildingLock} /><h4><b>CONTROLS</b></h4>
                            </div>
                            <div className='each_theme_data'>
                                <p>Our lab excels in designing and implementing advanced control strategies for building systems. Efficient and responsive control systems are essential for achieving optimal performance in smart buildings. Whether it's optimising HVAC temperature setpoints for energy efficiency or resilient cooling solutions for urban landscapes, our control systems are tailored to meet the specific needs of the built environment. Industry collaborators can benefit from our expertise in developing adaptive and intelligent control algorithms, ensuring that their technologies are at the forefront of building automation and energy management.</p>
                            </div>
                        </div>
                        <div class="each_theme">
                            <div className='each_theme_image'>
                                <FontAwesomeIcon icon={faHouseLaptop} /><h4><b>ARTIFICIAL INTELLIGENCE</b></h4>
                            </div>
                            <div className='each_theme_data'>
                                <p>Harnessing the power of artificial intelligence (AI) is a key focus of our research lab. Our expertise in human-centred AI and semantics-driven digital twins opens new possibilities for industry partners. By collaborating with us, private companies can integrate AI-driven solutions that enhance the intelligence of their products, improving adaptability, learning capabilities, and overall system performance. Whether it's optimising thermal comfort or developing user-centric AI interfaces, our lab's proficiency in AI technologies ensures that industry collaborators stay at the forefront of innovation in smart building solutions.</p>
                            </div>
                        </div>
                        <div class="each_theme">
                            <div className='each_theme_image'>
                                <FontAwesomeIcon icon={faBuildingUser} /><h4><b>USER INTERFACES</b></h4>
                            </div>
                            <div className='each_theme_data'>
                                <p>In the realm of human-building interaction, our lab places a strong emphasis on creating intuitive and user-friendly interfaces. We understand the importance of engaging and accessible interfaces for smart building technologies. By partnering with us, private companies can benefit from our expertise in designing interfaces that prioritise user experience and promote efficient interaction with building systems. Our focus on user-centric design ensures that industry collaborators can deliver solutions that are not only technologically advanced, but also easy to use, fostering a positive and seamless experience for end-users.</p>
                            </div>
                        </div>
                        <div class="each_theme">
                            <div className='each_theme_image'>
                                <FontAwesomeIcon icon={faHouse} /><h4><b>ADDITIONAL DISCIPLINES</b></h4>
                            </div>
                            <div className='each_theme_data'>
                                <p>Beyond the core capabilities mentioned, our lab is equipped to address a wide array of challenges in the realm of smart buildings. Whether it's exploring novel cooling technologies for building façades or democratising virtual power plants for optimal monetisation and grid flexibility, our diverse team is ready to tackle unique and multifaceted projects. Industry partners collaborating with us gain access to a wealth of knowledge, experience, and innovative thinking that extends beyond traditional boundaries, opening up new possibilities for collaboration and advancement in the field of building science.</p>
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
                            <img src={FEC1} alt="The FEC1 Living Lab--the day-to-day home of the Building Robotics Lab."></img>
                            <h4><b>SDE2-FEC1 Living Lab</b></h4>
                            <h6><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b></h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className='theme_section' id='theme1_section'>
                        <div className="theme_details">
                            <img src={T2Lab} alt="The Smart HVAC Lab."></img>
                            <h4><b>Smart HVAC Lab [under construction]</b></h4>
                            <h6><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b></h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className='theme_section'>
                        <div className="theme_details">
                            <img src={T2Lab} alt="The NUS-CDL Tropical Technologies Laboratory."></img>
                            <h4><b>NUS-CDL Tropical Technologies Lab</b></h4>
                            <h6><b>Experience innovation in the 107 m2 NUS-CDL T2 Lab, an adaptable indoor-outdoor research space completed in December 2016.</b></h6>
                            <p>Managed by the School’s Department of Architecture, this dynamic laboratory redefines possibilities for testing lifestyle scenarios, space-use configurations, and cutting-edge technologies. Picture a space dedicated to exploring themes like "healthy, green living" and "future lifestyles," unravelling the secrets to a sustainable and adaptable Singaporean home.</p>
                            <p>Located on the NUS Kent Ridge campus, this state-of-the-art laboratory is constructed on an existing structure, designed with flexibility to adapt to new functions while testing high-performance materials and environmental systems. Engage in experimental studies that redefine building façade design, construction, and operation tailored to Singapore’s climatic conditions. Dive into projects exploring the integration of solar panels with building façades, evaluating the feasibility and efficiency of sun-shading shutters paired with solar membranes and panels. Be part of a collaborative journey reshaping the very fabric of sustainable living and innovative urban design.</p>
                            <p>Possible studies that can be carried out at the facility include examining biomimicry building envelop devices and systems for harvesting of energy from renewable resources (sun, wind, daylight); solar control and shading; vertical and edible garden; solar chimney; and smart building materials. In addition, the test-bed can be used to explore how architecture and building design deal with extremities of weather, air pollution, and rising sea water levels.</p>
                        </div>
                    </div>
                    <div className='theme_section' id='theme1_section'>
                        <div className="theme_details">
                            <img src={T2Lab} alt="The NUS-CDL Smart Green Home."></img>
                            <h4><b>NUS-CDL Smart Green Home</b></h4>
                            <h6><b>Step into the future of sustainable living with the NUS-CDL Smart Green Home, a cutting-edge 100 m2 indoor test-bed environment completed in December 2017.</b></h6>
                            <p>This world-class facility, nestled within the NUS College of Design and Engineering, serves as a dynamic platform for holistic experimental studies. Immerse yourself in a real-life environment designed for testing, analysing, and piloting smart home innovations with a "plug-and-play" approach. It aims to harness research to develop innovative solutions to create homes that are safe and secure, healthy and comfortable, and acoustically pleasing.</p>
                            <p>Explore the possibilities within the home, where at least one façade is meticulously designed for plug-and-play experimentation. This visionary facility is a playground for researchers delving into human-centred smart materials, technologies, and knowledge platforms. The facility has a re-configurable structure to enable comparative research through flexible experimental setup, testing, and monitoring. Our commitment to enhancing health, comfort, and quality of life sets the stage for a sustainable and connected future. Some ideas that can be tested here include energy efficiency, quality of indoor environment, and sustainable homes of the future.</p>
                            <p>Participate in ground-breaking projects, such as developing an intelligent system that enhances indoor comfort. Join us in crafting novel façades and building envelopes that integrate smart nanomaterials, sensor-based controls, and analytics. Together, we shape a future where buildings adapt to occupants, balancing comfort and energy efficiency seamlessly.</p>
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