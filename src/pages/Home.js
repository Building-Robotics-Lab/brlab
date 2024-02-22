import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Carousel from './../components/Carousel';
import Container from './../components/Container';
import LandingPageVideo from './../components/Website Data/Smart Building Full Animation (compressed).mp4'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUsers, faPeopleArrows, faUserPlus } from '@fortawesome/free-solid-svg-icons';

//import RezkyNews from './../components/Website Individual Information/Rezky/image.jpg'
import TeamNews2 from './../components/Website Individual Information/Team/DennisKnight.jpeg';
import KeshavNews from './../components/Website Individual Information/Keshav/image.jpeg'
import XiaorongNews from './../components/Website Individual Information/Xiaorong/image.jpeg'
import TeamNews1 from './../components/Website Individual Information/Team/BukitTimah.jpeg'
import HengNews from './../components/Website Individual Information/Heng/image.jpg'
import PublicationsKaiNews2 from './../components/Website Data/kai_paper2.jpg'
import PublicationsRiccardoNews2 from './../components/Website Data/riccardo-publication2.png'
import PublicationsIqbalNews2 from './../components/Website Data/iqbal-publication2.jpg'
import GuillaumeNews from './../components/Website Individual Information/Guillaume/image.jpg'
import PierreNews from './../components/Website Individual Information/Pierre-Louis/image.jpg'

const slides = [
    //6 most-recent news
    /*{
        image: RezkyNews,
        title: '<b>Please welcome Rezky Nanda to the lab!</b>',
        date: '29/01/2024',
        link: 'FifthNewsSection',
    },*/
    {
        image: TeamNews2,
        title: '<b>A visit by Dennis Knight, the incoming ASHRAE President!</b>',
        date: '21/02/2024',
        link: 'SixthNewsSection',
    },
    {
        image: KeshavNews,
        title: '<b>Please welcome Keshav to the lab!</b>',
        date: '05/02/2024',
        link: 'SixthNewsSection',
    },
    {
        image: XiaorongNews,
        title: '<b>Please welcome Wang Xiaorong to the lab!</b>',
        date: '29/01/2024',
        link: 'SixthNewsSection',
    },
    {
        image: TeamNews1,
        title: '<b>Farewell to Pierre-Louis, Guillaume, and Pegah!</b>',
        date: '28/01/2024',
        link: 'FifthNewsSection',
    },
    {
        image: HengNews,
        title: '<b>Please welcome Du Heng to the lab!</b>',
        date: '11/01/2024',
        link: 'FifthNewsSection',
    },
    {
        image: PublicationsKaiNews2,
        title: '<b><i>Building and Environment</i> publication announcement!</b>',
        date: '03/12/2023',
        link: 'FifthNewsSection',
    },
];

