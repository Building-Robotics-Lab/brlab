import JJPublication from './Publication Images/1-s2.0-S0360132323007989-gr2_lrg.jpg'
import RiccardoPublication from './Publication Images/riccardo-publication.jpg'

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
                    { name: "Kate Sangwon Lee" },
                    { name: "Jung-Joo Lee" },
                    { name: "Connor Aucremanne", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Connor" },
                    { name: "Iqbal Shah", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Iqbal" },
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "3-minute read",
                profiles: ["Connor", "Iqbal", "Prof"],
                links: [
                    { type: "DOI", url: "https://doi.org/10.1016/j.buildenv.2023.110771" }
                ],
                keywords: [
                    'Digital twin',
                    'Building Management System',
                    'Occupant-Centric Building',
                    'Human-Building Interface',
                    'Democratization',
                    'Personal Comfort'
                ],
                highlights: [
                    "Design principles for a digital twin as occupant-building interface were developed.",
                    "Occupants' needs for informed decision-making through digital twins are discovered.",
                    "Occupants are included as end users of digital twins for occupant-centric building."
                ],
                abstract: "While legacy building digital twins (DTs), such as building management systems, help building and facility managers to make informed decisions, the real end-users of buildings, i.e., occupants, have been considered as data informants without agency for access to and interaction with DT systems. This is due to the lack of multi-user interfaces for occupants to interact with building systems effectively with sufficient observability and controllability. The research on the design of multi-user interfaces has been limited to specialized services in public, shared spaces, or office-specific experiments and fails to produce detailed design principles. In this study, we explore the “democratization of DTs” as an occupant-building interface that invites occupants to monitor the building- and human-related data and make informed decisions. An occupant participatory approach was employed, consisting of a survey, an experience sampling method, and a co-design workshop, to understand occupants' current experiences with environmental controls and desired methods to interact with a DT system. The findings identified five interaction dimensions between occupants and a novel occupant-in-the-loop DT system that provides occupants with observability and controllability over building systems. Accordingly, we establish design principles for DT systems as an occupant-building interface that supports occupants’ dynamic contexts, intuitive controls, collaborative and balanced decision-making between personal comfort and energy consumption, as well as authority and data privacy.",
                display_image: JJPublication
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
                abstract: "Building temperature setpoints affect both HVAC energy consumption and occupant comfort. To reduce HVAC energy usage, researchers often investigate how system operations can be optimized under weather and occupancy variability subject to a fixed setpoint that minimizes any possible discomfort. While previous research has explored the selection of dynamic setpoints to minimize HVAC energy consumption based on outdoor temperature, they have often neglected the impact of varying occupancy rates on the setpoints. This paper aims to demystify energy savings derived from fixed and dynamic temperature setpoints under weather and occupancy variability and explores the additional energy savings that can be achieved through dynamic temperature setpoints. An exhaustive HVAC zone temperature setpoint optimizer was developed to determine dynamic setpoints with respect to weather and occupancy (i.e., setpoints that minimize HVAC energy consumption at different occupancy rates based on outdoor weather). U.S. DOE reference building energy models for small, medium, and large office buildings were simulated at 17 climate zones, 4 occupancy rates (25%, 50%, 75%, 100%) and 7 setpoints (19.5°C to 25.5°C at 1°C interval). It was found that, both fixed and dynamic setpoints benefit from the energy reduction of approximately 2-4% from the lower heat generated by the occupants at lower occupancy rates. However, at outdoor temperatures between 5°C and 32°C where occupant heat loads can swing the building between heating, free-running, and cooling modes, dynamic setpoints yield additional 2-10% energy savings, compared to fixed setpoints.",
                display_image: RiccardoPublication
                
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
        year: "2022",
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