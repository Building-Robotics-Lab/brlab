import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import './Publications.css'
import { Link } from 'react-router-dom';
import publicationData from '../components/PublicationData';

function Publications() {
    return (
        <div className="Publications">
            <NavBar />

            <Container>
                <div className="first_section">
                    <h1><b>Peer-reviewed Publications</b></h1>
                    <h3>For an up-to-date list:</h3>
                    <div className="HomeButtons">
                        <Link to="https://scholar.google.com/citations?hl=en&user=9UACV-AAAAAJ&view_op=list_works&sortby=pubdate" target='_blank'><p className='join_the_lab_fifth_section_right' id='JoinButton'>JOIN THE LAB</p></Link>
                    </div>
                </div>
            </Container>

            <Container useOrange={true}>
                <h1 className='publication_type_title'><b>Peer-reviewed Journal Articles</b></h1>
                {publicationData.map((pub, index) => (
                    <PublicationSection key={index} {...pub} />
                ))}
            </Container>

            <Container>
                <h1 className='publication_type_title'><b>Peer-reviewed Conference Papers</b></h1>
                {publicationData.map((pub, index) => (
                    <PublicationSection key={index} {...pub} />
                ))}
            </Container>

            <Container useOrange={true}>
                <h1 className='publication_type_title'><b>Patents</b></h1>
                {publicationData.map((pub, index) => (
                    <PublicationSection key={index} {...pub} />
                ))}
            </Container>

            <Container>
                <h1 className='publication_type_title'><b>Theses</b></h1>
                {publicationData.map((pub, index) => (
                    <PublicationSection key={index} {...pub} />
                ))}
            </Container>

            <Footer />
        </div>
    );
}

export default Publications;

function PublicationSection({ title, journal, issue, page, authors, minRead }) {
    return (
        <div className='publication_section'>
            <h3>{title}</h3>
            <h4>
                {journal}
                {(journal && (issue || page)) && ', '}
                {issue && <i>{issue}</i>}
                {issue && page && ', '}
                {page}
            </h4>
            <h5>
                {authors.map((author, index) => (
                    <React.Fragment key={index}>
                        {author.link ? (
                            <b><a href={author.link} target='_blank' rel='noopener noreferrer'>{author.name}</a></b>
                        ) : (
                            author.name
                        )}
                        {index < authors.length - 1 && ', '}
                    </React.Fragment>
                ))}
                {' | '}
                {minRead && <span className='min_read'>{minRead}</span>}
            </h5>
        </div>
    );
}

