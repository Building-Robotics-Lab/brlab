const PatentData = [
    {
        year: "2022",
        publications: [
            {
                title: "Ultrasonic anemometers systems for sensing air flows in rooms and ducts",
                patent: "U.S. Patent Publication: US 2022/0099697 A1",
                authors: [
                    { name: "Edward A. Arens" },
                    { name: "Ali Ghahramani", link: "/team#prof_profile" },
                    { name: "Therese Peffer" },
                    { name: "Paul Raftery" },
                    { name: "Hui Zhang" },
                    { name: "Michael P. Anderson" }
                ],
                minRead: "",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://patents.google.com/patent/US20220099697A1/en" },
                    { type: "PDF", url: "https://patentimages.storage.googleapis.com/bd/5b/42/41a2eaf43fbaf0/US20220099697A1.pdf" }
                ],
                abstract: "Systems and devices for airflow measurements in rooms and air delivery ducts with low-cost, low-power, accurate, calibration-free, and compact wireless airflow sensors are provided. The system uses room and duct flow sonic anemometers and processing to measure air velocities and temperatures as well as allow control over the environmental conditioning systems. The anemometers use arrays of transmitter/receivers to simultaneously measure multiple sound paths and determine velocity vectors and volumetric flow paths. By transmitting in both directions along the paths between transceivers, differential times of flight (TOF) are measured. These determine both the velocity and temperature of the air along each path."
            },
        ],
    },
    {
        year: "2017",
        publications: [
            {
                title: "IGlass: infrared thermography for learning thermoregulation performance",
                patent: "U.S. Patent Publication: US 2017/0265755 A1",
                authors: [
                    { name: "Burcin Becerik-Gerber" },
                    { name: "Guillermo Castro" },
                    { name: "Ali Ghahramani", link: "/team#prof_profile" }
                ],
                minRead: "",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://patents.google.com/patent/US20170265755A1/en" },
                    { type: "PDF", url: "https://patentimages.storage.googleapis.com/10/63/4a/21c74dfe901123/US20170265755A1.pdf" }
                ],
                abstract: "An infrared thermography based technique is described for monitoring an individual's thermoregulation performance and thermal comfort level through measuring the skin temperature on several points the face as the face has a high density of blood vessels and it is typically not covered by clothing. This technique allows for continuous monitoring during normal daily activities and instantaneous identification of thermoregulation performance and thermal comfort. The vascular territories in addition to vasodilation and vasoconstriction of the blood vessels can be used to estimate personal thermal comfort levels. Systems for implementing the technique are described, and can include one or more infrared sensors implemented on glasses for detecting temperature. Data from the sensors is processed by a suitable processor and memory. The processor can continuously monitor the person's blood vessels shrinking and widening which represents thermoregulation performance. Uncomfortable/harmful conditions can be detected by monitoring trends in measurements before the conditions actually occur."
            },
        ],
    },
    {
        year: "2014",
        publications: [
            {
                title: "Human-building interaction framework for personalized comfort driven system operations in buildings",
                patent: "U.S. Patent Publication: US 2014/0277765 A1",
                authors: [
                    { name: "Farrokh Jazizadeh Karimi" },
                    { name: "Burcin Becerik-Gerber" },
                    { name: "Michael D. Orosz" },
                    { name: "Tatiana Kichkaylo" },
                    { name: "Ali Ghahramani", link: "/team#prof_profile" }
                ],
                minRead: "",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://patents.google.com/patent/US20140277765A1/en" },
                    { type: "PDF", url: "https://patentimages.storage.googleapis.com/cb/e0/85/a94dd429ee3314/US20140277765A1.pdf" }
                ],
                abstract: "A computer data processing system may provide control information for controlling how an environmental control system controls an environment within a building. The computer data processing system may receive and store reports from multiple users and/or may receive and store reports at different times from a user. Each report may provide information concerning how the user perceives the comfort level of the user's environment at the time the user supplies the information. The computer data processing system may determine and generate the control information for controlling how the environmental control system controls the environment based on the information concerning how each user perceives the comfort level of the user's environment at the time each user provides the information. In addition or instead, the computer data processing system may determine and generate such control information based on the information concerning how a user perceives the comfort level of the user's environment at the different times the user supplies the information."
            },
        ],
    }
];
// Function to generate ID from the title
const generateIdFromTitle = (title) => {
    // Take the first two words from the title
    const firstTwoWords = title.split(" ").slice(0, 2).join("_").toLowerCase();
    return firstTwoWords;
};

// Loop through the years
PatentData.forEach((yearData) => {
    // Loop through the publications for each year
    yearData.publications.forEach((publication) => {
        // Generate and assign the unique ID
        publication.id = generateIdFromTitle(publication.title);
        publication.individual_paper_link = "/individual_publication/" + generateIdFromTitle(publication.title);
    });
});

const getWordsPerMinute = (title, patent, abstract) => {
    let title_word_count = title.split(' ').length;
    let patent_word_count = patent.length;
    let abstract_word_count = abstract.split(' ').length;

    const wordCount = title_word_count + patent_word_count + abstract_word_count;
    const wordsPerMinute = 200;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    return readingTime;
}

PatentData.forEach((yearData) => {
    // Loop through the publications for each year
    yearData.publications.forEach((publication) => {
        let readingTime = getWordsPerMinute(publication.title, publication.patent, publication.abstract);
        publication.minRead = `${readingTime}-minute read`
    });
});

export default PatentData;