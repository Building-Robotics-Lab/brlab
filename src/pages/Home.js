import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Carousel from './../components/Carousel';
import Container from './../components/Container';
import LandingPageVideo from './../components/Website Data/3xLandingPageVideo.mp4'
import FirstResearchImage from './../components/Website Data/sensing@2x.png'
import SecondResearchImage from './../components/Website Data/Human-centric@2x.png'
import ThirdResearchImage from './../components/Website Data/resilient@2x.png'
import FourthResearchImage from './../components/Website Data/resilient@2x.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUsers } from '@fortawesome/free-solid-svg-icons';

import PublicationsIqbalNews2 from './../components/Website Data/1-s2.0-S0360132323009319-gr3_lrg.jpg'
import GuillaumeNews from './../components/Website Individual Information/Guillaume/image.jpg'
import PierreNews from './../components/Website Individual Information/Pierre-Louis/image.jpg'
import PegahNews from './../components/Website Individual Information/Pegah/image.jpg'
import PublicationsRiccardoNews from './../components/Website Data/riccardo-publication.jpg'
import KellyNews from './../components/Website Individual Information/Kelly/image.jpg'
import XiaosongNews from './../components/Website Individual Information/Xiaosong/image.jpg'
import PublicationsKaiNews from './../components/Website Data//kai_paper.png'
import ConnorNews from './../components/Website Individual Information/Connor/image.jpg'
import PublicationsIqbalNews from './../components/Website Data//iqbal-publication.jpg'

const slides = [
    {
        image: PublicationsIqbalNews2,
        title: '<b><i>Building and Environment</i> publication announcement!</b>',
        date: '11/10/2023',
        link: 'FourthNewsSection',
    },
    {
        image: GuillaumeNews,
        title: '<b>Please welcome Guillaume Lecronier to the lab!</b>',
        date: '21/09/2023',
        link: 'FourthNewsSection',
    },
    {
        image: PierreNews,
        title: '<b>Please welcome Pierre-Louis David to the lab!</b>',
        date: '18/09/2023',
        link: 'FourthNewsSection',
    },
    {
        image: PegahNews,
        title: '<b>Please welcome Pegah Eshraghi to the lab!</b>',
        date: '14/08/2023',
        link: 'ThirdNewsSection',
    },
    {
        image: PublicationsRiccardoNews,
        title: '<b><i>Energy and Built Environment</i> publication announcement!</b>',
        date: '04/07/2023',
        link: 'ThirdNewsSection',
    },
    {
        image: KellyNews,
        title: '<b>Please welcome Kelly Loh to the lab!</b>',
        date: '15/05/2023',
        link: 'ThirdNewsSection',
    },
    {
        image: XiaosongNews,
        title: '<b>Please welcome SU Xiaosong to the lab!</b>',
        date: '26/01/2023',
        link: 'SecondNewsSection',
    },
    {
        image: PublicationsKaiNews,
        title: '<b><i>Building and Environment</i> publication announcement!</b>',
        date: '15/01/2023',
        link: 'SecondNewsSection',
    },
    {
        image: ConnorNews,
        title: '<b>Please welcome Connor Aucremanne to the lab!</b>',
        date: '09/01/2023',
        link: 'SecondNewsSection',
    },
    {
        image: PublicationsIqbalNews,
        title: '<b><i>Energy and Buildings</i> publication announcement!</b>',
        date: '01/01/2023',
        link: 'FirstNewsSection',
    }
];

