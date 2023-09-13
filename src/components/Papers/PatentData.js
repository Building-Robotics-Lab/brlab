const PatentData = [
    {
        year: "2022",
        publications: [
            {
                title: "Ultrasonic anemometers systems for sensing air flows in rooms and ducts",
                patent: "U.S. Patent Application 17/496,239",
                authors: [
                    { name: "Arens, E.A." },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" },
                    { name: "Peffer, T." },
                    { name: "Raftery, P." },
                    { name: "Zhang, H." },
                    { name: "Anderson, M.P." }
                ],
                minRead: "3-minute read",
                profiles: [ "Prof" ]
            },
        ],
    },
    {
        year: "2017",
        publications: [
            {
                title: "IGlass: infrared thermography for learning thermoregulation performance",
                patent: "U.S. Patent Application 15/403,599",
                authors: [
                    { name: "Becerik-Gerber, B." },
                    { name: "Castro, G." },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" },
                    { name: "University of Southern California USC" },
                ],
                minRead: "3-minute read",
                profiles: [ "Prof" ]
            },
        ],
    },
    {
        year: "2014",
        publications: [
            {
                title: "Human-building interaction framework for personalized comfort driven system operations in buildings",
                patent: "U.S. Patent Application 14/213,475",
                authors: [
                    { name: "Becerik-Gerber, F.J." },
                    { name: "Castro, G." },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" },
                    { name: "University of Southern California USC" },
                ],
                minRead: "3-minute read",
                profiles: [ "Prof" ]
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
        publication.individual_paper_link = "https://building-robotics-lab.github.io/brlab/#/individual_publication/" + generateIdFromTitle(publication.title);
    });
});

export default PatentData;