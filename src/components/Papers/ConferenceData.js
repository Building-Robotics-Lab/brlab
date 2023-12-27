import AliPaper1 from './Publication Images/ghahr1-p4-ghahr-large.gif'
import AliPaper2 from './Publication Images/Screenshot 2023-11-19 at 20.50.54.png'
import AliPaper3 from './Publication Images/Screenshot 2023-11-19 at 20.55.33.png'
import AliPaper4 from './Publication Images/7408228-fig-1-source-large.gif'
import AliPaper5 from './Publication Images/7408505-fig-1-source-large.gif'

const ConferenceData = [
    {
        year: "2019",
        publications: [
            {
                title: "An Inexpensive Low-Power Ultrasonic 3-Dimensional Air Velocity Sensor",
                conference: "IEEE Sensors",
                page: "1-4",
                month: "October",
                location: "Montreal, QC, Canada",
                authors: [
                    { name: "Ali Ghahramani", link: "/team#prof_profile" },
                    { name: "Megan Zhu" },
                    { name: "Richard Przybyla" },
                    { name: "Michael Andersen" },
                    { name: "Syung Min" },
                    { name: "Hui Zhang" },
                    { name: "Therese Peffer" },
                    { name: "Edward Arens" }
                ],
                minRead: "",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1109/SENSORS43011.2019.8956901" }
                ],
                keywords: [
                    "Ultrasonic Anemometer",
                    "Pulsed Ultrasound",
                    "Indoor Anemometer",
                    "MEMS Ultrasound",
                    "3-Dimensional Air Velocity"
                ],
                abstract: "The ability to monitor the direction and speed of the air within buildings would enable closed-loop control of systems, improving occupants' comfort, health, and safety, and reducing building energy use. Leveraging inexpensive and low-power Micro-Electro-Mechanical Systems (MEMS) technology used in ultrasonic range-finding, we have developed a unique anemometer (i.e., air velocity sensor) that measures 3-dimensional air velocity for indoor environmental applications. The anemometer uses a novel tetrahedral arrangement of four ultrasonic transceivers, the minimum number of transducers required to capture a 3-dimensional flow. We describe in this paper the hardware and software of the anemometer, and the algorithms that eliminate or compensate for the shielding effects of its support struts and base. The angular and speed accuracies for the anemometer are unprecedented for an inexpensive instrument. In a speed range of 0 - 6 m/s, error averages are ±3% for air speed, 2.9° for yaw (azimuth) angle, and 2.3° for pitch (vertical declination) angle. The anemometer is simple to assemble and needs no calibration.",
                display_image: AliPaper1
            },
        ],
    },
    {
        year: "2018",
        publications: [
            {
                title: "Heating and cooling the human body with energy-efficient personal com-fort systems (PCS)",
                conference: "15th Conference of the International Society of Indoor Air Quality & Climate (ISIAQ)",
                page: "",
                month: "",
                location: "",
                authors: [
                    { name: "Maohui Luo" },
                    { name: "Hui Zhang" },
                    { name: "Edward Arens" },
                    { name: "Ali Ghahramani", link: "/team#prof_profile" },
                    { name: "Zhe Wang" },
                    { name: "Ling Jin" },
                    { name: "Yingdong He" },
                ],
                minRead: "",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://escholarship.org/uc/item/79q0m374#main" },
                    { type: "PDF", url: "https://escholarship.org/content/qt79q0m374/qt79q0m374.pdf?t=pm1r17" }
                ],
                keywords: [],
                abstract: "Personal comfort systems (PCS) aim to efficiently fulfill building occupants’ personal thermal comfort demands, but to date not many have been manufactured and evaluated. Based on the observation that foot/hand warming are most effective in cool conditions, and head cooling is most effective in warm environments, we built and tested a suite of PCS devices--heated in-sole, heated/cooled wristpad, small deskfan, heated/cooled chair--and evaluated the thermal effect of each device and of combinations of the four. Human-subject and thermal-manikin tests in a climate chamber under cool and warm conditions (18oC and 29oC) investigated the thermal comfort improvement and heating/cooling performance of these devices. The results show the devices to have remarkable heating/cooling efficiencies, with combined cooling COP of 3.6 and heating COP of 0.88. They significantly improved subjects’ whole body thermal acceptance and thermal comfort perception, with more than 80% of people accepting the test-ed ambient temperatures. The application of these PCS devices can correct up to 2.6K heating and 4.2K cooling of the ambient temperature towards neutral which may contribute to re-markable HVAC energy savings in buildings.",
                display_image: AliPaper2
            },
        ],
    },
    {
        year: "2017",
        publications: [
            {
                title: "Can Immersive Virtual Environments Be Used for Understanding Occupant-System Interactions Under Thermal Stimuli?",
                conference: "Proceedings of the Joint Conference on Computing in Construction (JC3)",
                page: "357-364",
                month: "July",
                location: "Heraklion, Greece",
                authors: [
                    { name: "Gokce Ozcelik" },
                    { name: "Burcin Becerik-Gerber" },
                    { name: "Ali Ghahramani", link: "/team#prof_profile" },
                    { name: "Yuchao Wang" }
                ],
                minRead: "",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://itc.scix.net/paper/lc3-2017-022" },
                    { type: "PDF", url: "https://itc.scix.net/pdfs/LC3_2017_paper_022.pdf" }
                ],
                keywords: [
                    "Immersive Virtual Environment",
                    "Virtual Reality",
                    "Physical Environment",
                    "Thermal Perception",
                    "Building Systems",
                    "Occupant-Building Systems Interactions"
                ],
                abstract: "Occupants' interactions with building systems, as well as occupant-related factors considerably influence a building's energy consumption. However, understanding occupant-system interactions related to thermal changes in built environments could be cumbersome due to the resources needed to create these environments or the resources needed for conducting controlled experiments in existing Physical Environments (PEs). One avenue is to use Immersive Virtual Environments (IVEs) where occupants' interactions with the built environment are measured in the context of thermal stimuli. However, for validating the adequacy of using IVEs for understanding occupant interactions with building systems and/or elements, it is imperative to first investigate if IVEs are proper representations of PEs. In this study, we benchmark IVEs to the PEs with regards to user perceptions relating to thermal stimuli. In a human subject experiment, we use surveys and subjective thermal votes both in the IVE and PE, where participants experience both hot and cold indoor thermal conditions. Perceived thermal comfort and satisfaction votes are analysed by using paired t-tests and ANOVA. The change parameters are defined for identifying the direction of perceived thermal comfort and satisfaction. Statistical inferences show that change in occupants' perceived thermal comfort and satisfaction in IVE and PE are not significantly different, and direction of the change is positive in majority of the cases (i.e., 100% of the participants were comfortable in PE, almost 95% of the participants were comfortable in IVE, 79 % were satisfied in PE, 74% were satisfied in IVE at the end of the experiment).",
                display_image: AliPaper3
            },
        ],
    },
    {
        year: "2015",
        publications: [
            {
                title: "Quantifying the influence of temperature setpoints, building and system features on energy consumption",
                conference: "Winter Simulation Conference (WSC)",
                page: "1000-1011",
                month: "December",
                location: "Huntington Beach, CA, USA",
                authors: [
                    { name: "Ali Ghahramani", link: "/team#prof_profile" },
                    { name: "Kanu Dutta" },
                    { name: "Zheng Yang" },
                    { name: "Gokce Ozcelik" },
                    { name: "Burcin Becerik-Gerber" }
                ],
                minRead: "",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1109/WSC.2015.7408228" },
                ],
                keywords: [],
                abstract: "HVAC systems are the major energy consumers in commercial buildings in the United States. Selection of setpoints impacts the amount of energy consumed by these systems. However, the influence of temperature setpoints on energy consumption and the potential energy savings are not yet fully identified. Through simulation this paper provides a systematic approach for quantifying the influence of different factors (i.e., construction category, climate, setpoint, and deadband) on building energy consumption. We implemented the approach on the medium-sized DOE reference office building of three construction categories in five climates using the EnergyPlus software. N-way ANOVA analysis ranked the factors as from the most influential to the least influential as: (1) construction category, (2) climate, (3) deadband, and (4) setpoint. Further analyses showed extending the deadband from 3 K to 6 K reduces energy consumption by 16.2%. Optimal annual setpoints varied across climates, and could lead to 6.63% average savings.",
                display_image: AliPaper4
            },
            {
                title: "Iterative reassignment algorithm: Leveraging occupancy based hvac control for improved energy efficiency",
                conference: "Winter Simulation Conference (WSC)",
                page: "3449-3460",
                month: "December",
                location: "Huntington Beach, CA, USA",
                authors: [
                    { name: "Zheng Yang" },
                    { name: "Ali Ghahramani", link: "/team#prof_profile" },
                    { name: "Burcin Becerik-Gerber" }
                ],
                minRead: "",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1109/WSC.2015.7408505" },
                ],
                keywords: [],
                abstract: "Building occupancy significantly impacts HVAC system energy consumption. Occupancy is stochastic in nature, and occupancy from different spaces could be heterogeneous, resulting in heterogeneous distributions of loads, therefore HVAC energy inefficiencies. This paper proposes a framework for conditionally redistributing loads by reassigning occupants at the building level for elevating the effects of occupancy based control, and simulates a real-world office building for validation. Predefined constraints are integrated, and an agglomerate hierarchical clustering-based reassignment algorithm is designed for iteratively assigning occupancy with zone adjacency, orientation, and HVAC layout being considered. Simulation results show that the integration of occupancy based control and occupant reassignment could save up to 9.6% of energy compared to simply applying occupancy based control (18.9% compared to the baseline control that is used in the building. The proposed framework helps reducing unnecessary loads and improves energy efficiency through better-informed decision making for occupancy based HVAC controls.",
                display_image: AliPaper5
            },
            {
                title: "A Study of Time-Dependent Variations in Personal Thermal Comfort via a Dynamic Bayesian Network",
                conference: "Sustainable Human–Building Ecosystems",
                page: "99-107",
                month: "September",
                location: "",
                authors: [
                    { name: "Ali Ghahramani", link: "/team#prof_profile" },
                    { name: "Chao Tang" },
                    { name: "Zheng Yang" },
                    { name: "Burcin Becerik-Gerber" },
                ],
                minRead: "",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1061/9780784479681.011" },
                ],
                keywords: [],
                abstract: "The current practice of defining operational settings for HVAC systems is to use fixed set points, which assumes static and same comfort requirements for building occupants. The majority of the research efforts in the literature study thermal comfort through time-invariant learning algorithms. However, thermal comfort has been shown to vary from person to person, and change over time due to climatic variations or acclimation. In this paper, we present thermal comfort variation results by studying the data from 33 human subjects and statistically evaluate and study the variations to learn similarities and differences among these individuals. In order to quantify the variations, we briefly describe our adaptive stochastic modeling technique. The technique uses a systematic approach for detecting time dependent thermal comfort variations for an individual. The results confirm that personal comfort vary over time (average: 0.061 °C per day). In addition, we observed a high standard deviation (0.159 °C) across the subjects’ preference variations."
            },
            {
                title: "Effects of Variant Occupancy Transitions on the Energy Implications of Setpoint/Setback Control Policies",
                conference: "Sustainable Human-Building Ecosystems",
                page: "90-98",
                month: "September",
                location: "",
                authors: [
                    { name: "Zheng Yang" },
                    { name: "Ali Ghahramani", link: "/team#prof_profile" },
                    { name: "Burcin Becerik-Gerber" },
                ],
                minRead: "",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1061/9780784479681.010" },
                ],
                keywords: [],
                abstract: "In commercial buildings, more than 40% of the energy is consumed by HVAC systems. There is usually a significant difference between energy demand and energy consumption in buildings. It has been widely recognized that occupancy is one of the most important factors impacting actual demands for HVAC systems. However, it is still not clear how and when occupancy should be integrated with HVAC systems at the building level for a long period of time. This is a complex problem as occupancy is variant in nature, and each day occupants have different presences. This paper systematically identifies the significance of variant transitions of occupant presence on the absolute energy efficiency and the relative performance of building level setpoint/setback control policies. An actual office building is used for implementing the proposed methodology. The results showed that the variant transitions of occupant presence have significant influences on the absolute energy efficiency but not on the relative performance of different setpoint/setback control policies."
            },
        ],
    },
    {
        year: "2013",
        publications: [
            {
                title: "Personalized Thermal Comfort-Driven Control in HVAC-Operated Office Buildings",
                conference: "Computing in Civil Engineering",
                page: "218-225",
                month: "August",
                location: "",
                authors: [
                    { name: "Farrokh Jazizadeh" },
                    { name: "Ali Ghahramani", link: "/team#prof_profile" },
                    { name: "Burcin Becerik-Gerber" },
                    { name: "Tatiana Kichkaylo" },
                    { name: "Michael Orosz" },
                ],
                minRead: "",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1061/9780784413029.028" },
                ],
                keywords: [],
                abstract: "Occupant comfort is a dominant influence on the performance of HVAC operations. Most HVAC system operations rely on industry standards to ensure satisfactory environmental conditions during occupancy. Despite the increasing building energy consumption rates, occupants are not usually satisfied with indoor conditions in commercial buildings. To address this issue, in this paper, a framework for integrating personalized comfort preferences into HVAC control logic is introduced. As part of the framework, a user proxy, a comfort profile learning algorithm, and a building management system (BMS) controller are presented. The performance of the framework in a real building setting has been evaluated. The framework was successful in a small-scale experiment in increasing efficiency by improving user comfort and slight decrease in collective energy consumption."
            },
        ],
    },
];
// Function to generate ID from the title
const generateIdFromTitle = (title) => {
    // Take the first two words from the title
    const firstTwoWords = title.split(" ").slice(0, 3).join("_").toLowerCase();
    return firstTwoWords;
};

// Loop through the years
ConferenceData.forEach((yearData) => {
    // Loop through the publications for each year
    yearData.publications.forEach((publication) => {
        // Generate and assign the unique ID
        publication.id = generateIdFromTitle(publication.title);
        publication.individual_paper_link = "/publication/" + generateIdFromTitle(publication.title);
    });
});

const getWordsPerMinute = (title, keyword, abstract) => {
    let title_word_count = title.split(' ').length;
    let keyword_word_count = keyword.length;
    let abstract_word_count = abstract.split(' ').length;

    const wordCount = title_word_count + keyword_word_count + abstract_word_count;
    const wordsPerMinute = 200;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    return readingTime;
}

ConferenceData.forEach((yearData) => {
    // Loop through the publications for each year
    yearData.publications.forEach((publication) => {
        let readingTime = getWordsPerMinute(publication.title, publication.keywords, publication.abstract);
        publication.minRead = `${readingTime}-minute read`
    });
});

export default ConferenceData;