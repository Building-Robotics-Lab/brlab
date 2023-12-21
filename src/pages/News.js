import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import './News.css'
import NewsGrid from '../components/NewsGrid';
import { Link } from 'react-router-dom';

import KaiPublication2 from './../components/Website Data/kai_paper2.jpg'
import RiccardoPublication2 from './../components/Website Data/riccardo-publication2.png'
import IqbalPublication2 from './../components/Website Data/1-s2.0-S0360132323009319-gr3_lrg.jpg'
import PierrePic from './../components/Website Individual Information/Pierre-Louis/image copy.jpg';
import GuillaumePic from './../components/Website Individual Information/Guillaume/image.jpg';
import PegahPic from './../components/Website Individual Information/Pegah/image.jpg';
import RiccardoPublication from './../components/Website Data/riccardo-publication.jpg'
import KellyPic from './../components/Website Individual Information/Kelly/image.jpg';
import XiaosongPic from './../components/Website Individual Information/Xiaosong/image.jpg';
import KaiPublication from './../components/Website Data/kai_paper.png'
import ConnorPic from './../components/Website Individual Information/Connor/image.jpg';
import IqbalPublication from './../components/Website Data/iqbal-publication.jpg'

function News() {

    useEffect(() => {
        document.title = 'BRL - News';
        return () => {
            document.title = 'My React App'; // This is optional and will reset the title when the component unmounts.
        };
    }, []); // Empty dependency array ensures this runs only once when the component mounts.

    const [highlightedSection, setHighlightedSection] = useState(null);

    useEffect(() => {
        const hashes = window.location.hash.split("#");
        if (hashes.length > 2) {
            const sectionID = hashes[2];
            const section = document.getElementById(sectionID);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                setHighlightedSection(sectionID);
            }
        }
    }, []);

    // useEffect(() => {
    //     const scrollToSection = () => {
    //         const hashes = window.location.hash.split("#");
    //         if (hashes.length > 1) {
    //             const sectionID = hashes[1]; // Get the second part of the hash
    //             const section = document.getElementById(sectionID);
    //             if (section) {
    //                 section.scrollIntoView({ behavior: 'smooth' });
    //                 setHighlightedSection(sectionID);
    //             }
    //         }
    //     }

    //     // Initial scroll when component mounts
    //     scrollToSection();

    //     // Add an event listener for hash changes
    //     window.addEventListener('hashchange', scrollToSection);

    //     // Cleanup the event listener when the component unmounts
    //     return () => {
    //         window.removeEventListener('hashchange', scrollToSection);
    //     };
    // }, []);

    const newsData = [
        {
            NewsSectionName: 'KaiPublication2',
            imageSrc: KaiPublication2,
            altText: "A graphical abstract of the publication.",
            date: '03/12/2023',
            title: '<i>Building and Environment</i> publication announcement!',
            content: (
                <>
                    <Link to="/profile/Kai"><b>Kai</b></Link> and <Link to="/team#prof_profile"><b>Asst Prof Ghahramani</b></Link> have published their paper: <Link to="/publication/comfortgpt:_a" ><b>ComfortGPT: a transformer-based architecture for predicting preferred temperature setpoints leveraging big data</b></Link>. They proposed a transformer-based architecture for setpoint prediction via pre-trained models. This included clustering pre-trained models to capture diverse thermostat preferences and enocoding user interactions to adapt to occupant preferences. As a result, they found a diverse spectrum of setpoint/outdoor temperature relationships, and achieved a predictive performance of R2 = 0.77 and MAE = 0.65ºC. Congratulations you two!
                </>
            ),
        },
        {
            NewsSectionName: 'RiccardoPublication2',
            imageSrc: RiccardoPublication2,
            altText: "A graphical abstract of the publication.",
            date: '30/11/2023',
            title: '<i>Buildings</i> publication announcement!',
            content: (
                <>
                    <Link to="/profile/Riccardo"><b>Riccardo</b></Link>, <Link to="/profile/Ilyas"><b>Ilyas</b></Link>, and <Link to="/team#prof_profile"><b>Asst Prof Ghahramani</b></Link> have published their paper: <Link to="/publication/quantifying_energy"><b>Quantifying energy savings from optimal selection of HVAC temperature setpoints and setbacks across diverse occupancy rates and patterns</b></Link>. They investigated three fixed and optimal setpoint and setback selection strategies. They found that fixed setpoint achieves 5.48% energy reduction due to lower occupant head loads and an additional 11.80% energy savings are obtained from incorporating fixed setbacks. Overall, the optimal selection of setpoint and setback provides additional 34-38% energy savings. Congratulations everyone!
                </>
            ),
        },
        {
            NewsSectionName: 'IqbalPublication2',
            imageSrc: IqbalPublication2,
            altText: "A figure of the virtual vertical greenery system thermal performance experiment layout from the publication.",
            date: '11/10/2023',
            title: '<i>Building and Environment</i> publication announcement!',
            content: (
                <>
                    <Link to="/profile/Iqbal"><b>Iqbal</b></Link>, <Link to="/team#prof_profile"><b>Asst Prof Ghahramani</b></Link>, and additional authors have published their paper: <Link to="/publication/porous_plant"><b>Porous plant form-induced amplification of evapotranspiration for enhanced cooling in vertical greenery systems</b></Link>. A few of the highlights include the finding that porous plant growth form in VGS amplifies cooling effect by up to 1°C within 800 mm, a negative VGS façade heat flux of -2.32 W/m2 was achieved with porous plant growth form, and there was a 16% higher rate of evaporative cooling from growing media found in porous VGS. Congratulations everyone!
                </>
            ),
        },
        {
            NewsSectionName: 'Guillaume',
            imageSrc: GuillaumePic,
            altText: "A headshot of Guillaume Lecronier.",
            date: '21/09/2023',
            title: 'Please welcome Guillaume Lecronier to the lab!',
            content: (
                <>
                    The Building Robotics Lab is happy to have Guillaume joining us from Switzerland as a visiting MSc student at ETH Zürich studying Mechanical Engineering and Robotics. His research revolves around Robotics, Embedded Systems, IoT, Sensor Data Analysis, and Machine Learning. Check out his full profile <Link to="/profile/Guillaume"><b>here</b></Link> to get to know him more!
                </>
            ),
        },
        {
            NewsSectionName: 'Pierre',
            imageSrc: PierrePic,
            altText: "A headshot of Pierre-Louis David.",
            date: '18/09/2023',
            title: 'Please welcome Pierre-Louis David to the lab!',
            content: (
                <>
                    The Building Robotics Lab is happy to have Pierre-Louis joining us from Switzerland as a visiting MSc student at ETH Zürich studying Mechanical Engineering and Computer Science. His research revolves around Machine Learning, Optimisation, Computer Vision, and Energy. Check out his full profile <Link to="/profile/Pierre"><b>here</b></Link> to get to know him more!
                </>
            ),
        },
        {
            NewsSectionName: 'Pegah',
            imageSrc: PegahPic,
            altText: "A headshot of Pegah Eshraghi.",
            date: '14/08/2023',
            title: 'Please welcome Pegah Eshraghi to the lab!',
            content: (
                <>
                    The Building Robotics Lab is happy to have Pegah joining us from Iran as a visiting PhD candidate at Shahid Beheshti University studying Buildings in the Department of Construction. Her research revolves around Building Energy Efficiency, Machine Learning, Urban Building Energy Modelling, Indoor Environmental Quality, and Thermal Comfort. Check out her full profile <Link to="/profile/Pegah"><b>here</b></Link> to get to know her more!
                </>
            ),
        },
        {
            NewsSectionName: 'RiccardoPublication',
            imageSrc: RiccardoPublication,
            altText: "A graphical abstract of the publication.",
            date: '04/07/2023',
            title: '<i>Energy and Built Environment</i> publication announcement!',
            content: (
                <>
                    <Link to="/profile/Riccardo"><b>Riccardo</b></Link>, <Link to="/profile/Ilyas"><b>Ilyas</b></Link>, and <Link to="/team#prof_profile"><b>Asst Prof Ghahramani</b></Link> have published their paper: <Link to="/publication/demystifying_energy"><b>Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability</b></Link>. They found that both fixed and dynamic setpoints ensure 2-4% energy reduction due to lower heat generated by occupants at lower occupancy rates. However, at outdoor temperatures ranging from 5°C to 32°C, where occupant heat loads can shift the building between heating, free-running, and cooling modes, dynamic setpoints can achieve additional 2-10% energy savings compared to fixed setpoints. Congratulations everyone!
                </>
            ),
        },
        {
            NewsSectionName: 'Kelly',
            imageSrc: KellyPic,
            altText: "A headshot of Kelly Loh.",
            date: '15/05/2023',
            title: 'Please welcome Kelly Loh to the lab!',
            content: (
                <>
                    The Building Robotics Lab is happy to have Kelly joining us as a PhD student in the Department of the Built Environment after she recently completed her BSc in Project and Facilities Management at NUS. Her research revolves around Building Energy Efficiency, Building Greenery, Building Finance, and Building Information Modelling. Check out her full profile <Link to="/profile/Kelly"><b>here</b></Link> to get to know her more!
                </>
            ),
        },
        {
            NewsSectionName: 'Xiaosong',
            imageSrc: XiaosongPic,
            altText: "A headshot of SU Xiaosong.",
            date: '26/01/2023',
            title: 'Please welcome SU Xiaosong to the lab!',
            content: (
                <>
                    The Building Robotics Lab is happy to have Song joining us from China as a visiting PhD candidate at Hunan University studying Heating, Ventilation and Air-Conditioning (HVAC) in the Department of Civil Engineering. His research revolves around Building Energy Efficiency, Energy-Efficient Building Envelope, Building-Integrated Photovoltaics, and Radiant Cooling Technology in Buildings. Check out his full profile <Link to="/profile/Xiaosong"><b>here</b></Link> to get to know him more!
                </>
            ),
        },
        {
            NewsSectionName: 'KaiPublication',
            imageSrc: KaiPublication,
            altText: "A figure of the sequence of steps based on DOE framework from the publication.",
            date: '15/01/2023',
            title: '<i>Building and Environment</i> publication announcement!',
            content: (
                <>
                    <Link to="/profile/Kai"><b>Kai</b></Link>, <Link to="/team#prof_profile"><b>Asst Prof Ghahramani</b></Link>, and additional authors have published their paper: <Link to="/publication/personal_thermal"><b>Personal thermal comfort models based on physiological measurements -- A design of experiments based review</b></Link>. This study aims to provide a systematic, comprehensive, and DOE-framework-based review of the physiological sensing methods to predict personal thermal comfort. This is Kai's inaugural first-author article! Chapeau!
                </>
            ),
        },
        {
            NewsSectionName: 'Connor',
            imageSrc: ConnorPic,
            altText: "A headshot of Connor Aucremanne.",
            date: '09/01/2023',
            title: 'Please welcome Connor Aucremanne to the lab!',
            content: (
                <>
                    The Building Robotics Lab is happy to have Connor joining us as a PhD student in the Department of the Built Environment after he recently completed his MSc in Built Environment: Environmental Design and Engineering at UCL in the Bartlett Faculty of the Built Environment. His research revolves around Virtual Power Plants, Building-Occupant Network Dynamics, Smart Buildings, Human-Building Interaction, and Decarbonisation. Check out his full profile <Link to="/profile/Connor"><b>here</b></Link> to get to know him more!
                </>
            ),
        },
        {
            NewsSectionName: 'IqbalPublication',
            imageSrc: IqbalPublication,
            altText: "A figure of a simplified illustration of heat transfer mechanism from the publication.",
            date: '01/01/2023',
            title: '<i>Energy and Buildings</i> publication announcement!',
            content: (
                <>
                    <Link to="/profile/Iqbal"><b>Iqbal</b></Link>, <Link to="/team#prof_profile"><b>Asst Prof Ghahramani</b></Link>, and additional authors have published their paper: <Link to="/publication/thermal_transfer"><b>Thermal transfer and temperature reductions from shading systems on opaque façades: Quantifying the impacts of influential factors</b></Link>. It investigates the effects of shading systems on opaque facades that is currently unaccounted for in simplified Overall Thermal Transfer Value (OTTV) calculations throughout standards adopted by many countries. This is Iqbal's inaugural first-author article! Chapeau!
                </>
            )
        },
    ];

    return (
        <div className="News">
            <NavBar />

            <Container>
                <div className="first_section">
                    <h1><b>Lab News & Updates</b></h1>
                    <div className="HomeButtons">
                        <Link to="https://www.linkedin.com/company/building-robotics-lab/" target='_blank'><p id='JoinButton'>FOLLOW US ON LINKEDIN FOR UPDATES</p></Link>
                    </div>
                </div>
            </Container>

            <Container useOrange={true} sectionName='FourthNewsSection'>
                <NewsGrid newsData={newsData.slice(0, 3)} highlightedSection={highlightedSection} />
            </Container>

            <Container sectionName='ThirdNewsSection'>
                <NewsGrid newsData={newsData.slice(3, 6)} highlightedSection={highlightedSection} />
            </Container>

            <Container useOrange={true} sectionName='SecondNewsSection'>
                <NewsGrid newsData={newsData.slice(6, 9)} highlightedSection={highlightedSection} />
            </Container>

            <Container sectionName='FirstNewsSection'>
                <NewsGrid newsData={newsData.slice(9, 12)} highlightedSection={highlightedSection} />
            </Container>

            <Footer />
        </div>
    );
}

export default News;