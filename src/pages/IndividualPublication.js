import React from 'react'
import './IndividualPublication.css'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Container from '../components/Container';
import { Link, useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profiles from '../components/Website Individual Information/profileData';
import JournalData from '../components/Papers/JournalData';

function IndividualPublication() {

    const { id } = useParams();
    const publication = findPublicationById(id);

    if (!publication) {
        return <div>Publication not found</div>;
    }

    const getProfileByName = (profileName) => {
        return profiles.find(profile => profile.ProfileName === profileName);
    };
    const userProfiles = publication.profiles.map(getProfileByName).filter(Boolean);

    return (
        <div className='IndividualPublication'>
            <NavBar />

            <Container>
                <div className="first_section">
                    <div className='title'>
                        <h1>{publication.title}</h1>
                        <i><h2>{publication.journal}</h2></i>
                    </div>
                    <div className={publication.keywords && publication.keywords.length > 0 ? 'links' : 'links noKeywords'}>
                        {publication.links.map((link, index) => (
                            <div className="HomeButtons" key={index}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    <p id="JoinButton">{link.type}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                    {publication.keywords && publication.keywords.length > 0 && (
                        <div className="keywords">
                            {publication.keywords.map((keyword, index) => (
                                <p key={index}>{keyword}</p>
                            ))}
                        </div>
                    )}
                </div>
            </Container>

            <Container useOrange={true}>
                <div className="second_section">
                    {publication.highlights && publication.highlights.length > 0 && (
                        <div className="highlights">
                            <h3>Highlights</h3>
                            <ul>
                                {publication.highlights.map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="image_abstract">
                        <h3>Abstract</h3>
                        <div className="abstract">
                            <img src={publication.display_image} alt="" />
                            <p>{publication.abstract}</p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container>
                <div className="third_section">
                    {userProfiles.map((profile, index) => (
                        <div className="each_profile" key={index}>
                            <div className="profile_image">
                                <img src={profile.ProfilePic} alt={profile.Name} />
                            </div>
                            <div className="profile_data">
                                <a href={profile.ProfileLink} target="_blank" rel="noopener noreferrer">
                                    <h5><b>{profile.Name}</b></h5>
                                </a>
                                <p>{profile.Position}</p>
                                <div className="profile_links">
                                    {profile.Links.slice(1).map((link, index) => (
                                        link.isReactLink ? (
                                            <Link key={index} to={link.href} target="_blank">
                                                <FontAwesomeIcon className='profile_icons' icon={link.icon} />
                                            </Link>
                                        ) : (
                                            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon className='profile_icons' icon={link.icon} />
                                            </a>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            <Footer />
        </div>
    )
}

export default IndividualPublication;

function findPublicationById(id) {
    for (const yearData of JournalData) {
        for (const pub of yearData.publications) {
            if (pub.id === id) {
                return pub;
            }
        }
    }
    return null;  // or some default data
}

// function IndividualPublication() {

//     // let { paperUniqueID } = useParams();

//     const allPublicationsArray = JournalData.reduce((acc, curr) => acc.concat(curr.publications), []);
//     const allPublicationsDict = allPublicationsArray.reduce((acc, curr, index) => {
//         acc[index] = curr;
//         return acc;
//     }, {});

//     console.log(allPublicationsDict);

//     const { title, journal, links, keywords, highlights, abstract, userProfiles } = allPublicationsDict

//     const test_paper = JournalData[0].publications[1];

//     const getProfileByName = (profileName) => {
//         return profiles.find(profile => profile.ProfileName === profileName);
//     };
//     const test_profiles = test_paper.profiles.map(getProfileByName).filter(Boolean);

//     return (
//         <div className='IndividualPublication'>
//             <NavBar />

//             <Container>
//                 <div className="first_section">
//                     <div className='title'>
//                         <h1>Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability</h1>
//                         <h2>Energy and Built Environment</h2>
//                     </div>
//                     <div className='links'>
//                         <div className="HomeButtons">
//                             <Link to="https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" target='_blank'><p id='JoinButton'>PDF</p></Link>
//                         </div>
//                         <div className="HomeButtons">
//                             <Link to="https://www.sciencedirect.com/science/article/pii/S2666123323000612" target='_blank'><p id='JoinButton'>DOI</p></Link>
//                         </div>
//                     </div>
//                     <div className="keywords">
//                         <p>Decarbonization</p>
//                         <p>Smart Buildings</p>
//                         <p>Optimization</p>
//                         <p>Occupancy</p>
//                         <p>Heat Loads</p>
//                     </div>
//                 </div>
//             </Container>

//             <Container useOrange={true}>
//                 <div className="second_section">
//                     <div className="highlights">
//                         <h3>Highlights</h3>
//                         <ul>
//                             <li>Dynamic temperature setpoints are derived based on weather and occupancy.</li>
//                             <li>Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.</li>
//                             <li>Dynamic setpoints save additional energy from the optimal selection of setpoints.</li>
//                             <li>Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.</li>
//                             <li>Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%.</li>
//                         </ul>
//                     </div>
//                     <div className="image_abstract">
//                         <h3>Abstract</h3>
//                         <div className="abstract">
//                             <img src={RiccardoPublication} alt="" />
//                             <p>Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints.</p>
//                         </div>
//                     </div>
//                 </div>
//             </Container>

//             <Container>
//                 <div className="third_section">
//                     {test_profiles.map((profile, index) => (
//                         <div className="each_profile" key={index}>
//                             <div className="profile_image">
//                                 <img src={profile.ProfilePic} alt={profile.Name} />
//                             </div>
//                             <div className="profile_data">
//                                 <a href={profile.ProfileLink} target="_blank" rel="noopener noreferrer">
//                                     <h5><b>{profile.Name}</b></h5>
//                                 </a>
//                                 <p>{profile.Position}</p>
//                                 <div className="profile_links">
//                                     {profile.Links.slice(1).map((link, index) => (
//                                         link.isReactLink ? (
//                                             <Link key={index} to={link.href} target="_blank">
//                                                 <FontAwesomeIcon className='profile_icons' icon={link.icon} />
//                                             </Link>
//                                         ) : (
//                                             <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
//                                                 <FontAwesomeIcon className='profile_icons' icon={link.icon} />
//                                             </a>
//                                         )
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </Container>

//             <Footer />
//         </div>
//     )
// }