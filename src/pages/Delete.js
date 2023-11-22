import React from 'react'
import Container from '../components/Container'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import FirstResearchImage from './../components/Website Data/sensing_2x-removebg.png'
import './delete.css';

function Delete() {
    return (
        <div className='Delete'>
            <NavBar />

            <Container useOrange={true}>
                <ResearchSection
                    title="SENSING HUMAN HEALTH AND COMFORT"
                    text="Sensing human health and comfort enables us to create smarter buildings that
                    prioritise the well-being of their occupants while reducing energy consumption and promoting
                    environmental sustainability. Projects include <b><i>adaptive comfort</i></b> modelling,
                    vision-based systems for <b><i>remote physiological measurements</i></b>, and
                    <b><i> multi-sensing devices</i></b> for <b><i>human-centric indoor environmental quality (IEQ)</i></b>."
                    imageUrl={FirstResearchImage}
                    researchAltText="An animated picture showing occupants in an office environment and an interface connected to building sensors able to detect and exhibit comfort level, heart rate, respiration rate, temperature, and stress and anxiety levels."
                />
            </Container>

            <Footer />
        </div>
    )
}

export default Delete

const ResearchSection = ({ title, text, imageUrl, researchAltText }) => {
    return (
        <div className="ResearchContainer">
            <div className='ResearchImage'>
                <img src={imageUrl} alt={researchAltText} />
            </div>
            <div className='ResearchText'>
                <h2><b>{title}</b></h2>
                <p dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </div>
    );
};
