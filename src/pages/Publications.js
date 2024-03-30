import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import './Publications.css'
import { Link } from 'react-router-dom';
import Select, { components } from 'react-select';

import JournalData from '../components/Papers/JournalData';
import ConferenceData from '../components/Papers/ConferenceData';
import PatentData from '../components/Papers/PatentData';
import ThesesData from '../components/Papers/ThesesData';

function Publications() {
    useEffect(() => {
        document.title = 'BRL - Publications';
        return () => {
            document.title = 'My React App'; // This is optional and will reset the title when the component unmounts.
        };
    }, []);

    const [, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getAvailableTypes = () => {
        let availableTypes = new Set();

        const checkTypeForSelectedYear = (typeData, typeValue) => {
            if (pubyear.some(option => option.value === 'all' || typeData.some(data => option.value === data.year.toString()))) {
                availableTypes.add(typeValue);
            }
        };

        checkTypeForSelectedYear(JournalData, 1);
        checkTypeForSelectedYear(ConferenceData, 2);
        checkTypeForSelectedYear(PatentData, 3);
        checkTypeForSelectedYear(ThesesData, 4);

        return Array.from(availableTypes);
    };

    const dynamicTypeOptions = () => {
        const types = getAvailableTypes();
        return [
            { value: 0, label: 'All' },
            ...types.map(type => publication_types.find(t => t.value === type))
        ];
    };

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

    const getAvailableYearsForAuthors = () => {
        let availableYears = new Set();

        const checkYearForSelectedAuthor = (typeData) => {
            typeData.forEach(data => {
                if (data.publications.some(pub => shouldShowPublication(pub))) {
                    availableYears.add(data.year);
                }
            });
        };

        checkYearForSelectedAuthor(JournalData);
        checkYearForSelectedAuthor(ConferenceData);
        checkYearForSelectedAuthor(PatentData);
        checkYearForSelectedAuthor(ThesesData);

        return Array.from(availableYears).sort((a, b) => b - a);
    };

    const dynamicYearOptionsForAuthors = () => {
        const years = getAvailableYearsForAuthors();
        return [
            { value: 'all', label: 'All' },
            ...years.map(year => ({ value: year.toString(), label: year.toString() }))
        ];
    };

    const getAvailableTypesForAuthors = () => {
        let availableTypes = new Set();

        const checkTypeForSelectedAuthor = (typeData, typeValue) => {
            if (typeData.some(data => data.publications.some(pub => shouldShowPublication(pub)))) {
                availableTypes.add(typeValue);
            }
        };

        checkTypeForSelectedAuthor(JournalData, 1);
        checkTypeForSelectedAuthor(ConferenceData, 2);
        checkTypeForSelectedAuthor(PatentData, 3);
        checkTypeForSelectedAuthor(ThesesData, 4);

        return Array.from(availableTypes);
    };

    const dynamicTypeOptionsForAuthors = () => {
        const types = getAvailableTypesForAuthors();
        return [
            { value: 0, label: 'All' },
            ...types.map(type => publication_types.find(t => t.value === type))
        ];
    };

    const predefinedAuthors = [
        'Ali Ghahramani',
        'Riccardo Talami',
        'Chen Kai',
        'Iqbal Shah',
        'Connor Aucremanne',
        'Ilyas Dawoodjee',
        "Qi Xuanning"
    ];

    const getAllDataBasedOnType = () => {
        let combinedData = [];
        if (pubtype.some(option => option.value === 0 || option.value === 1)) {
            combinedData = combinedData.concat(JournalData);
        }
        if (pubtype.some(option => option.value === 0 || option.value === 2)) {
            combinedData = combinedData.concat(ConferenceData);
        }
        if (pubtype.some(option => option.value === 0 || option.value === 3)) {
            combinedData = combinedData.concat(PatentData);
        }
        if (pubtype.some(option => option.value === 0 || option.value === 4)) {
            combinedData = combinedData.concat(ThesesData);
        }
        return combinedData;
    };

    const getDynamicAuthorOptions = () => {
        const combinedData = getAllDataBasedOnType();
        let authorSet = new Set();

        combinedData.forEach(data => {
            if (pubyear.some(option => option.value === 'all' || option.value === data.year.toString())) {
                data.publications.forEach(pub => {
                    pub.authors.forEach(author => {
                        const cleanedAuthorName = author.name.replace('*', '');
                        if (predefinedAuthors.includes(cleanedAuthorName)) {
                            authorSet.add(cleanedAuthorName);
                        }
                    });
                });
            }
        });

        return publication_author.filter(option => option.value === 0 || authorSet.has(option.label));
    };

    const publication_types = [
        { value: 0, label: 'All' },
        { value: 1, label: 'Journal' },
        { value: 2, label: 'Conference' },
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
        { value: '2024', label: '2024' },
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
        { value: 3, label: 'Chen Kai' },
        { value: 4, label: 'Iqbal Shah' },
        { value: 5, label: 'Connor Aucremanne' },
        { value: 6, label: 'Ilyas Dawoodjee' },
        { value: 7, label: 'Qi Xuanning' },
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

    const shouldShowPublication = (publication) => {
        // If 'All' is selected in authors, show every publication
        if (pubauthor.some(option => option.value === 0)) {
            if (text) {
                return publication.title.toLowerCase().includes(text.toLowerCase());
            }
            return true;
        }

        // Check if any of the publication's authors are in the selected authors
        for (let author of publication.authors) {
            const cleanedAuthorName = author.name.replace('*', '');
            if (pubauthor.some(option => option.label === cleanedAuthorName)) {
                if (text) {
                    return publication.title.toLowerCase().includes(text.toLowerCase());
                }
                return true;
            }
        }
        return false;
    };

    const [isTypeOpen, setTypeOpen] = useState(false);
    const [isYearOpen, setYearOpen] = useState(false);
    const [isAuthorOpen, setAuthorOpen] = useState(false);
    const selectRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setTypeOpen(false);
                setYearOpen(false);
                setAuthorOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const Reset = () => {
        setText('')
        setPubtype([publication_types[0]]);
        setPubyear([publication_year[0]]);
        setPubauthor([publication_author[0]]);
    }

    const renderFilterInputs = () => (
        <div className='publication_filter_section'>
            <div className='input_filter'>
                <input type="text" value={text} onChange={handleChange} placeholder="Search..." />
            </div>
            <div className="publication_filter">
                <div className='publication_type' ref={selectRef}>
                    <div onClick={() => { setTypeOpen(!isTypeOpen); setYearOpen(false); setAuthorOpen(false); }} style={{ cursor: 'pointer' }}>
                        Type
                        <i className="arrow2 down2"></i>
                    </div>
                    <Select styles={customStyles} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} name="type" options={pubauthor.some(option => option.value === 0) ? dynamicTypeOptions() : dynamicTypeOptionsForAuthors()} value={pubtype} defaultValue={publication_types[0]} onChange={publicationType} onMenuOpen={() => setTypeOpen(true)} onMenuClose={() => setTypeOpen(false)} menuIsOpen={isTypeOpen} components={{ Option: InputOption }} />
                </div>
                <div className='publication_year'>
                    <div onClick={() => { setYearOpen(!isYearOpen); setTypeOpen(false); setAuthorOpen(false); }} style={{ cursor: 'pointer' }}>
                        Year
                        <i className="arrow2 down2"></i>
                    </div>
                    <Select styles={customStyles} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} name="year" options={pubauthor.some(option => option.value === 0) ? dynamicYearOptions() : dynamicYearOptionsForAuthors()} value={pubyear} defaultValue={publication_year[0]} onChange={publicationYear} onMenuOpen={() => setYearOpen(true)} onMenuClose={() => setYearOpen(false)} menuIsOpen={isYearOpen} components={{ Option: InputOption }} />
                </div>
                <div className='publication_author'>
                    <div onClick={() => { setAuthorOpen(!isAuthorOpen); setYearOpen(false); setTypeOpen(false); }} style={{ cursor: 'pointer' }}>
                        Author
                        <i className="arrow2 down2"></i>
                    </div>
                    <Select styles={customStyles} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} name="author" options={getDynamicAuthorOptions()} value={pubauthor} defaultValue={publication_author[0]} onChange={publicationAuthor} onMenuOpen={() => setAuthorOpen(true)} onMenuClose={() => setAuthorOpen(false)} menuIsOpen={isAuthorOpen} components={{ Option: InputOption }} />
                </div>
                <div className="HomeButtons">
                    <Link onClick={Reset}><p id='JoinButton'>Reset</p></Link>
                </div>
            </div>

        </div>
    );

    const renderNote = () => (
        <p className='small_note'><i>*Denotes an undergraduate's, graduate's, or postdoctoral scholar's work under Asst Prof Ghahramani.</i></p>
    );

    const hasPublicationsForYear = (pubData) => {
        return pubData.publications.filter(shouldShowPublication).length > 0;
    };

    const hasPublicationsForSection = (data) => {
        return data.some(pubData => shouldDisplayPublication(pubData.year) && hasPublicationsForYear(pubData));
    };

    const renderSections = () => {
        let allSections = [];

        const dataTypes = [
            { type: JournalData, title: "Peer-Reviewed Journal Articles", component: JournalSection, check: pubtype.some(option => option.value === 0) || pubtype.some(option => option.value === 1) },
            { type: ConferenceData, title: "Peer-Reviewed Conference Papers", component: ConferenceSection, check: pubtype.some(option => option.value === 0) || pubtype.some(option => option.value === 2) },
            { type: PatentData, title: "Patents", component: PatentSection, check: pubtype.some(option => option.value === 0) || pubtype.some(option => option.value === 3) },
            { type: ThesesData, title: "Theses", component: ThesesSection, check: pubtype.some(option => option.value === 0) || pubtype.some(option => option.value === 4) }
        ];

        dataTypes.forEach((dataType, index) => {
            if (dataType.check && hasPublicationsForSection(dataType.type)) {
                allSections.push(
                    <>
                        <h1 className='publication_type_title'><b>{dataType.title}</b></h1>
                        {dataType.type.filter(pubData => shouldDisplayPublication(pubData.year) && hasPublicationsForYear(pubData)).map((pubData, idx, self) => (
                            <dataType.component className={idx === self.length - 1 ? 'no-border' : ''} key={idx} year={pubData.year} publications={pubData.publications.filter(shouldShowPublication)} />
                        ))}
                    </>
                );
            }
        });

        return (
            <Container useOrange={true}>
                {renderFilterInputs()}
                {allSections}
                {renderNote()}
            </Container>
        );
    };


    return (
        <div className="Publications">
            <Helmet>
                <title>BRL Publications</title>
                <meta name="Explore the extensive range of publications from the NUS Building Robotics Lab, featuring groundbreaking research in smart buildings, thermal comfort, robotics, and sustainability across peer-reviewed journals, conferences, patents, and academic theses." />
            </Helmet>
            <NavBar />

            <Container>
                <div className="first_section">
                    <h1><b>Publications</b></h1>
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


function JournalSection({ year, publications, className }) {
    return (
        <div className={`publication_section ${className}`}>
            <div className='publication_year'>
                <h4>{year}</h4>
            </div>
            <div className='publication_content'>
                <ul>
                    {publications.map((pub, index) => (
                        <li key={index}>
                            <h3>
                                <Link to={`/publication/${pub.id}`} target="_blank">{pub.title}</Link>
                            </h3>
                            <h4>
                                <i>{pub.journal}</i>
                                {(pub.journal && (pub.issue || pub.volume || pub.page)) && ', '}
                                {pub.volume && <i>{pub.volume}</i>}
                                {pub.issue && `(${pub.issue})`}
                                {(pub.issue || pub.volume) && pub.page && ', '}
                                {pub.page}
                            </h4>
                            <h5 id='author_names'>
                                {pub.authors.map((author, i) => (
                                    <React.Fragment key={i}>
                                        {author.link ? (
                                            <Link to={author.link} target="_blank">{author.name}</Link>
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

function ConferenceSection({ year, publications, className }) {
    return (
        <div className={`publication_section ${className}`}>
            <div className='publication_year'>
                <h4>{year}</h4>
            </div>
            <div className='publication_content'>
                <ul>
                    {publications.map((pub, index) => (
                        <li key={index}>
                            <h3><Link to={`/publication/${pub.id}`} target="_blank">{pub.title}</Link></h3>
                            <h4>
                                <i>{pub.conference}</i>
                                {(pub.conference && (pub.page || pub.month)) && ', '}
                                {pub.page}<br />
                                {pub.month}
                                {pub.month && pub.location && ' | '}
                                {pub.location}
                            </h4>
                            <h5 id='author_names'>
                                {pub.authors.map((author, i) => (
                                    <React.Fragment key={i}>
                                        {author.link ? (
                                            <Link to={author.link} target="_blank" rel='noopener noreferrer'>{author.name}</Link>
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

function PatentSection({ year, publications, className }) {
    return (
        <div className={`publication_section ${className}`}>
            <div className='publication_year'>
                <h4>{year}</h4>
            </div>
            <div className='publication_content'>
                <ul>
                    {publications.map((pub, index) => (
                        <li key={index}>
                            <h3><Link to={`/publication/${pub.id}`} target="_blank">{pub.title}</Link></h3>
                            <h4>{pub.patent}</h4>
                            <h5 id='author_names'>
                                {pub.authors.map((author, i) => (
                                    <React.Fragment key={i}>
                                        {author.link ? (
                                            <Link to={author.link} target="_blank" rel='noopener noreferrer'>{author.name}</Link>
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

function ThesesSection({ year, publications, className }) {
    return (
        <div className={`publication_section ${className}`}>
            <div className='publication_year'>
                <h4>{year}</h4>
            </div>
            <div className='publication_content'>
                <ul>
                    {publications.map((pub, index) => (
                        <li key={index}>
                            <h3><Link to={`/publication/${pub.id}`} target="_blank">{pub.title}</Link></h3>
                            <h4>{pub.university}</h4>
                            <h5 id='author_names'>
                                {pub.authors.map((author, i) => (
                                    <React.Fragment key={i}>
                                        {author.link ? (
                                            <Link to={author.link} target="_blank" rel='noopener noreferrer'>{author.name}</Link>
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

const InputOption = ({ getStyles, isFocused, isSelected, children, innerProps, ...rest }) => {
    const style = {
        alignItems: 'center',
        backgroundColor: isFocused ? '#eee' : 'transparent',
        color: 'inherit',
        display: 'flex',
        padding: '8px 12px'
    };

    return (
        <components.Option {...rest} isFocused={isFocused} isSelected={isSelected} getStyles={getStyles} innerProps={innerProps} style={style}>
            <input type="checkbox" checked={isSelected} readOnly />
            <span style={{ marginLeft: '8px' }}>{children}</span>
        </components.Option>
    );
};

const getDynamicWidth = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 426) { // For small screens
        return '100px';
    } else if (screenWidth <= 769) { // For medium screens
        return '120px';
    } else if (screenWidth <= 1024) { // For larger screens
        return '200px';
    } else {
        return '300px';
    }
};

const getDynamicHeight = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 426) { // For small screens
        return '5px';
    } else {
        return '10px';
    }
};

const getDynamicPadding = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 426) { // For small screens
        return '4px 6px';
    } else if (screenWidth <= 769) { // For medium screens
        return '5px 8px';
    } else if (screenWidth <= 1024) { // For larger screens
        return '6px 10px';
    } else {
        return '8px 12px';
    }
};

const customStyles = {
    control: () => ({
        display: 'none'
    }),
    menu: base => ({
        ...base,
        zIndex: 1000,
        position: 'absolute',
        top: getDynamicHeight(),
        left: '0px',
        width: getDynamicWidth(),
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isFocused ? 'rgb(45, 99, 83)' : (state.isSelected ? 'rgb(45, 99, 83)' : base.backgroundColor),
        padding: getDynamicPadding(), //'8px 12px',
        ':active': {
            backgroundColor: 'rgb(45, 99, 83)'
        }
    }),
};