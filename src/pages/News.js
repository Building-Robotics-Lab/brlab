import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import './News.css'
import NewsGrid from '../components/NewsGrid';
import { Link } from 'react-router-dom';

//import JonathanPic from './../components/Website Individual Information/Jonathan/image.jpeg';
import RezkyPic from './../components/Website Individual Information/Rezky/Image.jpeg';
import RitaStreblow from './../components/Website Individual Information/Team/RitaStreblow.jpeg';
import DennisKnight from './../components/Website Individual Information/Team/DennisKnight.jpeg';
import KeshavPic from './../components/Website Individual Information/Keshav/image.jpeg';
import XiaorongPic from './../components/Website Individual Information/Xiaorong/image.jpeg';
import TeamBond1 from './../components/Website Individual Information/Team/BukitTimah.jpeg';
import HengPic from './../components/Website Individual Information/Heng/image.jpg';
import KaiPublication2 from './../components/Website Data/kai_paper2.jpg'
import RiccardoPublication2 from './../components/Website Data/riccardo-publication2.png'
import IqbalPublication2 from './../components/Website Data/iqbal-publication2.jpg'
import PierrePic from './../components/Website Individual Information/Pierre-Louis/image.jpg';
import GuillaumePic from './../components/Website Individual Information/Guillaume/image.jpg';
import PegahPic from './../components/Website Individual Information/Pegah/image.jpg';
import RiccardoPublication from './../components/Website Data/riccardo-publication.jpg'
import KellyPic from './../components/Website Individual Information/Kelly/image.jpg';
import XiaosongPic from './../components/Website Individual Information/Xiaosong/image.jpg';
import KaiPublication from './../components/Website Data/kai_paper.png'
import ConnorPic from './../components/Website Individual Information/Connor/image.jpg';
import IqbalPublication from './../components/Website Data/iqbal-publication.jpeg'

