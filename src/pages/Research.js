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

function Research() {
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
                    <h2><b>Themes in our work</b></h2>
                </div>
            </Container>

            <Container>
                <h1>Sensing Human Health and Comfort</h1>
            </Container>

            <Container useOrange={true}>
                <h1>Human-Centred AI</h1>
            </Container>

            <Container>
                <h1>Resilient Cooling</h1>
            </Container>

            <Container useOrange={true}>
                <h1>Intelligent Environments</h1>
            </Container>

            <Footer />
        </div>
    );
}

export default Research;