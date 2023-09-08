import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from './../components/Container';
import LandingPageVideo from './../components/Website Data/3xLandingPageVideo.mp4'
import FirstResearchImage from './../components/Website Data/sensing@2x.png'
import SecondResearchImage from './../components/Website Data/Human-centric@2x.png'
import ThirdResearchImage from './../components/Website Data/resilient@2x.png'
import './Home.css';

function Home() {
    return (
        <div className="Home">
            <NavBar />

            <Container>
                <div className="first_section">
                    <video autoPlay loop muted>
                        <source src={LandingPageVideo} type="video/mp4" ></source>
                    </video>
                </div>
                <div className="first_section2">
                    <h2><b>Our mission at the Building Robotics Lab is to create a sustainable future by developing innovative solutions for building energy efficiency and human-building interaction.</b></h2>
                </div>
            </Container>

            <Container useOrange={true}>
                <div>
                    <h2><b>A little about our research themes</b></h2>
                    <p></p>
                    <h4>Through our interdisciplinary research, we aim to lead the way in developing cutting-edge
                        technologies that prioritise human well-being and environmental sustainability.</h4>
                </div>
                <div>
                    <div>
                        <div>
                            <img src={FirstResearchImage}></img>
                        </div>
                    </div>
                    <div>
                        <h2><b>SENSING HUMAN HEALTH AND COMFORT</b></h2>
                        <p>
                            Our focus on sensing human health and comfort enables us to create smarter buildings that
                            prioritise the well-being of their occupants while reducing energy consumption and promoting
                            environmental sustainability. Projects include <b><i>adaptive comfort</i></b> modelling,
                            vision-based systems for <b><i>remote physiological measurements</i></b>, and
                            <b><i>multi-sensing devices</i></b> for <b><i>human-centric IEQ</i></b>.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <h2><b>HUMAN-CENTRED AI</b></h2>
                        <p>
                            Human-centred AI puts people at the forefront of technology development, ensuring that AI
                            systems are designed to meet human needs and improve the quality of life for individuals and
                            society as a whole. Projects include <b><i>integrating</i></b> and <b><i>optimising personal
                            comfort system devices</i></b> into the control loop of <b><i>HVAC systems</i></b>,
                            developing <b><i>advanced sensors</i></b>, <b><i>ontology automation,</i></b> and a
                            <b><i>semantically connected digital twin</i></b>.
                        </p>
                    </div>
                    <div>
                        <div>
                            <img src={SecondResearchImage}></img>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <img src={ThirdResearchImage}></img>
                        </div>
                    </div>
                    <div>
                        <h2><b>RESILIENT COOLING</b></h2>
                        <p>
                            Our focus is on façade technologies, which involves developing <b><i>innovative building
                            envelope systems</i></b> that reduce the energy needed for cooling while also providing
                            increased thermal comfort for occupants. This includes research developments and technology
                            integration for enhancing the <b><i>cooling effects</i></b> of current urban greening systems,
                            such as <b><i>Vertical Greenery Systems (VGS)</i></b>.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <button type="button">LEARN MORE ABOUT OUR RESEARCH</button>
                    </div>
                </div>
            </Container>

            <Container>
                <h1>Team Stuff</h1>
            </Container>

            <Container useOrange={true}>
                <h1>News</h1>
            </Container>

            <Container>
                <h1>Collaborate with us!</h1>
            </Container>

            <Footer />
        </div>
    );
}

export default Home;