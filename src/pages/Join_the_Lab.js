import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import './Join_the_Lab.css'
import Select, { components } from 'react-select';

function Join_the_Lab() {

    const openEligibility = [
        {
            title: "President's Graduate Fellowship",
            link: "https://nusgs.nus.edu.sg/scholarships-list/",
            description: "Awarded to PhD candidates who show exceptional promise or accomplishment in research. A number of PhD candidates are selected each semester by the University for the award. The following Fellowships are donor-funded: President’s Graduate Fellowship (funded by Lee Kong Chian Scholarship) and President’s Graduate Fellowship (funded by Jasmine Scholarship). Additionally, the candidate must have an exemplary academic record, strong research potential, and strong ethical character and high potential to success in the PhD program.",
        },
        {
            title: "NUS Research Scholarship",
            link: "https://nusgs.nus.edu.sg/scholarships-list/",
            description: "Awarded to outstanding graduate students for research leading to a higher degree at the University. The Scholarship consists of a monthly stipend plus a tuition fee subsidy. The candidate must have graduated with an undergraduate degree with at least Second Class Honours or equivalent, have been offered admission to a full-time graduate research programme at NUS, and be eligible for MOE subsidy.",
        },
        {
            title: "A*STAR Graduate Scholarship",
            link: "https://www.a-star.edu.sg/Scholarships/for-graduate-studies/a-star-graduate-scholarship-singapore",
            description: "Awarded to all nationalities, the candidate must satisfy criteria for and seek admission to a PhD or EngD programme, have obtained at least a Second Upper Class Honours or equivalent, and have a strong interest in a research career. The award consists of full tuition fees, a monthly sustenance allowance, and support for up to 12 months of overseas attachment.",
        },
        {
            title: "NUS Tuition Fee Allowance",
            link: "https://nusgs.nus.edu.sg/scholarships-list/",
            description: "Awarded to outstanding graduate students for research leading to a higher degree at the University. The award does not consist of a monthly stipend. Additionally, the candidate must have graduated with an undergraduate degree with at least Second Class Honours or equivalent, have been offered admission to a full-time higher degree by research at NUS, and be eligible for MOE subsidy.",
        },
        {
            title: "Branco Weiss Fellowship",
            link: "https://brancoweissfellowship.org/",
            description: "Offers an opportunity for postdocs in all areas of the natural and social sciences and engineering who have conceived an original and independent research idea that falls outside the scope of large-scale research projects. Fellows are encouraged to choose the best possible location for their research, anywhere in the world. They will receive support for up to five years. They decide themselves how the financial resources will be allocated.",
        },
        {
            title: "Meta Research PhD Fellowship",
            link: "https://research.facebook.com/fellowship/",
            description: "Is a global program designed to encourage and support promising doctoral students who are engaged in innovative and relevant research in areas related to computer science and engineering at an accredited university. Winners of the Fellowship are entitled to receive two years of paid tuition and fees, an annual stipend to cover living costs, various opportunities to engage with Meta researchers, and an invitation to the annual Fellowship summit.",
        },
        {
            title: "NVIDIA Graduate Fellowship Programme",
            link: "https://research.nvidia.com/graduate-fellowships",
            description: "Have found this program to be a great way to support academia in its pursuit of cutting edge innovation, as well as an ideal avenue to introduce NVIDIA to the future leaders of our industry. It provides funding in the form of a single-year stipend to PhD students who are researching topics that will lead to major advanves in accelerated computing and its applications. NVIDIA Particularly invites submissions from students pushing the envelope in artificial intelligence, robotics, autonomous vehicles, and related fields.",
        },
        {
            title: "Google PhD Fellowship",
            link: "https://research.google/outreach/phd-fellowship/",
            description: "Was created to recognize outstanding graduate students doing exceptional and innovative research in areas relevant to computer science and related fields. The award consists of up to a three-year fellowship, which includes a yearly stipend for living costs and research-related activities and a Google Research Mentor.",
        },
        {
            title: "Microsoft Research PhD Fellowship (paused until 10/2023)",
            link: "https://www.microsoft.com/en-us/research/academic-program/phd-fellowship/asia-pacific/",
            description: "Identifies the next generation of research leaders through a unique program that offers a combination of mentorship, research, networking, and academic opportunities to promosing young candidates. The award consists of a stipend for research initiatives and academic endeavors, the opportunity for intensive and individualized mentorship programs with a dedicated senior researcher, and the opportunity to attend the Microsoft Research Asia Academic Conference.",
        },
    ]

    const countrySpecificEligibility = [
        {
            title: "Lee Kuan Yew Scholarship",
            link: "https://www.psc.gov.sg/scholarships/postgraduate-scholarships/lee-kuan-yew-scholarship",
            description: "Applicants, who must be <b>Singapore citizens</b>, will be assessed holistically. This includes their track record of leadership and service (e.g. volunteer work, social enterprise, contributions to cultural, scientific and/or academic communities) as well as academic and professional achievements.",
        },
        {
            title: "NUS-SINGA Scholarship",
            link: "https://www.a-star.edu.sg/Scholarships/for-graduate-studies/singapore-international-graduate-award-singa",
            description: "Open for application to all <b>international graduates</b> with a passion for research and excellent academic results, SINGA supports PhD studies in Biomedical Sciences, Computing and Information Sciences, Engineering and Technology, and Physical Sciences. The award consists of tution fees, a monthly stipend, an one-time airfare grant, and an one-time settling-in allowance.",
        },
        {
            title: "Commonwealth Scholarship",
            link: "https://nusgs.nus.edu.sg/scholarships-list/",
            description: "Awarded to outstanding graduate students from <a href='https://thecommonwealth.org/our-member-countries' target='_blank'>Commonwealth countries</a> for research leading to a hgher degree at the University. This scholarship is for new, incoming student who are <b>not Singapore citizens or permanent residents.</b> The Scholarship consists of a monthly stipend plus a tuition fee subsidy. A number of students are selected each semester by the University for the award. Additionally, the candidate must have graduated with an undergraduate degree with at least Second Class Honours or equivalent, have been offered admission to a full-time graduate research programme at NUS, and be eligible for MOE subsidy.",
        },
        {
            title: "Schlumberger Foundation Faculty for the Future",
            link: "https://www.facultyforthefuture.net/",
            description: "Fellowships are awarded to <b>women from developing and emerging economies</b> who are preparing for PhD or post-doctoral studt in STEM disciplines to pursue advanced graduate study at top universities in their disciplines abroad. Grant receipients are selected as much for their leadership capabilities as for their scientific talents, and they are expected to return to their home countries to continue their careers and inspire other young women.",
        },
        {
            title: "SG Academies South-East Asia Fellowship (SASEAF) Programme",
            link: "https://snas.org.sg/aseanfellowship",
            description: "Aims to attract bright postgraduate researchers from South-East Asia to Singapore research institutions for a two-year long fellowship. SNAS will provide a monthly stipend, a travel allowance at the start and end of the fellowship period, and access to professional development opportunities. Applicants must be <b>citizens of an ASEAN country (not including Singapore) and non-Singapore-based</b>.",
        },
        {
            title: "Croucher Foundation Fellowship for Postdoctoral Research",
            link: "https://croucher.org.hk/funding/study_awards/postdoctoral_fellowships",
            description: "Intended to enable applicants who are <b>permanent residents of Hong Kong</b> to devote themselves to a period of full-time research in natural sciences, medicine or technology in approved academic institutions outside Hong Kong. The award consists of an annual maintenance allowance, air fare, arrival allowance, annual research allowance, annual academic development allowance, annual medical insurance, and an annual family allowance.",
        },
        {
            title: "Postdoc.mobility Fellowships",
            link: "https://www.snf.ch/en/XIZpfY3iVS5KRRoD/funding/careers/postdoc-mobility",
            description: "The fellowships from the Swiss National Science Foundation (SNSF) are aimed at researchers who have done a doctorate and who wish to pursue a scientific or an academic career in Switzerland. Applicants must be of <b>Swiss nationality, holder of valid Swiss permanent residence, residence or cross-border commuter permit, married to a Swiss national or co-habiting with a Swiss national in a registered partnership, or at least 2 years of research activity at a Swiss research institution (for foreign nationals)</b>. The fellowships include a grant for subsistence costs, a flat-rate for travel expenses and a possible contribution to research and conference costs. The funding period is in principle 24 months (fellowship) and 3 to 12 months (return phase).",
        },
        {
            title: "Rubicon Program",
            link: "https://www.nwo.nl/en",
            description: "The Dutch Research Council (NWO) offers talented researchers who have completed their doctorates in the past year the chance to gain experience at a research institution outside the Kingdom of the Netherlands. Postgraduates who are currently engaged in doctoral research or who have been awarded a doctorate in the twelve months preceding the relevant deadline can submit a proposal, and in the five years directly preceding the submission deadline, <b>applicants must have conducted scientific research at an academic research institute in the Kingdom of the Netherlands for a period at least equivalent to three years full time</b>. The eligible costs are your salary including fringe benefits, travel expenses and a limited amount of research costs. Applicants can apply for a period of up to 24 months at an excellent research institute outside the Netherlands, but the minimum duration is 12 months.",
        },
        {
            title: "Fulbright U.S. Student Program",
            link: "https://us.fulbrightonline.org/countries/east-asia-pacific/singapore",
            description: "Offers two awards to U.S. students for 10 months of study/research at a Singaporean host institution. Applicants must be <b>citizens or nationals of the United States of America</b> at the time of the application deadline, and permanent residents are not eligible.",
        },
        {
            title: "Canada Graduate Scholarships - Michael Smith Foreign Study Supplements (CGS-MSFSS)",
            link: "https://www.nserc-crsng.gc.ca/Students-Etudiants/PG-CS/CGSForeignStudy-BESCEtudeEtranger_eng.asp",
            description: "The Supplements from the Natural Sciences and Engineering Research Council of Canada support high-calibre Canadian graduate students in building global linkages and international networks through the pursuit of exceptional research experiences at research institutions abroad. They are available to <b>Canadian citizens, permanent residents of Canada or Protected Persons under subsection 95(2) of the <i>Immigration and Refugee Protection Act</i> (Canada) who hold a Canada Graduate Scholarship (CGS) at the master’s or doctoral level, or a Vanier CGS at the doctoral level</b>. Supplements are up to $6,000, and the duration period is two to six months.",
        },
        {
            title: "Postdoctoral Fellowships (PDF) Programme",
            link: "https://www.nserc-crsng.gc.ca/Students-Etudiants/PD-NP/PDF-BP_eng.asp",
            description: "The PDF Programme from the Natural Sciences and Engineering Research Council of Canada provides support to a core of the most promising researchers at a pivotal time in their careers. To be considered eligible for support, applicants must be <b>Canadian citizens, permanent residents of Canada or Protected Persons under subsection 95(2) of the <i>Immigration and Refugee Protection Act</i></b>, and hold or expect to hold a doctorate in one of the fields of research that NSERC supports. You may hold a PDF abroad only if you have received your doctorate from a Canadian institution. The award provides an annual stipend for two years.",
        }
    ]

    useEffect(() => {
        document.title = 'BRL - Join';
        return () => {
            document.title = 'My React App'; // This is optional and will reset the title when the component unmounts.
        };
    }, []); // Empty dependency array ensures this runs only once when the component mounts.

    return (
        <div className="Join_the_Lab">
            <NavBar />

            <Container>
                <div className="first_section">
                    <div className="title_section">
                        <h3><b>Are you interested in building robotics, human-building interaction, smart buildings, building energy efficiency, and/or building simulation?</b></h3>
                        <h1><b>Become the newest member of the Building Robotics Lab!</b></h1>
                    </div>
                    <div className="lab_bio">
                        <p>We are a diverse group of individuals who are passionate about exploring new ideas and developing innovative solutions that make a positive impact on society.</p>
                        <p>The culture here believes in fostering open communication, mutual respect, and a strong work ethic to promote a supportive and inclusive community for everyone.</p>
                        <p>During your tenure, you will have the opportunity to grow your personal and professional skills while working towards shared research goals.</p>
                    </div>
                    <div className="HomeButtons">
                        <Link to="/research"><p id='JoinButton'>CLICK HERE FOR INDUSTRY PARTNERSHIP</p></Link>
                    </div>
                </div>
            </Container>

            <Container useOrange={true}>
                <div className="second_section">
                    <div className="title_section">
                        <h2><b>How to apply</b></h2>
                    </div>

                    <div className="apply_section">
                        <div className="position">
                            <h4><b>Postdoctoral Scholars</b></h4>
                        </div>
                        <div className="position_information">
                            <p>I am constantly eager to receive communication from individuals who are close to finishing their studies or who have completed their doctoral studies, and are currently involved in research related to smart and sustainable building science. These individuals should have an interest in exploring building robotics, building energy efficiency, thermal comfort, human-centred AI, IEQ, human-building interaction, or other related disciplines. These individuals are expected to primarily be independent and have showcased a portfolio of research expertise at this point in their career, and will continue to do so in the Lab by investigating new research avenues, taking part in grant funding, and advising younger members. I am willing to collaborate with those who express an interest in these areas of study to create proposals for funding as well.
                                <br /><br />To contact me, please send an email to <a href="mailto:ghahramani@nus.edu.sg"><b>ghahramani@nus.edu.sg</b></a> with the subject line, <b>"Prospective Postdoctoral Scholar Position - [last name]."</b></p>
                        </div>
                    </div>

                    <div className="apply_section">
                        <div className="position">
                            <h4><b>PhD Applicants</b></h4>
                        </div>
                        <div className="position_information">
                            <p>Prospective PhD students are encouraged to apply to the <a href="https://cde.nus.edu.sg/dbe/graduate/phd-msc-building" target="_blank"><b>Built Environment</b></a> PhD program. I will also consider applicants to the <a href="https://cde.nus.edu.sg/cee/graduate/research-based-programmes/" target="_blank"><b>Civil & Environmental Engineering</b></a>, <a href="https://cde.nus.edu.sg/arch/programmes/higher-degrees-by-research/" target="_blank"><b>Architecture</b></a>, and <a href="https://cde.nus.edu.sg/graduate/graduate-programmes-by-research/doctor-of-engineering-eng-d/" target="_blank"><b>Engineering Doctorate</b></a> programs. Please mention my name, Asst Prof Ghahramani, in your statement of purpose as this will ensure it is sent to me for review, since potential PhD applications are processed by the corresponding department.
                                <br /><br />Interested students should email <a href="mailto:ghahramani@nus.edu.sg"><b>ghahramani@nus.edu.sg</b></a> with the subject line, <b>"Prospective PhD Student - [last name]."</b> Please include a copy of your CV with a detailed explanation of how your research interests and experiences coincide with the Lab's themes. Broad emails that do not convey your fit with the lab will not be returned.</p>
                        </div>
                    </div>

                    <div className="apply_section">
                        <div className="position">
                            <h4><b>Visiting PhD Students<br />Visiting Graduate Students</b></h4>
                        </div>
                        <div className="position_information">
                            <p>The Lab and I are constantly welcoming visiting PhD students. If interested, please feel free to reach out through email at <a href="mailto:ghahramani@nus.edu.sg"><b>ghahramani@nus.edu.sg</b></a> with the subject line, <b>"Prospective Visiting PhD Student - [last name]"</b> to inquire if there is a current vacancy and, if so, we will coordinate a meeting to discuss the process.
                                <br /><br />Additionally, in some cases, MSc, MEng, and MArch students from foreign universities have visited the Lab to complete their disseration with me when their institution has an established program to do so. If you are someone who would also be interested in this collaboration opportunity, please contact me through email at <a href="mailto:ghahramani@nus.edu.sg"><b>ghahramani@nus.edu.sg</b></a> with the subject line, <b>"Prospective Visiting Graduate Student - [last name]"</b> to inquire if there is a current vacancy and, if so, we will coordinate a meeting to discuss the process.
                                <br /><br />For both above opportunities, please include a copy of your CV, with a detailed explanation of how your research interests and experiences coincide with the Lab's themes, along with a short proposal of the research you plan to conduct in the Lab. These individuals should have an interest in exploring building robotics, building energy efficiency, thermal comfort, human-centred AI, IEQ, human-building interaction, or related disciplines.</p>
                        </div>
                    </div>

                    <div className="apply_section">
                        <div className="position">
                            <h4><b>Graduate Students<br />Undergraduate Students</b></h4>
                        </div>
                        <div className="position_information">
                            <p>In certain scenarios, I will also consider current NUS BSc, BEng, BArch, MSc, MEng, and MArch students to join the Lab for a researcher position. First, it is important to become acquainted with myself by taking one of my classes: <b>PF3502</b> (<a href="https://nusmods.com/modules/PF3502/smart-facilities" target="_blank"><b>Smart Facilities</b></a>) or <b>BPS5226</b> (<a href="https://nusmods.com/modules/BPS5226/smart-buildings-and-facilities" target="_blank"><b>Smart Buildings and Facilities</b></a>), or conducting your final year project with me. Then, after completing at least one of these options, you are welcome to reach out to me at <a href="mailto:ghahramani@nus.edu.sg"><b>ghahramani@nus.edu.sg</b></a> to discuss if I have any current research opportunities for BSc or MSc students, either for academic credit or paid employment.</p>
                        </div>
                    </div>

                    <div className="apply_section">
                        <div className="position">
                            <h4><b>Current Opportunities</b></h4>
                        </div>
                        <div className="position_information">
                            <p>There is available workload and physical space in the Lab, but only by scholarship at the moment (as of August 2023).</p>
                        </div>
                    </div>

                    <div className="apply_section last_section">
                        <div className="position">
                            <h4><b>Funding</b></h4>
                        </div>
                        <div className="position_information">
                            <p className='sub_title'><b>Open Eligibility</b></p>
                            {openEligibility.map((item, index) => (
                                <ScholarshipItem
                                    key={index}
                                    title={item.title}
                                    link={item.link}
                                    description={item.description}
                                />
                            ))}
                            <br /><br />

                            <p className='sub_title'><b>Country-specific Eligibility</b></p>
                            {countrySpecificEligibility.map((item, index) => (
                                <ScholarshipItem
                                    key={index}
                                    title={item.title}
                                    link={item.link}
                                    description={item.description}
                                />
                            ))}
                            <br /><br />

                            <p className='sub_title'><i>*Further details regarding elibility, award details, application procedure, award period, and other can be found at the corresponding hyperlinks.</i></p>
                            <p className='sub_title'><i>**This is by no means an exhaustive list. If you don't see a scholarship opportunity that applies to you (or there aren't enough to feel comfortable about your chances), please mention so in your introductory email to me and I will gladly work with you to help find additional possibilities for funding.</i></p>
                        </div>
                    </div>
                    <p className='small_note'><i>*Please allow up to two weeks for a response before following up. Thank you very much!</i></p>

                    <div className="HomeButtons">
                        <Link to="mailto:ghahramani@nus.edu.sg" target='_blank'><p id='JoinButton'>EMAIL THE PI</p></Link>
                    </div>
                </div>
            </Container>

            <Footer />
        </div>
    );
}

export default Join_the_Lab;

function ScholarshipItem({ title, link, description }) {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <li>
            <b onClick={() => setShowDescription(!showDescription)}>{title} <i className="arrow down"></i></b>
            {showDescription && (
                <div style={{ marginLeft: '1.4em', marginBottom: "1rem" }}>
                    <span dangerouslySetInnerHTML={{ __html: description }}></span> <a href={link} target="_blank" rel="noopener noreferrer">[link]</a>
                </div>
            )}
        </li>
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

const customStyles = {
    control: () => ({
        display: 'none'
    }),
    menu: base => ({
        ...base,
        zIndex: 1000,
        position: 'absolute',
        top: '10px',
        left: '-75px',
        width: '250px',
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isFocused ? 'lightgreen' : (state.isSelected ? 'rgb(45, 99, 83)' : base.backgroundColor),
        ':active': {
            backgroundColor: 'green'
        }
    }),
};
