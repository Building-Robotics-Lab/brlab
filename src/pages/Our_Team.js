import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaOrcid, FaResearchgate } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import './Our_Team.css';
import TeamGrid from '../components/TeamGrid';
import TeamGrid2 from '../components/TeamGrid2';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '../components/Container';

import LabImage1 from './../components/Website Data/Lab_Image_1.png';

import ProfCV from './../components/Website Individual Information/prof_CV.pdf';

import ProfPic from './../components/Website Individual Information/prof_pic.jpg';
import RiccardoPic from './../components/Website Individual Information/Riccardo/image.jpg';
import KaiPic from './../components/Website Individual Information/Kai/image.jpg';
import IqbalPic from './../components/Website Individual Information/Iqbal/image.jpg';
import ConnorPic from './../components/Website Individual Information/Connor/image.jpg';
import KellyPic from './../components/Website Individual Information/Kelly/image.jpg';
import IlyasPic from './../components/Website Individual Information/Ilyas/image.jpg';
import StellaPic from './../components/Website Individual Information/Stella/image.jpg';
import XiaosongPic from './../components/Website Individual Information/Xiaosong/image.jpg';
import PegahPic from './../components/Website Individual Information/Pegah/image.jpg';
import PierrePic from './../components/Website Individual Information/Pierre-Louis/image.jpg';
import GuillaumePic from './../components/Website Individual Information/Guillaume/image.jpg';
import MichellePic from './../components/Website Individual Information/Michelle/image.jpg';
import QianPic from './../components/Website Individual Information/Qian/image.jpeg';
import HengPic from './../components/Website Individual Information/Heng/image.jpg';

