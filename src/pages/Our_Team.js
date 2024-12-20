import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaGoogle, FaOrcid, FaResearchgate } from 'react-icons/fa';
import './Our_Team.css';
import TeamGrid from '../components/TeamGrid';
import TeamGrid2 from '../components/TeamGrid2';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '../components/Container';

import LabImage1 from './../components/Website Data/BRL_Linkedin-Banner.png';
import ProfCV from './../components/Website Individual Information/prof_CV.pdf';

import ProfPic from './../components/Website Individual Information/prof_pic.jpg';
import HengPic from './../components/Website Individual Information/Heng/image.jpg';
import KeshavPic from './../components/Website Individual Information/Keshav/image.jpeg';
import KaiPic from './../components/Website Individual Information/Kai/image.jpg';
import IqbalPic from './../components/Website Individual Information/Iqbal/image.jpg';
import ConnorPic from './../components/Website Individual Information/Connor/image.jpg';
import KellyPic from './../components/Website Individual Information/Kelly/image.jpg';
import RezkyPic from './../components/Website Individual Information/Rezky/image.jpeg';
import JonathanPic from './../components/Website Individual Information/Jonathan/image.jpg';
import HuanxiangPic from './../components/Website Individual Information/Huanxiang/image.jpeg';
import ChenxiPic from './../components/Website Individual Information/Chenxi/image.jpeg';
import MaximePic from '/Users/connoraucremanne/Documents/Website_2.0/brlab/src/components/Website Individual Information/Untitled.jpeg'
//import XianPic from './components/Website Individual Information/Untitled.jpeg'
import XiaorongPic from './../components/Website Individual Information/Xiaorong/image.jpeg';
import RiccardoPic from './../components/Website Individual Information/Riccardo/image.jpg';
import PegahPic from './../components/Website Individual Information/Pegah/image.jpg';
import GuillaumePic from './../components/Website Individual Information/Guillaume/image.jpg';
import PierrePic from './../components/Website Individual Information/Pierre-Louis/image.jpg';
import XiaosongPic from './../components/Website Individual Information/Xiaosong/image.jpg';
import StellaPic from './../components/Website Individual Information/Stella/image.jpg';
import IlyasPic from './../components/Website Individual Information/Ilyas/image.jpg';
import MichellePic from './../components/Website Individual Information/Michelle/image.jpg';
import QianPic from './../components/Website Individual Information/Qian/image.jpeg';

