import KatePublication1 from './Publication Images/kate_pub1.png'
import RiccardoPublication1 from './Publication Images/riccardo_pub1.jpg'
import AliPublication1 from './Publication Images/1-s2.0-S0360132322010411-gr1_lrg.jpg'
import IqbalPublication1 from './Publication Images/iqbal_pub1.jpg'
import KaiPublication1 from './Publication Images/kai_pub1.png'
import AliPublication2 from './Publication Images/41598_2022_25047_Fig3_HTML.webp'
import AliPublication3 from './Publication Images/1-s2.0-S0360132322009118-gr1_lrg.jpg'
import AliPublication4 from './Publication Images/1-s2.0-S221462962200281X-gr2_lrg.jpg'
import AliPublication5 from './Publication Images/buildings-12-01241-g001.png'
import AliPublication6 from './Publication Images/sensors-22-03444-g006.png'
import AliPublication7 from './Publication Images/1-s2.0-S2352710221007580-gr3_lrg.jpg'
import AliPublication8 from './Publication Images/1-s2.0-S1364032121006456-gr3_lrg.jpg'
import AliPublication9 from './Publication Images/1-s2.0-S235271022100293X-ga1_lrg.jpg'
import AliPublication10 from './Publication Images/ina12735-fig-0002-m.jpg'

