import React from 'react'
import './IndividualProfile.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import { useParams } from 'react-router-dom';
import profiles from '../components/Website Individual Information/profileData';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faLink, faLightbulb, faBoltLightning } from '@fortawesome/free-solid-svg-icons';

function IndividualProfile() {
    let { profileName } = useParams();

    const profile = profiles.find(p => p.ProfileName === profileName);
    if (!profile) {
        // Handle error, e.g., display "Profile not found" message
        return <div>Profile not found</div>;
    }

    // Use profile's properties in your component, for instance:
    const { ProfilePic, Name, Position, Biography, Education, Awards, Featured_Publications, Contacts, Links, Interests } = profile;

    return (
        <div className='IndividualProfile'>
            <NavBar />

            <Container>
                <div className="first_section">
                    <div className="profile_pic">
                        <img src={ProfilePic} alt="" />
                    </div>
                    <div className="profile_name">
                        <h1><b>{Name}</b></h1>
                        <h3>{Position}</h3>
                    </div>
                </div>
            </Container>

            <Container useOrange={true}>
                <div className="second_section">
                    <div className="second_section_left">
                        <div className="biography">
                            <h3>Biography</h3>
                            <p>
                                {Biography}
                            </p>
                        </div>
                        <div className="education">
                            <h3>Education</h3>
                            <p>
                                <ul>
                                    {Education && Education.length > 0 && (
                                        Education.map((edu, index) => (
                                            <li key={index}>{edu}</li>
                                        ))
                                    )}
                                </ul>
                            </p>
                        </div>
                        {Awards && Awards.length > 0 && (
                            <div>
                                <h3>Awards</h3>
                                <p>
                                    <ul>
                                        {Awards.map((award, index) => (
                                            <li key={index} dangerouslySetInnerHTML={{ __html: award }}></li>
                                        ))}
                                    </ul>
                                </p>
                            </div>
                        )}
                        {Featured_Publications && Featured_Publications.length > 0 && (
                            <div className="featured_publications">
                                <h3>Featured Publications</h3>
                                <p>
                                    <ul>
                                        {Featured_Publications.map((featured, index) => (
                                            <li key={index} dangerouslySetInnerHTML={{ __html: featured }}></li>
                                        ))}
                                    </ul>
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="second_section_right">
                        <div className="second_section_right_each_section">
                            <div className="each_section_title">
                                <FontAwesomeIcon className='mainIcon' icon={faAddressCard} />
                                <h2>Contacts</h2>
                            </div>
                            <div className="each_section_content">
                                {Contacts.map((contact, index) => (
                                    <a key={index} href={contact.href}>
                                        <FontAwesomeIcon className='subIcon' icon={contact.icon} />
                                        <span>{contact.text}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="second_section_right_each_section">
                            <div className="each_section_title">
                                <FontAwesomeIcon className='mainIcon' icon={faLink} />
                                <h2>Links</h2>
                            </div>
                            <div className="each_section_content">
                                {Links.map((link, index) => (
                                    link.isReactLink ? (
                                        <Link key={index} to={link.href} target="_blank">
                                            <FontAwesomeIcon className='subIcon' icon={link.icon} />
                                            <span>{link.text}</span>
                                        </Link>
                                    ) : (
                                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon className='subIcon' icon={link.icon} />
                                            {link.text && <span>{link.text}</span>}
                                        </a>
                                    )
                                ))}
                            </div>
                        </div>
                        <div className="second_section_right_each_section">
                            <div className="each_section_title">
                                <FontAwesomeIcon className='mainIcon' icon={faLightbulb} />
                                <h2>Interests</h2>
                            </div>
                            <div className="each_section_content">
                                {Interests.map((interest, index) => (
                                    <p key={index}>
                                        <FontAwesomeIcon className='subIcon' icon={faBoltLightning} />
                                        <span>{interest}</span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>


            <Footer />
        </div>
    )
}

export default IndividualProfile

// import { faAddressCard, faPhone, faEnvelope, faLink, faUser, faTemperatureHalf, faLightbulb, faBolt, faBoltLightning } from '@fortawesome/free-solid-svg-icons';
// import { faGoogle, faLinkedin, faResearchgate, faOrcid } from '@fortawesome/free-brands-svg-icons';
// import RiccardoPic from './../components/Website Individual Information/Riccardo/image.jpg';
// import RiccardoCV from './../components/Website Individual Information/Riccardo/CV.pdf';

// function IndividualProfile() {
//     return (
//         <div className='IndividualProfile'>
//             <NavBar />

//             <Container>
//                 <div className="first_section">
//                     <div className="profile_pic">
//                         <img src={RiccardoPic} alt="" />
//                     </div>
//                     <div className="profile_name">
//                         <h1><b>Riccardo Talami</b></h1>
//                         <h3>Research Fellow</h3>
//                     </div>
//                 </div>
//             </Container>

//             <Container useOrange={true}>
//                 <div className="second_section">
//                     <div className="second_section_left">
//                         <div className="biography">
//                             <h3>Biography</h3>
//                             <p>
//                                 Riccardo Talami, PhD, is a Research Fellow at the National University of Singapore (NUS) - Department of the Built Environment.
//                                 Riccardo focuses his effort on the energy-efficient design and operation of buildings while improving occupant comfort and well-being.
//                                 He believes that through data-driven processes, building stakeholders can achieve sustainable, comfortable, and efficient built
//                                 environments. He has experience in laboratory measurements, field studies, and building performance simulation & numerical optimisation
//                                 techniques. Previously, he worked as a Research and Teaching Assistant at the Singapore University of Technology and Design (SUTD) -
//                                 Design for Climate and Comfort Lab. To date, Riccardo has supervised three undergraduate students for their final year project dissertation.
//                                 In his free time, he is an avid street/urban art prints and books collector, and enjoys hiking and travelling.
//                             </p>
//                         </div>
//                         <div className="education">
//                             <h3>Education</h3>
//                             <p>
//                                 <ul>
//                                     <li>PhD, Loughborough University, Building Engineering (2022)</li>
//                                     <li>MSc, Università Iuav di Venezia (IUAV), Architecture and Innovation (Sustainable Design) (2017)</li>
//                                     <li>BSc, Università Iuav di Venezia (IUAV), Architecture (2014)</li>
//                                 </ul>
//                             </p>
//                         </div>
//                         <div className="awards">
//                             <h3>Awards</h3>
//                             <p>
//                                 <ul>
//                                     <li>UK Engineering and Physical Sciences Research Council Scholarship, Engineering and Physical Sciences Research Council (2019 - 2022)</li>
//                                     <li>Winner of Best Poster Award for <a href="https://buildingsimulation2019.org/best-poster-award/" target="_blank"><b>"Subjective and Measured Evidence for Residential Lighting Metrics in the Tropics"</b></a> (in collaboration with Jakubiec, J. Alstan; Srisamranrungruang, Thanyalak; Kong, Zhe; Quek, Geraldine), 16th International IBPSA Conference (2019)</li>
//                                 </ul>
//                             </p>
//                         </div>
//                         <div className="featured_publications">
//                             <h3>Featured Publications</h3>
//                             <p>
//                                 <ul>
//                                     <li><b>Talami, R.</b>, Dawoodjee, I. and Ghahramani, A., 2023. <a href="https://www.sciencedirect.com/science/article/pii/S2666123323000612?via%3Dihub" target="_blank"><b>Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability</b></a>. <i>Energy and Built Environment</i>.</li>
//                                     <li><b>Talami, R.</b> and  Jakubiec, J.A., 2020. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0378778819333614" target="_blank"><b>Early-design sensitivity of radiant cooled office buildings in the tropics for building performance</b></a>. <i>Energy and Buildings, 223</i>, 110177.</li>
//                                     <li><b>Talami, R.</b>, 2022. <a href="https://doi.org/10.26174/thesis.lboro.21547701.v1" target="_blank"><b>The sequential design optimization of building performance</b></a>. (Doctoral dissertation, Loughborough University).</li>
//                                 </ul>
//                             </p>
//                         </div>
//                     </div>
//                     <div className="second_section_right">
//                         <div className="second_section_right_each_section">
//                             <div className="each_section_title">
//                                 <FontAwesomeIcon className='mainIcon' icon={faAddressCard} />
//                                 <h2>Contacts</h2>
//                             </div>
//                             <div className="each_section_content">
//                                 <a href="tel:+6580446551"><FontAwesomeIcon className='subIcon' icon={faPhone} /><span>+65 8044 6551</span></a>
//                                 <a href="mailto:r.talami@nus.edu.sg"><FontAwesomeIcon className='subIcon' icon={faEnvelope} /><span>r.talami@nus.edu.sg</span></a>
//                             </div>
//                         </div>
//                         <div className="second_section_right_each_section">
//                             <div className="each_section_title">
//                                 <FontAwesomeIcon className='mainIcon' icon={faLink} />
//                                 <h2>Links</h2>
//                             </div>
//                             <div className="each_section_content">
//                                 <a href={RiccardoCV} target="_blank"><FontAwesomeIcon className='subIcon' icon={faUser} />CV</a>
//                                 <a href="https://scholar.google.com/citations?user=EmFyzowAAAAJ&hl=en&oi=ao" target="_blank"><FontAwesomeIcon className='subIcon' icon={faGoogle} /><span>Google Scholar</span></a>
//                                 <a href="https://www.researchgate.net/profile/Riccardo-Talami" target="_blank"><FontAwesomeIcon className='subIcon' icon={faResearchgate} /><span>ResearchGate</span></a>
//                                 <a href="https://www.linkedin.com/in/riccardo-talami12/" target="_blank"><FontAwesomeIcon className='subIcon' icon={faLinkedin} /><span>LinkedIn</span></a>
//                                 <a href="https://orcid.org/0000-0002-5173-339X" target="_blank"><FontAwesomeIcon className='subIcon' icon={faOrcid} /><span>ORCID</span></a>
//                                 <Link to="/optimal_temperature_setpoint_tool" target='_blank'>
//                                     <FontAwesomeIcon className='subIcon' icon={faTemperatureHalf} />
//                                     <span>Optimal Temperature Setpoint Tool</span>
//                                 </Link>
//                             </div>
//                         </div>
//                         <div className="second_section_right_each_section">
//                             <div className="each_section_title">
//                                 <FontAwesomeIcon className='mainIcon' icon={faLightbulb} />
//                                 <h2>Interests</h2>
//                             </div>
//                             <div className="each_section_content">
//                                 <p><FontAwesomeIcon className='subIcon' icon={faBoltLightning} /><span>Architectural Engineering</span></p>
//                                 <p><FontAwesomeIcon className='subIcon' icon={faBoltLightning} /><span>Building Performance Simulation</span></p>
//                                 <p><FontAwesomeIcon className='subIcon' icon={faBoltLightning} /><span>Building Optimisation</span></p>
//                                 <p><FontAwesomeIcon className='subIcon' icon={faBoltLightning} /><span>Energy-Efficient Buildings</span></p>
//                                 <p><FontAwesomeIcon className='subIcon' icon={faBoltLightning} /><span>Sustainable Architecture</span></p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Container>


//             <Footer />
//         </div>
//     )
// }

// export default IndividualProfile