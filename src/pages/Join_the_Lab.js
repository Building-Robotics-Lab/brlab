import React, { useEffect, useState, useRef } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import './Join_the_Lab.css'
import Select, { components } from 'react-select';

function Join_the_Lab() {

    const openEligibility = [
        {
            title: "NUS Presidential Fellowship",
            link: "https://www.nus.edu.sg/careers/NUS-Presidential-Fellowship.pdf",
            description: "Applicants to the NUS Presidential Fellowship have obtained their PhD within the past year or will be within the next year, have displayed exceptional intellectual ability to produce original work of the highest quality, and exhibited a strong potential to lead their research projects. In return, the awardees will receive a 2-year fellowship with automatic conversion to Tenure Track Assistant Professor with an internationally competitive salary package and start-up research grant, among other features.",
            tags: {
                position: ["Post-Doc"],
                country: ["Open to all Countries"],
                duration: ["1-2 years", "2+ years"]
            }
        },
        {
            title: "President's Graduate Fellowship",
            link: "https://nusgs.nus.edu.sg/scholarships-list/",
            description: "Awarded to PhD candidates who show exceptional promise or accomplishment in research. A number of PhD candidates are selected each semester by the University for the award. The following Fellowships are donor-funded: President’s Graduate Fellowship (funded by Lee Kong Chian Scholarship) and President’s Graduate Fellowship (funded by Jasmine Scholarship). Additionally, the candidate must have an exemplary academic record, strong research potential, and strong ethical character and high potential to succeed in the PhD program.",
            tags: {
                position: ["PhD"],
                country: ["Open to all Countries"],
                duration: ["2+ years"]
            }
        },
        {
            title: "NUS Research Scholarship",
            link: "https://nusgs.nus.edu.sg/scholarships-list/",
            description: "Awarded to outstanding graduate students for research leading to a higher degree at the University. The Scholarship consists of a monthly stipend plus a tuition fee subsidy. The candidate must have graduated with an undergraduate degree with at least Second Class Honours or equivalent, have been offered admission to a full-time graduate research programme at NUS, and be eligible for MOE subsidy.",
            tags: {
                position: ["PhD"],
                country: ["Open to all Countries"],
                duration: ["2+ years"]
            }
        },
        {
            title: "A*STAR Graduate Scholarship",
            link: "https://www.a-star.edu.sg/Scholarships/for-graduate-studies/a-star-graduate-scholarship-singapore",
            description: "Awarded to all nationalities, the candidate must satisfy criteria for and seek admission to a PhD or EngD programme, have obtained at least a Second Upper Class Honours or equivalent, and have a strong interest in a research career. The award consists of full tuition fees, a monthly sustenance allowance, and support for up to 12 months of overseas attachment.",
            tags: {
                position: ["PhD"],
                country: ["Open to all Countries"],
                duration: ["2+ years"]
            }
        },
        {
            title: "NUS Tuition Fee Allowance",
            link: "https://nusgs.nus.edu.sg/scholarships-list/",
            description: "Awarded to outstanding graduate students for research leading to a higher degree at the University. The award does not consist of a monthly stipend. Additionally, the candidate must have graduated with an undergraduate degree with at least Second Class Honours or equivalent, have been offered admission to a full-time higher degree by research at NUS, and be eligible for MOE subsidy.",
            tags: {
                position: ["PhD"],
                country: ["Open to all Countries"],
                duration: ["2+ years"]
            }
        },
        {
            title: "Branco Weiss Fellowship",
            link: "https://brancoweissfellowship.org/",
            description: "Offers an opportunity for postdocs in all areas of the natural and social sciences and engineering who have conceived an original and independent research idea that falls outside the scope of large-scale research projects. Fellows are encouraged to choose the best possible location for their research, anywhere in the world. They will receive support for up to five years. They decide themselves how the financial resources will be allocated.",
            tags: {
                position: ["Post-Doc"],
                country: ["Open to all Countries"],
                duration: ["2+ years"]
            }
        },
        {
            title: "Meta Research PhD Fellowship",
            link: "https://research.facebook.com/fellowship/",
            description: "A global program designed to encourage and support promising doctoral students who are engaged in innovative and relevant research in areas related to computer science and engineering at an accredited university. Winners of the Fellowship are entitled to receive two years of paid tuition and fees, an annual stipend to cover living costs, various opportunities to engage with Meta researchers, and an invitation to the annual Fellowship summit.",
            tags: {
                position: ["PhD"],
                country: ["Open to all Countries"],
                duration: ["1-2 years"]
            }
        },
        {
            title: "NVIDIA Graduate Fellowship Programme",
            link: "https://research.nvidia.com/graduate-fellowships",
            description: "Have found this program to be a great way to support academia in its pursuit of cutting edge innovation, as well as an ideal avenue to introduce NVIDIA to the future leaders of our industry. It provides funding in the form of a single-year stipend to PhD students who are researching topics that will lead to major advanves in accelerated computing and its applications. NVIDIA particularly invites submissions from students pushing the envelope in artificial intelligence, robotics, autonomous vehicles, and related fields.",
            tags: {
                position: ["PhD"],
                country: ["Open to all Countries"],
                duration: ["One-time award"]
            }
        },
        {
            title: "Google PhD Fellowship",
            link: "https://research.google/outreach/phd-fellowship/",
            description: "Was created to recognize outstanding graduate students doing exceptional and innovative research in areas relevant to computer science and related fields. The award consists of up to a three-year fellowship, which includes a yearly stipend for living costs and research-related activities and a Google Research Mentor.",
            tags: {
                position: ["PhD"],
                country: ["Open to all Countries"],
                duration: ["2+ years"]
            }
        },
        {
            title: "Microsoft Research PhD Fellowship",
            link: "https://www.microsoft.com/en-us/research/academic-program/phd-fellowship/asia-pacific/",
            description: "Identifies the next generation of research leaders through a unique program that offers a combination of mentorship, research, networking, and academic opportunities to promosing young candidates. The award consists of a stipend for research initiatives and academic endeavors, the opportunity for intensive and individualized mentorship programs with a dedicated senior researcher, and the opportunity to attend the Microsoft Research Asia Academic Conference.",
            tags: {
                position: ["PhD"],
                country: ["Open to all Countries"],
                duration: ["One-time award"]
            }
        },
    ]

    const countrySpecificEligibility = [
        {
            title: "Lee Kuan Yew Scholarship",
            link: "https://www.psc.gov.sg/scholarships/postgraduate-scholarships/lee-kuan-yew-scholarship",
            description: "Applicants, who must be <b>Singapore citizens</b>, will be assessed holistically. This includes their track record of leadership and service (e.g. volunteer work, social enterprise, contributions to cultural, scientific and/or academic communities) as well as academic and professional achievements.",
            tags: {
                position: ["PhD"],
                country: ["Singapore"],
                duration: ["2+ years"]
            }
        },
        {
            title: "NUS-SINGA Scholarship",
            link: "https://www.a-star.edu.sg/Scholarships/for-graduate-studies/singapore-international-graduate-award-singa",
            description: "Open for application to all <b>international graduates</b> with a passion for research and excellent academic results, SINGA supports PhD studies in biomedical sciences, computing and information sciences, engineering and technology, and physical sciences. The award consists of tuition fees, a monthly stipend, an one-time airfare grant, and an one-time settling-in allowance.",
            tags: {
                position: ["PhD"],
                country: ["Non-Singaporean"],
                duration: ["2+ years"]
            }
        },
        {
            title: "Commonwealth Scholarship",
            link: "https://nusgs.nus.edu.sg/scholarships-list/",
            description: "Awarded to outstanding graduate students from <a href='https://thecommonwealth.org/our-member-countries' target='_blank'>Commonwealth countries</a> for research leading to a higher degree at the University. This scholarship is for new, incoming students who are <b>not Singapore citizens or permanent residents.</b> The Scholarship consists of a monthly stipend plus a tuition fee subsidy. A number of students are selected each semester by the University for the award. Additionally, the candidate must have graduated with an undergraduate degree with at least Second Class Honours or equivalent, have been offered admission to a full-time graduate research programme at NUS, and be eligible for MOE subsidy.",
            tags: {
                position: ["PhD"],
                country: ["Non-Singaporean", "Botswana", "Cameroon", "Gabon", "The Gambia", "Ghana", "Kenya", "Kingdom of Eswatini", "Lesotho", "Malawi", "Mauritius", "Mozambique", "Namibia", "Nigeria", "Rwanda", "Seychelles", "Sierra Leone", "South Africa", "Togo", "Uganda", "United Republic of Tanzania", "Zambia", "Bangladesh", "Brunei Darussalam", "India", "Malaysia", "Maldives", "Pakistan", "Sri Lanka", "Antigua and Barbuda", "The Bahamas", "Barbados", "Belize", "Canada", "Dominica", "Grenada", "Guyana", "Jamaica", "Saint Lucia", "St Kitts and Nevis", "St Vincent and The Grenadines", "Trinidad and Tobago", "Cyprus", "Malta", "United Kingdom", "Australia", "Fiji", "Kiribati", "Nauru", "New Zealand", "Papua New Guinea", "Samoa", "Solomon Islands", "Tonga", "Tuvalu", "Vanuatu"],
                duration: ["2+ years"]
            }
        },
        {
            title: "Schlumberger Foundation Faculty for the Future",
            link: "https://www.facultyforthefuture.net/",
            description: "Fellowships are awarded to <b>women from developing and emerging economies</b> who are preparing for PhD or post-doctoral studies in STEM disciplines to pursue advanced graduate study at top universities in their disciplines abroad. Grant receipients are selected as much for their leadership capabilities as for their scientific talents, and they are expected to return to their home countries to continue their careers and inspire other young women.",
            tags: {
                position: ["Post-Doc", "PhD"],
                country: ["Antigua and Barbuda", "Bangladesh", "Barbados", "Belize", "Botswana", "Brunei Darussalam", "Cambodia", "Cameroon", "Cyprus", "Dominica", "Fiji", "Gabon", "Ghana", "Grenada", "Guyana", "India", "Indonesia", "Jamaica", "Kenya", "Kingdom of Eswatini", "Kiribati", "Laos", "Lesotho", "Malawi", "Malaysia", "Maldives", "Malta", "Mauritius", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nigeria", "Pakistan", "Papua New Guinea", "Philippines", "Rwanda", "Saint Lucia", "Samoa", "Seychelles", "Sierra Leone", "Solomon Islands", "South Africa", "Sri Lanka", "St Kitts and Nevis", "St Vincent and The Grenadines", "Thailand", "The Bahamas", "The Gambia", "Togo", "Tonga", "Trinidad and Tobago", "Tuvalu", "Uganda", "United Republic of Tanzania", "Vanuatu", "Vietnam", "Zambia"],
                duration: ["2+ years"]
            }
        },
        {
            title: "SG Academies South-East Asia Fellowship (SASEAF) Programme",
            link: "https://snas.org.sg/aseanfellowship",
            description: "Aims to attract bright postgraduate researchers from South-East Asia to Singapore research institutions for a two-year long fellowship. SNAS will provide a monthly stipend, a travel allowance at the start and end of the fellowship period, and access to professional development opportunities. Applicants must be <b>citizens of an ASEAN country (not including Singapore) and non-Singapore-based</b>.",
            tags: {
                position: ["Post-Doc"],
                country: ["Brunei Darussalam", "Cambodia", "Indonesia", "Laos", "Malaysia", "Myanmar", "Philippines", "Thailand", "Vietnam"],
                duration: ["1-2 years"]
            }
        },
        {
            title: "Croucher Foundation Fellowship for Postdoctoral Research",
            link: "https://croucher.org.hk/funding/study_awards/postdoctoral_fellowships",
            description: "Intended to enable applicants who are <b>permanent residents of Hong Kong</b> to devote themselves to a period of full-time research in natural sciences, medicine or technology in approved academic institutions outside Hong Kong. The award consists of an annual maintenance allowance, air fare, arrival allowance, annual research allowance, annual academic development allowance, annual medical insurance, and an annual family allowance.",
            tags: {
                position: ["Post-Doc"],
                country: ["Hong Kong"],
                duration: ["1-2 years"]
            }
        },
        {
            title: "Postdoc.mobility Fellowships",
            link: "https://www.snf.ch/en/XIZpfY3iVS5KRRoD/funding/careers/postdoc-mobility",
            description: "The fellowships from the Swiss National Science Foundation (SNSF) are aimed at researchers who have done a doctorate and who wish to pursue a scientific or an academic career in Switzerland. Applicants must be of <b>Swiss nationality, holder of valid Swiss permanent residence, residence or cross-border commuter permit, married to a Swiss national or co-habiting with a Swiss national in a registered partnership, or at least 2 years of research activity at a Swiss research institution (for foreign nationals)</b>. The fellowships include a grant for subsistence costs, a flat-rate for travel expenses and a possible contribution to research and conference costs. The funding period is in principle 24 months (fellowship) and 3 to 12 months (return phase).",
            tags: {
                position: ["Post-Doc"],
                country: ["Switzerland"],
                duration: ["1-2 years"]
            }
        },
        {
            title: "Rubicon Program",
            link: "https://www.nwo.nl/en",
            description: "The Dutch Research Council (NWO) offers talented researchers who have completed their doctorates in the past year the chance to gain experience at a research institution outside the Kingdom of the Netherlands. Postgraduates who are currently engaged in doctoral research or who have been awarded a doctorate in the twelve months preceding the relevant deadline can submit a proposal, and in the five years directly preceding the submission deadline, <b>applicants must have conducted scientific research at an academic research institute in the Kingdom of the Netherlands for a period at least equivalent to three years full time</b>. The eligible costs are your salary including fringe benefits, travel expenses and a limited amount of research costs. Applicants can apply for a period of up to 24 months at an excellent research institute outside the Netherlands, but the minimum duration is 12 months.",
            tags: {
                position: ["Post-Doc"],
                country: ["Netherlands"],
                duration: ["1-2 years"]
            }
        },
        {
            title: "Fulbright U.S. Student Program",
            link: "https://us.fulbrightonline.org/countries/east-asia-pacific/singapore",
            description: "Offers two awards to U.S. students for 10 months of study/research at a Singaporean host institution. Applicants must be <b>citizens or nationals of the United States of America</b> at the time of the application deadline, and permanent residents are not eligible.",
            tags: {
                position: ["Visiting Researcher"],
                country: ["United States"],
                duration: ["0-12 months"]
            }
        },
        {
            title: "Canada Graduate Scholarships - Michael Smith Foreign Study Supplements (CGS-MSFSS)",
            link: "https://www.nserc-crsng.gc.ca/Students-Etudiants/PG-CS/CGSForeignStudy-BESCEtudeEtranger_eng.asp",
            description: "The Supplements from the Natural Sciences and Engineering Research Council of Canada support high-calibre Canadian graduate students in building global linkages and international networks through the pursuit of exceptional research experiences at research institutions abroad. They are available to <b>Canadian citizens, permanent residents of Canada or Protected Persons under subsection 95(2) of the <i>Immigration and Refugee Protection Act</i> (Canada) who hold a Canada Graduate Scholarship (CGS) at the master’s or doctoral level, or a Vanier CGS at the doctoral level</b>. Supplements are up to $6,000, and the duration period is two to six months.",
            tags: {
                position: ["Visiting Researcher"],
                country: ["Canada"],
                duration: ["0-12 months"]
            }
        },
        {
            title: "Postdoctoral Fellowships (PDF) Programme",
            link: "https://www.nserc-crsng.gc.ca/Students-Etudiants/PD-NP/PDF-BP_eng.asp",
            description: "The PDF Programme from the Natural Sciences and Engineering Research Council of Canada provides support to a core of the most promising researchers at a pivotal time in their careers. To be considered eligible for support, applicants must be <b>Canadian citizens, permanent residents of Canada or Protected Persons under subsection 95(2) of the <i>Immigration and Refugee Protection Act</i></b>, and hold or expect to hold a doctorate in one of the fields of research that NSERC supports. You may hold a PDF abroad only if you have received your doctorate from a Canadian institution. The award provides an annual stipend for two years.",
            tags: {
                position: ["Post-Doc"],
                country: ["Canada"],
                duration: ["1-2 years"]
            }
        }
    ]

    const [, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const scholarship_position = [
        { value: "All", label: "All" },
        { value: "Post-Doc", label: "Post-Doc" },
        { value: "PhD", label: "PhD" },
        { value: "Visiting Researcher", label: "Visiting Researcher" }
    ]
    const [position, setPosition] = useState([scholarship_position[0].value]);
    const scholarshipPosition = (selectedOptions) => {
        let selectedValues;

        // If nothing is selected, select 'All'
        if (!selectedOptions || selectedOptions.length === 0) {
            selectedValues = ['All'];
        }
        // If the latest selected option is 'All' and other options are selected
        else if (selectedOptions[selectedOptions.length - 1].value === 'All' && selectedOptions.length > 1) {
            selectedValues = ['All'];
        }
        // If the latest selected option is not 'All' and 'All' is among the selected options
        else if (selectedOptions[selectedOptions.length - 1].value !== 'All' && selectedOptions.some(option => option.value === 'All')) {
            selectedValues = selectedOptions.filter(option => option.value !== 'All').map(option => option.value).sort((a, b) => b - a);
        }
        // Any other scenario
        else {
            selectedValues = selectedOptions.map(option => option.value).sort((a, b) => b - a);
        }

        setPosition(selectedValues);

        // Update available options for the other dropdowns based on the selected duration
        if (selectedValues.length === 1) {
            updateAvailableOptionsForPosition(selectedValues[0]);
        } else {
            // Reset available options for position and country if multiple durations or none are selected
            setAvailableDurations(scholarship_position);
            setAvailableCountries(scholarship_country);
        }
    }


    const scholarship_country = [
        { value: "All", label: "All" },
        { value: "Open to all Countries", label: "Open to all Countries" },
        { value: "Non-Singaporean", label: "International/Non-Singaporean" },
        { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
        { value: "Australia", label: "Australia" },
        { value: "Bangladesh", label: "Bangladesh" },
        { value: "Barbados", label: "Barbados" },
        { value: "Belize", label: "Belize" },
        { value: "Botswana", label: "Botswana" },
        { value: "Brunei Darussalam", label: "Brunei Darussalam" },
        { value: "Cambodia", label: "Cambodia" },
        { value: "Cameroon", label: "Cameroon" },
        { value: "Canada", label: "Canada" },
        { value: "China", label: "China" },
        { value: "Cyprus", label: "Cyprus" },
        { value: "Dominica", label: "Dominica" },
        { value: "Fiji", label: "Fiji" },
        { value: "Gabon", label: "Gabon" },
        { value: "Ghana", label: "Ghana" },
        { value: "Grenada", label: "Grenada" },
        { value: "Guyana", label: "Guyana" },
        { value: "Hong Kong", label: "Hong Kong" },
        { value: "India", label: "India" },
        { value: "Indonesia", label: "Indonesia" },
        { value: "Jamaica", label: "Jamaica" },
        { value: "Kenya", label: "Kenya" },
        { value: "Kingdom of Eswatini", label: "Kingdom of Eswatini" },
        { value: "Kiribati", label: "Kiribati" },
        { value: "Laos", label: "Laos" },
        { value: "Lesotho", label: "Lesotho" },
        { value: "Malawi", label: "Malawi" },
        { value: "Malaysia", label: "Malaysia" },
        { value: "Maldives", label: "Maldives" },
        { value: "Malta", label: "Malta" },
        { value: "Mauritius", label: "Mauritius" },
        { value: "Mozambique", label: "Mozambique" },
        { value: "Myanmar", label: "Myanmar" },
        { value: "Namibia", label: "Namibia" },
        { value: "Nauru", label: "Nauru" },
        { value: "Netherlands", label: "Netherlands" },
        { value: "New Zealand", label: "New Zealand" },
        { value: "Nigeria", label: "Nigeria" },
        { value: "Pakistan", label: "Pakistan" },
        { value: "Papua New Guinea", label: "Papua New Guinea" },
        { value: "Philippines", label: "Philippines" },
        { value: "Rwanda", label: "Rwanda" },
        { value: "Saint Lucia", label: "Saint Lucia" },
        { value: "Samoa", label: "Samoa" },
        { value: "Seychelles", label: "Seychelles" },
        { value: "Sierra Leone", label: "Sierra Leone" },
        { value: "Singapore", label: "Singapore" },
        { value: "Solomon Islands", label: "Solomon Islands" },
        { value: "South Africa", label: "South Africa" },
        { value: "Sri Lanka", label: "Sri Lanka" },
        { value: "St Kitts and Nevis", label: "St Kitts and Nevis" },
        { value: "St Vincent and The Grenadines", label: "St Vincent and The Grenadines" },
        { value: "Switzerland", label: "Switzerland" },
        { value: "Thailand", label: "Thailand" },
        { value: "The Bahamas", label: "The Bahamas" },
        { value: "The Gambia", label: "The Gambia" },
        { value: "Togo", label: "Togo" },
        { value: "Tonga", label: "Tonga" },
        { value: "Trinidad and Tobago", label: "Trinidad and Tobago" },
        { value: "Tuvalu", label: "Tuvalu" },
        { value: "Uganda", label: "Uganda" },
        { value: "United Kingdom", label: "United Kingdom" },
        { value: "United Republic of Tanzania", label: "United Republic of Tanzania" },
        { value: "United States", label: "United States" },
        { value: "Vanuatu", label: "Vanuatu" },
        { value: "Vietnam", label: "Vietnam" },
        { value: "Zambia", label: "Zambia" }
    ]
    const [country, setCountry] = useState([scholarship_country[0].value]);
    const scholarshipCountry = (selectedOptions) => {
        let selectedValues;

        // If nothing is selected, select 'All'
        if (!selectedOptions || selectedOptions.length === 0) {
            selectedValues = ['All'];
        }
        // If the latest selected option is 'All' and other options are selected
        else if (selectedOptions[selectedOptions.length - 1].value === 'All' && selectedOptions.length > 1) {
            selectedValues = ['All'];
        }
        // If the latest selected option is not 'All' and 'All' is among the selected options
        else if (selectedOptions[selectedOptions.length - 1].value !== 'All' && selectedOptions.some(option => option.value === 'All')) {
            selectedValues = selectedOptions.filter(option => option.value !== 'All').map(option => option.value).sort((a, b) => b - a);
        }
        // Any other scenario
        else {
            selectedValues = selectedOptions.map(option => option.value).sort((a, b) => b - a);
        }

        setCountry(selectedValues);

        // Update available options for the other dropdowns based on the selected country
        if (selectedValues.length === 1) {
            updateAvailableOptionsForCountry(selectedValues[0]);
        } else {
            // Reset available options for position and duration if multiple countries or none are selected
            setAvailablePositions(scholarship_position);
            setAvailableDurations(scholarship_duration);
        }
    }

    const scholarship_duration = [
        { value: "All", label: "All" },
        { value: "0-12 months", label: "0-12 months" },
        { value: "1-2 years", label: "1-2 years" },
        { value: "2+ years", label: "2+ years" },
        { value: "One-time award", label: "One-time award" }
    ]
    const [duration, setDuration] = useState([scholarship_duration[0].value]);
    const scholarshipDuration = (selectedOptions) => {
        let selectedValues;

        // If nothing is selected, select 'All'
        if (!selectedOptions || selectedOptions.length === 0) {
            selectedValues = ['All'];
        }
        // If the latest selected option is 'All' and other options are selected
        else if (selectedOptions[selectedOptions.length - 1].value === 'All' && selectedOptions.length > 1) {
            selectedValues = ['All'];
        }
        // If the latest selected option is not 'All' and 'All' is among the selected options
        else if (selectedOptions[selectedOptions.length - 1].value !== 'All' && selectedOptions.some(option => option.value === 'All')) {
            selectedValues = selectedOptions.filter(option => option.value !== 'All').map(option => option.value).sort((a, b) => b - a);
        }
        // Any other scenario
        else {
            selectedValues = selectedOptions.map(option => option.value).sort((a, b) => b - a);
        }

        setDuration(selectedValues);

        // Update available options for the other dropdowns based on the selected duration
        if (selectedValues.length === 1) {
            updateAvailableOptionsForDuration(selectedValues[0]);
        } else {
            // Reset available options for position and country if multiple durations or none are selected
            setAvailablePositions(scholarship_position);
            setAvailableCountries(scholarship_country);
        }
    };


    // Extract the values from the scholarship_position, scholarship_country, and scholarship_duration for filtering
    const allPositions = scholarship_position.map(option => option.value);
    const allCountries = scholarship_country.map(option => option.value);
    const allDurations = scholarship_duration.map(option => option.value);

    // Function to determine the filter values based on selection
    const getFilterValues = (selected, allValues) => {
        return selected.includes("All") ? allValues : selected;
    }

    // Function to filter scholarships based on selected tags
    const filterScholarships = (scholarships, positions, countries, durations) => {
        const filterPositions = getFilterValues(positions, allPositions);
        const filterCountries = getFilterValues(countries, allCountries);
        const filterDurations = getFilterValues(durations, allDurations);

        return scholarships.filter(scholarship => {
            const positionMatch = filterPositions.some(position => scholarship.tags.position.includes(position));
            const countryMatch = filterCountries.some(country => scholarship.tags.country.includes(country));
            const durationMatch = filterDurations.some(duration => scholarship.tags.duration.includes(duration));

            return positionMatch && countryMatch && durationMatch;
        });
    }

    // Using the filter function
    const filteredOpenEligibilityScholarships = filterScholarships(openEligibility, position, country, duration);
    const filteredCountrySpecificEligibilityScholarships = filterScholarships(countrySpecificEligibility, position, country, duration);

    const [availablePositions, setAvailablePositions] = useState(scholarship_position);
    const [availableCountries, setAvailableCountries] = useState(scholarship_country);
    const [availableDurations, setAvailableDurations] = useState(scholarship_duration);

    const updateAvailableOptionsForPosition = (selectedPosition) => {
        // Filter scholarships based on the selected position
        const scholarships = [...openEligibility, ...countrySpecificEligibility];
        const filteredScholarships = scholarships.filter(scholarship => scholarship.tags.position.includes(selectedPosition));

        // Extract unique durations and countries from the filtered scholarships
        const newDurations = [...new Set(filteredScholarships.flatMap(scholarship => scholarship.tags.duration))];
        const newCountries = [...new Set(filteredScholarships.flatMap(scholarship => scholarship.tags.country))];

        if (selectedPosition === "All") {
            // If 'All' is selected, reset to all available options
            setAvailableDurations(scholarship_duration);
            setAvailableCountries(scholarship_country);
        } else {
            // Update the available options state WITHOUT updating the position dropdown
            if (!duration.includes("All") && duration.length === 1) {
                // Don't update the duration dropdown if a single duration is already selected
            } else {
                setAvailableDurations(scholarship_duration.filter(option => newDurations.includes(option.value)));
            }
            if (!country.includes("All") && country.length === 1) {
                // Don't update the country dropdown if a single country is already selected
            } else {
                setAvailableCountries(scholarship_country.filter(option => newCountries.includes(option.value)));
            }

        }
    }

    const updateAvailableOptionsForDuration = (selectedDuration) => {
        // Filter scholarships based on the selected duration
        const scholarships = [...openEligibility, ...countrySpecificEligibility];
        const filteredScholarships = scholarships.filter(scholarship => scholarship.tags.duration.includes(selectedDuration));

        // Extract unique positions and countries from the filtered scholarships
        const newPositions = [...new Set(filteredScholarships.flatMap(scholarship => scholarship.tags.position))];
        const newCountries = [...new Set(filteredScholarships.flatMap(scholarship => scholarship.tags.country))];

        if (selectedDuration === "All") {
            // If 'All' is selected, reset to all available options
            setAvailablePositions(scholarship_position);
            setAvailableCountries(scholarship_country);
        } else {
            // Update the available options state WITHOUT updating the duration dropdown
            if (!position.includes("All") && position.length === 1) {
                // Don't update the position dropdown if a single position is already selected
            } else {
                setAvailablePositions(scholarship_position.filter(option => newPositions.includes(option.value)));
            }
            if (!country.includes("All") && country.length === 1) {
                // Don't update the country dropdown if a single country is already selected
            } else {
                setAvailableCountries(scholarship_country.filter(option => newCountries.includes(option.value)));
            }
        }
    }

    const updateAvailableOptionsForCountry = (selectedCountry) => {
        // Filter scholarships based on the selected country
        const scholarships = [...openEligibility, ...countrySpecificEligibility];
        let filteredScholarships = scholarships.filter(scholarship => scholarship.tags.country.includes(selectedCountry));

        // Further filter the scholarships based on the currently selected position
        if (!position.includes("All")) {
            filteredScholarships = filteredScholarships.filter(scholarship => position.some(p => scholarship.tags.position.includes(p)));
        }

        // Extract unique positions and durations from the filtered scholarships
        const newPositions = [...new Set(filteredScholarships.flatMap(scholarship => scholarship.tags.position))];
        const newDurations = [...new Set(filteredScholarships.flatMap(scholarship => scholarship.tags.duration))];

        if (selectedCountry === "All") {
            // If 'All' is selected, reset to all available options
            setAvailablePositions(scholarship_position);
            setAvailableDurations(scholarship_duration);
        } else {
            // Update the available options state WITHOUT updating the country dropdown
            if (!position.includes("All") && position.length === 1) {
                // Don't update the position dropdown if a single position is already selected
            } else {
                setAvailablePositions(scholarship_position.filter(option => newPositions.includes(option.value)));
            }
            if (!duration.includes("All") && duration.length === 1) {
                // Don't update the duration dropdown if a single duration is already selected
            } else {
                setAvailableDurations(scholarship_duration.filter(option => newDurations.includes(option.value)));
            }
        }
    }


    const [isPositionOpen, setPositionOpen] = useState(false);
    const [isCountryOpen, setCountryOpen] = useState(false);
    const [isDurationOpen, setDurationOpen] = useState(false);
    const selectRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setPositionOpen(false);
                setCountryOpen(false);
                setDurationOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const Reset = () => {
        setPosition([scholarship_position[0].value]);
        setCountry([scholarship_country[0].value]);
        setDuration([scholarship_duration[0].value]);

        setAvailablePositions(scholarship_position);
        setAvailableCountries(scholarship_country);
        setAvailableDurations(scholarship_duration);
    }


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
                        <h3><b>Interested in smart buildings, building robotics, human-centred AI, building energy efficiency, human-building interaction, building simulation, thermal comfort, or IEQ?</b></h3>
                        <h1><b>Become the newest member of the Building Robotics Lab!</b></h1>
                    </div>
                    <div className="lab_bio">
                        <p>We are a diverse group of individuals who are passionate about exploring new ideas and developing innovative solutions that make a positive impact on society.</p>
                        <p>The culture here believes in fostering open communication, mutual respect, and a strong work ethic to promote a supportive and inclusive community for everyone.</p>
                        <p>You will have the opportunity to grow your personal and professional skills while working towards shared research goals.</p>
                    </div>
                    <div className="HomeButtons">
                        <Link to="/collaborations"><p id='JoinButton'>CLICK HERE FOR INDUSTRY PARTNERSHIPS</p></Link>
                    </div>
                </div>
            </Container>

            <Container useOrange={true}>
                <div className="second_section">
                    <div className="title_section">
                        <h2><b>How to Apply</b></h2>
                    </div>

                    <div className="apply_section">
                        <div className="position">
                            <h4><b>Postdoctoral Scholars</b></h4>
                        </div>
                        <div className="position_information">
                            <p>I am constantly eager to receive communication from individuals who are close to finishing their studies or who have completed their doctoral studies, and are currently involved in research related to smart and sustainable building science. These individuals should have an interest in exploring smart buildings, building robotics, human-centred AI, building energy efficiency, human-building interaction, building simulation, thermal comfort, IEQ, or other related disciplines. These individuals are expected to primarily be independent and have showcased a portfolio of research expertise at this point in their career, and will continue to do so in the Lab by investigating new research avenues, taking part in grant funding, and advising younger members. I am willing to collaborate with those who express an interest in these areas of study to create proposals for funding as well.
                                <br /><br />To contact me, please send an email to <a href="mailto:ghahramani@nus.edu.sg"><b>ghahramani@nus.edu.sg</b></a> with the subject line, <b>"Prospective Postdoctoral Scholar Position - [last name]."</b></p>
                        </div>
                    </div>

                    <div className="apply_section">
                        <div className="position">
                            <h4><b>PhD Applicants</b></h4>
                        </div>
                        <div className="position_information">
                            <p>Prospective PhD students are encouraged to apply to the <a href="https://cde.nus.edu.sg/dbe/graduate/phd-msc-building" target="_blank"><b>Built Environment</b></a> PhD program or the <a href="https://cde.nus.edu.sg/graduate/graduate-programmes-by-research/doctor-of-engineering-eng-d/" target="_blank"><b>Engineering Doctorate</b></a> program. I will also consider applicants with backgrounds in civil engineering, computer science, architecture, physics, or other related fields, but they must apply under the Department of the Built Environment for me to act as their primary supervisor. Please mention my name, Asst Prof Ghahramani, in your statement of purpose as this will ensure it is sent to me for review.
                                <br /><br />Interested students should email <a href="mailto:ghahramani@nus.edu.sg"><b>ghahramani@nus.edu.sg</b></a> with the subject line, <b>"Prospective PhD Student - [last name]."</b> Please include a copy of your CV with a detailed explanation of how your research interests and experiences coincide with the Lab's themes. Broad emails that do not convey your fit with the lab will not be returned.</p>
                        </div>
                    </div>

                    <div className="apply_section">
                        <div className="position">
                            <h4><b>Visiting PhD Students<br />Visiting Graduate Students</b></h4>
                        </div>
                        <div className="position_information">
                            <p>The Lab and I are constantly welcoming visiting PhD students. If interested, please feel free to reach out through email at <a href="mailto:ghahramani@nus.edu.sg"><b>ghahramani@nus.edu.sg</b></a> with the subject line, <b>"Prospective Visiting PhD Student - [last name]"</b> to inquire if there is a current vacancy and, if so, we will coordinate a meeting to discuss the process.
                                <br /><br />Additionally, in some cases, MSc, MEng, and MArch students from foreign universities have visited the Lab to complete their dissertation with me when their institution has an established program to do so. If you are someone who would also be interested in this collaboration opportunity, please contact me through email at <a href="mailto:ghahramani@nus.edu.sg"><b>ghahramani@nus.edu.sg</b></a> with the subject line, <b>"Prospective Visiting Graduate Student - [last name]"</b> to inquire if there is a current vacancy and, if so, we will coordinate a meeting to discuss the process.
                                <br /><br />For both above opportunities, please include a copy of your CV, with a detailed explanation of how your research interests and experiences coincide with the Lab's themes, along with a short proposal of the research you plan to conduct in the Lab. These individuals should have an interest in exploring smart buildings, building robotics, human-centred AI, building energy efficiency, human-building interaction, building simulation, thermal comfort, IEQ, or related disciplines.</p>
                        </div>
                    </div>

                    <div className="apply_section">
                        <div className="position">
                            <h4><b>Graduate Students<br />Undergraduate Students</b></h4>
                        </div>
                        <div className="position_information">
                            <p>In certain scenarios, I will also consider current NUS BSc, BEng, BArch, MSc, MEng, and MArch students to join the Lab for a researcher position. First, it is important to become acquainted with myself by taking one of my classes: <b>PF3502</b> (<a href="https://nusmods.com/modules/PF3502/smart-facilities" target="_blank"><b>Smart Facilities</b></a>) or <b>BPS5226</b> (<a href="https://nusmods.com/modules/BPS5226/smart-buildings-and-facilities" target="_blank"><b>Smart Buildings and Facilities</b></a>), or conducting your final year project with me. Then, after completing at least one of these options, you are welcome to reach out to me at <a href="mailto:ghahramani@nus.edu.sg"><b>ghahramani@nus.edu.sg</b></a> to discuss if I have any current research opportunities for undergraduate or graduate students, either for academic credit or paid employment.</p>
                        </div>
                    </div>

                    <div className="apply_section">
                        <div className="position">
                            <h4><b>Current Opportunities</b></h4>
                        </div>
                        <div className="position_information">
                            <p>There is available workload and physical space in the Lab (as of January 2024).</p>
                        </div>
                    </div>

                    <div className="apply_section last_section">
                        <div className="position">
                            <h4><b>Funding</b></h4>
                        </div>
                        <div className="position_information">
                            <div className='search_bars'>
                                <div className='scholarship_position' ref={selectRef}>
                                    <div onClick={() => { setPositionOpen(!isPositionOpen); setCountryOpen(false); setDurationOpen(false); }} style={{ cursor: 'pointer' }}>
                                        Position
                                        <i className="arrow2 down2"></i>
                                    </div>
                                    <Select styles={customStyles} isMulti options={availablePositions} value={scholarship_position.filter(option => position.includes(option.value))} onChange={scholarshipPosition} closeMenuOnSelect={false} onMenuOpen={() => setPositionOpen(true)} onMenuClose={() => setPositionOpen(false)} menuIsOpen={isPositionOpen} components={{ Option: InputOption }} hideSelectedOptions={false} />
                                </div>
                                <div className='scholarship_country'>
                                    <div onClick={() => { setCountryOpen(!isCountryOpen); setPositionOpen(false); setDurationOpen(false); }} style={{ cursor: 'pointer' }}>
                                        Country
                                        <i className="arrow2 down2"></i>
                                    </div>
                                    <Select styles={customStyles} isMulti options={availableCountries} value={scholarship_country.filter(option => country.includes(option.value))} onChange={scholarshipCountry} closeMenuOnSelect={false} onMenuOpen={() => setCountryOpen(true)} onMenuClose={() => setCountryOpen(false)} menuIsOpen={isCountryOpen} components={{ Option: InputOption }} hideSelectedOptions={false} />
                                </div>
                                <div className='scholarship_duration'>
                                    <div onClick={() => { setDurationOpen(!isDurationOpen); setPositionOpen(false); setCountryOpen(false); }} style={{ cursor: 'pointer' }}>
                                        Duration
                                        <i className="arrow2 down2"></i>
                                    </div>
                                    <Select styles={customStyles} isMulti options={availableDurations} value={scholarship_duration.filter(option => duration.includes(option.value))} onChange={scholarshipDuration} closeMenuOnSelect={false} onMenuOpen={() => setDurationOpen(true)} onMenuClose={() => setDurationOpen(false)} menuIsOpen={isDurationOpen} components={{ Option: InputOption }} hideSelectedOptions={false} />
                                </div>
                                <div className="HomeButtons">
                                    <Link onClick={Reset}><p id='JoinButton'>Reset</p></Link>
                                </div>
                            </div>
                            <p className='sub_title'><b>Open Eligibility</b></p>
                            {filteredOpenEligibilityScholarships.map((item, index) => (
                                <ScholarshipItem
                                    key={index}
                                    title={item.title}
                                    link={item.link}
                                    description={item.description}
                                />
                            ))}
                            <p className='sub_title'><b>Country-Specific Eligibility</b></p>
                            {filteredCountrySpecificEligibilityScholarships.map((item, index) => (
                                <ScholarshipItem
                                    key={index}
                                    title={item.title}
                                    link={item.link}
                                    description={item.description}
                                />
                            ))}
                            <p className='sub_title'><i>*Further details regarding elibility, award details, application procedure, award period, and other can be found at the corresponding hyperlinks.</i></p>
                            <p className='sub_title'><i>**This is by no means an exhaustive list. If you don't see a scholarship opportunity that applies to you (or there aren't enough to feel comfortable about your chances), please mention so in your introductory email to me and I will gladly work with you to help find additional possibilities for funding.</i></p>
                        </div>
                    </div>
                    <p className='small_note'><i>*Please allow up to two weeks for a response before following up. Thank you very much!</i></p>

                    <div className="HomeButtons">
                        <Link to="mailto:ghahramani@nus.edu.sg" target='_blank'><p id='JoinButton'>CONTACT US</p></Link>
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
            <span onClick={() => setShowDescription(!showDescription)}>{title} <i className="arrow down"></i></span>
            {showDescription && (
                <div style={{ marginLeft: '1.4em', marginBottom: "1rem" }}>
                    <span dangerouslySetInnerHTML={{ __html: description }}></span> <a href={link} target="_blank" rel="noopener noreferrer"><b>[link]</b></a>
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
        padding: getDynamicPadding(),
        ':active': {
            backgroundColor: 'rgb(45, 99, 83)'
        }
    }),
};