function Home() {
    const [isMobile, setIsMobile] = useState(false);
    const homeRef = useRef(null);
    const videoRef = useRef(null); // Create a ref for the video element

    useEffect(() => {
        document.title = 'NUS Building Robotics Lab';
        // Detect if the user is on a mobile device
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android|ipad|iphone|ipod/i.test(userAgent) && !window.MSStream) {
            setIsMobile(true);
        }
        return () => {
            document.title = 'My React App'; // This is optional and will reset the title when the component unmounts.
        };
    }, []);

    useEffect(() => {
        const updateMinHeightTitle = () => {
            const AllH4Height = homeRef.current.querySelectorAll('.Home .second_section .research_section h3')

            // Reset heights to auto before recalculating
            AllH4Height.forEach((each_h3) => {
                each_h3.style.height = 'auto';
            });

            let AllHeight = [];
            AllH4Height.forEach((each_h3) => {
                const style = getComputedStyle(each_h3);
                const height =
                    each_h3.clientHeight -
                    parseFloat(style.paddingTop) -
                    parseFloat(style.paddingBottom);
                AllHeight.push(height);
            });

            const minHeight = Math.max(...AllHeight);

            AllH4Height.forEach((each_h3) => {
                each_h3.style.height = `${minHeight}px`;
            });
        }

        const updateMinHeightTitlethirdsection = () => {
            const AllH4Height = [];

            AllH4Height.push(...homeRef.current.querySelectorAll('.Home .meet_our_team h2'));
            AllH4Height.push(...homeRef.current.querySelectorAll('.Home .publications_text h2'));

            console.log(AllH4Height);

            // Reset heights to auto before recalculating
            AllH4Height.forEach((each_h3) => {
                each_h3.style.height = 'auto';
            });

            let AllHeight = [];
            AllH4Height.forEach((each_h3) => {
                const style = getComputedStyle(each_h3);
                const height =
                    each_h3.clientHeight -
                    parseFloat(style.paddingTop) -
                    parseFloat(style.paddingBottom);
                AllHeight.push(height);
            });

            console.log(AllHeight)

            const minHeight = Math.max(...AllHeight);

            AllH4Height.forEach((each_h3) => {
                each_h3.style.height = `${minHeight}px`;
            });
        }

        // Initial update first section
        updateMinHeightTitle();
        updateMinHeightTitlethirdsection();

        // Update on window resize
        window.addEventListener('resize', updateMinHeightTitle);
        window.addEventListener('resize', updateMinHeightTitlethirdsection);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateMinHeightTitle);
            window.removeEventListener('resize', updateMinHeightTitlethirdsection);
        };


    }, []);


    // useEffect(() => {
    //     const updateBoxHeight = () => {
    //         const AllpHeight = homeRef.current.querySelectorAll('.second_section .research_section p')

    //         // Reset heights to auto before recalculating
    //         AllpHeight.forEach((each_box) => {
    //             each_box.style.height = 'auto';
    //         });

    //         let AllHeight = [];
    //         AllpHeight.forEach((each_box) => {
    //             const style = getComputedStyle(each_box);
    //             const height = each_box.clientHeight;
    //             AllHeight.push(height);
    //         });

    //         const maxHeight = Math.max(...AllHeight);
    //         console.log(maxHeight)

    //         // Set all box heights to the max height
    //         AllpHeight.forEach((each_box) => {
    //             const style = getComputedStyle(each_box);
    //             const height = each_box.clientHeight;
    //             each_box.style.paddingBottom = `${maxHeight - height + 16}px`;
    //             console.log(maxHeight - height)
    //         });

    //         // 

    //         const Allh3height = homeRef.current.querySelectorAll('.second_section .research_section h3')

    //         // Reset heights to auto before recalculating
    //         Allh3height.forEach((each_box) => {
    //             each_box.style.height = 'auto';
    //         });

    //         let Allh3Heights = [];
    //         Allh3height.forEach((each_box) => {
    //             const style = getComputedStyle(each_box);
    //             const height = each_box.clientHeight;
    //             Allh3Heights.push(height);
    //         });

    //         const maxH3Height = Math.max(...Allh3Heights);
    //         console.log(maxH3Height)

    //         // Set all box heights to the max height
    //         Allh3height.forEach((each_box) => {
    //             const style = getComputedStyle(each_box);
    //             const height = each_box.clientHeight;
    //             const allPadding = maxH3Height - height + 8
    //             each_box.style.paddingTop = `${allPadding/2}px`;
    //             each_box.style.paddingBottom = `${allPadding/2}px`;
    //             console.log(maxH3Height - height)
    //         });
    //     }

    //     // Initial update
    //     updateBoxHeight();

    //     // Update on window resize
    //     window.addEventListener('resize', updateBoxHeight);

    //     // Cleanup the event listener on component unmount
    //     return () => {
    //         window.removeEventListener('resize', updateBoxHeight);
    //     };
    // }, []);

    return (
        <div className="Home" ref={homeRef}>
            <NavBar />

            <Container>
                <div className="first_section">
                    <video playsInline loop muted controls preload='metadata' autoPlay={!isMobile} onContextMenu={(e) => e.preventDefault()}>
                        <source src={LandingPageVideo} type="video/mp4" alt="A short informational animation that touches on the various topics that the Building Robotics Lab researches, including building sensors today, IoT hardware in buildings today, sensing individuals, cognitive control, and low-power and high-performance IoT hardware."></source>
                    </video>
                </div>
                <div className="first_section2">
                    <h2><b>The Building Robotics Lab's mission is to create a sustainable future by developing innovative solutions to advance building energy efficiency and human-building interaction.</b></h2>
                </div>
            </Container>

            <Container useOrange={true}>
                <div className='second_section_Title'>
                    <h2><b>A Little About Our Research Themes</b></h2>
                </div>
                <div className='second_section'>
                    <div className='research_section'>
                        <h3><b>SENSING HUMAN HEALTH AND COMFORT</b></h3>
                        <p>Sensing human health and comfort enables us to create smarter buildings that prioritise the well-being of their occupants while reducing energy consumption and promoting environmental sustainability. Projects include <b><i>adaptive comfort</i></b> modelling,vision-based systems for <b><i>remote physiological measurements</i></b>, and
                            <b><i> multi-sensing devices</i></b> for <b><i>human-centric indoor environmental quality (IEQ)</i></b>.</p>
                    </div>
                    <div className='research_section'>
                        <h3><b>HUMAN-CENTRED AI</b></h3>
                        <p>Human-centred AI puts people at the forefront of technology development, ensuring that AI systems are designed to meet human needs and improve the quality of life for individuals and society as a whole. Projects include <b><i>integrating</i></b> and <b><i>optimising personal comfort system devices</i></b> into the control loop of <b><i>HVAC systems</i></b>, developing  <b><i>advanced sensors</i></b>, <b><i>ontology automation,</i></b> and a <b><i>semantically connected digital twin</i></b>.</p>
                    </div>
                    <div className='research_section'>
                        <h3><b>INTELLIGENT ENVIRONMENTS</b></h3>
                        <p>The <b><i>democratisation of virtual power plants</i></b> (VPP) for <b><i>optimal
                            monetisation</i></b> and <b><i>grid flexibility</i></b> would empower end-users to participate effectively. By leveraging AI, we seek to bridge existing gaps in user interaction and incentivise efficient energy behaviors. The research is divided into: (1) <b><i>user impacts on VPPs</i></b> and <b><i>energy consumption behaviour modelling</i></b>; and (2) <b><i>machine learning for automated energy market participation</i></b>.</p>
                    </div>
                    <div className='research_section'>
                        <h3><b>NATURE-BASED TECHNOLOGIES</b></h3>
                        <p>Our focus is on façade technologies, which involves developing <b><i>innovative building
                            envelope systems</i></b> that reduce the energy needed for  cooling while also providing
                            increased thermal comfort for occupants. This includes research developments and technology
                            integration for enhancing the <b><i>cooling effects</i></b> of current urban greening systems,
                            such as <b><i>vertical greenery systems (VGS), heat-reflective paints, and façade shading systems</i></b>.</p>
                    </div>
                </div>
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
                                We are a team of researchers with diverse backgrounds, which enables us to effectively innovate. Our
                                goal is to create smart buildings that enhance the quality of life for occupants and contribute
                                to a greener planet. Our lab members come from various  backgrounds that contribute to a collaborative and dynamic environment through a culture of open communication, mutual respect, and strong work ethic.
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
                                <h2><b>Browse Our Publications</b></h2>
                                Our research involves the use of both quantitative and qualitative techniques to comprehend the impact of our built environment and AI on individuals with the objective to create interventions and adaptations
                                that promote human well-being. Furthermore, we disseminate our findings through peer-reviewed
                                journals, workshops, and conference proceedings, and encourage readers to explore our approaches
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
                <h2 className='fourth_section_title'><b>Latest News & Updates</b></h2>
                <Carousel slides={slides} />
                <div className="HomeButtons" id='fourth_section_button'>
                    <Link to="/news"><p id='JoinButton'>SEE ALL NEWS</p></Link>
                </div>
            </Container>

            <Container>
                <div className='fifth_section'>
                    <div className="collaborate">
                        <div className="collaborate_image">
                            <FontAwesomeIcon icon={faPeopleArrows} />
                        </div>
                        <div className="collaborate_text">
                            <p id='collaborate_left'>
                                <h2><b>Collaborate</b></h2>
                                As a research lab, we place a strong emphasis on developing practical solutions that can be readily implemented
                                in real-world scenarios. Our team is dedicated to working closely with industry stakeholders to understand their
                                needs and to develop innovative solutions that drive change and make a positive impact in their respective fields.
                                By partnering with us, organisations can leverage our expertise to create sustainable solutions that are tailored to
                                their unique challenges and goals.
                            </p>
                            <div className="HomeButtons">
                                <Link to="/collaborations"><p className='join_the_lab_fifth_section_left' id='JoinButton'>WORK WITH US</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="join_the_lab">
                        <div className="join_the_lab_image">
                            <FontAwesomeIcon icon={faUserPlus} />
                        </div>
                        <div className="join_the_lab_text">
                            <p id='join_the_lab_right'>
                                <h2><b>Apply</b></h2>
                                Our research lab provides a collaborative and interdisciplinary environment that encourages creativity and innovation. By
                                offering a platform for academics to gain practical experience in developing solutions that prioritise human
                                well-being and environmental sustainability, we conduct cutting-edge research that can have a real impact on society. If
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
            <div className="grid-container_right">
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