const JournalData = [
    {
        year: "2023",
        publications: [
            {
                title: "Towards democratization of digital twins: Design principles for transformation into a human-building interface",
                journal: "Building and Environment",
                volume: "244", issue: "",
                page: "110771",
                authors: [
                    { name: "Kate Sangwon Lee" },
                    { name: "Jung-Joo Lee" },
                    { name: "*Connor Aucremanne", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Connor" },
                    { name: "*Iqbal Shah", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Connor", "Iqbal", "Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.buildenv.2023.110771" }
                ],
                keywords: [
                    'Digital twin',
                    'Building management system',
                    'Occupant-centric building',
                    'Human-building interface',
                    'Democratization',
                    'Personal comfort'
                ],
                highlights: [
                    "Design principles for a digital twin as occupant-building interface were developed.",
                    "Occupants' needs for informed decision-making through digital twins are discovered.",
                    "Occupants are included as end users of digital twins for occupant-centric building."
                ],
                abstract: "While legacy building digital twins (DTs), such as building management systems, help building and facility managers to make informed decisions, the real end-users of buildings, i.e., occupants, have been considered as data informants without agency for access to and interaction with DT systems. This is due to the lack of multi-user interfaces for occupants to interact with building systems effectively with sufficient observability and controllability. The research on the design of multi-user interfaces has been limited to specialized services in public, shared spaces, or office-specific experiments and fails to produce detailed design principles. In this study, we explore the “democratization of DTs” as an occupant-building interface that invites occupants to monitor the building- and human-related data and make informed decisions. An occupant participatory approach was employed, consisting of a survey, an experience sampling method, and a co-design workshop, to understand occupants' current experiences with environmental controls and desired methods to interact with a DT system. The findings identified five interaction dimensions between occupants and a novel occupant-in-the-loop DT system that provides occupants with observability and controllability over building systems. Accordingly, we establish design principles for DT systems as an occupant-building interface that supports occupants’ dynamic contexts, intuitive controls, collaborative and balanced decision-making between personal comfort and energy consumption, as well as authority and data privacy.",
                display_image: KatePublication1
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Riccardo Talami", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Ilyas Dawoodjee", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://doi.org/10.1016/j.enbenv.2023.07.001" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints.",
                display_image: RiccardoPublication1
            },
            {
                title: "Smart detection of indoor occupant thermal state via infrared thermography, computer vision, and machine learning",
                journal: "Building and Environment",
                volume: "228", issue: "",
                page: "109811",
                authors: [
                    { name: "Yingdong He" },
                    { name: "Hui Zhang" },
                    { name: "Edward Arens" },
                    { name: "Alexander Merritt" },
                    { name: "Charlie Huizenga" },
                    { name: "Ronnen Levinson" },
                    { name: "Andy Wang" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" },
                    { name: "Ana Alvarez-Suarez" },
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.buildenv.2022.109811" }
                ],
                keywords: [
                    "Infrared thermography",
                    "Computer vision",
                    "Machine learning",
                    "Thermal comfort",
                    "Prediction model"
                ],
                highlights: [
                    "A novel approach is proposed to predict occupant thermal state via thermal camera.",
                    "Thermal infrared thermography, computer vision, and machine learning are combined.",
                    "Face and hand areas are detected and used to obtain statistical skin temperatures.",
                    "Absolute skin temperatures predicts thermal state with an accuracy up to 96%.",
                    "Temperature differences within and between the areas makes the accuracy up to 96%."
                ],
                abstract: "The ability to measure occupants’ thermal state in real time will enable major advances in the control of air conditioning systems. This study proposes predicting occupant thermal state by a combination of infrared thermography, computer vision, and machine learning. The approach (1) uses cheek, nose, and hand temperatures because they are least subject to blockage by hair, glasses, and clothing; (2) measures the distribution of skin temperatures within geometrically defined sub-areas of the face and hand; and (3) uses temperature differences within and between these areas to eliminate the effects of calibration drift that are unavoidable in thermal infrared (TIR) cameras. Two series of tests were conducted, respectively in an outdoor carport and an indoor environmental chamber, collecting a total of 48,422 sets of cheek, nose, and hand skin temperatures using a TIR camera and computer-vision technology, coupled with 715 subjective responses of thermal sensations. To predict occupant thermal state, Random Forest classification models were built using either absolute skin temperatures (the maximum and median temperatures of cheek and hand segments, and the temperature of the central spot on the nose), or intra- and inter-segment temperature differences of cheeks, hands, and nose. These measurements were found to accurately predict occupant thermal state. Using the maximum and median temperatures for cheek and nose, or for cheek and hand, predicts thermal state with an accuracy of 92–96%. Using only the intra- and inter-segment temperature differences from cheek and nose is 83% accurate; adding the hand temperature differences increases the accuracy to 96%.",
                display_image: AliPublication1
            },
            {
                title: "Thermal transfer and temperature reductions from shading systems on opaque facades: Quantifying the impacts of influential factors",
                journal: "Energy and Buildings",
                volume: "278", issue: "",
                page: "112604",
                authors: [
                    { name: "*Iqbal Shah", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal" },
                    { name: "Brian Soh" },
                    { name: "Caitlin Lim" },
                    { name: "Siu-Kit Lau" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Iqbal", "Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.enbuild.2022.112604" }
                ],
                keywords: [
                    "Façade shading",
                    "Building design optimization",
                    "Overall Thermal Transfer Value",
                    "Energy savings",
                    "Urban Heat Island and decarbonization"
                ],
                highlights: [
                ],
                abstract: "In recent years, with the rapid development of cities across the globe and global warming, Urban Heat Island (UHI) and building cooling energy consumption have reached a point of perilous concern. The use of shading systems on building fenestrations has long been known as an effective strategy to minimise façade heat gain as well as glare, resulting in lower cooling energy consumption and indoor comfort. Expending the potentials of shading systems beyond conventional use, the present paper focuses on the effects of shading systems on opaque facades that is currently unaccounted for in simplified Overall Thermal Transfer Value (OTTV) calculations in standards adopted by many countries. A field study was first conducted to compare the effects of various shading configurations on an opaque façade. Subsequently, a simulation study was then conducted to quantify the effects of shading systems on opaque facades with varying thermal transmittance value (U-Value). The results of this study revealed numerous benefits for the deployment of shading systems on opaque building facades, which includes, reduction to building conductive heat gain, building cooling loads, microclimate temperature near the façade, as well as potential reduction to carbon emissions over the building lifecycle. Moreover, the paper also provides considerations for the selection shading configurations, as well as the considerations that would be required for the formulation of a more accurate simplified OTTV equation that would take into account the effects of shading systems on opaque facades.",
                display_image: IqbalPublication1
            },
            {
                title: "Personal thermal comfort models based on physiological measurements – A design of experiments based review",
                journal: "Building and Environment",
                volume: "228", issue: "",
                page: "109919",
                authors: [
                    { name: "*CHEN Kai", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Kai" },
                    { name: "*Qian Xu" },
                    { name: "Berlynette Leow" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Kai", "Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.buildenv.2022.109919" }
                ],
                keywords: [
                    "Personal comfort model",
                    "Physiological sensing",
                    "Experiment planning",
                    "Comfort modeling",
                    "Machine learning",
                    "DOE"
                ],
                highlights: [
                ],
                abstract: "Researchers have shown that the physiological-based personal comfort models (PCM) are capable of addressing individual differences as well as transient thermal comfort. Given that physiological-based comfort modeling studies are often very resource-intensive, a well-developed Design of Experiment (DOE) framework could help by optimizing the experimental sequence and use of resources. This study critically reviewed 74 physiological-based PCMs studies and dissected each study based on a DOE framework, dividing the experiments into the experimental procedures, sequences and variables settings. The results indicate that skin temperature, subjects' thermal sensation and air temperature are the leading input variables for PCM. Additionally, the most dominant experiment settings include a 1-min physiological data sampling interval, 10 min interval for reporting thermal vote, a less than 3 h experimental duration, and a fixed clothing level. We found that the subjects' number is independent of the experimental duration (correlation coefficient of 0.0201). Different activity levels and submerging subjects' hands into hot water are also used as thermal stimuli, in addition to the change in air temperature. By applying diverse algorithms, the average predicting accuracy of PCM from selected studies could achieve 85%, and Support Vector Machines (SVM) shows a superior predicting performance. The prominent limitations of the existing studies include insufficient subject numbers, technical restrictions of sensing devices, cumbersome data collection interfaces, improper machine learning algorithms and lack of diversity consideration. Finally, the review suggested that more related studies in this field should be compiled for cross-validation, helping to trade off the most appropriate experiment designs corresponding to the study objectives.",
                display_image: KaiPublication1
            },
        ],
    },
    {
        year: "2022",
        publications: [
            {
                title: "The field of human building interaction for convergent research and innovation for intelligent built environments",
                journal: "Nature Scientific Reports",
                volume: "12", issue: "",
                page: "22092",
                authors: [
                    { name: "Burcin Becerik-Gerber" },
                    { name: "Gale Lucas" },
                    { name: "Ashrant Aryal" },
                    { name: "Mohamad Awada" },
                    { name: "Mario Bergés" },
                    { name: "Sarah Billington" },
                    { name: "Olga Boric-Lubecke" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" },
                    { name: "Arsalan Heydarian" },
                    { name: "Christoph Höelscher" },
                    { name: "Farrokh Jazizadeh" },
                    { name: "Azam Khan" },
                    { name: "Jared Langevin" },
                    { name: "Ruying Liu" },
                    { name: "Frederick Marks" },
                    { name: "Matthew Louis Mauriello" },
                    { name: "Elizabeth Murnane" },
                    { name: "Haeyoung Noh" },
                    { name: "Marco Pritoni" },
                    { name: "Shawn Roll" },
                    { name: "Davide Schaumann" },
                    { name: "Mirmahdi Seyedrezaei" },
                    { name: "John E. Taylor" },
                    { name: "Jie Zhao" },
                    { name: "Runhe Zhu" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "PDF", url: "https://www.nature.com/articles/s41598-022-25047-y.pdf" },
                    { type: "DOI", url: "https://doi.org/10.1038/s41598-022-25047-y" }
                ],
                keywords: [],
                highlights: [],
                abstract: "Human-Building Interaction (HBI) is a convergent field that represents the growing complexities of the dynamic interplay between human experience and intelligence within built environments. This paper provides core definitions, research dimensions, and an overall vision for the future of HBI as developed through consensus among 25 interdisciplinary experts in a series of facilitated workshops. Three primary areas contribute to and require attention in HBI research: humans (human experiences, performance, and well-being), buildings (building design and operations), and technologies (sensing, inference, and awareness). Three critical interdisciplinary research domains intersect these areas: control systems and decision making, trust and collaboration, and modeling and simulation. Finally, at the core, it is vital for HBI research to center on and support equity, privacy, and sustainability. Compelling research questions are posed for each primary area, research domain, and core principle. State-of-the-art methods used in HBI studies are discussed, and examples of original research are offered to illustrate opportunities for the advancement of HBI research.",
                display_image: AliPublication2
            },
            {
                title: "Ten questions concerning human-building interaction research for improving the quality of life",
                journal: "Building and Environment",
                volume: "226", issue: "",
                page: "109681",
                authors: [
                    { name: "Burcin Becerik-Gerber" },
                    { name: "Gale Lucas" },
                    { name: "Ashrant Aryal" },
                    { name: "Mohamad Awada" },
                    { name: "Mario Bergés" },
                    { name: "Sarah L Billington" },
                    { name: "Olga Boric-Lubecke" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" },
                    { name: "Arsalan Heydarian" },
                    { name: "Farrokh Jazizadeh" },
                    { name: "Ruying Liu" },
                    { name: "Runhe Zhu" },
                    { name: "Frederick Marks" },
                    { name: "Shawn Roll" },
                    { name: "Mirmahdi Seyedrezaei" },
                    { name: "John E. Taylor" },
                    { name: "Christoph Höelscher" },
                    { name: "Azam Khan" },
                    { name: "Jared Langevin" },
                    { name: "Matthew Louis Mauriello" },
                    { name: "Elizabeth Murnane" },
                    { name: "Haeyoung Noh" },
                    { name: "Marco Pritoni" },
                    { name: "Davide Schaumann" },
                    { name: "Jie Zhao" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.buildenv.2022.109681" }
                ],
                keywords: [
                    "Building lifecycle",
                    "Human-centered",
                    "Occupants",
                    "Built environment",
                    "Well-being",
                    "Interaction",
                    "Quality of life",
                ],
                highlights: [
                    "The field of Human-Building Interaction (HBI) is defined.",
                    "HBI stakeholders, goals and benefits and outcomes are discussed.",
                    "The three dimensions, human, building, and interaction dimensions are explained.",
                    "Enabling technology and scalability of HBI are provided.",
                    "Opportunities and challenges for HBI research are discussed."
                ],
                abstract: "This paper seeks to address ten questions that explore the burgeoning field of Human-Building Interaction (HBI), an interdisciplinary field that represents the next frontier in convergent research and innovation to enable the dynamic interplay of human and building interactional intelligence. The field of HBI builds on several existing efforts in historically separate research fields/communities and aims to understand how buildings affect human outcomes and experiences, as well as how humans interact with, adapt to, and affect the built environment and its systems, to support buildings that can learn, enable adaptation, and evolve at different scales to improve the quality-of-life of its users while optimizing resource usage and service availability. Questions were developed by a diverse group of researchers with backgrounds in design, engineering, computer science, social science, and health science. Answers to these questions draw conclusions from what has been achieved to date as reported in the available literature and establish a foundation for future HBI research. This paper aims to encourage interdisciplinary collaborations in HBI research to change the way people interact with and perceive technology within the context of buildings and inform the design, construction, and operation of next-generation, intelligent built environments. In doing so, HBI research can realize a myriad of benefits for human users, including improved productivity, health, cognition, convenience, and comfort, all of which are essential to societal well-being.",
                display_image: AliPublication3
            },
            {
                title: "Bridging the gap from test rooms to field-tests for human indoor comfort studies: A critical review of the sustainability potential of living laboratories",
                journal: "Energy Research & Social Science",
                volume: "92", issue: "",
                page: "102778",
                authors: [
                    { name: "R.J. Cureau" },
                    { name: "I. Pigliautile" },
                    { name: "A.L. Pisello" },
                    { name: "M. Bavaresco" },
                    { name: "C. Berger" },
                    { name: "G. Chinazzo" },
                    { name: "Zs. Deme Belafi" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" },
                    { name: "A. Heydarian" },
                    { name: "D. Kastner" },
                    { name: "M. Kong" },
                    { name: "D. Licina" },
                    { name: "A. Luna-Navarro" },
                    { name: "A. Mahdavi" },
                    { name: "A. Nocente" },
                    { name: "M. Schweiker" },
                    { name: "M. Vellei" },
                    { name: "A. Wang" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.erss.2022.102778" }
                ],
                keywords: [
                    "Living lab",
                    "Human-centric approach",
                    "Multi-domain comfort",
                    "Occupant behaviour",
                    "Multidisciplinary research",
                    "Energy efficiency in buildings"
                ],
                highlights: [],
                abstract: "Occupants play a key role in determining final building energy consumption. Empirical evidence must support occupants' modelling. Experiments on human responses to Indoor Environmental Quality (IEQ) are usually performed in test rooms or as in-field monitoring. Between these two approaches, living laboratories, often abbreviated as living labs, represent a valid alternative due to their resemblance to real-world settings. This allows observing actual behaviours while keeping the capability to reliably monitor and control the indoor environment. This work systematically reviewed the available information from 34 living labs for human comfort studies worldwide to define the scope, characteristics, and significance of living labs, for the first time. Most of the reviewed living labs are office environments, and only a few do not involve a university research institution in their operation and management. Most of them are in Europe and the United States, whereas there is a lack of such facilities in other locations and climate zones (e.g., tropics). A larger number of comfort studies in living labs is required to clarify the differences in the knowledge acquired in these experiments compared to in-field and laboratory ones. The review shows that living labs add opportunities for testing and optimizing innovations in human-centric solutions for comfortable green buildings. Through the living labs approach it is possible to holistically capture the influence of IEQ on occupant perception and the related response, to gather data on larger and more diverse groups of people, and to conduct multi-domain comfort studies involving multidisciplinary approaches given their real-life settings.",
                display_image: AliPublication4
            },
            {
                title: "Infrared-Fused Vision-Based Thermoregulation Performance Estimation for Personal Thermal Comfort-Driven HVAC System Controls",
                journal: "Buildings",
                volume: "12", issue: "8",
                page: "1241",
                authors: [
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" },
                    { name: "*Qian Xu" },
                    { name: "Syung Min" },
                    { name: "Andy Wang" },
                    { name: "Hui Zhang" },
                    { name: "Yingdong He" },
                    { name: "Alexander Merritt" },
                    { name: "Ronnen Levinson" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "PDF", url: "https://www.mdpi.com/2075-5309/12/8/1241/pdf?version=1660555175" },
                    { type: "DOI", url: "https://doi.org/10.3390/buildings12081241" }
                ],
                keywords: [
                    "Non-intrusive sensing",
                    "Personalized environments",
                    "Controlled climate chamber",
                    "Infrared thermography",
                    "Smart buildings",
                    "Energy efficiency"
                ],
                highlights: [],
                abstract: "Thermal comfort is one of the primary factors influencing occupant health, well-being, and productivity in buildings. Existing thermal comfort systems require occupants to frequently communicate their comfort vote via a survey which is impractical as a long-term solution. Here, we present a novel thermal infrared-fused computer vision sensing method to capture thermoregulation performance in a non-intrusive and non-invasive manner. In this method, we align thermal and visible images, detect facial segments (i.e., nose, eyes, face boundary), and accordingly read the temperatures from the appropriate coordinates in the thermal image. We focus on the human face since it is often clearly visible to cameras and is not merged into a hot background (unlike hands). We use a regularized Gaussian Mixture model to track the thermoregulation changes over time and apply a heuristic algorithm to extract hot and cold indices. We present a personalized and a generalized comfort modeling method, selected based on the availability of the occupant historical indices measurements in a neutral environment, and use the time-series of the hot and cold indices to define corrections to HVAC system operations in the form of setpoint constraints. To evaluate the efficacy of our proposed approach in responding to thermal stimuli, we designed a series of controlled experiments to simulate exposure to cold and hot environments. While applying personalized modeling showed an acceptable average accuracy of 91.3%, the generalized model’s average accuracy was only 65.2%. This shows the importance of having access to physiological records in modeling and assessing comfort. We also found that individual differences should be considered in selecting the cooling and heating rates when some knowledge of the occupant’s overall thermal preference is available.",
                display_image: AliPublication5
            },
            {
                title: "Towards Personalization of Indoor Air Quality: Review of Sensing Requirements and Field Deployments",
                journal: "Sensors",
                volume: "22", issue: "9",
                page: "3444",
                authors: [
                    { name: "*Qian Xu" },
                    { name: "Hui Ci Goh" },
                    { name: "Ehsan Mousavi" },
                    { name: "Hamed Nabizadeh Rafsanjani" },
                    { name: "Zubin Varghese" },
                    { name: "Yogesh Pandit" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "PDF", url: "https://www.mdpi.com/1424-8220/22/9/3444/pdf?version=1651845252" },
                    { type: "DOI", url: "https://doi.org/10.3390/s22093444" }
                ],
                keywords: [
                    "IAQ",
                    "Indoor pollutants",
                    "Ubiquitous IAQ sensors",
                    "Personalized air quality",
                    "Sensing standards"
                ],
                highlights: [],
                abstract: "As humans spend more time indoors, ensuring acceptable indoor air quality (IAQ) through ubiquitous sensing systems has become a necessity. Although extensive studies have been conducted on the IAQ sensing systems, a holistic review of the performance and deployment of Ubiquitous IAQ Sensing (UIAQS) systems with associated requirements in IAQ sensing standards is still lacking. In this study, we first reviewed IAQ pollutants and other IAQ-related factors and the associated requirements in the prominent IAQ sensing standards. We found that while non-pollutant factors are influential on occupants’ perception of IAQ and their satisfaction, they do not have evaluation metrics in the IAQ standards. Then, we systematically reviewed field studies on UIAQS technologies in the literature. Specific classes of information were recorded and analyzed further. We found that the majority of the UIAQS systems did not meet the requirements of the prominent IAQ sensing standards and identified four primary research gaps. We concluded that a new holistic and personalized approach that incorporates UIAQS measurements and subjective feedback is needed. This study provides valuable insights for researchers and policymakers to better improve UIAQS technologies by developing personalized IAQ sensors and sensing standards.",
                display_image: AliPublication6
            },
        ],
    },
    {
        year: "2021",
        publications: [
            {
                title: "The effect of door opening on air-mixing in a positively pressurized room: Implications for operating room air management during the COVID outbreak",
                journal: "Journal of Building Engineering",
                volume: "44", issue: "",
                page: "102900",
                authors: [
                    { name: "Arup Bhattacharya" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" },
                    { name: "Ehsan Mousavi" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.jobe.2021.102900" }
                ],
                keywords: [
                    "Positive pressure",
                    "Door opening",
                    "Infection control",
                    "Operating room",
                    "Covid-19"
                ],
                highlights: [
                    "A swing door motion leaves significant impact on airflow patterns under various air supply rate.",
                    "Transient change in the flow fields from door motion is location specific.",
                    "With multiple door openings, the disturbances reach further into the chamber.",
                    "Almost 10% of the room air can escape through opening the door for 5s from a positively pressurized room.",
                    ""
                ],
                abstract: "The effect of the built environment on the predominant indoor airflow patterns is significant. To protect the healthcare workers at the front line from the outbreak of COVID − 19, it is necessary to understand the transmission dynamics of the virus, which has been shown to depend on indoor airflow patterns. In hospital operating rooms (ORs), design requirements pose a unique challenge as the positive pressure in the OR can facilitate virus spread into adjacent spaces, shall a COVID-positive patient require a surgical procedure. Moreover, the turbulent vortexes from door motions could independently increase the probability of virus escape from the OR to the adjacent corridors. Therefore, to obtain critical knowledge about the alteration of flow fields due to door movement in a positively pressurized room and quantify the air mixing across the door, a series of experiments were conducted in a controlled chamber. The results demonstrate significant impacts of the door opening on the airflow patterns. Increased alterations near the door and vortexes penetrating far into the chamber with multiple doors openings warrant further study of the indoor airflow dynamic under door motion. This experimental study proposes an algorithm to quantify the air exchange due to a standard door opening and quantifies this exfiltration of contaminated air up to 2 air changes per hour, that is 10% of the chamber supply airflow rate. The algorithm to quantify the dissipated air quantity and the analyses of interaction between initial conditions and door openings contribute to the originality of this paper.",
                display_image: AliPublication7
            },
            {
                title: "Test rooms to study human comfort in buildings: A review of controlled experiments and facilities",
                journal: "Renewable and Sustainable Energy Reviews",
                volume: "149", issue: "",
                page: "111359",
                authors: [
                    { name: "A.L. Pisello" },
                    { name: "I. Pigliautile" },
                    { name: "M. Andargie" },
                    { name: "C. Berger" },
                    { name: "P.M. Bluyssen" },
                    { name: "S. Carlucci" },
                    { name: "G. Chinazzo" },
                    { name: "Z. Deme Belafi" },
                    { name: "B. Dong" },
                    { name: "M. Favero" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" },
                    { name: "G. Havenith" },
                    { name: "A. Heydarian" },
                    { name: "D. Kastner" },
                    { name: "M. Kong" },
                    { name: "D. Licina" },
                    { name: "Y. Liu" },
                    { name: "A. Luna-Navarro" },
                    { name: "A. Mahdavi" },
                    { name: "A. Nocente" },
                    { name: "M. Schweiker" },
                    { name: "M. Touchie" },
                    { name: "M. Vellei" },
                    { name: "F. Vittori" },
                    { name: "A. Wagner" },
                    { name: "A. Wang" },
                    { name: "S. Wei" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.rser.2021.111359" }
                ],
                keywords: [
                    "Test room",
                    "Laboratory",
                    "Climate chamber",
                    "Human comfort",
                    "Human-centric experiments",
                    "Thermal comfort",
                    "Visual comfort",
                    "Acoustic comfort",
                    "Indoor air quality",
                    "Multi-domain comfort",
                    "Energy performance",
                    "Indoor environmental quality"
                ],
                highlights: [
                    "Test rooms: environmentally controlled and equipped space to study human comfort.",
                    "Systematic review of controlled studies on human comfort (396 papers).",
                    "187 test rooms analysed in terms of construction and technical details.",
                    "Overview of single and multi-domain comfort experiments conducted in test rooms.",
                    "Trends in conducted experiments and test room-related design."
                ],
                abstract: "Occupants’ comfort perception affects building energy consumptions. To improve the understanding of human comfort, which is crucial to reduce energy demand, laboratory experiments with humans in controlled environments (test rooms) are fundamental, but their potential also depends on the characteristic of each research facility. Nowadays, there is no common understanding for definitions, concepts, and procedures related to human comfort studies performed in test rooms. Identifying common features would allow standardising test procedures, reproducing the same experiments in different contexts, and sharing knowledge and test possibilities. This review identifies 187 existing test rooms worldwide: 396 papers were systematically selected, thoroughly reviewed, and analysed in terms of performed experiments and related test room details. The review highlights a rising interest in the topic during the last years, since 46% of related papers has been published between 2016 and 2020. A growing interest in non-thermal sensory domains (such as visual and air quality) and multi-domain studies about occupant's whole comfort emerged from the results. These research trends have entailed a change in the way test rooms are designed, equipped and controlled, progressively becoming more realistic inhabitable environments. Nevertheless, some lacks in comfort investigation are highlighted: some continents (like Africa and South America) and climate zones are found to be underrepresented, while involved subjects are mainly students performing office tasks. This review aspires to guide scientists and professionals toward the improved design or the audit of test room experimental facilities, especially in countries and climate zones where human comfort indoors is under-studied.",
                display_image: AliPublication8
            },
            {
                title: "Passive cooling and natural ventilation by the windcatcher (Badgir): An experimental and simulation study of indoor air quality, thermal comfort and passive cooling power",
                journal: "Journal of Building Engineering",
                volume: "41", issue: "",
                page: "102436",
                authors: [
                    { name: "Payam Nejat" },
                    { name: "M. Salim Ferwati" },
                    { name: "John Calautit" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" },
                    { name: "Mohammadamin Sheikhshahrokhdehkordi" },
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.jobe.2021.102436" }
                ],
                keywords: [
                    "Natural ventilation",
                    "Badgir",
                    "Windcatcher",
                    "Wing wall",
                    "Passive cooling",
                    "Indoor air quality",
                    "Thermal comfort"
                ],
                highlights: [
                    "For the first time, a combination of upper wing wall and windcatcher was studied.",
                    "Indoor air quality and adaptive thermal comfort assessment in different wind speeds.",
                    "Passive cooling power calculation of windcatcher in different wind speeds.",
                    "Windcatcher can supply desired fresh air even at wind speed below the annual average.",
                    "The approach introduced can help design layout of student position in classroom."
                ],
                abstract: "The upper wing wall can be integrated into the windcatcher to prevent direct solar and rain penetration. The impact of this combination was not considered in previous studies. Moreover, analyzing adaptive thermal comfort is another gap that was not addressed by preceding windcatcher studies, particularly for the tropical climate. Therefore, the current research aims to evaluate a two-sided windcatcher incorporated with the upper wing wall from two views: indoor air quality (IAQ) and adaptive thermal comfort. A small-scale model was tested in the wind tunnel. Next, CFD models were validated against experimental data with a good agreement between the two methods. Windcatchers with different upper wing wall lengths ranging between 10 cm and 50 cm were assessed. The results showed that the length increase led to a slight increase in the ventilation rate, and the best performance was seen in the 50 cm configuration. Subsequently, IAQ and adaptive thermal comfort were evaluated at different wind speeds of this climate. The results demonstrated that even in wind speeds below the annual average (2.5 m/s), the windcatcher performance can still satisfy IAQ parameters such as airflow rate and air change rate, recommend by CIBSE Guide A. In addition, based on the simulated conditions the results showed that wind speed from 2.5 m/s to 4 m/s could provide thermal comfort within 50%–80% of the ventilated space. Finally, the estimation of passive cooling power showed that windcatcher could provide a maximum (9.6 kW) cooling power if the wind speed is at 4 m/s and outdoor temperature at 23 °C.",
                display_image: AliPublication9
            },
            {
                title: "Three-dimensional analysis of the effect of human movement on indoor airflow patterns",
                journal: "Indoor Air",
                volume: "31", issue: "2",
                page: "587-601",
                authors: [
                    { name: "Arup Bhattacharya" },
                    { name: "Jovan Pantelic" },
                    { name: "Ali Ghahramani.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" },
                    { name: "Ehsan S. Mousavi" },
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1111/ina.12735" }
                ],
                keywords: [
                    "3-D velocities",
                    "Human movement",
                    "Human-induced contamination",
                    "Indoor airflow",
                    "Infectious disease control",
                    "Ultrasound sensor"
                ],
                highlights: [],
                abstract: "Human activity is known to leave significant effects on indoor airflow patterns. These patterns are carefully designed for many facilities such as cleanrooms, pharmaceutical settings, and healthcare environments, where human-induced wakes contribute to the transport of contaminants. Therefore, the knowledge about these wakes as it relates to indoor air quality is critical. As a result, a series of experiments were conducted in a controlled chamber to study the three-dimensional effects of true human walking on airflow. Experiments were designed to capture the effect of human walking under three different flow conditions, and for two different walking schemes. The results show that the effect of walking on the airflow is not negligible and can sustain up to 10 seconds after the moving body has passed. Walking on a straight line creates significant change in the velocity normal to the walking path and vertical to the plane of walking movement. These changes were detectable till 1.0 m away from the walking track. Also, the similarity between airflow patterns of walking once and twice illustrated a promising opportunity of predicting the flow patterns of random walk from a set of base cases.",
                display_image: AliPublication10
            },
        ],
    },
    {
        year: "2020",
        publications: [
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
        ],
    },
    {
        year: "2019",
        publications: [
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
        ],
    },
    {
        year: "2018",
        publications: [
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
        ],
    },
    {
        year: "2017",
        publications: [
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
        ],
    },
    {
        year: "2016",
        publications: [
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
        ],
    },
    {
        year: "2015",
        publications: [
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
        ],
    },
    {
        year: "2014",
        publications: [
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" },
                    { name: "*Dawoodjee, I.", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas" },
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" },
                    { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612" }
                ],
                keywords: [
                    "Decarbonization",
                    "Smart Buildings",
                    "Optimization",
                    "Occupancy",
                    "Heat Loads"
                ],
                highlights: [
                    "Dynamic temperature setpoints are derived based on weather and occupancy.",
                    "Fixed and dynamic setpoints reduce energy consumption at lower occupancy rates.",
                    "Dynamic setpoints save additional energy from the optimal selection of setpoints.",
                    "Below 5°C and above 32°C, lowest and highest setpoint is optimal, respectively.",
                    "Between 5°C and 32°C, dynamic setpoints save additional 2.36%, 3.28%, and 10.26%."
                ],
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints."
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
JournalData.forEach((yearData) => {
    // Loop through the publications for each year
    yearData.publications.forEach((publication) => {
        // Generate and assign the unique ID
        publication.id = generateIdFromTitle(publication.title);
        publication.individual_paper_link = "https://building-robotics-lab.github.io/brlab/#/individual_publication/" + generateIdFromTitle(publication.title);
    });
});

export default JournalData;