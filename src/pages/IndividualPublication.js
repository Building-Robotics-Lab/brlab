import React, { useEffect } from 'react'
import './IndividualPublication.css'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Container from '../components/Container';
import { Link, useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profiles from '../components/Website Individual Information/profileData';
import JournalData from '../components/Papers/JournalData';
import ConferenceData from '../components/Papers/ConferenceData';
import PatentData from '../components/Papers/PatentData';
import ThesesData from '../components/Papers/ThesesData';

function IndividualPublication() {

    const { id } = useParams();
    const publication = findPublicationById(id);

    useEffect(() => {
        if (publication) {
            document.title = 'BRL - ' + publication.id.replace("_", " ").charAt(0).toUpperCase() + publication.id.replace("_", " ").slice(1).toLowerCase();
        } else {
            document.title = 'BRL - Publication Not Found';
        }
        return () => {
            document.title = 'My React App';
        };
    }, [publication]);

    if (!publication) {
        return <div>Publication not found</div>;
    }

    const getProfileByName = (profileName) => {
        return profiles.find(profile => profile.ProfileName === profileName);
    };

    const userProfiles = publication.profiles.map(getProfileByName).filter(Boolean);

    let authorList = [];
    publication.authors.forEach((author) => {
        authorList.push(author.name.replace("*", ""))
    });

    return (
        <div className='IndividualPublication'>
            <NavBar />

            <Container>
                <div className="first_section">
                    <div className='title'>
                        <h1>{publication.title}</h1>
                        <i><h2>{publication.journal || publication.conference || publication.patent || publication.university}</h2></i>
                        <p>{authorList.join(', ')}</p>
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

            {(publication.highlights && publication.highlights.length > 0) || (publication.abstract && publication.abstract.length > 0) ? (
                <Container useOrange={true}>
                    <div className="second_section">
                        <div className="text">
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
                            {publication.abstract && publication.abstract.length > 0 && (
                                <div className="image_abstract">
                                    <h3>Abstract</h3>
                                    <div className="abstract">
                                        <p>{publication.abstract.split('\n').map((str, index, array) =>
                                            index === array.length - 1 ? str : <>
                                                {str}
                                                <br /><br />
                                            </>
                                        )}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="image">
                            <img src={publication.display_image} alt="" />
                        </div>
                    </div>
                </Container>
            ) : null}


            <Container>
                <div className="third_section">
                    {userProfiles.map((profile, index) => (
                        <div className="each_profile" key={index}>
                            <div className="profile_image">
                                <Link to={`/individual_profile/${profile.ProfileName}`} target="_blank">
                                    <img src={profile.ProfilePic} alt={profile.Name} />
                                </Link>
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
    const allData = [JournalData, ConferenceData, ThesesData, PatentData];

    for (const data of allData) {
        if (!data) continue;  // Skip if data is null or undefined

        for (const yearData of data) {
            for (const pub of yearData.publications) {
                if (pub.id === id) {
                    return pub;
                }
            }
        }
    }
    return null;  // or some default data
}