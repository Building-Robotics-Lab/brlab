import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import './Research.css'
import { Link } from 'react-router-dom';

import Theme1 from './../components/Website Data/kai_paper2_theme.jpg'
import Theme1_2 from './../components/Website Data/riccardo-publication2_research.png'
import Theme1_3 from './../components/Website Data/Ilyas_rPPG@2x.png'

import Theme2 from './../components/Website Data/Iqbal_DT2_theme.png'
import Theme2_2 from './../components/Website Data/Riccardo2.jpg'

import Theme3 from './../components/Website Data/Interface_theme.png'

import Theme4_0 from './../components/Website Data/Iqbal_VGS.jpg'
import Theme4 from './../components/Website Data/Kelly_T2_theme.png'

function Research() {
    const researchRef = useRef(null);

    useEffect(() => {
        document.title = 'BRL - Research';
        return () => {
            document.title = 'My React App';
        };
    }, []);

    function handleThemeClick(themeId) {
        const themeElement = document.getElementById(themeId);
        if (themeElement) {
            themeElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        const updateMinHeightTitle = () => {
            const AllH4Height = researchRef.current.querySelectorAll('.themes .each_theme .each_theme_data h4')

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
        <div className="Research" ref={researchRef}>
            <Helmet>
                <title>BRL Research</title>
                <meta name="description" content="Dive into the NUS Building Robotics Lab's cutting-edge research in sensing human health and comfort, human centred-AI, intelligent environments, and nature-based technologies throughout the built environment." />
            </Helmet>
            <NavBar />

            <Container>
                <div className="first_section">
                    <div className="title_section">
                        <h1><b>Research Thrusts</b></h1>
                        <h3><b>We strive to integrate robotics and human-centred AI into the built environment in an effort to improve energy efficiency and occupant well-being throughout the building stock.</b></h3>
                    </div>
                </div>
            </Container>

            <Container useOrange={true}>
                <div className="second_section">
                    <div className="title_section">
                        <h2><b>Our Work</b></h2>
                    </div>
                    <div className="themes">
                        <div class="each_theme">
                            <Link to="#" onClick={() => handleThemeClick('theme1_section')}>
                                <img src={Theme1} alt="A thermal comfort graph with Predicted Setpoint on the y-axis and Daily Mean Outdoor Temperature on the x-axis from a publication for the Sensing Human Health and Comfort theme."></img>
                            </Link>
                            <div className='each_theme_data'>
                                <h4><b>SENSING HUMAN HEALTH AND COMFORT</b></h4>
                                <p>Our focus on sensing human health and comfort enables us to create smarter buildings that prioritise the well-being of their occupants while reducing energy consumption and promoting environmental sustainability. Projects include adaptive comfort modelling, vision-based systems for remote physiological measurements, and multi-sensing devices for human-centric indoor environmental quality (IEQ).</p>
                            </div>
                        </div>
                        <div class="each_theme">
                            <Link to="#" onClick={() => handleThemeClick('theme2_section')}>
                                <img src={Theme2} alt="A split-screen of a simulated human walking around the lab and automatically being detected by the building systems as the real human walks around testing the program for the Human-Centred AI theme."></img>
                            </Link>
                            <div className='each_theme_data'>
                                <h4><b>HUMAN-CENTRED AI</b></h4>
                                <p>Human-centred AI puts people at the forefront of technology development, ensuring that AI systems are designed to meet human needs and improve the quality of life for individuals and society as a whole. Projects include integrating and optimising personal comfort system devices into the control loop of HVAC systems, developing advanced sensors, ontology automation, and a semantically-connected digital twin.</p>
                            </div>
                        </div>
                        <div class="each_theme">
                            <Link to="#" onClick={() => handleThemeClick('theme3_section')}>
                                <img src={Theme3} alt="Illustration of the basic concept of a democratised virtual power plant (VPP) with the power grid supplying energy to the democratised VPP, which allows a two-way relationship for pre-purchase with prosumers and a two-way relationship for selling with consumers for the Intelligent Environments theme."></img>
                            </Link>
                            <div className='each_theme_data'>
                                <h4><b>INTELLIGENT ENVIRONMENTS</b></h4>
                                <p>Our research investigates the democratisation of virtual power plants (VPP) for optimal monetisation and grid flexibility to empower end-users to participate effectively. By leveraging AI, we seek to bridge existing gaps in user interaction and incentivise efficient energy behaviors. The research is divided into two halves: one explores user impacts on VPPs and behaviour modeling, while the other employs machine learning for automated energy market participation.</p>
                            </div>
                        </div>
                        <div class="each_theme">
                            <Link to="#" onClick={() => handleThemeClick('theme4_section')}>
                                <img src={Theme4} alt="The NUS Tropical Technologies Laboratory with building greenery, building-integrated photovoltaic, and various façades for the Resilient Cooling theme."></img>
                            </Link>
                            <div className='each_theme_data'>
                                <h4><b>NATURE-BASED TECHNOLOGIES</b></h4>
                                <p>Our focus is on façade technologies, which involves developing innovative building envelope systems that reduce the energy needed for cooling while also providing increased thermal comfort for occupants. This includes research developments and technology integration for enhancing the cooling effects of current urban greening systems, such as vertical greenery systems (VGS), heat-reflective paints, and façade shading systems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container sectionName='theme1_section'>
                <div className="title">
                    <h1>Sensing Human Health and Comfort</h1>
                </div>
                <div className="whole_theme">
                    <div className='theme_section odd'>
                        <div className="theme_details">
                            <img src={Theme1} alt="A thermal comfort graph with Predicted Setpoint Temperature on the y-axis and Daily Mean Outdoor Temperature on the x-axis from a related publication Chen Kai."></img>
                            <h4><b>Optimising Thermal Comfort in the Built Environment</b></h4>
                            <h6><b>By bridging physiological signals and variations of comfort preferences of occupants with modern data analytics, we are developing innovative approaches and models to accurately capture occupants' comfort preferences over time and benefit human well-being. </b></h6>
                            <p>In the evolving landscape of building climate control, there's a growing recognition that standard thermal settings often fall short in addressing the diversity of human comfort. Physiological measurements have emerged as a crucial component in capturing individualised thermal comfort profiles, underscoring the fact that comfort isn't merely a subjective feeling but deeply rooted in our bodily responses. However, harnessing this rich physiological data at scale has been a challenge. Traditional methods, with their heavy reliance on continuous occupant interactions, are not only cumbersome but also limited in their adaptability. Recently, transformer-based architectures, which employ pre-trained models built on users' historical data, become the solutions to minimise the need for constant occupant feedback while accurately predicting preferred temperature setpoint. Our research is exploring different approaches to accurately capture variations of occupants' comfort preferences over time and apply them to real-world applications to benefit human health and well-being.</p>
                            <p>This project is led by <Link to="/profile/Kai"><b>Chen Kai</b></Link>.</p>
                        </div>
                        <h4 className="keyObjs"><b>Key Objectives</b></h4>
                        <div className="theme_deliverables">
                            <p>Chen, K. and Ghahramani, A., 2024. <Link to="/publication/warm,_moderate,_or"><b>Warm, moderate, or cool-liker? A Benchmarking Framework to Characterize Occupant Overall Thermal Preferences based on Large-Scale Thermostat Data</b></Link>. <i>Building and Environment</i>, <i>266</i>, 112046.</p>
                            <p>Chen, K. and Ghahramani, A., 2023. <Link to="/publication/comfortgpt:_a_transformer-based"><b>ComfortGPT: a transformer-based architecture for predicting preferred temperature setpoints leveraging big data</b></Link>. <i>Building and Environment</i>, <i>248</i>, 111085.</p>
                            <p>Chen, K., Xu, Q., Leow, B. and Ghahramani, A., 2022. <Link to="/publication/personal_thermal_comfort"><b>Personal thermal comfort models based on physiological measurements-A design of experiments based review</b></Link>. <i>Building and Environment</i>, <i>228</i>, 109919.</p>
                            <p className='tool_links'><Link to="/ComfortGPT"><b>ComfortGPT</b></Link></p>
                            </div>
                    </div>
                    <div className='theme_section' id='theme1_section'>
                        <div className="theme_details">
                            <img src={Theme1_2} alt="A HVAC optimisation graph with Setpoint Temperature on the y-axis and Outdoor Temperature on the x-axis from a related publication by Riccardo Talami."></img>
                            <h4><b>Optimising HVAC Temperature Setpoints for Energy Efficiency and Thermal Comfort</b></h4>
                            <h6><b>This research aims to augment HVAC systems' operation through data-driven algorithms for the optimal selection of temperature setpoints and setbacks based on weather and occupancy variability and the integration of personal comfort system devices.</b></h6>
                            <p>HVAC systems often operate based on fixed schedules that do not match actual building occupancy. This is further amplified by the growing workplace flexibility and remote working trends triggered by the COVID-19 pandemic. With more flexible working hours, unoccupied periods might increase and occupancy rates might drop. Additionally, indoor temperature setpoints are set based on international standards, and regulations to provide satisfactory thermal conditions and indoor air quality for building occupants are usually fixed throughout operation. Consequently, leveraging occupancy data to select HVAC temperature setpoints based on occupancy and weather could provide a promising solution to reduce energy waste without negatively impacting occupant comfort.</p>
                            <p>This project was previously led by <Link to="/profile/Riccardo"><b>Riccardo Talami</b></Link> and supported by <Link to="/profile/Ilyas"><b>Ilyas Dawoodjee</b></Link>.</p>
                        </div>
                        <h4 className="keyObjs"><b>Key Objectives</b></h4>
                        <div className="theme_deliverables">
                            <p>Talami, R., Dawoodjee, I. and Ghahramani, A., 2023. <Link to="/publication/quantifying_energy_savings"><b>Quantifying energy savings from optimal selection of HVAC temperature setpoints and setbacks across diverse occupancy rates and patterns</b></Link>. <i>Buildings, 13</i>(12), 2998.</p>
                            <p>Talami, R., Dawoodjee, I. and Ghahramani, A., 2023. <Link to="/publication/demystifying_energy_savings"><b>Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability</b></Link>. <i>Energy and Built Environment, 5</i>(6), 878-888.</p>
                        </div>
                        <p className='tool_links'><Link to="/otst"><b>Optimal Temperature Setpoint Tool</b></Link></p>
                    </div>
                    <div className='theme_section odd' id='theme1_section'>
                        <div className="theme_details">
                            <img src={Theme1_3} alt="Showcasing various graphs and charts that highlight the variables that go into remote photoplethysmography (RPPG) research."></img>
                            <h4><b>Non-Intrusive Sensing of Human Health</b></h4>
                            <h6><b>To develop non-intrusive and scalable sensing systems for cardiovascular parameters such as human heart rate, respiration rate, and heart rate variability by leveraging novel, low-cost RGB cameras.</b></h6>
                            <p>Cardiovascular parameters are commonly measured via electrocardiogram (ECG). Here, chest leads are attached to the patient’s chest and electrical signals are captured every time the heart beats. However, ECGs are difficult to run continuously. An alternative method, photoplethysmography (PPG), uses an optical technique to measure changes in blood volume in the microvascular bed of tissue by shining a light onto the skin and detecting the reflected light. PPG methods also require constant contact to the skin to obtain a continuous reading of cardiovascular parameters. Though such techniques can be labeled as non-invasive since they are typically embedded in smartwatches, they do remain intrusive and may be distracting in a work setting. Furthermore, some individuals find wearables uncomfortable or experience skin sensitivity issues. Remote PPG (rPPG) methods address these challenges by leveraging the base principle of PPG, and using the average reflected visible light from a specific region of a subject’s face captured via camera images as an input.</p>
                            <p>This project is led by <Link to="/profile/Keshav"><b>Keshav Kausik</b></Link> and supported by <Link to="/profile/Huanxiang"><b>Huanxiang Gao</b></Link>; previously led by <Link to="/profile/Ilyas"><b>Ilyas Dawoodjee</b></Link>.</p>
                        </div>
                        <h4 className="keyObjs"><b>Key Objectives</b></h4>
                        <div className="theme_deliverables">
                            <p>Recreate and implement state-of-the-art algorithms as outlined from the 120+ papers filtered from the 2,000+ papers.</p>
                            <p>Apply these algorithms to widely-used public datasets to obtain results for a fair comparison.</p>
                            <p>Develop a user-friendly framework that allows future rPPG researchers to generate evaluation results at the click of a button.</p>
                            <p>Visit <Link to="https://github.com/blank-ed/remote_PPG"><b>GitHub - rPPG</b></Link> to find the actual implementations of the state-of-the-art rPPG algorithms.</p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container useOrange={true} sectionName='theme2_section'>
                <div className="title">
                    <h1>Human-Centred AI</h1>
                </div>
                <div className="whole_theme">
                    <div className='theme_section'>
                        <div className="theme_details">
                            <img src={Theme2} alt="A split-screen of a simulated human walking around the lab and automatically being detected by the building systems as the real human walks around testing the program for the Human-Centred AI theme."></img>
                            <h4><b>Towards a Semantics-Driven Human-Centric Digital Twin</b></h4>
                            <h6><b>Our research delves into the creation of a semantically-enhanced digital twin by harnessing geospatially-tagged data and advanced sensors to empower users with intuitive controls and features that elevate indoor comfort and bolster building energy.</b></h6>
                            <p>In the realm of the built environment, a glaring gap persists: the lack of an effective digital twin tailored for the occupancy phase. Current systems are plagued by over 50% resource wastage due to inefficient utilisation of spaces, assets, and systems. Most building management systems (BMS) are siloed, focusing primarily on HVAC, and are ill-equipped to communicate with other systems or occupants. This fragmentation is exacerbated by non-standard naming conventions, which then cumulatively impede buildings from readily adopting smart building solutions. Beyond mere 3D representations, elements in the digital twin should mirror their real-world functional impacts, necessitating defined semantic relationships. Our research, which looks towards a semantics-driven human-centric digital twin, aims to remedy these challenges. By leveraging semantics, geospatial data, and advanced sensors, we envision a cohesive digital-physical built environment interface that enhances user experience, indoor comfort, and energy efficiency.</p>
                            <p>This project is led by <Link to="/profile/Iqbal"><b>Iqbal Shah</b></Link>, and supported by <Link to="/profile/Rezky"><b>Rezky Nanda</b></Link> and <Link to="/profile/Jonathan"><b>Jonathan Poon</b></Link>; previously supported by <Link to="/profile/Ilyas"><b>Ilyas Dawoodjee</b></Link> and <Link to="/profile/Guillaume"><b>Guillaume Lecronier</b></Link>.</p>
                        </div>
                        <h4 className="keyObjs"><b>Key Objectives</b></h4>
                        <div className="theme_deliverables">
                            <p>Shah, I. and Ghahramani, A., 2024, November. <Link to="/publication/scalable_automation_of" ><b>Scalable Automation of Building Control Loops via Geospatial Semantic-enriched Digital Twins</b></Link>. In <i>Proceedings of the 11th ACM International Conference on Systems for Energy-Efficient Buildings, Cities, and Transportation</i>, 233-234. </p>
                            <p>Shah, I. and Ghahramani, A., 2024, October. <Link to="/publication/geospatial_semantic_enriched" ><b>Geospatial Semantic Enriched Digital Twin with Logical Reasoning Rules for Managing Control Loops</b></Link>. In <i>Energy Informatics Academy Conference</i>, 245-258.</p>
                        </div>
                    </div>
                    <div className='theme_section odd' id='theme2_section'>
                        <div className="theme_details">
                            <img src={Theme2_2} alt="Pointing out the various building elements that go into indoor environmental quality (IEQ) sensing: indoor air quality (carbon dioxide, particulate matter, total volatile organic compounds), visual (horizontal illuminance), acoustics (sound), and thermal (temperature and humidity)."></img>
                            <h4><b>Human-Centric Indoor Environmental Quality (IEQ) Sensing </b></h4>
                            <h6><b>This research aims to develop and deploy low-cost and user-friendly sensing devices for personal monitoring of IEQ and enhanced human well-being.</b></h6>
                            <p>As smart buildings become more prevalent, there has been an increasing interest in understanding building occupants’ needs and preferences. Since occupant satisfaction is related to the indoor environmental quality (IEQ) of buildings, it is crucial to ensure that the indoor environment is comfortable, healthy, and conducive to the occupants’ well-being. As such, it is necessary to explore approaches to make personalized and condition-specific predictions directly from the data collected in their everyday environments, capitalizing on the Internet of Things (IoT) and machine learning (ML). With the advancement of sensor technologies, this can be achieved with a wide variety of occupant-centric sensors, and a large amount of data can be leveraged to investigate thermal, visual, acoustic, and indoor air quality (IAQ) in buildings.</p>
                            <p>This project is led by <Link to="/profile/Heng"><b>Du Heng</b></Link>; previously led by <Link to="/profile/Riccardo"><b>Riccardo Talami</b></Link> and supported by <Link to="/profile/Ilyas"><b>Ilyas Dawoodjee</b></Link>.</p>
                        </div>
                        <h4 className="keyObjs"><b>Key Objectives</b></h4>
                        <div className="theme_deliverables">
                            <p>Investigate the optimal occupant-centric spatial positioning of IEQ low-cost multi-sensing devices.</p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container sectionName='theme3_section'>
                <div className="title">
                    <h1>Intelligent Environments</h1>
                </div>
                <div className="whole_theme">
                    <div className='theme_section'>
                        <div className="theme_details">
                            <img src={Theme3} alt="Illustration of the basic concept of a democratised virtual power plant (VPP) with the power grid supplying energy to the democratised VPP, which allows a two-way relationship for pre-purchase with prosumers and a two-way relationship for selling with consumers."></img>
                            <h4><b>Democratisation of Virtual Power Plants for Optimal Monetisation and Grid Flexibility</b></h4>
                            <h6><b>Pave the way for a future where AI-driven technologies empower individuals to play an active role in shaping the energy landscape while reaping financial rewards, thus fostering sustainable energy practices and grid resilience.</b></h6>
                            <p>In today's energy landscape, we witness a burgeoning wholesale electricity market alongside the increasing adoption of renewable energy sources, particularly photovoltaic (PV) batteries, driven by government subsidies and environmental motivations. While this transition holds immense promise, it also presents a real-world gap wherein end-users, despite having the potential to financially benefit from market participation, often lack the means to do so efficiently, frequently necessitating manual adjustments via mobile devices. The core motivation behind our research lies in harnessing the power of AI to facilitate seamless and user-friendly interactions with VPPs. We aim to bridge existing gaps by drawing insights from various disciplines beyond building science and algorithmic processes that have successfully incentivized behavioural change. Our overarching objectives revolve around transforming transient behaviors into enduring habits, quantifying and minimising uncertainty, and integrating users into the energy ecosystem to monetise their actions effectively.</p>
                            <p>This project is led by <Link to="/profile/Rezky"><b>Rezky Nanda</b></Link> and supported by <Link to="/profile/Maxime"><b>Maxime Caillat</b></Link>; previously led by <Link to="/profile/Connor"><b>Connor Aucremanne</b></Link> and supported by <Link to="/profile/Pierre"><b>Pierre-Louis David</b></Link>.</p>
                        </div>
                        <h4 className="keyObjs"><b>Key Objectives</b></h4>
                        <div className="theme_deliverables">
                            <p>Understand the determinants for building occupant energy consumption behaviors, and the influence of financial incentives upon them.</p>
                            <p>Test how to effectively communicate financial incentive information and provide recommendations to the building end-users under dynamic pricing schemes with higher-level energy granularity.</p>
                            <p>Determine how to model and predict occupant consumption behaviors and their uncertainties under dynamic pricing schemes.</p>
                            <p>Investigate how to effectively incorporate dynamic end-user interactions with energy trading strategies.</p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container useOrange={true} sectionName='theme4_section'>
                <div className="title">
                    <h1>Nature-Based Technologies</h1>
                </div>
                <div className="whole_theme">
                    <div className='theme_section odd'>
                        <div className="theme_details">
                            <img src={Theme4_0} alt="Illustration of the 4 themes that make up smart and resilient cooling system façades: vertical greenery systems (VGS), codensate water recycling, shading systems, and heat reflective paints, as well as various configurations of louvers and greenery on the façade."></img>
                            <h4><b>Exploring Novel Cooling Technologies for Building Façades: Towards a Cooler and Resilient Urban Landscape</b></h4>
                            <h6><b>Our research looks into the synergistic potential of various façade technologies, such as shading systems, heat-reflective paints, and vertical greenery systems to pioneer innovative façade cooling solutions that enhance energy efficiency and urban resilience.</b></h6>
                            <p>The escalating effects of global warming, driven in part by anthropogenic activities, amplify the challenges posed by climate change. This, in turn, exacerbates the urban heat island (UHI) phenomenon, where metropolitan areas experience significantly warmer temperatures than their rural surroundings. This vicious cycle not only places additional strain on urban infrastructure, but also intensifies energy demands. Building façades, integral to a structure's thermal performance, emerge as a crucial intervention point in this scenario. Delving into the synergistic potential of various façade technologies, our research champions novel approaches that aim to break this cycle, leading to innovative cooling solutions that enhance energy efficiency and fortify urban resilience.</p>
                            <p>This project is led by <Link to="/profile/Iqbal"><b>Iqbal Shah</b></Link>; previously supported by <Link to="/profile/Pegah"><b>Pegah Eshraghi</b></Link>.</p>
                        </div>
                        <h4 className="keyObjs"><b>Key Objectives</b></h4>
                        <div className="theme_deliverables">
                            <p>Shah, I., Su, X., Talami, R. and Ghahramani, A., 2024. <Link to="/publication/enhancing_building_envelopes:" ><b>Enhancing Building Envelopes: Parametric Analysis of Shading Systems for Opaque Facades and Their Comparison with Cool Paints</b></Link>. <i>Energy and Built Environment</i>.</p>
                            <p>Shah, I., Lau, S.K., Sekaran, V., and Ghahramani, A., 2023. <Link to="/publication/porous_plant_form-induced" ><b>Porous plant form-induced amplification of evapotranspiration for enhanced cooling in vertical greenery systems</b></Link>.        <i>Building and Environment</i>, <i>245</i>, 110904.</p>
                            <p>Shah, I., Soh, B., Lim, C., Lau, S. K., and Ghahramani, A., 2023. <Link to="/publication/thermal_transfer_and"><b>Thermal transfer and temperature reductions from shading systems on opaque facades: Quantifying the impacts of influential factors</b></Link>. <i>Energy and Buildings</i>, <i>278</i>, 112604.</p>
                        </div>
                    </div>
                    <div className='theme_section' id='theme3_section'>
                        <div className="theme_details">
                            <img src={Theme4} alt="The NUS Tropical Technologies Laboratory with building greenery, building-integrated photovoltaic, and various façades for the Resilient Cooling theme."></img>
                            <h4><b>Exploring Novel Vertical Greenery Systems Design</b></h4>
                            <h6><b>By comprehensively examining the economic, environmental, and social impacts of various VGS designs, our objective is to identify and propose the most suitable design options for tropical climates.</b></h6>
                            <p>Vertical greenery systems (VGS) offer diverse advantages in tropical climates by impacting environmental sustainability, human well-being, urban aesthetics, and economic vitality. Effective VGS design demands equilibrium among ecological factors, societal needs, financial viability, and architectural integration. Given the varying climatic conditions across countries, a comprehensive approach encompassing wall type, plant selection, substrate choice, geometry, orientation, and irrigation method is essential during the design phase to fully unlock the benefits of VGSs.</p>
                            <p>This project is led by <Link to="/profile/Kelly"><b>Kelly Loh</b></Link>; previously supported by <Link to="/profile/Pegah"><b>Pegah Eshraghi</b></Link>.</p>
                        </div>
                        <h4 className="keyObjs"><b>Key Objectives</b></h4>
                        <div className="theme_deliverables">
                            <p>Assess and juxtapose the efficiency of distinct available VGS types in the market across economic, social, and environmental dimensions.</p>
                            <p>Explore variations in their influence under diverse climatic conditions by shedding light on how their impacts diverge across different climates.</p>
                            <p>Determine the VGS design that optimally suits tropical climates, considering factors like wall type, plant selection, substrate, geometry, orientation, and irrigation method to achieve maximal benefits.</p>
                        </div>
                    </div>
                </div>
            </Container>

            <Footer />
        </div>
    );
}

export default Research;