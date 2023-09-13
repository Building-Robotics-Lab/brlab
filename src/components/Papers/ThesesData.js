const ThesesData = [
    {
        year: "2022",
        publications: [
            {
                title: "The sequential design optimization of building performance",
                university: "Loughborough University",
                authors: [
                    { name: "Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" }
                ],
                minRead: "3-minute read",
                profiles: [ "Riccardo" ]
            },
        ],
    },
    {
        year: "2016",
        publications: [
            {
                title: "Learning Personal Thermal Comfort and Integrating Personal Comfort Requirements into HVAC System Control Loop",
                university: "University of Southern California",
                authors: [
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
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
ThesesData.forEach((yearData) => {
    // Loop through the publications for each year
    yearData.publications.forEach((publication) => {
        // Generate and assign the unique ID
        publication.id = generateIdFromTitle(publication.title);
        publication.individual_paper_link = "https://building-robotics-lab.github.io/brlab/#/individual_publication/" + generateIdFromTitle(publication.title);
    });
});

export default ThesesData;