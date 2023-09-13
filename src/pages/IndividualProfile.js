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