function News() {
    useEffect(() => {
        document.title = 'BRL - News';
        return () => {
            document.title = 'My React App'; // This is optional and will reset the title when the component unmounts.
        };
    }, []);

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
    
    const [key, setKey] = useState(0);

    useEffect(() => {
        // Set a timeout to trigger a re-render after a delay
        const timer = setTimeout(() => {
            setKey(prevKey => prevKey + 1);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Set a timeout to trigger a re-render after a delay
        const timer = setTimeout(() => {
            setKey(prevKey => prevKey + 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const [highlightedSection, setHighlightedSection] = useState(null);

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
        /*{
            NewsSectionName: 'Jonathan',
            imageSrc: JonathanPic,
            altText: "A headshot of Jonathan Poon.",
            date: '29/01/2024',
            title: 'Please welcome Jonathan Poon to the lab!',
            content: (
                <>
                    The Building Robotics Lab is happy to have Jonathan joining us as a PhD student in the Department of the Built Environment after he recently completed his BSc in Project and Facilities Management at NUS. His research revolves around. Check out his full profile <Link to="/profile/Jonathan"><b>here</b></Link> to get to know him more!
                </>
            ),
            sectionName: 'FifthNewsSection'
        },*/
        {
            NewsSectionName: 'Rezky',
            imageSrc: RezkyPic,
            altText: "A headshot of Rezky Nanda.",
            date: '04/03/2024',
            title: 'Please welcome Rezky Nanda to the lab!',
            content: (
                <>
                    The Building Robotics Lab is happy to have Rezky joining us as a Research Associate in the Department of the Built Environment after he recently completed his MSc in Engineering Physics at Institut Teknologi Bandung. His research revolves around smart buildings, thermal comfort, building energy efficiency, and AI for energy. Check out his full profile <Link to="/profile/Rezky"><b>here</b></Link> to get to know him more!
                </>
            ),
            sectionName: 'SeventhNewsSection'
        },
        {
            NewsSectionName: 'RitaStreblow',
            imageSrc: RitaStreblow,
            altText: "A group photo with Rita Streblow, Felix Rehmann, and the NUS Building Robotics Lab team.",
            date: '29/02/2024',
            title: 'A visit by Prof. Dr.-Ing. Rita Streblow and Felix Rehmann!',
            content: (
                <>
                    It was a joy to sit down and discuss with <Link to="https://www.digital-future.berlin/en/about-us/professors/prof-dr-rita-streblow/"><b>Prof. Dr.-Ing. Rita Streblow</b></Link> and <Link to="https://www.tu.berlin/dvg/ueber-uns/team/felix-rehmann"><b>Felix Rehmann</b></Link> about our shared interests in intelligent environments, thermal comfort, energy systems, and building resiliency! They come from the <Link to="https://www.digital-future.berlin/en/"><b>Einstein Center Digital Future (ECDF), TU Berlin</b></Link>, while Prof. Streblow also serves as Deputy Director and Team Leader of Digital Energy Neighborhoods at the <Link to="https://www.ebc.eonerc.rwth-aachen.de/cms/~dmzz/e-on-erc-ebc/?lidx=1"><b>Institute for Energy Efficient Buildings and Indoor Climate, E.ON Energy Research Center, RWTH Aachen University</b></Link>. Thank you two very much for your time and we look forward to diving deeper into these topics with you in the future!
                </>
            ),
            sectionName: 'SeventhNewsSection'
        },
        {
            NewsSectionName: 'Dennis',
            imageSrc: DennisKnight,
            altText: "A group photo with Dennis Knight, Chandra Sekhar, and the NUS Building Robotics Lab team.",
            date: '21/02/2024',
            title: 'A visit by Dennis Knight!',
            content: (
                <>
                    It was a pleasure to host <Link to="https://www.ashrae.org/professional-development/learning-portal/instructor-led-training/ashrae-instructors/dennis-knight"><b>Dennis Knight</b></Link>, the incoming <Link to="https://www.ashrae.org/"><b>ASHRAE</b></Link> President, in our living lab all the way from the United States for a discussion about the research projects we are conducting before he delivered his presentation, "Health and Wellness in the Built Environment," for the ASHRAE Singapore Chapter Distinguished Lecturer Event. Thank you very much for your time and thank you to Professor Chandra Sekhar for connecting us!
                </>
            ),
            sectionName: 'SeventhNewsSection'
        },
        {
            NewsSectionName: 'Keshav',
            imageSrc: KeshavPic,
            altText: "A headshot of Keshav.",
            date: '05/02/2024',
            title: 'Please welcome Keshav Kausik to the lab!',
            content: (
                <>
                    The Building Robotics Lab is happy to have Keshav joining us as a postdoctoral scholar after he recently completed his PhD in Computer Science & Information Systems at Birla Institute of Technology and Science (BITS), Pilani. His research revolves around IoT for building systems, sustainable buildings, AI-enabled building management, and optimal control. Check out his full profile <Link to="/profile/Keshav"><b>here</b></Link> to get to know him more!
                </>
            ),
            sectionName: 'SixthNewsSection'
        },
        {
            NewsSectionName: 'Xiaorong',
            imageSrc: XiaorongPic,
            altText: "A headshot of Wang Xiaorong.",
            date: '29/01/2024',
            title: 'Please welcome Wang Xiaorong to the lab!',
            content: (
                <>
                    The Building Robotics Lab is happy to have Xiaorong joining us from China as a  visiting PhD candidate at China University of Geosciences (CUG) studying Surveying and Mapping Science and Technology in the School of Geography and Information Engineering. Her research revolves around urban green infrastructure planning, nature-based land planning solutions, and building energy efficiency. Check out her full profile <Link to="/profile/Xiaorong"><b>here</b></Link> to get to know her more!
                </>
            ),
            sectionName: 'SixthNewsSection'
        },
        {
            NewsSectionName: 'TeamBonding1',
            imageSrc: TeamBond1,
            altText: "A group photo of the lab team at Bukit Timah Nature Research.",
            date: '28/01/2024',
            title: 'Farewell to Pierre-Louis, Guillaume, and Pegah!',
            content: (
                <>
                    Our team was able to gather at Bukit Timah Nature Reserve to swap out our usual lab setting for some deserving time outdoors as we bid farewell to our three visiting students: <Link to="/profile/Pierre"><b>Pierre-Louis</b></Link>, <Link to="/profile/Guillaume"><b>Guillaume</b></Link>, and <Link to="/profile/Pegah"><b>Pegah</b></Link>! The former two have now completed their excellent MSc dissertations for ETH Zürich on advanced reinforcement learning strategies for power trading in smart grids and indoor positioning systems using Bluetooth LE and machine vision, and the latter is returning to Shahid Beheshti University to complete the final year of her PhD thesis on optimal distribution of urban density. Thank you to all three for spending time with us and good luck to you all in your future endeavours!
                </>
            ),
            sectionName: 'SixthNewsSection'
        },
        {
            NewsSectionName: 'Heng',
            imageSrc: HengPic,
            altText: "A headshot of Du Heng.",
            date: '11/01/2024',
            title: 'Please welcome Du Heng to the lab!',
            content: (
                <>
                    The Building Robotics Lab is happy to have Heng joining us as a postdoctoral scholar after he recently completed his PhD in Architecture/Building Technology at Shanghai Jiao Tong University (SJTU). His research revolves around thermal comfort, human well-being, environmental sustainability, smart buildings, and data-driven models. Check out his full profile <Link to="/profile/Heng"><b>here</b></Link> to get to know him more!
                </>
            ),
            sectionName: 'FifthNewsSection'
        },
        {
            NewsSectionName: 'KaiPublication2',
            imageSrc: KaiPublication2,
            altText: "A graphical abstract of the publication.",
            date: '03/12/2023',
            title: '<i>Building and Environment</i> publication announcement!',
            content: (
                <>
                    <Link to="/profile/Kai"><b>Kai</b></Link> and <Link to="/team#prof_profile"><b>Asst Prof Ghahramani</b></Link> have published their paper: <Link to="/publication/comfortgpt:_a_transformer-based" ><b>ComfortGPT: a transformer-based architecture for predicting preferred temperature setpoints leveraging big data</b></Link>. They proposed a transformer-based architecture for setpoint prediction via pre-trained models. This included clustering pre-trained models to capture diverse thermostat preferences and enocoding user interactions to adapt to occupant preferences. As a result, they found a diverse spectrum of setpoint/outdoor temperature relationships, and achieved a predictive performance of R2 = 0.77 and MAE = 0.65ºC. Congratulations you two!
                </>
            ),
            sectionName: 'FifthNewsSection'
        },
        {
            NewsSectionName: 'RiccardoPublication2',
            imageSrc: RiccardoPublication2,
            altText: "A graphical abstract of the publication.",
            date: '30/11/2023',
            title: '<i>Buildings</i> publication announcement!',
            content: (
                <>
                    <Link to="/profile/Riccardo"><b>Riccardo</b></Link>, <Link to="/profile/Ilyas"><b>Ilyas</b></Link>, and <Link to="/team#prof_profile"><b>Asst Prof Ghahramani</b></Link> have published their paper: <Link to="/publication/quantifying_energy_savings"><b>Quantifying energy savings from optimal selection of HVAC temperature setpoints and setbacks across diverse occupancy rates and patterns</b></Link>. They investigated three fixed and optimal setpoint and setback selection strategies. They found that fixed setpoint achieves 5.48% energy reduction due to lower occupant head loads and an additional 11.80% energy savings are obtained from incorporating fixed setbacks. Overall, the optimal selection of setpoint and setback provides additional 34-38% energy savings. Congratulations everyone!
                </>
            ),
            sectionName: 'FifthNewsSection'
        },
        {
            NewsSectionName: 'IqbalPublication2',
            imageSrc: IqbalPublication2,
            altText: "A figure of the virtual vertical greenery system thermal performance experiment layout from the publication.",
            date: '11/10/2023',
            title: '<i>Building and Environment</i> publication announcement!',
            content: (
                <>
                    <Link to="/profile/Iqbal"><b>Iqbal</b></Link>, <Link to="/team#prof_profile"><b>Asst Prof Ghahramani</b></Link>, and additional authors have published their paper: <Link to="/publication/porous_plant_form-induced"><b>Porous plant form-induced amplification of evapotranspiration for enhanced cooling in vertical greenery systems</b></Link>. A few of the highlights include the finding that porous plant growth form in VGS amplifies cooling effect by up to 1°C within 800 mm, a negative VGS façade heat flux of -2.32 W/m2 was achieved with porous plant growth form, and there was a 16% higher rate of evaporative cooling from growing media found in porous VGS. Congratulations everyone!
                </>
            ),
            sectionName: 'FourthNewsSection'
        },
        {
            NewsSectionName: 'Guillaume',
            imageSrc: GuillaumePic,
            altText: "A headshot of Guillaume Lecronier.",
            date: '21/09/2023',
            title: 'Please welcome Guillaume Lecronier to the lab!',
            content: (
                <>
                    The Building Robotics Lab is happy to have Guillaume joining us from Switzerland as a visiting MSc student at ETH Zürich studying Mechanical Engineering and Robotics in the Department of Mechanical and Process Engineering. His research revolves around robotics, embedded systems, IoT, sensor data analysis, and machine learning. Check out his full profile <Link to="/profile/Guillaume"><b>here</b></Link> to get to know him more!
                </>
            ),
            sectionName: 'FourthNewsSection'
        },
        {
            NewsSectionName: 'Pierre',
            imageSrc: PierrePic,
            altText: "A headshot of Pierre-Louis David.",
            date: '18/09/2023',
            title: 'Please welcome Pierre-Louis David to the lab!',
            content: (
                <>
                    The Building Robotics Lab is happy to have Pierre-Louis joining us from Switzerland as a visiting MSc student at ETH Zürich studying Mechanical Engineering and Computer Science in the Department of Mechanical and Process Engineering. His research revolves around machine learning, optimisation, computer vision, and energy. Check out his full profile <Link to="/profile/Pierre"><b>here</b></Link> to get to know him more!
                </>
            ),
            sectionName: 'FourthNewsSection'
        },
        {
            NewsSectionName: 'Pegah',
            imageSrc: PegahPic,
            altText: "A headshot of Pegah Eshraghi.",
            date: '14/08/2023',
            title: 'Please welcome Pegah Eshraghi to the lab!',
            content: (
                <>
                    The Building Robotics Lab is happy to have Pegah joining us from Iran as a visiting PhD candidate at Shahid Beheshti University studying Buildings in the Department of Construction. Her research revolves around building energy efficiency, machine learning, urban building energy modelling, indoor environmental quality, and thermal comfort. Check out her full profile <Link to="/profile/Pegah"><b>here</b></Link> to get to know her more!
                </>
            ),
            sectionName: 'ThirdNewsSection'
        },
        {
            NewsSectionName: 'RiccardoPublication',
            imageSrc: RiccardoPublication,
            altText: "A graphical abstract of the publication.",
            date: '04/07/2023',
            title: '<i>Energy and Built Environment</i> publication announcement!',
            content: (
                <>
                    <Link to="/profile/Riccardo"><b>Riccardo</b></Link>, <Link to="/profile/Ilyas"><b>Ilyas</b></Link>, and <Link to="/team#prof_profile"><b>Asst Prof Ghahramani</b></Link> have published their paper: <Link to="/publication/demystifying_energy_savings"><b>Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability</b></Link>. They found that both fixed and dynamic setpoints ensure 2-4% energy reduction due to lower heat generated by occupants at lower occupancy rates. However, at outdoor temperatures ranging from 5°C to 32°C, where occupant heat loads can shift the building between heating, free-running, and cooling modes, dynamic setpoints can achieve additional 2-10% energy savings compared to fixed setpoints. Congratulations everyone!
                </>
            ),
            sectionName: 'ThirdNewsSection'
        },
        {
            NewsSectionName: 'Kelly',
            imageSrc: KellyPic,
            altText: "A headshot of Kelly Loh.",
            date: '15/05/2023',
            title: 'Please welcome Kelly Loh to the lab!',
            content: (
                <>
                    The Building Robotics Lab is happy to have Kelly joining us as a PhD student in the Department of the Built Environment after she recently completed her BSc in Project and Facilities Management at NUS. Her research revolves around building energy efficiency, building greenery, building finance, and building information modelling. Check out her full profile <Link to="/profile/Kelly"><b>here</b></Link> to get to know her more!
                </>
            ),
            sectionName: 'ThirdNewsSection'
        },
        {
            NewsSectionName: 'Xiaosong',
            imageSrc: XiaosongPic,
            altText: "A headshot of SU Xiaosong.",
            date: '26/01/2023',
            title: 'Please welcome Su Xiaosong to the lab!',
            content: (
                <>
                    The Building Robotics Lab is happy to have Song joining us from China as a visiting PhD candidate at Hunan University studying Heating, Ventilation and Air-Conditioning (HVAC) in the Department of Civil Engineering. His research revolves around building energy efficiency, energy-efficient building envelope, building-integrated photovoltaics, and radiant cooling technology in buildings. Check out his full profile <Link to="/profile/Xiaosong"><b>here</b></Link> to get to know him more!
                </>
            ),
            sectionName: 'SecondNewsSection'
        },
        {
            NewsSectionName: 'KaiPublication',
            imageSrc: KaiPublication,
            altText: "A figure of the sequence of steps based on DOE framework from the publication.",
            date: '15/01/2023',
            title: '<i>Building and Environment</i> publication announcement!',
            content: (
                <>
                    <Link to="/profile/Kai"><b>Kai</b></Link>, <Link to="/team#prof_profile"><b>Asst Prof Ghahramani</b></Link>, and additional authors have published their paper: <Link to="/publication/personal_thermal_comfort"><b>Personal thermal comfort models based on physiological measurements -- A design of experiments based review</b></Link>. This study aims to provide a systematic, comprehensive, and DOE-framework-based review of the physiological sensing methods to predict personal thermal comfort. This is Kai's inaugural first-author article! Chapeau!
                </>
            ),
            sectionName: 'SecondNewsSection'
        },
        {
            NewsSectionName: 'Connor',
            imageSrc: ConnorPic,
            altText: "A headshot of Connor Aucremanne.",
            date: '09/01/2023',
            title: 'Please welcome Connor Aucremanne to the lab!',
            content: (
                <>
                    The Building Robotics Lab is happy to have Connor joining us as a PhD student in the Department of the Built Environment after he recently completed his MSc in Built Environment: Environmental Design and Engineering at UCL in the Bartlett Faculty of the Built Environment. His research revolves around virtual power plants, building-occupant network dynamics, smart buildings, human-building interaction, and decarbonisation. Check out his full profile <Link to="/profile/Connor"><b>here</b></Link> to get to know him more!
                </>
            ),
            sectionName: 'SecondNewsSection'
        },
        {
            NewsSectionName: 'IqbalPublication',
            imageSrc: IqbalPublication,
            altText: "A figure of a simplified illustration of heat transfer mechanism from the publication.",
            date: '01/01/2023',
            title: '<i>Energy and Buildings</i> publication announcement!',
            content: (
                <>
                    <Link to="/profile/Iqbal"><b>Iqbal</b></Link>, <Link to="/team#prof_profile"><b>Asst Prof Ghahramani</b></Link>, and additional authors have published their paper: <Link to="/publication/thermal_transfer_and"><b>Thermal transfer and temperature reductions from shading systems on opaque façades: Quantifying the impacts of influential factors</b></Link>. It investigates the effects of shading systems on opaque facades that is currently unaccounted for in simplified Overall Thermal Transfer Value (OTTV) calculations throughout standards adopted by many countries. This is Iqbal's inaugural first-author article! Chapeau!
                </>
            ),
            sectionName: 'FirstNewsSection'
        },
    ];

    return (
        <div className="News" key={key}>
            <Helmet>
                <title>BRL News</title>
                <meta name="Stay updated with the latest news, achievements, and publications from the Building Robotics Lab, highlighting our team's efforts in advancing smart building technologies and sustainability research." />
            </Helmet>
            <NavBar />

            <Container>
                <div className="first_section">
                    <h1><b>Lab News & Updates</b></h1>
                    <div className="HomeButtons">
                        <Link to="https://www.linkedin.com/company/building-robotics-lab/" target='_blank'><p id='JoinButton'>FOLLOW US ON LINKEDIN FOR UPDATES</p></Link>
                    </div>
                </div>
            </Container>

            <Container useOrange={true} sectionName='SeventhNewsSection'>
                <NewsGrid newsData={newsData.slice(0, 3)} highlightedSection={highlightedSection} sectionName='FifthNewsSection' />
            </Container>

            <Container sectionName='SixthNewsSection'>
                <NewsGrid newsData={newsData.slice(3, 6)} highlightedSection={highlightedSection} sectionName='SixthNewsSection' />
            </Container>

            <Container useOrange={true} sectionName='FifthNewsSection'>
                <NewsGrid newsData={newsData.slice(6, 9)} highlightedSection={highlightedSection} sectionName='FifthNewsSection' />
            </Container>
            
            <Container sectionName='FourthNewsSection'>
                <NewsGrid newsData={newsData.slice(9, 12)} highlightedSection={highlightedSection} sectionName='FourthNewsSection' />
            </Container>

            <Container useOrange={true} sectionName='ThirdNewsSection'>
                <NewsGrid newsData={newsData.slice(12, 15)} highlightedSection={highlightedSection} sectionName='ThirdNewsSection' />
            </Container>

            <Container sectionName='SecondNewsSection'>
                <NewsGrid newsData={newsData.slice(15, 18)} highlightedSection={highlightedSection} sectionName='SecondNewsSection' />
            </Container>

            <Container useOrange={true} sectionName='FirstNewsSection'>
                <NewsGrid newsData={newsData.slice(18, 21)} highlightedSection={highlightedSection} sectionName='FirstNewsSection' />
            </Container>

            <Footer />
        </div>
    );
}

export default News;