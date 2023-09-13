const ConferenceData = [
    {
        year: "2019",
        publications: [
            {
                title: "Towards democratization of digital twins: Design principles for transformation into a human-building interface",
                conference: "Building and Environment",
                page: "244",
                month: "October",
                authors: [
                    { name: "Lee, K.S." },
                    { name: "Lee, J.J." },
                    { name: "*Aucremanne, C.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal" },
                    { name: "*Shah, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: [ "Riccardo", "Ilyas", "Prof" ]
            },
        ],
    },
    {
        year: "2017",
        publications: [
            {
                title: "Title",
                conference: "conference",
                page: "page",
                month: "month",
                authors: [
                    { name: "Lee, K.S." },
                    { name: "Lee, J.J." },
                    { name: "*Aucremanne, C.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal" },
                    { name: "*Shah, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: [ "Riccardo", "Ilyas", "Prof" ]
            },
        ],
    },
    {
        year: "2015",
        publications: [
            {
                title: "Title",
                conference: "conference",
                page: "page",
                month: "month",
                authors: [
                    { name: "Lee, K.S." },
                    { name: "Lee, J.J." },
                    { name: "*Aucremanne, C.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal" },
                    { name: "*Shah, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: [ "Riccardo", "Ilyas", "Prof" ]
            },
            {
                title: "Title",
                conference: "conference",
                page: "page",
                month: "month",
                authors: [
                    { name: "Lee, K.S." },
                    { name: "Lee, J.J." },
                    { name: "*Aucremanne, C.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal" },
                    { name: "*Shah, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: [ "Riccardo", "Ilyas", "Prof" ]
            },
            {
                title: "Title",
                conference: "conference",
                page: "page",
                month: "month",
                authors: [
                    { name: "Lee, K.S." },
                    { name: "Lee, J.J." },
                    { name: "*Aucremanne, C.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal" },
                    { name: "*Shah, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: [ "Riccardo", "Ilyas", "Prof" ]
            },
            {
                title: "Title",
                conference: "conference",
                page: "page",
                month: "month",
                authors: [
                    { name: "Lee, K.S." },
                    { name: "Lee, J.J." },
                    { name: "*Aucremanne, C.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal" },
                    { name: "*Shah, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: [ "Riccardo", "Ilyas", "Prof" ]
            },
        ],
    },
    {
        year: "2013",
        publications: [
            {
                title: "Title",
                conference: "conference",
                page: "page",
                month: "month",
                authors: [
                    { name: "Lee, K.S." },
                    { name: "Lee, J.J." },
                    { name: "*Aucremanne, C.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal" },
                    { name: "*Shah, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: [ "Riccardo", "Ilyas", "Prof" ]
            },
        ],
    },
];
// Function to generate ID from the title
const generateIdFromTitle = (title) => {
    // Take the first two words from the title
    const firstTwoWords = title.split(" ").slice(0, 2).join("_").toLowerCase();
    return firstTwoWords;
};

// Loop through the years
ConferenceData.forEach((yearData) => {
    // Loop through the publications for each year
    yearData.publications.forEach((publication) => {
        // Generate and assign the unique ID
        publication.id = generateIdFromTitle(publication.title);
        publication.individual_paper_link = "https://building-robotics-lab.github.io/brlab/#/individual_publication/" + generateIdFromTitle(publication.title);
    });
});

export default ConferenceData;