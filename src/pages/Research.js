import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import './Research.css'
import { Link } from 'react-router-dom';

import AWSLogo from './../components/Website Data/AWS logo.png'
import TraneLogo from './../components/Website Data/tt_logo_color_rgb.jpg'
import GreenologyLogo from './../components/Website Data/Greenology logo.png'
import CoLogo from './../components/Website Data/Co Innovation lab logo.jpg'

import Theme1 from './../components/Website Data/Kai_OPC.jpg'
import Theme1_2 from './../components/Website Data/Riccardo1.jpg'

import Theme2 from './../components/Website Data/Iqbal_DT2.png'
import Theme2_1 from './../components/Website Data/Ilyas_rPPG.png'
import Theme2_2 from './../components/Website Data/Riccardo2.jpg'

import Theme3_0 from './../components/Website Data/Iqbal_VGS.jpg'
import Theme3 from './../components/Website Data/Kelly_T2.jpg'

import Theme4 from './../components/Website Data/Connor_VPP.jpg'

function Research() {

    function handleThemeClick(themeId) {
        const themeElement = document.getElementById(themeId);
        if (themeElement) {
            themeElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="Research">
            <NavBar />

            <Container>
                <div className="first_section">
                    <div className="title_section">
                        <h1><b>Research Initiatives</b></h1>
                        <h3><b>We strive to integrate robotics and human-centred artificial intelligence into the built environment in an effort to improve energy efficiency and occupant well-being throughout the existing and forthcoming building stock.</b></h3>
                        <h5>Are you an industry partner on a similar mission or have an idea for a project we could collaborate on for smart buildings and intelligent environments?</h5>
                    </div>
                    <div className="industry_partners">
                        <a href="https://aws.amazon.com/" target="_blank">
                            <div className="img_container">
                                <img src={AWSLogo} alt="" />
                            </div>
                        </a>
                        <a href="https://www.tranetechnologies.com/en/index.html" target="_blank">
                            <div className="img_container">
                                <img src={TraneLogo} alt="" />
                            </div>
                        </a>
                        <a href="https://greenology.sg/" target="_blank">
                            <div className="img_container">
                                <img src={GreenologyLogo} alt="" />
                            </div>
                        </a>
                        <a href="https://smartlab.expert/" target="_blank">
                            <div className="img_container">
                                <img src={CoLogo} alt="" />
                            </div>
                        </a>
                    </div>
                    <div className="HomeButtons">
                        <Link to="mailto:ghahramani@nus.edu.sg" target='_blank'><p id='JoinButton'>EMAIL THE PI</p></Link>
                    </div>
                </div>
            </Container>

            <Container useOrange={true}>
                <div className="second_section">
                    <div className="title_section">
                        <h2><b>Themes in our work</b></h2>
                    </div>
                    <div className="themes">
                        <div class="each_theme">
                            <Link to="#" onClick={() => handleThemeClick('theme1_section')}>
                                <img src={Theme1}></img>
                                <h4><b>SENSING HUMAN HEALTH AND COMFORT</b></h4>
                            </Link>
                            <p>Our focus on sensing human health and comfort enables us to create smarter buildings that prioritise the well-being of their occupants while reducing energy consumption and promoting environmental sustainability. Projects include adaptive comfort modelling, vision-based systems for remote physiological measurements, and multi-sensing devices for human-centric IEQ.</p>
                        </div>
                        <div class="each_theme">
                            <Link to="#" onClick={() => handleThemeClick('theme2_section')}>
                                <img src={Theme2}></img>
                                <h4><b>HUMAN-CENTRED AI</b></h4>
                            </Link>
                            <p>Human-centred AI puts people at the forefront of technology development, ensuring that AI systems are designed to meet human needs and improve the quality of life for individuals and society as a whole. Projects include integrating and optimising personal comfort system devices into the control loop of HVAC systems, developing advanced sensors, ontology automation, and a semantically connected digital twin.</p>
                        </div>
                        <div class="each_theme">
                            <Link to="#" onClick={() => handleThemeClick('theme3_section')}>
                                <img src={Theme3}></img>
                                <h4><b>RESILIENT COOLING</b></h4>
                            </Link>
                            <p>Our focus is on façade technologies, which involves developing innovative building envelope systems that reduce the energy needed for cooling while also providing increased thermal comfort for occupants. This includes research developments and technology integration for enhancing the cooling effects of current urban greening systems, such as vertical greenery systems (VGS).</p>
                        </div>
                        <div class="each_theme">
                            <Link to="#" onClick={() => handleThemeClick('theme4_section')}>
                                <img src={Theme4}></img>
                                <h4><b>INTELLIGENT ENVIRONMENTS</b></h4>
                            </Link>
                            <p>Our research investigates the democratisation of virtual power plants (VPP) for optimal monetisation and grid flexibility to empower end-users to participate effectively. By leveraging artificial intelligence (AI), we seek to bridge existing gaps in user interaction and incentivise efficient energy behaviors. The research is divided into two halves: one explores user impacts on VPPs and behaviour modeling, while the other employs machine learning for automated energy market participation.</p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container sectionName='theme1_section'>
                <div className="title">
                    <h1>Sensing Human Health and Comfort</h1>
                </div>
                <div className="whole_theme">
                    <div className='theme_section'>
                        <div className="theme_details">
                            <img src={Theme1}></img>
                            <h4><b>Optimising Thermal Comfort in the Built Environment</b></h4>
                            <h6><b>By bridging physiological signals and variations of comfort preferences of occupants with modern data analytics, we are developing innovative approaches and models to accurately capture occupants' comfort preferences over time and benefit human well-being. </b></h6>
                            <p>In the evolving landscape of building climate control, there's a growing recognition that standard thermal settings often fall short in addressing the diversity of human comfort. Physiological measurements have emerged as a crucial component in capturing individualised thermal comfort profiles, underscoring the fact that comfort isn't merely a subjective feeling but deeply rooted in our bodily responses. However, harnessing this rich physiological data at scale has been a challenge. Traditional methods, with their heavy reliance on continuous occupant interactions, are not only cumbersome but also limited in their adaptability. Recently, transformer-based architectures, which employ pre-trained models built on become the solutions to minimize the need for constant occupant feedback while accurately predicting preferred temperature setpoint. Our research is exploring different approaches to accurately capture variations of occupants' comfort preferences over time and apply them to real-world applications to benefit human health and well-being.</p>
                            <p>This project is led by <a href="https://building-robotics-lab.github.io/brlab/#/individual_profile/Kai">CHEN Kai</a>.</p>
                        </div>
                        <h4 className="keyObjs"><b>Key Objectives</b></h4>
                        <div className="theme_deliverables">
                            <p>Chen, K., Xu, Q., Leow, B. and Ghahramani, A., 2022. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0360132322011490" target="_blank"><b>Personal thermal comfort models based on physiological measurements-A design of experiments based review</b></a>. <i>Building and Environment</i>, <i>228</i>, 109919.</p>
                            <p>Chen, K. and Ghahramani, A., 2023. <b>A Transformer-based Architecture for Predicting Preferred Temperature Setpoints Leveraging Big Data</b>. <i>Building and Environment</i>. [under review]</p>
                        </div>
                        <p><a href="https://building-robotics-lab.github.io/brlab/#/ComfortGPT" target="_blank"><b>ComfortGPT</b></a> (UI/UX by <a href="https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas">Ilyas Dawoodjee</a> & <a href="https://building-robotics-lab.github.io/brlab/#/individual_profile/Connor">Connor Aucremanne</a>)</p>
                    </div>
                    <div className='theme_section' id='theme1_section'>
                        <div className="theme_details">
                            <img src={Theme1_2}></img>
                            <h4><b>Optimising HVAC Temperature Setpoints for Energy Efficiency and Thermal Comfort</b></h4>
                            <h6><b>This research aims to augment HVAC systems' operation through data-driven algorithms for the optimal selection of temperature setpoints and setbacks based on weather and occupancy variability and the integration of personal comfort system devices.</b></h6>
                            <p>HVAC systems often operate based on fixed schedules that do not match actual building occupancy. This is further amplified by the growing workplace flexibility and remote working trends triggered by the COVID-19 pandemic. With more flexible working hours, unoccupied periods might increase and occupancy rates might drop. Additionally, indoor temperature setpoints are set based on international standards, and regulations to provide satisfactory thermal conditions and indoor air quality for building occupants are usually fixed throughout operation. Consequently, leveraging occupancy data to select HVAC temperature setpoints based on occupancy and weather could provide a promising solution to reduce energy waste without negatively impacting occupant comfort.</p>
                            <p>This project is led by <a href="https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo">Riccardo Talami</a>, supported by <a href="https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas">Ilyas Dawoodjee</a>.</p>
                        </div>
                        <h4 className="keyObjs"><b>Key Objectives</b></h4>
                        <div className="theme_deliverables">
                            <p>Talami, R., Dawoodjee, I. and Ghahramani, A., 2023. <a href="https://www.sciencedirect.com/science/article/pii/S2666123323000612?via%3Dihub" target="_blank"><b>Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability</b></a>. <i>Energy and Built Environment</i>.</p>
                            <p>Talami, R., Dawoodjee, I. and Ghahramani, A., 2023. <b>Quantifying energy savings from optimal selection of HVAC temperature setpoints and setbacks across diverse occupancy rates and patterns</b>. <i>Applied Energy</i>. [under review]</p>
                        </div>
                        <p><a href="https://building-robotics-lab.github.io/brlab/#/optimal_temperature_setpoint_tool" target="_blank"><b>Optimal Temperature Setpoint Tool</b></a> (UI/UX by <a href="https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas">Ilyas Dawoodjee</a> & <a href="https://building-robotics-lab.github.io/brlab/#/individual_profile/Connor">Connor Aucremanne</a>)</p>
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
                            <img src={Theme2}></img>
                            <h4><b>Towards a Semantics-Driven Human-Centric Digital Twin</b></h4>
                            <h6><b>Our research delves into the creation of a semantically-enhanced digital twin, harnessing geospatially-tagged data and advanced sensors, empowering users with intuitive controls and features that elevate indoor comfort and bolster building energy.</b></h6>
                            <p>In the realm of the built environment, a glaring gap persists: the lack of an effective digital twin tailored for the occupancy phase. Current systems are plagued by over 50% resource wastage due to inefficient utilisation of spaces, assets, and systems. Most building management systems (BMS) are siloed, focusing primarily on HVAC, and are ill-equipped to communicate with other systems or occupants. This fragmentation is exacerbated by non-standard naming conventions, which then cumulatively impede buildings from readily adopting smart building solutions. Beyond mere 3D representations, elements in the digital twin should mirror their real-world functional impacts, necessitating defined semantic relationships. Our research, which looks towards a semantics-driven human-centric digital twin, aims to remedy these challenges. By leveraging semantics, geospatial data, and advanced sensors, we envision a cohesive digital-physical built environment interface that enhances user experience, indoor comfort, and energy efficiency.</p>
                            <p>This project is led by <a href="https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal">Iqbal Shah</a>, supported by <a href="https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas">Ilyas Dawoodjee</a>.</p>
                        </div>
                        <h4 className="keyObjs"><b>Key Objectives</b></h4>
                        <div className="theme_deliverables">
                            <p>Development of automation algorithms focusing on the generation of semantics for digital twin applications.</p>
                            <p>Smart personalised cooling systems utilising semantics to optimise and tailor cooling experiences for individual preferences.</p>
                            <p>Human-centric smart interfaces that prioritise and well-being, ensuring intuitive and adaptive interactions between users and the environment.</p>
                            <p>Through developing a semantically-connected digital twin system with user-centric interfaces, we aim to provide stakeholders a versatile tool for creating virtual replicas of various built environments for a true metaverse.</p>
                        </div>
                    </div>
                    <div className='theme_section' id='theme2_section'>
                        <div className="theme_details">
                            <img src={Theme2_1}></img>
                            <h4><b>Non-intrusive Sensing of Human Health</b></h4>
                            <h6><b>To develop non-intrusive and scalable sensing systems for cardiovascular parameters such as human heart rate, respiration rate, and heart rate variability by leveraging novel low-cost RGB cameras.</b></h6>
                            <p>Cardiovascular parameters are commonly measured via electrocardiogram (ECG). Here, chest leads are attached to the patient’s chest and electrical signals are captured every time the heart beats. However, ECGs are difficult to run continuously. An alternative method, photoplethysmography (PPG), uses an optical technique to measure changes in blood volume in the microvascular bed of tissue by shining a light onto the skin and detecting the reflected light. PPG methods also require constant contact to the skin to obtain a continuous reading of cardiovascular parameters. Though such techniques can be labeled as non-invasive since they are typically embedded in smartwatches, they do remain intrusive and may be distracting in a work setting. Furthermore, some individuals find wearables uncomfortable or experience skin sensitivity issues. Remote PPG (rPPG) methods address these challenges by leveraging the base principle of PPG, and using the average reflected visible light from a specific region of a subject’s face captured via camera images as an input.</p>
                            <p>This project is led by <a href="https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas">Ilyas Dawoodjee</a>.</p>
                        </div>
                        <h4 className="keyObjs"><b>Key Objectives</b></h4>
                        <div className="theme_deliverables">
                            <p>Recreate and implement state-of-the-art algorithms as outlined from the 120+ papers filtered from the 2,000+ papers.</p>
                            <p>Develop a user-friendly framework that allows future rPPG researchers to generate evaluation results at the click of a button.</p>
                            <p>Apply these algorithms to widely-used public datasets to obtain results for a fair comparison.</p>
                            <p>Visit <a href="https://github.com/blank-ed/remote_PPG" target="_blank"><b>GitHub - rPPG</b></a> to find the actual implementations of the state-of-the-art rPPG algorithms.</p>
                        </div>
                    </div>
                    <div className='theme_section' id='theme2_section'>
                        <div className="theme_details">
                            <img src={Theme2_2}></img>
                            <h4><b>Human-centric Indoor Environmental Quality (IEQ) Sensing </b></h4>
                            <h6><b>This research aims to develop and deploy low-cost and user-friendly sensing devices for personal monitoring of IEQ and enhanced human well-being.</b></h6>
                            <p>As smart buildings become more prevalent, there has been an increasing interest in understanding building occupants’ needs and preferences. Since occupant satisfaction is related to the IEQ of buildings, it is crucial to ensure that the indoor environment is comfortable, healthy, and conducive to the occupants’ well-being. As such, it is necessary to explore approaches to make personalized and condition-specific predictions directly from the data collected in their everyday environments, capitalizing on the Internet of Things (IoT) and machine learning (ML). With the advancement of sensor technologies, this can be achieved with a wide variety of occupant-centric sensors, and a large amount of data can be leveraged to investigate thermal, visual, acoustic, and indoor air quality (IAQ) in buildings.</p>
                            <p>This project is led by <a href="https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo">Riccardo Talami</a>, supported by <a href="https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas">Ilyas Dawoodjee</a>.</p>
                        </div>
                        <h4 className="keyObjs"><b>Key Objectives</b></h4>
                        <div className="theme_deliverables">
                            <p>Investigating the optimal occupant-centric spatial positioning of IEQ low-cost multi-sensing devices.</p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container sectionName='theme3_section'>
                <div className="title">
                    <h1>Resilient Cooling</h1>
                </div>
                <div className="whole_theme">
                    <div className='theme_section'>
                        <div className="theme_details">
                            <img src={Theme3_0}></img>
                            <h4><b>Exploring Novel Cooling Technologies For Building Façades: Towards a Cooler and Resilient Urban Landscape</b></h4>
                            <h6><b>Our research looks into the synergistic potential of various façade technologies, such as shading systems, heat-reflective paints, and vertical greenery systems to pioneer innovative facade cooling solutions that enhance energy efficiency and urban resilience.</b></h6>
                            <p>The escalating effects of global warming, driven in part by anthropogenic activities, amplify the challenges posed by climate change. This, in turn, exacerbates the urban heat island (UHI) phenomenon, where metropolitan areas experience significantly warmer temperatures than their rural surroundings. This vicious cycle not only places additional strain on urban infrastructure, but also intensifies energy demands. Building façades, integral to a structure's thermal performance, emerge as a crucial intervention point in this scenario. Delving into the synergistic potential of various façade technologies, our research champions novel approaches that aim to break this cycle, leading to innovative cooling solutions that enhance energy efficiency and fortify urban resilience.</p>
                            <p>This project is led by <a href="https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal">Iqbal Shah</a>.</p>
                        </div>
                        <h4 className="keyObjs"><b>Key Objectives</b></h4>
                        <div className="theme_deliverables">
                            <p>Shah, I., Soh, B., Lim, C., Lau, S. K., and Ghahramani, A., 2023. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0378778822007757" target="_blank"><b>Thermal transfer and temperature reductions from shading systems on opaque facades: Quantifying the impacts of influential factors</b></a>. <i>Energy and Buildings</i>, <i>278</i>, 112604.</p>
                            <p>Shah, I. and Ghahramani, A., 2023. <b>Porous Plant Form-Induced Amplification of Evapotranspiration for Enhanced Cooling in Vertical Greenery Systems</b>. <i>Building and Environment</i>. [under review]</p>
                        </div>
                    </div>
                    <div className='theme_section' id='theme3_section'>
                        <div className="theme_details">
                            <img src={Theme3}></img>
                            <h4><b>Exploring Novel Vertical Greenery Systems Design</b></h4>
                            <h6><b>By comprehensively examining the economic, environmental, and social impacts of various vertical greenery system (VGS) designs, our objective is to identify and propose the most suitable design options for tropical climates.</b></h6>
                            <p>VGSs offer diverse advantages in tropical climates by impacting environmental sustainability, human well-being, urban aesthetics, and economic vitality. Effective VGS design demands equilibrium among ecological factors, societal needs, financial viability, and architectural integration. Given the varying climatic conditions across countries, a comprehensive approach encompassing wall type, plant selection, substrate choice, geometry, orientation, and irrigation method is essential during the design phase to fully unlock the benefits of VGSs.</p>
                            <p>This project is led by <a href="https://building-robotics-lab.github.io/brlab/#/individual_profile/Kelly">Kelly Loh</a>.</p>
                        </div>
                        <h4 className="keyObjs"><b>Key Objectives</b></h4>
                        <div className="theme_deliverables">
                            <p>Assess and juxtapose the efficiency of distinct available Vertical Greenery System (VGS) types in the market across economic, social, and environmental dimensions.</p>
                            <p>Explore variations in their influence under diverse climatic conditions, shedding light on how their impacts diverge across different climates.</p>
                            <p>Determine the VGS design that optimally suits tropical climates, considering factors like wall type, plant selection, substrate, geometry, orientation, and irrigation method to achieve maximal benefits.</p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container useOrange={true} sectionName='theme4_section'>
                <div className="title">
                    <h1>Intelligent Environments</h1>
                </div>
                <div className="whole_theme">
                    <div className='theme_section'>
                        <div className="theme_details">
                            <img src={Theme4}></img>
                            <h4><b>Democratisation of Virtual Power Plants (VPP) for Optimal Monetisation and Grid Flexibility</b></h4>
                            <h6><b>Pave the way for a future where AI-driven technologies empower individuals to play an active role in shaping the energy landscape while reaping financial rewards, thus fostering sustainable energy practices and grid resilience.</b></h6>
                            <p>In today's energy landscape, we witness a burgeoning wholesale electricity market alongside the increasing adoption of renewable energy sources, particularly photovoltaic (PV) batteries, driven by government subsidies and environmental motivations. While this transition holds immense promise, it also presents a real-world gap wherein end-users, despite having the potential to financially benefit from market participation, often lack the means to do so efficiently, frequently necessitating manual adjustments via mobile devices. The core motivation behind our research lies in harnessing the power of artificial intelligence (AI) to facilitate seamless and user-friendly interactions with VPPs. We aim to bridge existing gaps by drawing insights from various disciplines beyond building science and algorithmic processes that have successfully incentivized behavioural change. Our overarching objectives revolve around transforming transient behaviors into enduring habits, quantifying and minimising uncertainty, and integrating users into the energy ecosystem to monetise their actions effectively.</p>
                            <p>This project is led by <a href="https://building-robotics-lab.github.io/brlab/#/individual_profile/Connor">Connor Aucremanne</a>.</p>
                        </div>
                        <h4 className="keyObjs"><b>Key Objectives</b></h4>
                        <div className="theme_deliverables">
                            <p>Delve into the realm of advanced algorithms and employ machine learning methods for energy forecasting to empower household residents to seamlessly engage in the wholesale electricity market alongside their peers without the need for constant manual intervention, creating a pathway towards democratising VPPs for optimal monetisation and grid flexibility.</p>
                            <p>Explore the multi-faceted ways in which occupants impact VPP performance, coupled with the development of models and predictive tools for behaviour and its associated uncertainties.</p>
                            <p>In-depth examination of occupant behaviour modelling within VPP domains, emphasizing the mathematical aspects linked to energy consequences, which are pivotal for optimising energy transactions.</p>
                            <p>Investigating the formation of behaviours and strategies to influence them, with a particular focus on financial incentives facilitated by VPPs, enabling the monetisation of user actions.</p>
                        </div>
                    </div>
                </div>
            </Container>

            <Footer />
        </div>
    );
}

export default Research;