function Our_Team() {

    useEffect(() => {
        document.title = 'BRL - Team';
        return () => {
            document.title = 'My React App'; // This is optional and will reset the title when the component unmounts.
        };
    }, []); // Empty dependency array ensures this runs only once when the component mounts.

    const teamMembers = [
        {
            name: 'Riccardo Talami, PhD',
            role: 'Research Fellow',
            skills: 'Architectural Engineering; Building Performance Simulation; Optimisation; Energy-Efficient Buildings; Sustainable Architecture',
            imgSrc: RiccardoPic,
            link: 'Riccardo'
        },
        {
            name: 'Du Heng, PhD',
            role: 'Research Fellow',
            skills: 'Thermal Comfort; Human Well-Being; Environmental Sustainability; Smart Buildings; Data-Driven Models',
            imgSrc: HengPic,
            link: 'Heng'
        },
        {
            name: 'Chen Kai',
            role: 'PhD Student',
            skills: 'Building Energy Efficiency; Thermal Comfort; Smart Buildings',
            imgSrc: KaiPic,
            link: 'Kai'
        },
        {
            name: 'Iqbal Shah',
            role: 'PhD Student',
            skills: 'Resilient Façade Systems; Urban Greening; Urban Heat Island; Digital Twin Development; Building Optimisation & Automation',
            imgSrc: IqbalPic,
            link: 'Iqbal'
        },
        {
            name: 'Connor Aucremanne',
            role: 'PhD Student',
            skills: 'Virtual Power Plants; Building-Occupant Network Dynamics; Smart Buildings; Human-Building Interaction; Decarbonisation',
            imgSrc: ConnorPic,
            link: 'Connor'
        },
        {
            name: 'Kelly Loh',
            role: 'PhD Student',
            skills: 'Building Energy Efficiency; Building Greenery; Building Finance; Building Information Modelling',
            imgSrc: KellyPic,
            link: 'Kelly'
        },
        {
            name: 'Su Xiaosong',
            role: 'Visiting PhD Candidate',
            skills: 'Building Energy Efficiency; Energy-Efficient Building Envelope; Building-Integrated Photovoltaics; Radiant Cooling Technology in Buildings',
            imgSrc: XiaosongPic,
            link: 'Xiaosong'
        },
        {
            name: 'Pegah Eshraghi',
            role: 'Visiting PhD Candidate',
            skills: 'Building Energy Efficiency; Machine Learning; Urban Building Energy Modelling; Indoor Environmental Quality; Thermal Comfort',
            imgSrc: PegahPic,
            link: 'Pegah'
        },
        {
            name: 'Pierre-Louis David',
            role: "Visiting MSc Student",
            skills: 'Machine Learning; Optimisation; Computer Vision; Energy',
            imgSrc: PierrePic,
            link: 'Pierre'
        },
        {
            name: 'Guillaume Lecronier',
            role: "Visiting MSc Student",
            skills: 'Robotics; Embedded Systems; IoT; Sensor Data Analysis; Machine Learning',
            imgSrc: GuillaumePic,
            link: 'Guillaume'
        }
    ];

    const alumnis = [
        {
            name: 'Hu Xinhao',
            role: (
                <>
                PhD Candidate <br />
                Hunan University (China)
                </>
            ),
            skills: 'Visiting PhD Candidate (January 2023 - January 2024)',
            imgSrc: StellaPic,
            /*link: 'Stella'*/
        },
        {
            name: 'Ilyas Dawoodjee',
            role: (
                <>
                MSc Student <br />
                University of Manitoba (Canada)
                </>
            ),
            skills: 'Research Engineer (April 2022 - December 2023)',
            imgSrc: IlyasPic,
            /*link: 'Ilyas'*/
        },
        {
            name: 'Qi Xuanning',
            role: (
                <>
                PhD Candidate <br />
                Harbin Institute of Technology (China)
                </>
            ),
            skills: 'Visiting PhD Candidate (August 2022 - August 2023)',
            imgSrc: MichellePic,
            /*link: 'Michelle'*/
        },
        {
            name: 'Qian Xu, PhD',
            role: (
                <>
                Lecturer <br />
                University of Lincoln (United Kingdom)
                </>
            ),
            skills: 'Postdoctoral Scholar (January 2022 - December 2022)',
            imgSrc: QianPic,
            /*link: 'Michelle'*/
        }
    ];


    return (
        <div className="Our_Team">
            <NavBar />

            <Container>
                <div className="first_section" id='prof_profile'>
                    <div className="prof_data">
                        <div className='prof_pic'>
                            <img src={ProfPic} alt="Ali Ghahramani, PhD" />
                        </div>
                        <div className="HomeButtons">
                            <a href={ProfCV} target="_blank">
                                <p className='our_team_button' id='JoinButton'>DOWNLOAD MY CV</p>
                            </a>
                        </div>
                        <div className='prof_links'>
                            <a className="bi-envelope" href="mailto:ghahramani@nus.edu.sg"></a>
                            <a className="bi-linkedin" href="https://www.linkedin.com/in/alighahramani/" target="_blank"></a>
                            <a href="https://scholar.google.com/citations?user=9UACV-AAAAAJ&hl=en&oi=ao" target="_blank"><FaGoogle /></a>
                            <a href="https://orcid.org/0000-0003-2043-7261" target="_blank"><FaOrcid /></a>
                            <a href="https://www.researchgate.net/profile/Ali-Ghahramani-4" target="_blank"><FaResearchgate /></a>
                        </div>
                    </div>
                    <div className="prof_bio">
                        <h3><b>Meet the Director</b></h3>
                        <h1><b>Ali Ghahramani, PhD</b></h1>
                        <h5><b>Assistant Professor (PYP) at the National University of Singapore</b></h5>
                        <p>I am Dr. Ali Ghahramani, an Assistant Professor (Presidential Young Professor) at the Department of the Built Environment,
                            National University of Singapore. I received my PhD in Civil Engineering (Informatics for Intelligent Built Environments)
                            from the University of Southern California (USC), and I hold multiple MS degrees in Computer Science, Industrial and
                            Systems Engineering, and Civil Engineering. I previously held a postdoctoral scholar position at the Center for the Built
                            Environment at the University of California, Berkeley. My research interests include sensing human health and comfort,
                            infrared thermography, building robotics, human-centred AI, smart buildings, and resilient cooling. I have been the recipient
                            of numerous awards, grants, and honours, including the Presidential Young Professorship at NUS in 2020, and have conducted
                            industry-related research projects with companies, such as Trane Technologies and Greenology.</p>

                    </div>
                </div>
            </Container>

            <Container useOrange={true}>
                <div className="second_section">
                    <div class="meet_team">
                        <h2><b>Meet the team!</b></h2>
                    </div>
                    <div class="position">
                        <h4><b>Full-Time Researchers</b></h4>
                    </div>
                    <TeamGrid members={teamMembers} />
                </div>
            </Container>

            <Container>
                <div class="position">
                    <h4><b>Alumni</b></h4>
                </div>
                <TeamGrid2 members={alumnis} />
            </Container>

            <Container useOrange={true}>
                <img className='LadImage1' src={LabImage1} alt="All the current members of the lab together." />
            </Container>

            <Container>
                <div class="fifth_section">
                    <div>
                        <h3><b>Our mission at the Building Robotics Lab is to create a sustainable future by developing innovative solutions for building energy efficiency and human-building interaction. </b></h3>
                        <p>If you are a potential student or postdoctoral scholar interested in the Building Robotics Lab, please do not hesitate to get in touch with us. Our creative and collaborative lab is open for applicants with diverse experiences, backgrounds, abilities, and perspectives to apply.</p>
                    </div>
                    <div className="HomeButtons">
                        <Link to="/join"><p id='JoinButton'>JOIN THE LAB</p></Link>
                    </div>
                </div>
            </Container>

            <Footer />
        </div>
    );
}

export default Our_Team;