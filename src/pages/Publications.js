import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import './Publications.css'
import { Link } from 'react-router-dom';

import JournalData from '../components/Papers/JournalData';
import ConferenceData from '../components/Papers/ConferenceData';
import PatentData from '../components/Papers/PatentData';
import ThesesData from '../components/Papers/ThesesData';

function Publications() {
    return (
        <div className="Publications">
            <NavBar />

            <Container>
                <div className="first_section">
                    <h1><b>Peer-reviewed Publications</b></h1>
                    <h3>For an up-to-date list:</h3>
                    <div className="HomeButtons">
                        <Link to="https://scholar.google.com/citations?user=9UACV-AAAAAJ&hl=en&oi=ao" target='_blank'><p id='JoinButton'>GOOGLE SCHOLAR</p></Link>
                    </div>
                </div>
            </Container>

            <Container useOrange={true}>
                <h1 className='publication_type_title'><b>Peer-reviewed Journal Articles</b></h1>
                {JournalData.map((pubData, index) => (
                    <JournalSection key={index} year={pubData.year} publications={pubData.publications} />
                ))}
            </Container>

            <Container>
                <h1 className='publication_type_title'><b>Peer-reviewed Conference Papers</b></h1>
                {ConferenceData.map((pubData, index) => (
                    <ConferenceSection key={index} year={pubData.year} publications={pubData.publications} />
                ))}
            </Container>

            <Container useOrange={true}>
                <h1 className='publication_type_title'><b>Patents</b></h1>
                {PatentData.map((pubData, index) => (
                    <PatentSection key={index} year={pubData.year} publications={pubData.publications} />
                ))}
            </Container>

            <Container>
                <h1 className='publication_type_title'><b>Theses</b></h1>
                {ThesesData.map((pubData, index) => (
                    <ThesesSection key={index} year={pubData.year} publications={pubData.publications} />
                ))}
                <p className='small_note'><i>*denotes an undergraduate, graduate, or postdoctoral scholars' work under Asst Prof Ghahramani</i></p>
            </Container>

            <Footer />
        </div>
    );
}

export default Publications;


function JournalSection({ year, publications }) {
    return (
        <div className='publication_section'>
            <div className='publication_year'>
                <h4>{year}</h4>
            </div>
            <div className='publication_content'>
                <ul>
                    {publications.map((pub, index) => (
                        <li key={index}>
                            <h3><Link to={`/individual_publication/${pub.id}`}>{pub.title}</Link></h3>
                            <h4>
                                <i>{pub.journal}</i>
                                {(pub.journal && (pub.issue || pub.volume || pub.page)) && ', '}
                                {pub.volume && <i>{pub.volume}</i>}
                                {pub.issue && `(${pub.issue})`}
                                {/* {pub.issue && <i>{pub.issue}</i>} */}
                                {(pub.issue || pub.volume) && pub.page && ', '}
                                {pub.page}
                            </h4>
                            <h5>
                                {pub.authors.map((author, i) => (
                                    <React.Fragment key={i}>
                                        {author.link ? (
                                            <a href={author.link} target='_blank' rel='noopener noreferrer'>{author.name}</a>
                                        ) : (
                                            author.name
                                        )}
                                        {i < pub.authors.length - 1 && ', '}
                                    </React.Fragment>
                                ))}
                                {' | '}
                                {pub.minRead && <span className='min_read'>{pub.minRead}</span>}
                            </h5>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function ConferenceSection({ year, publications }) {
    return (
        <div className='publication_section'>
            <div className='publication_year'>
                <h4>{year}</h4>
            </div>
            <div className='publication_content'>
                <ul>
                    {publications.map((pub, index) => (
                        <li key={index}>
                            <h3><Link to={`/individual_publication/${pub.id}`}>{pub.title}</Link></h3>
                            <h4>
                                <i>{pub.conference}</i>
                                {(pub.conference && (pub.page || pub.month)) && ', '}
                                {pub.page}<br />
                                {pub.month}
                                {pub.month && pub.location && ' | '}
                                {pub.location}
                            </h4>
                            <h5>
                                {pub.authors.map((author, i) => (
                                    <React.Fragment key={i}>
                                        {author.link ? (
                                            <a href={author.link} target='_blank' rel='noopener noreferrer'>{author.name}</a>
                                        ) : (
                                            author.name
                                        )}
                                        {i < pub.authors.length - 1 && ', '}
                                    </React.Fragment>
                                ))}
                                {' | '}
                                {pub.minRead && <span className='min_read'>{pub.minRead}</span>}
                            </h5>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function PatentSection({ year, publications }) {
    return (
        <div className='publication_section'>
            <div className='publication_year'>
                <h4>{year}</h4>
            </div>
            <div className='publication_content'>
                <ul>
                    {publications.map((pub, index) => (
                        <li key={index}>
                            <h3><Link to={`/individual_publication/${pub.id}`}>{pub.title}</Link></h3>
                            {/* <h3>{pub.title}</h3> */}
                            <h4>{pub.patent}</h4>
                            <h5>
                                {pub.authors.map((author, i) => (
                                    <React.Fragment key={i}>
                                        {author.link ? (
                                            <a href={author.link} target='_blank' rel='noopener noreferrer'>{author.name}</a>
                                        ) : (
                                            author.name
                                        )}
                                        {i < pub.authors.length - 1 && ', '}
                                    </React.Fragment>
                                ))}
                                {' | '}
                                {pub.minRead && <span className='min_read'>{pub.minRead}</span>}
                            </h5>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function ThesesSection({ year, publications }) {
    return (
        <div className='publication_section'>
            <div className='publication_year'>
                <h4>{year}</h4>
            </div>
            <div className='publication_content'>
                <ul>
                    {publications.map((pub, index) => (
                        <li key={index}>
                            <h3><Link to={`/individual_publication/${pub.id}`}>{pub.title}</Link></h3>
                            {/* <h3>{pub.title}</h3> */}
                            <h4>{pub.university}</h4>
                            <h5>
                                {pub.authors.map((author, i) => (
                                    <React.Fragment key={i}>
                                        {author.link ? (
                                            <a href={author.link} target='_blank' rel='noopener noreferrer'>{author.name}</a>
                                        ) : (
                                            author.name
                                        )}
                                        {i < pub.authors.length - 1 && ', '}
                                    </React.Fragment>
                                ))}
                                {' | '}
                                {pub.minRead && <span className='min_read'>{pub.minRead}</span>}
                            </h5>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}