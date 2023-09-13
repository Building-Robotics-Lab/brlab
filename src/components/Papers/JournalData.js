import KatePublication from './Publication Images/kate_pub1.png'
import RiccardoPublication from './Publication Images/riccardo_pub1.jpg'
import IqbalPublication from './Publication Images/iqbal_pub1.jpg'
import KaiPublication from './Publication Images/kai_pub1.png'

const JournalData = [
    {
        year: "2023",
        publications: [
            {
                title: "Towards democratization of digital twins: Design principles for transformation into a human-building interface",
                journal: "Building and Environment",
                issue: "244",
                page: "110771",
                authors: [
                    { name: "Kate Sangwon Lee"},
                    { name: "Jung-Joo Lee"},
                    { name: "Connor Aucremanne", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Connor"},
                    { name: "Iqbal Shah", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal"},
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile"}
                ],
                minRead: "3-minute read",
                profiles: ["Connor", "Iqbal", "Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.buildenv.2023.110771"}
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
                display_image: KatePublication
            },
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                issue: "",
                page: "",
                authors: [
                    { name: "*Riccardo Talami", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo"},
                    { name: "*Ilyas Dawoodjee", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Ilyas"},
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile"}
                ],
                minRead: "3-minute read",
                profiles: ["Riccardo", "Ilyas", "Prof"],
                links: [
                    { type: "PDF", url: "https://www.sciencedirect.com/science/article/pii/S2666123323000612/pdfft?md5=70e481b02bb64ba4441bf5bb7cd55495&pid=1-s2.0-S2666123323000612-main.pdf"},
                    { type: "DOI", url: "https://doi.org/10.1016/j.enbenv.2023.07.001"}
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
                display_image: RiccardoPublication
            },
            {
                title: "Smart detection of indoor occupant thermal state via infrared thermography, computer vision, and machine learning",
                journal: "Building and Environment",
                issue: "228",
                page: "109811",
                authors: [
                    { name: "Yingdong He"},
                    { name: "Hui Zhang"},
                    { name: "Edward Arens"},
                    { name: "Alexander Merritt"},
                    { name: "Charlie Huizenga"},
                    { name: "Ronnen Levinson"},
                    { name: "Andy Wang"},
                    { name: "Ghahramani, A.", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile"},
                    { name: "Ana Alvarez-Suarez"},
                ],
                minRead: "3-minute read",
                profiles: ["Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.buildenv.2022.109811"}
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
            },
            {
                title: "Thermal transfer and temperature reductions from shading systems on opaque facades: Quantifying the impacts of influential factors",
                journal: "Energy and Buildings",
                issue: "278",
                page: "112604",
                authors: [
                    { name: "Iqbal Shah", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal"},
                    { name: "Brian Soh"},
                    { name: "Caitlin Lim"},
                    { name: "Siu-Kit Lau"},
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile"}
                ],
                minRead: "3-minute read",
                profiles: ["Iqbal", "Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.enbuild.2022.112604"}
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
                display_image: IqbalPublication 
            },
            {
                title: "Personal thermal comfort models based on physiological measurements – A design of experiments based review",
                journal: "Building and Environment",
                issue: "228",
                page: "109919",
                authors: [
                    { name: "Kai Chen", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Kai"},
                    { name: "Qian Xu"},
                    { name: "Berlynette Leow"},
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile"}
                ],
                minRead: "3-minute read",
                profiles: ["Kai", "Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.buildenv.2022.109919"}
                ],
                keywords: [
                    "Personal comfort modelDOE",
                    "Physiological sensing",
                    "Experiment planning",
                    "Comfort modeling",
                    "Machine learning",
                    "DOE"
                ],
                highlights: [
                ],
                abstract: "Researchers have shown that the physiological-based personal comfort models (PCM) are capable of addressing individual differences as well as transient thermal comfort. Given that physiological-based comfort modeling studies are often very resource-intensive, a well-developed Design of Experiment (DOE) framework could help by optimizing the experimental sequence and use of resources. This study critically reviewed 74 physiological-based PCMs studies and dissected each study based on a DOE framework, dividing the experiments into the experimental procedures, sequences and variables settings. The results indicate that skin temperature, subjects' thermal sensation and air temperature are the leading input variables for PCM. Additionally, the most dominant experiment settings include a 1-min physiological data sampling interval, 10 min interval for reporting thermal vote, a less than 3 h experimental duration, and a fixed clothing level. We found that the subjects' number is independent of the experimental duration (correlation coefficient of 0.0201). Different activity levels and submerging subjects' hands into hot water are also used as thermal stimuli, in addition to the change in air temperature. By applying diverse algorithms, the average predicting accuracy of PCM from selected studies could achieve 85%, and Support Vector Machines (SVM) shows a superior predicting performance. The prominent limitations of the existing studies include insufficient subject numbers, technical restrictions of sensing devices, cumbersome data collection interfaces, improper machine learning algorithms and lack of diversity consideration. Finally, the review suggested that more related studies in this field should be compiled for cross-validation, helping to trade off the most appropriate experiment designs corresponding to the study objectives.",
                display_image: KaiPublication 
            },
        ],
    },
    {
        year: "2022",
        publications: [
            {
                title: "The field of human building interaction for convergent research and innovation for intelligent built environments",
                journal: "Nature Scientific Reports",
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
        year: "2021",
        publications: [
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
        year: "2020",
        publications: [
            {
                title: "Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability",
                journal: "Energy and Built Environment",
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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
                issue: "",
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