function Home() {

    useEffect(() => {
        document.title = 'BRL - Home';
        return () => {
            document.title = 'My React App'; // This is optional and will reset the title when the component unmounts.
        };
    }, []); // Empty dependency array ensures this runs only once when the component mounts.

    return (
        <div className="Home">
            <NavBar />

            <Container>
                <div className="first_section">
                    <video autoPlay loop muted>
                        <source src={LandingPageVideo} type="video/mp4" alt=""></source>
                    </video>
                </div>
                <div className="first_section2">
                    <h2><b>Our mission at the Building Robotics Lab is to create a sustainable future by developing innovative solutions to advance building energy efficiency and human-building interaction.</b></h2>
                </div>
            </Container>

            <Container useOrange={true}>
                <div className='second_section_Title'>
                    <h2><b>A little about our research themes</b></h2>
                    <h4>Through our interdisciplinary research, we aim to lead the way in developing cutting-edge
                        technologies that prioritise human well-being and environmental sustainability.</h4>
                </div>

                <ResearchSection
                    title="SENSING HUMAN HEALTH AND COMFORT"
                    text="Sensing human health and comfort enables us to create smarter buildings that
                    prioritise the well-being of their occupants while reducing energy consumption and promoting
                    environmental sustainability. Projects include <b><i>adaptive comfort</i></b> modelling,
                    vision-based systems for <b><i>remote physiological measurements</i></b>, and
                    <b><i> multi-sensing devices</i></b> for <b><i>human-centric indoor environmental quality (IEQ)</i></b>."
                    imageUrl={FirstResearchImage}
                    researchAltText="whatever"
                />

                <ResearchSectionRight
                    title="HUMAN-CENTRED AI"
                    imageUrl={SecondResearchImage}
                    text="Human-centred AI puts people at the forefront of technology development, ensuring that AI
                    systems are designed to meet human needs and improve the quality of life for individuals and
                    society as a whole. Projects include <b><i>integrating</i></b> and <b><i>optimising personal
                    comfort system devices</i></b> into the control loop of <b><i>HVAC systems</i></b>, developing 
                    <b><i>advanced sensors</i></b>, <b><i>ontology automation,</i></b> and a <b><i>semantically 
                    connected digital twin</i></b>."
                    researchAltText="whatever"
                />

                <ResearchSection
                    title="RESILIENT COOLING"
                    text="Our focus is on façade technologies, which involves developing <b><i>innovative building
                    envelope systems</i></b> that reduce the energy needed for cooling while also providing
                    increased thermal comfort for occupants. This includes research developments and technology
                    integration for enhancing the <b><i>cooling effects</i></b> of current urban greening systems,
                    such as <b><i>vertical greenery systems (VGS)</i></b>."
                    imageUrl={ThirdResearchImage}
                    researchAltText="whatever"
                />

                <ResearchSectionRight
                    title="INTELLIGENT ENVIRONMENTS"
                    text="Our research investigates the <b><i>democratisation of virtual power plants</b></i> (VPP) for <b><i>optimal 
                    monetisation</b></i> and <b><i>grid flexibility</b></i> to empower end-users to participate effectively. By leveraging AI, 
                    we seek to bridge existing gaps in user interaction and incentivise efficient energy behaviors. The research is divided into 
                    two halves: one explores <b><i>user impacts on VPPs</b></i> and <b><i>energy consumption behaviour modelling</b></i>, 
                    while the other employs <b><i>machine learning for automated energy market participation</b></i>."
                    imageUrl={FourthResearchImage}
                    researchAltText="whatever"
                />
                <div className="HomeButtons">
                    <Link to="/research"><p id='JoinButton'>LEARN MORE ABOUT OUR RESEARCH</p></Link>
                </div>
            </Container>

            <Container>
                <div className='third_section'>
                    <div className="meet_our_team">
                        <div className="meet_our_team_image">
                            <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className="meet_our_team_text">
                            <p id='meet_our_team_text_left'>
                                <h2><b>Meet Our Team</b></h2>
                                We are a team of researchers with diverse backgrounds, enabling us to effectively innovate. Our
                                goal is to create smart buildings that enhance the quality of life for occupants and contribute
                                to a greener planet. Our lab members come from various academic backgrounds and cultures, which
                                contribute to a collaborative and dynamic environment. We believe in fostering a culture of
                                open communication, mutual respect, and a strong work ethic.
                            </p>
                            <div className="HomeButtons">
                                <Link to="/team"><p className='our_team_button' id='JoinButton'>OUR LAB</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="publications">
                        <div className="publications_image">
                            <FontAwesomeIcon icon={faBook} />
                        </div>
                        <div className="publications_text">

                            <p id='publications_text_right'>
                                <h2><b>Publications</b></h2>
                                Our research involves the use of both
                                quantitative and qualitative techniques to comprehend the impact of our built environment and
                                AI on individuals. Our objective is to create interventions and adaptations
                                that promote human well-being. Furthermore, we disseminate our findings through peer-reviewed
                                journals, workshop and conference proceedings, and encourage readers to explore our approaches
                                and discoveries.
                            </p>
                            <div className="HomeButtons">
                                <Link to="/publications"><p className='publications_button' id='JoinButton'>OUR PAPERS</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container useOrange={true}>
                <h2 className='fourth_section_title'><b>News & Updates</b></h2>
                <Carousel slides={slides} />
                <div className="HomeButtons" id='fourth_section_button'>
                    <Link to="/news"><p id='JoinButton'>SEE ALL NEWS</p></Link>
                </div>
            </Container>

            <Container>
                <div className='fifth_section'>
                    <div className='fifth_section_Title'>
                        <h2><b>Collaborate with us!</b></h2>
                    </div>
                    <div className="fifth_section_texts">
                        <div className="fifth_section_text_left">
                            <p id='text_left'>
                                As a research lab, we place a strong emphasis on developing practical solutions that can be readily implemented
                                in real-world scenarios. Our team is dedicated to working closely with industry stakeholders to understand their
                                needs and to develop innovative solutions that drive change and make a positive impact in their respective fields.
                                By partnering with us, organisations can leverage our expertise to create sustainable solutions that are tailored to
                                their unique challenges and goals.
                            </p>
                            <div className="HomeButtons">
                                <Link to="/research"><p className='join_the_lab_fifth_section_left' id='JoinButton'>WORK WITH US</p></Link>
                            </div>
                        </div>
                        <div className="fifth_section_text_right">
                            <p id='text_right'>
                                Our research lab provides a collaborative and interdisciplinary environment that encourages creativity and innovation,
                                offering a platform for academics and students to gain practical experience in developing solutions that prioritise human
                                well-being and environmental sustainability, and conduct cutting-edge research that can have a real impact on society. If
                                your interests align with these values, visit our link below to learn more about our members and current opportunities!
                            </p>
                            <div className="HomeButtons">
                                <Link to="/join"><p className='join_the_lab_fifth_section_right' id='JoinButton'>JOIN THE LAB</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Footer />
        </div>
    );
}

export default Home;

const ResearchSection = ({ title, text, imageUrl, researchAltText }) => {
    return (
        <div className='Each_Section'>
            <div className="grid-container">
                <div className='ResearchImage grid-item'>
                    <img src={imageUrl} alt={researchAltText} />
                </div>
                <div className='ResearchText grid-item'>
                    <h2><b>{title}</b></h2>
                    <p dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            </div>
        </div>
    );
};

const ResearchSectionRight = ({ title, text, imageUrl, researchAltText }) => {
    return (
        <div className='Each_Section'>
            <div className="grid-container">
                <div className='ResearchText_right grid-item'>
                    <h2><b>{title}</b></h2>
                    <p dangerouslySetInnerHTML={{ __html: text }} />
                </div>
                <div className='ResearchImage grid-item'>
                    <img src={imageUrl} alt={researchAltText} />
                </div>
            </div>
        </div>
    );
};

