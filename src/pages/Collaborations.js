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

import FEC1 from './../components/Website Data/FEC1.png'
import T2Lab from './../components/Website Data/Kelly_T2.png'
import SGH from './../components/Website Data/Smart-Green-Home.jpg'

import IqbalPublication2 from './../components/Website Data/iqbal-publication2.jpg'
import AliPublication6 from './../components/Website Data/sensors-22-03444-g006.png'
import AliPublication12 from './../components/Website Data/fbuil-06-00049-g007.jpeg'

const slides = [
    {
        image: IqbalPublication2,
        title: '<b><i>Building and Environment</i> publication announcement!</b>',
        link: '/publication/porous_plant_form-induced',
    },
    {
        image: AliPublication6,
        title: '<b><i>Sensors</i> publication announcement!</b>',
        link: '/publication/towards_personalization_of',
    },
    {
        image: AliPublication12,
        title: '<b><i>Frontiers in Built Environment</i> publication announcement!</b>',
        link: '/publication/artificial_intelligence_for',
    },
];

function Collaborations() {
    const collabRef = useRef(null);

    useEffect(() => {
        document.title = 'BRL - Collaborations';
        return () => {
            document.title = 'My React App'; // This is optional and will reset the title when the component unmounts.
        };
    }, []);

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
                        <h1><b>Industry Collaborations</b></h1>
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
                            <h6><b>Embrace the future here: discover, test and, deploy cutting-edge smart building technologies in this 73 m2 innovative space.</b></h6>
                            <p>In this lab, we are actively pioneering in the realm of smart buildings, primarily through the development and integration of digital twin systems and interfaces. Our interface, a brainchild of our team, orchestrates a suite of advanced technologies to enhance the indoor experience.</p>
                            <p>Central to our efforts are the development and exploration of adaptive positioning fans and task lights. These are designed to boost comfort and efficiency in work environments. Supporting these are our development works in advanced sensing technologies, including indoor positioning systems (using Bluetooth Low Energy and machine vision), remote heart rate detection (via machine vision), and Internet of Things (IoT) environmental sensors.</p>
                            <p>Importantly, our lab goes beyond traditional research confines. It serves as a dynamic workspace for 11 occupants, whose daily interactions and feedback with these technologies are invaluable. Their real-world experiences ensure that our innovations are not just cutting-edge, but also closely aligned with practical applications and user needs.</p>
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
                            <img src={SGH} alt="The NUS-CDL Smart Green Home."></img>
                            <h4><b>NUS-CDL Smart Green Home</b></h4>
                            <h6><b>Step into the future of sustainable living with the NUS-CDL Smart Green Home, a cutting-edge 100 m2 indoor test-bed environment completed in December 2017.</b></h6>
                            <p>This world-class facility, nestled within the NUS College of Design and Engineering, serves as a dynamic platform for holistic experimental studies. Immerse yourself in a real-life environment designed for testing, analysing, and piloting smart home innovations with a "plug-and-play" approach. It aims to harness research to develop innovative solutions to create homes that are safe and secure, healthy and comfortable, and acoustically pleasing.</p>
                            <p>Explore the possibilities within the home, where at least one façade is meticulously designed for plug-and-play experimentation. This visionary facility is a playground for researchers delving into human-centred smart materials, technologies, and knowledge platforms. The facility has a re-configurable structure to enable comparative research through flexible experimental setup, testing, and monitoring. Our commitment to enhancing health, comfort, and quality of life sets the stage for a sustainable and connected future. Some ideas that can be tested here include energy efficiency, quality of indoor environment, and sustainable homes of the future.</p>
                            <p>Participate in ground-breaking projects, such as developing an intelligent system that enhances indoor comfort. Join us in crafting novel façades and building envelopes that integrate smart nanomaterials, sensor-based controls, and analytics. Together, we shape a future where buildings adapt to occupants, balancing comfort and energy efficiency seamlessly.</p>
                        </div>
                    </div>
                    <div className='theme_section' id='theme1_section'>
                        <div className="theme_details">
                        <FontAwesomeIcon icon={faImage} />   
                            {/*<img src={T2Lab} alt="The Smart HVAC and Well-being Lab."></img>*/}
                            <h4><b>Smart HVAC and Well-Being Lab</b></h4>
                            <h6><b>Stay tuned! Under construction with an expected completion of March 2024.</b></h6>
                        </div>
                    </div>
                </div>
            </Container>

            <Container useOrange={true} sectionName='theme2_section'>
                <div className="title">
                    <h1>Past Deliverables</h1>
                    <Carousel slides={slides} />
                </div>
            </Container>

            <Footer />
        </div>
    );
}

export default Collaborations;