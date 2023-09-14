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
import AliPublication11 from './Publication Images/1-s2.0-S0306261920304049-gr3_lrg.jpg'
import AliPublication12 from './Publication Images/fbuil-06-00049-g007.jpeg'
import AliPublication13 from './Publication Images/1-s2.0-S0378778819331044-fx1_lrg.jpg'
import AliPublication14 from './Publication Images/41370_2019_179_Fig1_HTML.png'
import AliPublication15 from './Publication Images/1-s2.0-S0360132319306456-fx1_lrg.jpg'
import AliPublication16 from './Publication Images/1-s2.0-S2352710219310137-gr1_lrg.jpg'
import AliPublication17 from './Publication Images/1-s2.0-S2352710219305200-gr4_lrg.jpg'
import AliPublication18 from './Publication Images/ghahr8-2920648-large.gif'
import AliPublication19 from './Publication Images/1-s2.0-S2352710218310969-gr2_lrg.jpg'
import AliPublication20 from './Publication Images/'
import AliPublication21 from './Publication Images/'
import AliPublication22 from './Publication Images/'
import AliPublication23 from './Publication Images/'
import AliPublication24 from './Publication Images/'
import AliPublication25 from './Publication Images/'
import AliPublication26 from './Publication Images/'
import AliPublication27 from './Publication Images/'

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
                    { name: "*Riccardo Talami" },
                    { name: "*Ilyas Dawoodjee" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.enbenv.2023.07.001" },
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf" }
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
                highlights: [],
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
                highlights: [],
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
                journal: "Scientific Reports",
                volume: "12", issue: "1",
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
                    { type: "DOI", url: "https://doi.org/10.1038/s41598-022-25047-y" },
                    { type: "PDF", url: "https://www.nature.com/articles/s41598-022-25047-y.pdf" }
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
                    "Quality of life"
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
                    { type: "DOI", url: "https://doi.org/10.3390/buildings12081241" },
                    { type: "PDF", url: "https://www.mdpi.com/2075-5309/12/8/1241/pdf?version=1660555175" }
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
                    { type: "DOI", url: "https://doi.org/10.3390/s22093444" },
                    { type: "PDF", url: "https://www.mdpi.com/1424-8220/22/9/3444/pdf?version=1651845252" }
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
                    { type: "DOI", url: "https://doi.org/10.1016/j.jobe.2021.102900" },
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2352710221007580/pdfft?md5=b3d9cc53e5139a0eac8d19c33c7b64bf&pid=1-s2.0-S2352710221007580-main.pdf" }
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
                    "Almost 10% of the room air can escape through opening the door for 5s from a positively pressurized room."
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
                    { name: "Ehsan S. Mousavi" }
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
                title: "iSEA: IoT-based smartphone energy assistant for prompting energy-aware behaviors in commercial buildings",
                journal: "Applied Energy",
                volume: "265", issue: "",
                page: "114892",
                authors: [
                    { name: "Hamed Nabizadeh" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" },
                    { name: "Amir Hossein Nabizadeh" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.apenergy.2020.114892" }
                ],
                keywords: [
                    "Internet of things",
                    "Smartphone",
                    "Wi-Fi network",
                    "Energy-use behavior",
                    "Deep learning",
                    "Commercial buildings"
                ],
                highlights: [
                    "We propose a novel IoT-based feedback mechanism in commercial buildings.",
                    "We introduce an index to classify behaviors to efficient and inefficient behaviors.",
                    "The feedback mechanism is developed based on a deep learning approach.",
                    "Occupants often ignore controlling over lighting systems at departure events."
                ],
                abstract: "Providing personalized energy-use information to individual occupants enables the adoption of energy-aware behaviors in commercial buildings. However, the implementation of individualized feedback still remains challenging due to the difficulties in collecting personalized data, tracking personal behaviors, and delivering personalized tailored information to individual occupants. Nowadays, the Internet of Things (IoT) technologies are used in a variety of applications including real-time monitoring, control, and decision-making due to the flexibility of these technologies for fusing different data streams. In this paper, we propose a novel IoT-based smartphone energy assistant (iSEA) framework which prompts energy-aware behaviors in commercial buildings. iSEA tracks individual occupants through tracking their smartphones, uses a deep learning approach to identify their energy usage, and delivers personalized tailored feedback to impact their usage. iSEA particularly uses an energy-use efficiency index (EEI) to understand behaviors and categorize them into efficient and inefficient behaviors. The iSEA architecture includes four layers: physical, cloud, service, and communication. The results of implementing iSEA in a commercial building with ten occupants over a twelve-week duration demonstrate the validity of this approach in enhancing individualized energy-use behaviors. An average of 34% energy savings was measured by tracking occupants’ EEI by the end of the experimental period. In addition, the results demonstrate that commercial building occupants often ignore controlling over lighting systems at their departure events that leads to wasting energy during non-working hours. By utilizing the existing IoT devices in commercial buildings, iSEA significantly contributes to support research efforts into sensing and enhancing energy-aware behaviors at minimal costs.",
                display_image: AliPublication11
            },
            {
                title: "Artificial Intelligence for Efficient Thermal Comfort Systems: Requirements, Current Applications and Future Directions",
                journal: "Frontiers in Built Environment",
                volume: "6", issue: "",
                page: "49",
                authors: [
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" },
                    { name: "Parson Galicia" },
                    { name: "David Lehrer" },
                    { name: "Zubin Varghese" },
                    { name: "Zhe Wang" },
                    { name: "Yogesh Pandit" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.3389/fbuil.2020.00049" },
                    { type: "PDF", url: "https://www.frontiersin.org/articles/10.3389/fbuil.2020.00049/pdf?isPublishedV2=False" }
                ],
                keywords: [
                    "Machine learning",
                    "Personal thermal comfort",
                    "Data mining",
                    "Human building interactions",
                    "Buildings energy efficiency",
                    "Intelligent personal thermal comfort systems"
                ],
                highlights: [],
                abstract: "In buildings, one or a combination of systems (e.g., central HVAC system, ceiling fan, desk fan, personal heater, and foot warmer) are often responsible for providing thermal comfort to the occupants. While thermal comfort has been shown to differ from person to person and vary over time, these systems are often operated based on prefixed setpoints and schedule of operations or at the request/routine of each individual. This leads to occupants’ discomfort and energy wastes. To enable the improvements in both comfort and energy efficiency autonomously, in this paper, we describe the necessity of an integrated system of sensors (e.g., wearable sensors/infrared sensors), infrastructure for enabling system interoperability, learning and control algorithms, and actuators (e.g., HVAC system setpoints, ceiling fans) to work under a governing central intelligent system. To assist readers with little to no exposure to artificial intelligence (AI), we describe the fundamentals of an intelligent entity (rational agent) and components of its problem-solving process (i.e., search algorithms, logic inference, and machine learning) and provide examples from the literature. We then discuss the current application of intelligent personal thermal comfort systems in buildings based on a comprehensive review of the literature. We finally describe future directions for enabling application of fully automated systems to provide comfort in an efficient manner. It is apparent that improvements in all aspects of an intelligent system are be needed to better ascertain the correct combination of systems to activate and for how long to increase the overall efficiency of the system and improve comfort.",
                display_image: AliPublication12
            },
            {
                title: "Measuring 3D indoor air velocity via an inexpensive low-power ultrasonic anemometer",
                journal: "Energy and Buildings",
                volume: "211", issue: "",
                page: "109805",
                authors: [
                    { name: "Edward Arens" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" },
                    { name: "Richard Przybyla" },
                    { name: "Michael Andersen" },
                    { name: "Syung Min" },
                    { name: "Therese Peffer" },
                    { name: "Paul Raftery" },
                    { name: "Megan Zhu" },
                    { name: "Vy Luu" },
                    { name: "Hui Zhang" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.enbuild.2020.109805" }
                ],
                keywords: [
                    "3-dimensional air velocity monitoring",
                    "Indoor anemometer",
                    "Tetrahedron",
                    "Ultrasonic anemometry",
                    "Ultrasonic pulse time of flight",
                    "MEMS ultrasound",
                    "Sonic temperature"
                ],
                highlights: [],
                abstract: "The ability to inexpensively monitor indoor air speed and direction on a continuous basis would transform the control of environmental quality and energy use in buildings. Air motion transports energy, ventilation air, and pollutants around building interiors and their occupants, and measured feedback about it could be used in numerous ways to improve building operation. However indoor air movement is rarely monitored because of the expense and fragility of sensors. This paper describes a unique anemometer developed by the authors, that measures 3-dimensional air velocity for indoor environmental applications, leveraging new microelectromechanical systems (MEMS) technology for ultrasonic range-finding. The anemometer uses a tetrahedral arrangement of four transceivers, the smallest number able to capture a 3-dimensional flow, that provides greater measurement redundancy than in existing anemometry. We describe the theory, hardware, and software of the anemometer, including algorithms that detect and eliminate shielding errors caused by the wakes from anemometer support struts. The anemometer has a resolution and starting threshold of 0.01 m/s, an absolute air speed error of 0.05 m/s at a given orientation with minimal filtering, 3.1° angle- and 0.11 m/s velocity errors over 360° azimuthal rotation, and 3.5° angle- and 0.07 m/s velocity errors over 135° vertical declination. It includes radio connection to internet and is able to operate standalone for multiple years on a standard battery. The anemometer also measures temperature and has a compass and tilt sensor so that flow direction is globally referenced regardless of anemometer orientation. The retail cost of parts is $100 USD, and all parts snap together for ease of assembly.",
                display_image: AliPublication13
            },
            {
                title: "Personal CO2 cloud: laboratory measurements of metabolic CO2 inhalation zone concentration and dispersion in a typical office desk setting",
                journal: "Journal of Exposure Science & Environmental Epidemiology",
                volume: "30", issue: "2",
                page: "328-337",
                authors: [
                    { name: "Jovan Pantelic" },
                    { name: "Shichao Liu" },
                    { name: "Lorenza Pistore" },
                    { name: "Dusan Licina" },
                    { name: "Matthew Vannucci" },
                    { name: "Sasan Sadrizadeh" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" },
                    { name: "Brian Gilligan" },
                    { name: "Esther Sternberg" },
                    { name: "Kevin Kampschroer" },
                    { name: "Wellbuilt for Wellbeing Project Team" },
                    { name: "Stefano Schiavon" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1038/s41370-019-0179-5" }
                ],
                keywords: [],
                highlights: [],
                abstract: "Inhalation exposure to pure and metabolic elevated carbon dioxide (CO2) concentration has been associated with impaired work performance, lower perceived air quality, and increased health symptoms. In this study, the concentration of metabolic CO2 was continuously measured in the inhalation zone of 41 subjects performing simulated office work. The measurements took place in an environmental chamber with well-controlled mechanical ventilation arranged as an office environment. The results showed the existence of a personal CO2 cloud in the inhalation zone of all test subjects, characterized by the excess of metabolic CO2 beyond the room background levels. For seated occupants, the median CO2 inhalation zone concentration levels were between 200 and 500 ppm above the background, and the third quartile up to 800 ppm above the background. Each study subject had distinct magnitude of the personal CO2 cloud owing to differences in metabolic CO2 generation, posture, nose geometry, and breathing pattern. A small desktop oscillating fan proved to be suitable for dispersing much of the personal CO2 cloud, thus reducing the inhalation zone concentration to background level. The results suggest that background measurements cannot capture the significant personal CO2 cloud effect in human microclimate.",
                display_image: AliPublication14
            },
            {
                title: "High-density thermal sensitivity maps of the human body",
                journal: "Building and Environment",
                volume: "167", issue: "",
                page: "106435",
                authors: [
                    { name: "Maohui Luo" },
                    { name: "Zhe Wang" },
                    { name: "Hui Zhang" },
                    { name: "Edward Arens" },
                    { name: "Davide Filingeri" },
                    { name: "Ling Jin" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" },
                    { name: "Wenhua Chen" },
                    { name: "Yingdong He" },
                    { name: "Binghui Si" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.buildenv.2019.106435" }
                ],
                keywords: [
                    "Thermal sensitivity",
                    "Thermal comfort",
                    "Personal comfort system",
                    "Wearable comfort devices"
                ],
                highlights: [
                    "Detailed thermal sensitivity maps have been created for the entire body.",
                    "Thermal sensitivity varies 3-fold across different body parts.",
                    "Human body shows 30–60% stronger cooling sensitivity than warming.",
                    "Large interpersonal sensitivity difference (50%) and within-region variance (20%).",
                    "Differences between males and females are small."
                ],
                abstract: "‘Personal comfort systems’ and thermally active clothing are able to warm and cool individual building occupants by transferring heat directly to and from their body surfaces. Such systems would ideally target local body surfaces with high temperature sensitivities. Such sensitivities have not been quantified in detail before. Here we report local thermal sensations and sensitivities for 318 local skin spots distributed over one side of the body, measured on a large number of subjects. Skin temperature changes were induced with a thermal probe 14 mm in diameter, and subjective thermal sensations were surveyed after 10 s. Our neutral base temperature was 31 °C and the spot stimulus was ±5 °C. Cool and warm sensitivities are seen to vary widely by body part. The foot, lower leg and upper chest are much less sensitive than average; in comparison, the cheek, neck back, and seat area are 2–3 times as sensitive to both cooling and warming stimuli. Every body part exhibits stronger sensitivity to cooling (1.3–1.6 times stronger) than to warming. Inter-personal differences and regional variance within body parts were observed to be 2–3 times greater than potential sex differences. These high-density thermal sensitivity maps with appended dataset provide the most comprehensive distributions of cold and warm sensitivity across the human body.",
                display_image: AliPublication15
            },
            {
                title: "Towards utilizing internet of things (IoT) devices for understanding individual occupants' energy usage of personal and shared appliances in office buildings",
                journal: "Journal of Building Engineering",
                volume: "27", issue: "",
                page: "100948",
                authors: [
                    { name: "Hamed Nabizadeh Rafsanjani" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.jobe.2019.100948" }
                ],
                keywords: [
                    "Office buildings",
                    "Energy-use behavior",
                    "Energy efficiency",
                    "Energy intensity",
                    "Internet of things"
                ],
                highlights: [
                    "We propose a novel approach for understanding energy-use intensity and efficiency in office buildings.",
                    "The approach only requires information of Wi-Fi networks and building-level internet-enabled electric meters.",
                    "We introduce an energy-use behavior index to quantitatively classify building occupants to various categories.",
                    "This study contributes to conventional methods for intervening occupant energy-use behaviors."
                ],
                abstract: "Energy consumption in office buildings highly depends on occupant energy-use behaviors and intervening these behaviors could function as a cost-effective approach to enhance energy savings. Current behavior-intervention techniques extensively rely on occupant-specific energy-use information at the workstation level and often ignore shared appliances. It is because an occupant typically has full responsibility for her workstation appliances energy consumption and shares the responsibility of the shared appliances energy consumption. However, understanding energy-use behavior of both workstation and shared appliances is necessary for applying appropriate behavior-intervention techniques. Despite this importance, there is still no practical and scalable method to capture personalized energy-use information of workstation and shared appliances since the conventional methods use plug-in power meters that are extremely expensive and difficult to maintain over long period of time. To address this gap, we propose a comprehensive occupant-level energy-usage approach which utilizes the data from the internet of things devices in office buildings to provide information related to energy-use behavior of workstation and shared appliances of each occupant in an economical and feasible manner. In particular, we introduce an energy behavior index which quantitatively compares individual occupants’ energy-consuming data to identify high energy consumers and inefficient behaviors. Results from an experiment conducted in an office building equipped with internet of things devices demonstrate the feasibility of the proposed approach to classify occupants to different energy-usage categories. Our proposed approach along with appropriate behavior-intervention techniques could be used to impact occupant energy-use behaviors.",
                display_image: AliPublication16
            },
        ],
    },
    {
        year: "2019",
        publications: [
            {
                title: "Extracting occupants’ energy-use patterns from Wi-Fi networks in office buildings",
                journal: "Journal of Building Engineering",
                volume: "26", issue: "",
                page: "100864",
                authors: [
                    { name: "Hamed Nabizadeh Rafsanjani" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.jobe.2019.100864" }
                ],
                keywords: [
                    "Wi-Fi networks",
                    "Occupants' energy-use patterns",
                    "Miscellaneous electric loads",
                    "Office buildings",
                    "Internet of things"
                ],
                highlights: [
                    "We empirically examined the correlation of Wi-Fi flows and miscellaneous electric loads in office buildings.",
                    "The miscellaneous electric loads correlate with the number of Wi-Fi connections.",
                    "The correlation helps to utilize Wi-Fi flows to understand/predict occupants' energy-use patterns.",
                    "This contributes to efforts into enhancing energy-use behavior, developing smart buildings/grids, and implementing IoT."
                ],
                abstract: "Wi-Fi networks are currently considered as an efficient and economical tool for occupancy sensing in office buildings. Studies particularly indicated that these networks could be utilized to understand/predict occupants' energy-use patterns. Despite the value that investigating this possibility could provide for the current research, it has not been well explored how energy-use pattern information could be extracted from Wi-Fi system information. In response, this study utilizes statistical analyses to investigate the correlation of Wi-Fi flows with miscellaneous electric loads (MELs) in office buildings. MELs account for more than one-third of office-building energy consumption and are the best representative of occupants' energy-use patterns. In the pursuit of the objective, data from two offices were collected over a 3-month period of time. Results from the analyses show that an average 92% of MELs energy consumption could be predicted through the Wi-Fi flows in a building. This finding thereby demonstrates that occupants' energy-use patterns are highly positively correlated to Wi-Fi flows in a building and accordingly, the information of Wi-Fi networks could be utilized to understand/interpret these patterns. This significantly contributes to the current body of research and can be used to support efforts into understanding/enhancing occupants’ energy-use behaviors. In addition, since Wi-Fi networks are a major subset of internet of things (IoT) hardware systems and IoT implementation for intelligent energy management in buildings significantly depends on occupant energy-use patterns, this research helps IoT-based efforts by displaying how these patterns could be extracted from IoT infrastructure.",
                display_image: AliPublication17
            },
            {
                title: "Measuring Air Speed With a Low-Power MEMS Ultrasonic Anemometer via Adaptive Phase Tracking",
                journal: "IEEE Sensors Journal",
                volume: "19", issue: "18",
                page: "8136-8145",
                authors: [
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" },
                    { name: "Megan Zhu" },
                    { name: "Richard J. Przybyla" },
                    { name: "Michael P. Andersen" },
                    { name: "Parson J. Galicia" },
                    { name: "Therese E. Peffer" },
                    { name: "Hui Zhang" },
                    { name: "Edward Arens" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1109/JSEN.2019.2920648" }
                ],
                keywords: [
                    "Ultrasonic anemometry",
                    "Pulsed ultrasound",
                    "Complex phase angle",
                    "MEMS ultrasound",            
                    "Piezoelectric micromachined ultrasound transceivers"
                ],
                highlights: [],
                abstract: "Indoor air movement affects many functions of buildings, including ventilation and air quality, comfort and health of occupants, fire safety, and building energy use. Accurate measurement of air movement has been difficult and expensive over the extended periods of time, especially for velocities below 1 m/s. A new type of high frequency ultrasonic transceiver provides high sensitivity measurements and low cost through microelectromechanical systems (MEMS) manufacturing. However, at high frequencies, the conventional ultrasonic signal processing algorithms function only over small ranges of ambient temperature and velocity. In this paper, we describe three algorithms that use the complex phase angle of an ultrasonic pulse to measure velocity and temperature over extended ranges of temperature and velocity. They employ heuristics to track the vibration cycle of the measured phase angle. These methods are applied in a pulse-based anemometer whose 176 kHz MEMS transceivers both transmit and receive. In wind tunnel tests between 0-4 m/s, the tracking algorithm with a low-pass filter measured air speed with high sensitivity and accuracy (0.026 m/s mean absolute error). The ability to monitor to this accuracy with such low power draw and low cost is currently unprecedented in the industry.",
                display_image: AliPublication18
            },
            {
                title: "Personal CO2 bubble: Context-dependent variations and wearable sensors usability",
                journal: "Journal of Building Engineering",
                volume: "22", issue: "",
                page: "295-304",
                authors: [
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" },
                    { name: "Jovan Pantelic" },
                    { name: "Matthew Vannucci" },
                    { name: "Lorenza Pistore" },
                    { name: "Shichao Liu" },
                    { name: "Brian Gilligan" },
                    { name: "Soheila Alyasin" },
                    { name: "Edward Arens" },
                    { name: "Kevin Kampshire" },
                    { name: "Esther Sternberg" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.jobe.2018.11.015" }
                ],
                keywords: [
                    "CO2 exposure",
                    "Personal indoor air quality",
                    "Inhalation zone CO2 concentration",
                    "Occupant behavior",
                    "Wearable CO2 sensor",
                    "Ubiquitous sensing"
                ],
                highlights: [
                    "High CO2 concentration in the inhalation zone was introduced as a personal CO2 bubble.",
                    "Regular office variability such as desk settings, activity, and personal difference was explored.",
                    "Using air movement devices such as a desk fan significantly reduces inhaled CO2.",
                    "A data driven method for predicting inhaled CO2 from wearable CO2 sensors was developed."
                ],
                abstract: "High CO2 concentration in inhaled air has been shown to negatively impact work performance and increase acute health symptoms. As respiratory CO2 is constantly exhaled, it may not dissipate in surrounding air in absence of adequate air movement and is instead re-inhaled into the airways (breathing in a CO2-rich bubble). In this study, we explored the impacts of context-dependent factors such as office activities, desk settings, and personal differences on the inhalation zone CO2 concentration and on concentrations at a below-neck wearable sensor. We found that all factors significantly impact measurements at both measuring points of our test subjects. Presence of a small portable desk fan was also found to significantly reduce the CO2 concentration. On average, we observed a 177 ppm reduction in CO2 concentration when using a fan, which is 25 ppm higher than the background CO2 measurement (650 ppm). Among 41 test subjects, we found distinct relationships between the inhalation zone CO2 concentration and the wearable sensor measurements and, by applying a hierarchical clustering algorithm, we found 4 clusters of relationships. While below-neck wearable sensors could be used as an exact measure of inhalation of CO2 concentration for 29% of the subjects, we identified a boundary point (917 ppm) separating high and low inhalation zone CO2 concentration measurements.",
                display_image: AliPublication19
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
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
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
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints.",
                display_image: AliPublication20
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
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
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints.",
                display_image: AliPublication21
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
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
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints.",
                display_image: AliPublication22
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
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
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints.",
                display_image: AliPublication23
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "PDF", url: "https://escholarship.org/content/qt79q0m374/qt79q0m374.pdf?t=pm1r17" },
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
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints.",
                display_image: AliPublication24
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
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
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints.",
                display_image: AliPublication25
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
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
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints.",
                display_image: AliPublication26
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                volume: "", issue: "",
                page: "",
                authors: [
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
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
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints.",
                display_image: AliPublication27
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
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
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
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
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
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
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
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
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
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
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
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
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
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
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
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
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
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
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
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
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
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
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
                    { name: "*Talami, R." },
                    { name: "*Dawoodjee, I." },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
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