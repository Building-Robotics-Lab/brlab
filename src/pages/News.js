import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import './News.css'
import NewsGrid from '../components/NewsGrid';

import PierrePic from './../components/Website Individual Information/unknown.png'
//import PierrePic from './../components/Website Individual Information/Pierre/image.jpg';
import GuillaumePic from './../components/Website Individual Information/unknown.png'
//import PierrePic from './../components/Website Individual Information/Pierre/image.jpg';
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

    // useEffect(() => {
    //     const hashes = window.location.hash.split("#");
    //     if (hashes.length > 2) {
    //         const sectionID = hashes[2];
    //         const section = document.getElementById(sectionID);
    //         if (section) {
    //             section.scrollIntoView({ behavior: 'smooth' });
    //             setHighlightedSection(sectionID);
    //         }
    //     }
    // }, []);

    useEffect(() => {
        const scrollToSection = () => {
            const hashes = window.location.hash.split("#");
            if (hashes.length > 1) {
                const sectionID = hashes[1]; // Get the second part of the hash
                const section = document.getElementById(sectionID);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                    setHighlightedSection(sectionID);
                }
            }
        }

        // Initial scroll when component mounts
        scrollToSection();

        // Add an event listener for hash changes
        window.addEventListener('hashchange', scrollToSection);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('hashchange', scrollToSection);
        };
    }, []);

    const newsData = [
        {
            NewsSectionName: 'Guillaume',
            imageSrc: GuillaumePic,
            date: '21/09/2023',
            title: 'Please welcome Guillaume Lecronier to the lab!',
            content: '<p>The Building Robotics Lab is happy to have Guillaume joining us as a visiting MSc student from ETH Zürich studying Mechanical Engineering and Robotics. His research revolves around Robotics, Embedded Systems, IoT, Sensor Data Analysis, and Machine Learning. Check out his full profile <a href="https://building-robotics-lab.github.io/brlab/individual_profile/Guillaume" >here</a> to get to know him more!</p>',
        },
        {
            NewsSectionName: 'Pierre',
            imageSrc: PierrePic,
            date: '18/09/2023',
            title: 'Please welcome Pierre-Louis David to the lab!',
            content: '<p>The Building Robotics Lab is happy to have Pierre-Louis joining us as a visiting MSc student from ETH Zürich studying Mechanical Engineering and Computer Science. His research revolves around Machine Learning, Optimisation, Computer Vision, and Energy. Check out his full profile <a href="https://building-robotics-lab.github.io/brlab/individual_profile/Pierre" >here</a> to get to know him more!</p>',
        },
        {
            NewsSectionName: 'Pegah',
            imageSrc: PegahPic,
            date: '14/08/2023',
            title: 'Please welcome Pegah Eshraghi to the lab!',
            content: '<p>The Building Robotics Lab is happy to have Pegah joining us as a visiting PhD candidate from Shahid Beheshti University (SBU) studying Buildings in the Department of Construction. Her research revolves around Building Energy Efficiency, Machine Learning, Urban Building Energy Modelling, Indoor Environmental Quality, and Thermal Comfort. Check out her full profile <a href="https://building-robotics-lab.github.io/brlab/individual_profile/Pegah" >here</a> to get to know her more!</p>',
        },
        {
            NewsSectionName: 'RiccardoPublication',
            imageSrc: RiccardoPublication,
            date: '04/07/2023',
            title: '<i>Energy and Built Environment</i> publication announcement!',
            content: '<p><a href="https://building-robotics-lab.github.io/brlab/individual_profile/Riccardo" >Riccardo</a>, <a href="https://building-robotics-lab.github.io/brlab/individual_profile/Ilyas" >Ilyas</a>, and <a href="https://building-robotics-lab.github.io/brlab/our_team#prof_profile" >Asst Prof Ghahramani</a> have published their paper: <a href="https://building-robotics-lab.github.io/brlab/individual_publication/demystifying_energy" target="_blank"><b>Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability</b></a>. They found that both fixed and dynamic setpoints ensure 2-4% energy reduction due to lower heat generated by occupants at lower occupancy rates. However, at outdoor temperatures ranging from 5°C to 32°C, where occupant heat loads can shift the building between heating, free-running, and cooling modes, dynamic setpoints can achieve additional 2-10% energy savings compared to fixed setpoints. Congratulations everyone!</p>',
        },
        {
            NewsSectionName: 'Kelly',
            imageSrc: KellyPic,
            date: '15/05/2023',
            title: 'Please welcome Kelly Loh to the lab!',
            content: '<p>The Building Robotics Lab is happy to have Kelly joining us as a PhD student in the Department of the Built Environment after she recently completed her BSc in Project and Facilities Management at NUS. Her research revolves around Building Energy Efficiency, Building Greenery, Building Finance, and Building Information Modelling. Check out her full profile <a href="https://building-robotics-lab.github.io/brlab/individual_profile/Kelly" >here</a> to get to know her more!</p>',
        },
        {
            NewsSectionName: 'Xiaosong',
            imageSrc: XiaosongPic,
            date: '26/01/2023',
            title: 'Please welcome SU Xiaosong to the lab!',
            content: '<p>The Building Robotics Lab is happy to have Song joining us as a visiting PhD candidate from Hunan University studying Heating, Ventilation and Air-Conditioning (HVAC) in the Department of Civil Engineering. His research revolves around Building Energy Efficiency, Energy-Efficient Building Envelope, Building-Integrated Photovoltaics, and Radiant Cooling Technology in Buildings. Check out his full profile <a href="https://building-robotics-lab.github.io/brlab/individual_profile/Xiaosong" >here</a> to get to know him more!</p>',
        },
        {
            NewsSectionName: 'KaiPublication',
            imageSrc: KaiPublication,
            date: '15/01/2023',
            title: '<i>Building and Environment</i> publication announcement!',
            content: '<p><a href="https://building-robotics-lab.github.io/brlab/individual_profile/Kai" >Kai</a>, <a href="https://building-robotics-lab.github.io/brlab/our_team#prof_profile" >Asst Prof Ghahramani</a>, and additional authors have published their paper: <a href="https://building-robotics-lab.github.io/brlab/individual_publication/personal_thermal" target="_blank"><b>Personal thermal comfort models based on physiological measurements -- A design of experiments based review</b></a>. This study aims to provide a systematic, comprehensive, and DOE-framework-based review of the physiological sensing methods to predict personal thermal comfort. This is also Kai\'s inaugural first-author article! Chapeau!</p>',
        },
        {
            NewsSectionName: 'Connor',
            imageSrc: ConnorPic,
            date: '09/01/2023',
            title: 'Please welcome Connor Aucremanne to the lab!',
            content: '<p>The Building Robotics Lab is happy to have Connor joining us as a PhD student in the Department of the Built Environment after he recently completed his MSc in Built Environment: Environmental Design and Engineering at UCL in the Bartlett Faculty of the Built Environment. His research revolves around Virtual Power Plants, Building-Occupant Network Dynamics, Smart Buildings, Human-Building Interaction, and Decarbonisation. Check out his full profile <a href="https://building-robotics-lab.github.io/brlab/individual_profile/Connor" >here</a> to get to know him more!</p>',
        },
        {
            NewsSectionName: 'IqbalPublication',
            imageSrc: IqbalPublication,
            date: '01/01/2023',
            title: '<i>Energy and Buildings</i> publication announcement!',
            content: '<p><a href="https://building-robotics-lab.github.io/brlab/individual_profile/Iqbal" >Iqbal</a>, <a href="https://building-robotics-lab.github.io/brlab/our_team#prof_profile" >Asst Prof Ghahramani</a>, and additional authors have published their paper: <a href="https://building-robotics-lab.github.io/brlab/individual_publication/thermal_transfer" target="_blank"><b>Thermal transfer and temperature reductions from shading systems on opaque façades: Quantifying the impacts of influential factors</b></a>. It investigates the effects of shading systems on opaque facades that is currently unaccounted for in simplified Overall Thermal Transfer Value (OTTV) calculations throughout standards adopted by many countries. This is Iqbal\'s inaugural first-author article! Chapeau!</p>'
        },
    ];

    return (
        <div className="News">
            <NavBar />

            <Container>
                <div className="first_section">
                    <h1><b>Lab News & Updates</b></h1>
                    <h3>Follow us on <a href="https://www.linkedin.com/company/building-robotics-lab/" target="_blank"><b>LinkedIn</b></a> for more updates!</h3>
                </div>
            </Container>

            <Container useOrange={true}>
                <NewsGrid newsData={newsData.slice(0, 3)} highlightedSection={highlightedSection} />
            </Container>

            <Container>
                <NewsGrid newsData={newsData.slice(3, 6)} highlightedSection={highlightedSection} />
            </Container>

            <Container useOrange={true}>
                <NewsGrid newsData={newsData.slice(6, 9)} highlightedSection={highlightedSection} />
            </Container>

            <Footer />
        </div>
    );
}

export default News;