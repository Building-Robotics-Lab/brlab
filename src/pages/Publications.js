import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import './Publications.css'
import { Link } from 'react-router-dom';
import Select from 'react-select';

import JournalData from '../components/Papers/JournalData';
import ConferenceData from '../components/Papers/ConferenceData';
import PatentData from '../components/Papers/PatentData';
import ThesesData from '../components/Papers/ThesesData';

function Publications() {

    const getAvailableYears = () => {
        let availableYears = new Set();

        if (pubtype.some(option => option.value === 0) || pubtype.some(option => option.value === 1)) {
            JournalData.forEach(pubData => availableYears.add(pubData.year));
        }

        if (pubtype.some(option => option.value === 0) || pubtype.some(option => option.value === 2)) {
            ConferenceData.forEach(pubData => availableYears.add(pubData.year));
        }

        if (pubtype.some(option => option.value === 0) || pubtype.some(option => option.value === 3)) {
            PatentData.forEach(pubData => availableYears.add(pubData.year));
        }

        if (pubtype.some(option => option.value === 0) || pubtype.some(option => option.value === 4)) {
            ThesesData.forEach(pubData => availableYears.add(pubData.year));
        }

        return Array.from(availableYears).sort((a, b) => b - a);
    };

    const dynamicYearOptions = () => {
        const years = getAvailableYears();
        return [
            { value: 'all', label: 'All' },
            ...years.map(year => ({ value: year.toString(), label: year.toString() }))
        ];
    };

    const publication_types = [
        { value: 0, label: 'All' },
        { value: 1, label: 'Journal Article' },
        { value: 2, label: 'Conference Paper' },
        { value: 3, label: 'Patent' },
        { value: 4, label: 'Thesis' },
    ];
    const [pubtype, setPubtype] = useState([publication_types[0]]);
    const publicationType = (selectedOptions) => {
        // If nothing is selected, select 'All'
        if (!selectedOptions || selectedOptions.length === 0) {
            setPubtype([publication_types[0]]);
        }
        // If the latest selected option is 'All' and other options are selected
        else if (selectedOptions[selectedOptions.length - 1].value === 0 && selectedOptions.length > 1) {
            setPubtype([publication_types[0]]);
        }
        // If the latest selected option is not 'All' and 'All' is among the selected options
        else if (selectedOptions[selectedOptions.length - 1].value !== 0 && selectedOptions.some(option => option.value === 0)) {
            setPubtype(selectedOptions.filter(option => option.value !== 0));
        }
        // Any other scenario
        else {
            setPubtype(selectedOptions);
        }

        setPubyear([{ value: 'all', label: 'All' }]);
    }

    const publication_year = [
        { value: 'all', label: 'All' },
        { value: '2023', label: '2023' },
        { value: '2022', label: '2022' },
        { value: '2021', label: '2021' },
        { value: '2020', label: '2020' },
        { value: '2019', label: '2019' },
        { value: '2018', label: '2018' },
        { value: '2017', label: '2017' },
        { value: '2016', label: '2016' },
        { value: '2015', label: '2015' },
        { value: '2014', label: '2014' },
        { value: '2013', label: '2013' },
    ];
    const [pubyear, setPubyear] = useState([publication_year[0]]);
    const publicationYear = (selectedOptions) => {
        // If nothing is selected, select 'All'
        if (!selectedOptions || selectedOptions.length === 0) {
            setPubyear([publication_year[0]]);
        }
        // If the latest selected option is 'All' and other options are selected
        else if (selectedOptions[selectedOptions.length - 1].value === 'all' && selectedOptions.length > 1) {
            setPubyear([publication_year[0]]);
        }
        // If the latest selected option is not 'All' and 'All' is among the selected options
        else if (selectedOptions[selectedOptions.length - 1].value !== 'all' && selectedOptions.some(option => option.value === 'all')) {
            const sortedOptions = selectedOptions.filter(option => option.value !== 'all').sort((a, b) => b.value - a.value);
            setPubyear(sortedOptions);
        }
        // Any other scenario
        else {
            const sortedOptions = [...selectedOptions].sort((a, b) => b.value - a.value);
            setPubyear(sortedOptions);
        }
    }

    const publication_author = [
        { value: 0, label: 'All' },
        { value: 1, label: 'Ali Ghahramani' },
        { value: 2, label: 'Riccardo Talami' },
        { value: 3, label: 'CHEN Kai' },
        { value: 4, label: 'Iqbal Shah' },
        { value: 5, label: 'Connor Aucremanne' },
        { value: 6, label: 'Ilyas Dawoodjee' },
    ];
    const [pubauthor, setPubauthor] = useState([publication_author[0]]);
    const publicationAuthor = (selectedOptions) => {
        // If nothing is selected, select 'All'
        if (!selectedOptions || selectedOptions.length === 0) {
            setPubauthor([publication_author[0]]);
        }
        // If the latest selected option is 'All' and other options are selected
        else if (selectedOptions[selectedOptions.length - 1].value === 0 && selectedOptions.length > 1) {
            setPubauthor([publication_author[0]]);
        }
        // If the latest selected option is not 'All' and 'All' is among the selected options
        else if (selectedOptions[selectedOptions.length - 1].value !== 0 && selectedOptions.some(option => option.value === 0)) {
            setPubauthor(selectedOptions.filter(option => option.value !== 0));
        }
        // Any other scenario
        else {
            setPubauthor(selectedOptions);
        }
    }

    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
    };

    const shouldDisplayPublication = (pubYear) => {
        // If 'All' is selected, display all publications
        if (pubyear.some(option => option.value === 'all')) return true;

        // If publication's year matches one of the selected years, display the publication
        return pubyear.some(option => option.value === pubYear.toString());
    }

    const renderFilterInputs = () => (
        <>
            <div className='input_filter'>
                <input type="text" value={text} onChange={handleChange} placeholder="Search..." />
            </div>
            <div className="publication_filter">
                <div className='publication_type'>
                    <p>Publication Type:</p>
                    <Select isMulti name="type" options={publication_types} value={pubtype} defaultValue={publication_types[0]} onChange={publicationType} />
                </div>
                <div className='publication_year'>
                    <p>Year Range:</p>
                    <Select isMulti name="year" options={dynamicYearOptions()} value={pubyear} defaultValue={publication_year[0]} onChange={publicationYear} />
                </div>
                <div className='publication_author'>
                    <p>Author:</p>
                    <Select isMulti name="year" options={publication_author} value={pubauthor} defaultValue={publication_author[0]} onChange={publicationAuthor} />
                </div>
            </div>
        </>
    );

    const renderNote = () => (
        <p className='small_note'><i>*denotes an undergraduate, graduate, or postdoctoral scholars' work under Asst Prof Ghahramani</i></p>
    );

    const renderSections = () => {
        const sections = [];
        let useOrange = true;

        const checkDataForSelectedYear = (data) => {
            return data.filter(pubData => shouldDisplayPublication(pubData.year)).length > 0;
        };

        const dataTypes = [
            { type: JournalData, title: "Peer-reviewed Journal Articles", component: JournalSection, check: pubtype.some(option => option.value === 0) || pubtype.some(option => option.value === 1) },
            { type: ConferenceData, title: "Peer-reviewed Conference Papers", component: ConferenceSection, check: pubtype.some(option => option.value === 0) || pubtype.some(option => option.value === 2) },
            { type: PatentData, title: "Patents", component: PatentSection, check: pubtype.some(option => option.value === 0) || pubtype.some(option => option.value === 3) },
            { type: ThesesData, title: "Theses", component: ThesesSection, check: pubtype.some(option => option.value === 0) || pubtype.some(option => option.value === 4) }
        ];

        dataTypes.forEach((dataType, index) => {
            if (dataType.check && checkDataForSelectedYear(dataType.type)) {
                sections.push(
                    <Container useOrange={useOrange}>
                        {sections.length === 0 && renderFilterInputs()}
                        <h1 className='publication_type_title'><b>{dataType.title}</b></h1>
                        {dataType.type.filter(pubData => shouldDisplayPublication(pubData.year)).map((pubData, idx) => (
                            <dataType.component key={idx} year={pubData.year} publications={pubData.publications} />
                        ))}
                        {dataType === dataTypes[dataTypes.length - 1] && renderNote()}
                    </Container>
                );
                useOrange = !useOrange;
            }
        });

        return sections;
    };

    return (
        <div className="Publications">
            <NavBar />

            <Container>
                <div className="first_section">
                    <h1><b>Peer-reviewed Publications</b></h1>
                    <div className="HomeButtons">
                        <Link to="https://scholar.google.com/citations?user=9UACV-AAAAAJ&hl=en&oi=ao" target='_blank'><p id='JoinButton'>GOOGLE SCHOLAR</p></Link>
                    </div>
                </div>
            </Container>

            {renderSections()}

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