function Our_Team() {

    useEffect(() => {
        document.title = 'BRL - Team';
        return () => {
            document.title = 'My React App'; // This is optional and will reset the title when the component unmounts.
        };
    }, []);

    const teamMembers = [
        {
            name: 'Du Heng, PhD',
            role: 'Postdoctoral Scholar',
            skills: 'Thermal Comfort; Human Well-Being; Environmental Sustainability; Smart Buildings; Data-Driven Models',
            imgSrc: HengPic,
            link: 'Heng'
        },
        {
            name: 'Keshav Kaushik, PhD',
            role: 'Postdoctoral Scholar',
            skills: 'IoT for Building Systems; Sustainable Buildings; AI-Enabled Building Management; Optimal Control',
            imgSrc: KeshavPic,
            link: 'Keshav'
        },
        {
            name: 'Iqbal Shah',
            role: 'PhD Candidate',
            skills: 'Resilient Façade Systems; Urban Greening; Urban Heat Island; Digital Twin Development; Building Optimisation & Automation',
            imgSrc: IqbalPic,
            link: 'Iqbal'
        },
        {
            name: 'Chen Kai',
            role: 'PhD Student',
            skills: 'Building Energy Efficiency; Thermal Comfort; Smart Buildings',
            imgSrc: KaiPic,
            link: 'Kai'
        },
        {
            name: 'Kelly Loh',
            role: 'PhD Student',
            skills: 'Building Energy Efficiency; Building Greenery; Building Finance; Building Information Modelling',
            imgSrc: KellyPic,
            link: 'Kelly'
        },
        {
            name: 'Rezky Nanda',
            role: 'PhD Student',
            skills: 'Smart Buildings; Thermal Comfort; Building Energy Efficiency; AI for Energy',
            imgSrc: RezkyPic,
            link: 'Rezky'
        },
        {
            name: 'Jonathan Poon',
            role: 'PhD Student',
            skills: 'Building Performance Simulation; Building Energy Efficiency; Building Envelope Materials',
            imgSrc: JonathanPic,
            link: 'Jonathan'
        },
        {
            name: 'Gao Huanxiang',
            role: 'Research Associate',
            skills: 'Computer Vision; Thermal Comfort; Energy Conservation',
            imgSrc: HuanxiangPic,
            link: 'Huanxiang'
        },
        {
            name: 'Lei Chenxi',
            role: 'Research Associate',
            skills: 'User-Centered Design; Building Performance Simulation and Optimization; Human-Building Interaction',
            imgSrc: ChenxiPic,
            link: 'Chenxi'
        },
        {
            name: 'Maxime Caillat',
            role: 'Visiting MSc Student',
            skills: 'AI in Energy; Energy Markets',
            imgSrc: MaximePic,
            link: 'Maxime'
        },
        /*{
            name: 'Zhang Xian',
            role: 'Visiting PhD Candidate',
            skills: 'Human Factors Comfort; Cabin Lighting Environment',
            imgSrc: XianPic,
            link: 'Xian'
        },*/
    ];

    const alumnis = [
        {
            name: 'Connor Aucremanne',
            role: (
                <>
                PhD Student <br />
                National University of Singapore (Singapore)
                </>
            ),
            skills: 'PhD Student (January 2023 - November 2024)',
            imgSrc: ConnorPic,
        },
        {
            name: 'Wang Xiaorong',
            role: (
                <>
                PhD Candidate <br />
                China University of Geosciences (China)
                </>
            ),
            skills: 'Visiting PhD Candidate (January 2024 - July 2024)',
            imgSrc: XiaorongPic,
        },
        {
            name: 'Riccardo Talami',
            role: (
                <>
                Research Fellow <br />
                National University of Singapore (Singapore)
                </>
            ),
            skills: 'Postdoctoral Scholar (May 2022 - May 2024)',
            imgSrc: RiccardoPic,
        },
        {
            name: 'Pegah Eshraghi',
            role: (
                <>
                PhD Candidate <br />
                Shahid Beheshti University (Iran)
                </>
            ),
            skills: 'Visiting PhD Candidate (August 2023 - February 2024)',
            imgSrc: PegahPic,
        },
        {
            name: 'Guillaume Lecronier',
            role: (
                <>
                Data Science & AI Consultant <br />
                BearingPoint (France)
                </>
            ),
            skills: 'Visiting MSc Student (September 2023 - February 2024)',
            imgSrc: GuillaumePic,
        },
        {
            name: 'Pierre-Louis David',
            role: (
                <>
                Analyst <br />
                MONTFORT (Switzerland)
                </>
            ),
            skills: 'Visiting MSc Student (September 2023 - February 2024)',
            imgSrc: PierrePic,
        },
        {
            name: 'Su Xiaosong',
            role: (
                <>
                PhD Candidate <br />
                Hunan University (China)
                </>
            ),
            skills: 'Visiting PhD Candidate (January 2023 - January 2024)',
            imgSrc: XiaosongPic,
        },
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
        }
    ];


    return (
        <div className="Our_Team">
            <Helmet>
                <title>BRL Team</title>
                <meta name="Meet the dedicated team at the NUS Building Robotics Lab, driving innovation in smart building technologies and sustainable solutions for a better future." />
            </Helmet>
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
                <div class="fifth_section">
                    <div>
                        <h3><b>Our mission at the Building Robotics Lab is to create a sustainable future by developing innovative solutions for building energy efficiency and human-building interaction. </b></h3>
                        <p>If you are a potential student or research fellow interested in the Building Robotics Lab, please do not hesitate to get in touch with us. Our creative and collaborative lab is open for applicants with diverse experiences, backgrounds, abilities, and perspectives to apply.</p>
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