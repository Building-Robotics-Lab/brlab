import RiccardoPic from './Riccardo/image.jpg'
import RiccardoCV from './Riccardo/CV.pdf'

import KaiPic from './Kai/image.jpg'
import KaiCV from './Kai/CV.pdf'

import IqbalPic from './Iqbal/image.jpg'
import IqbalCV from './Iqbal/CV.pdf'

import ConnorPic from './Connor/image.jpg'
import ConnorCV from './Connor/CV.pdf'

import KellyPic from './Kelly/image.jpg'
import KellyCV from './Kelly/CV.pdf'

import IlyasPic from './Ilyas/image.jpg'
import IlyasCV from './Ilyas/CV.pdf'

import StellaPic from './Stella/image.jpg'
import StellaCV from './Stella/CV.pdf'

import XiaosongPic from './Xiaosong/image.jpg'
import XiaosongCV from './Xiaosong/CV.pdf'

import PegahPic from './Pegah/image.jpg'
import PegahCV from './Pegah/CV.pdf'

import PierrePic from './Pierre-Louis/image.jpg'
import PierreCV from './Pierre-Louis/CV.pdf'

import GuillaumePic from './Guillaume/image.jpg'
import GuillaumeCV from './Guillaume/CV.pdf'

import MichellePic from './Michelle/image.jpg'
import MichelleCV from './Michelle/CV.pdf'

import ProfPic from './prof_pic.jpg'
import ProfCV from './prof_CV.pdf'

import { faPhone, faEnvelope, faUser, faTemperatureHalf, faPerson, faS } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedin, faResearchgate, faOrcid, faGit, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'

const profiles = [
    {
        ProfileName: 'Riccardo',
        ProfileLink: "/profile/Riccardo",
        ProfilePic: RiccardoPic,
        Name: 'Riccardo Talami',
        Position: 'Research Fellow',
        Biography: 'Riccardo Talami, PhD, is a Research Fellow at the National University of Singapore (NUS) - Department of the Built Environment. Riccardo focuses his effort on the energy- efficient design and operation of buildings while improving occupant comfort and well - being. He believes that through data - driven processes, building stakeholders can achieve sustainable, comfortable, and efficient built environments.He has experience in laboratory measurements, field studies, and building performance simulation & numerical optimisation techniques. Previously, he worked as a Research and Teaching Assistant at the Singapore University of Technology and Design (SUTD) - Design for Climate and Comfort Lab. To date, Riccardo has supervised three undergraduate students for their final year project dissertation. In his free time, he is an avid street / urban art prints and books collector, and enjoys hiking and travelling.',
        Education: [
            'PhD, Loughborough University, Building Engineering (2022)',
            'MSc, Università Iuav di Venezia (IUAV), Architecture and Innovation (Sustainable Design) (2017)',
            'BSc, Università Iuav di Venezia (IUAV), Architecture (2014)'
        ],
        Awards: [
            'UK Engineering and Physical Sciences Research Council Scholarship, Engineering and Physical Sciences Research Council (2019 - 2022)',
            'Winner of Best Poster Award for <a href="https://buildingsimulation2019.org/best-poster-award/" ><b>"Subjective and Measured Evidence for Residential Lighting Metrics in the Tropics"</b></a> (in collaboration with Jakubiec, J. Alstan; Srisamranrungruang, Thanyalak; Kong, Zhe; Quek, Geraldine), 16th International IBPSA Conference (2019)'
        ],
        Featured_Publications: [
            (
                <>
                    <b>Talami, R.</b>, Dawoodjee, I. and Ghahramani, A., 2023. <Link to="/publication/quantifying_energy" ><b>Quantifying energy savings from optimal selection of HVAC temperature setpoints and setbacks across diverse occupancy rates and patterns</b></Link>. <i>Buildings 13</i>(12), 2998.
                </>
            ),
            (
                <>
                    <b>Talami, R.</b>, Dawoodjee, I. and Ghahramani, A., 2023. <Link to="/publication/demystifying_energy" ><b>Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability</b></Link>. <i>Energy and Built Environment [In Press]</i>.
                </>
            ),
            (
                <>
                    <b>Talami, R.</b> and  Jakubiec, J.A., 2020. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0378778819333614" ><b>Early-design sensitivity of radiant cooled office buildings in the tropics for building performance</b></a>. <i>Energy and Buildings, 223</i>, 110177.
                </>
            )
        ],
        Contacts: [
            { href: "tel:+6580446551", icon: faPhone, text: "+65 8044 6551" },
            { href: "mailto:r.talami@nus.edu.sg", icon: faEnvelope, text: "r.talami@nus.edu.sg" },
        ],
        Links: [
            { href: RiccardoCV, icon: faUser, text: 'CV' },
            { href: 'https://scholar.google.com/citations?user=EmFyzowAAAAJ&hl=en&oi=ao', icon: faGoogle, text: 'Google Scholar' },
            { href: 'https://www.researchgate.net/profile/Riccardo-Talami', icon: faResearchgate, text: 'ResearchGate' },
            { href: 'https://www.linkedin.com/in/riccardo-talami12/', icon: faLinkedin, text: 'LinkedIn' },
            { href: 'https://orcid.org/0000-0002-5173-339X', icon: faOrcid, text: 'ORCID' },
            { href: '/optimal_temperature_setpoint_tool', icon: faTemperatureHalf, text: 'Optimal Temperature Setpoint Tool', isReactLink: true }
        ],
        Interests: [
            'Architectural Engineering',
            'Building Performance Simulation',
            'Building Optimisation',
            'Energy-Efficient Buildings',
            'Sustainable Architecture'
        ],
    },
    {
        ProfileName: 'Kai',
        ProfileLink: "/profile/Kai",
        ProfilePic: KaiPic,
        Name: 'Chen Kai',
        Position: 'PhD Candidate',
        Biography: 'Chen Kai is a third-year PhD candidate at the National University of Singapore - Department of the Built Environment and is currently engaged in research that focuses on thermal comfort modelling, long-term thermal comfort prediction, and energy conservation in HVAC systems. He firmly believes that accurately addressing occupants\' comfort is vital for optimising energy consumption and enhancing human well-being. In addition to his research on these topics, Kai has conducted research on biomass heating for domestic and commercial buildings in the UK, performed analysis on building systems\' components, and gained experience in energy simulation and optimisation.',
        Education: [
            'PhD, National University of Singapore (NUS), Built Environment (current)',
            'MSc (<i>Merit</i>), University College London (UCL), Smart Buildings and Digital Engineering (2021)',
            'BEng (<i>Honours</i>), University of Nottingham, Architectural Environment Engineering (2020)'
        ],
        Awards: [],
        Featured_Publications: [
            (
                <>
                    <b>Chen, K.</b> and Ghahramani, A., 2023. <Link to="/publication/comfortgpt:_a" ><b>ComfortGPT: a transformer-based architecture for predicting preferred temperature setpoints leveraging big data</b></Link>. <i>Building and Environment</i>, <i>248</i>, 111085.    
                </>
            ),
            (
                <>
                    <b>Chen, K.</b>, Xu, Q., Leow, B. and Ghahramani, A., 2022. <Link to="/publication/personal_thermal" ><b>Personal thermal comfort models based on physiological measurements–A design of experiments based review</b></Link>. <i>Building and Environment</i>, <i>228</i>, 109919.    
                </>
            )
           
        ],
        Contacts: [
            { href: "tel:+6590503813", icon: faPhone, text: "+65 9050 3813" },
            { href: "mailto:e0918494@u.nus.edu", icon: faEnvelope, text: "e0918494@u.nus.edu" },
        ],
        Links: [
            { href: KaiCV, icon: faUser, text: 'CV' },
            { href: 'https://scholar.google.com/citations?user=YCk9UUYAAAAJ&hl=en', icon: faGoogle, text: 'Google Scholar' },
            { href: 'https://www.linkedin.com/in/kai-chen-879b60259/', icon: faLinkedin, text: 'LinkedIn' },
            { href: 'https://orcid.org/0000-0002-4779-7104', icon: faOrcid, text: 'ORCID' },
            { href: '/comfortGPT', icon: faPerson, text: 'ComfortGPT', isReactLink: true }
        ],
        Interests: [
            'Building Energy Efficiency',
            'Thermal Comfort',
            'Smart Buildings'
        ],
    },
    {
        ProfileName: 'Iqbal',
        ProfileLink: "/profile/Iqbal",
        ProfilePic: IqbalPic,
        Name: 'Iqbal Shah',
        Position: 'PhD Student',
        Biography: 'Iqbal Shah is a second-year PhD student (President\'s Graduate Fellow) at the National University of Singapore (NUS), College of Design & Engineering, Department of the Built Environment. His current research focuses on innovative façade technologies, urban greening solutions, as well as digital twin interface development, actuations, and ontology automation. Further expressing his interest in the technicalities and developments of heating and cooling systems, Iqbal is also currently a student member in the American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE) Singapore Chapter. He believes that a well-implemented semantic digital twin could bridge the gap between humans, systems, and the environment, allowing for true sustainability to be attained. To date, Iqbal has supervised eight undergraduate students for their final year project dissertation. Beyond academia and his research interests, Iqbal is passionate in volunteering work, and has participated as a mentor in multiple programmes. He lives by the quotes, “No one has ever become poor by giving.” - Anne Frank, and, “Those who are happiest are those who do the most for others.” - Booker T. Washington.',
        Education: [
            'PhD, National University of Singapore (NUS), Built Environment (current)',
            'BSc (<i>Highest Distinction</i>), National University of Singapore (NUS), Project & Facilities Management (2021)'
        ],
        Awards: [
            'NUS President\'s Graduate Fellowship, National University of Singapore (2022 - Current)',
            'Dean\'s List, National University of Singapore (2019 - 2021)',
            'Best BIMx Award, Graphisoft (2020)'
        ],
        Featured_Publications: [
            (
                <>
                    <b>Shah, I.</b>, Lau, S.K., Sekaran, V., and Ghahramani, A., 2023. <Link to="/publication/porous_plant" ><b>Porous plant form-induced amplification of evapotranspiration for enhanced cooling in vertical greenery systems</b></Link>. <i>Building and Environment</i>.
                </>
            ),
            (
                <>
                    <b>Shah, I.</b>, Soh, B., Lim, C., Lau, S. K., and Ghahramani, A., 2023. <Link to="/publication/thermal_transfer" ><b>Thermal transfer and temperature reductions from shading systems on opaque facades: Quantifying the impacts of influential factors</b></Link>. <i>Energy and Buildings, 278</i>, p.112604.      
                </>
            ),
        ],
        Contacts: [
            { href: "tel:+6581126774", icon: faPhone, text: "+65 8112 6774" },
            { href: "mailto:iqbal_shah@u.nus.edu", icon: faEnvelope, text: "iqbal_shah@u.nus.edu" },
        ],
        Links: [
            { href: IqbalCV, icon: faUser, text: 'CV' },
            { href: 'https://scholar.google.com/citations?user=dxE-nuEAAAAJ&hl=en&oi=sra', icon: faGoogle, text: 'Google Scholar' },
            { href: 'https://www.linkedin.com/in/iqbal-s-834035224/', icon: faLinkedin, text: 'LinkedIn' },
            { href: 'https://orcid.org/0000-0002-8006-1078', icon: faOrcid, text: 'ORCID' }
        ],
        Interests: [
            'Resilient Façade Systems',
            'Urban Greening',
            'Urban Heat Island',
            'Digital Twin Development',
            'Building Optimisation & Automation'
        ],
    },
    {
        ProfileName: 'Connor',
        ProfileLink: "/profile/Connor",
        ProfilePic: ConnorPic,
        Name: 'Connor Aucremanne',
        Position: 'PhD Student',
        Biography: 'Connor Aucremanne is a second-year PhD student at the National University of Singapore (NUS) studying in the College of Design & Engineering\'s Department of the Built Environment. His current research experience concerns the democratisation of virtual power plants for optimal monetisation and grid flexibility, occupant observability and controllability within the digital twin UI/UX, and residential indoor soundscape perception in the context of occupant well-being and biophilic building science. In the past, he also conducted valuable research during his time at the Pacific Northwest National Laboratory (PNNL), UF Center for Undergraduate Research, and Bob Graham Center for Public Service regarding net-zero energy and zero-carbon residential buildings, Floridian residential rooftop solar PV, and Floridian climate change policy and public health. Through his passion, determination, and collaboration for his studies, Connor strives to answer the questions that no one has even thought of to ask. Outside of academia, he enjoys curating Spotify playlists of all genres, rock climbing, collecting coffee table books, and appreciating all forms of art expressed through fashion.',
        Education: [
            'PhD, National University of Singapore (NUS), Built Environment (current)',
            'MSc, University College London (UCL), Built Environment: Environmental Design and Engineering (2023)',
            'BSc (<i>summa cum laude</i>), University of Florida (UF), Sustainability and the Built Environment (w/ minors in Economics; Agricultural and Natural Resource Ethics & Policy) (2021)'
        ],
        Awards: [
            'NUS Research Scholarship (Ring Fence Award), National University of Singapore (2023 - present)',
            'Bright Futures Academic Scholarship, University of Florida (2017 - 2021)',
            'Dean\'s List, University of Florida (2020, 2021)',
            'University Scholars Program Scholarship, University of Florida (2020 - 2021)',
            'President\'s Honor Roll, University of Florida (2019)'
        ],
        Featured_Publications: [],
        Contacts: [
            { href: "tel:+6590969616", icon: faPhone, text: "+65 9096 9616" },
            { href: "tel:+1(317)3789409", icon: faPhone, text: "+1 317 378 9409" },
            { href: "mailto:aucremanne@u.nus.edu", icon: faEnvelope, text: "aucremanne@u.nus.edu" },
        ],
        Links: [
            { href: ConnorCV, icon: faUser, text: 'CV' },
            { href: 'https://scholar.google.com/citations?user=jjEr918AAAAJ&hl=en&oi=ao', icon: faGoogle, text: 'Google Scholar' },
            { href: 'https://www.linkedin.com/in/connor-aucremanne', icon: faLinkedin, text: 'LinkedIn' },
            { href: 'https://orcid.org/0009-0006-7468-788X', icon: faOrcid, text: 'ORCID' }
        ],
        Interests: [
            'Virtual Power Plants',
            'Building-Occupant Network Dynamics',
            'Smart Buildings',
            'Human-Building Interaction',
            'Decarbonisation'
        ],
    },
    {
        ProfileName: 'Kelly',
        ProfileLink: "/profile/Kelly",
        ProfilePic: KellyPic,
        Name: 'Kelly Loh',
        Position: 'PhD Student',
        Biography: 'Kelly Loh Li Ting is an ambitious and dedicated individual who is a first-year PhD student at NUS CDE (National University of Singapore College of Design and Engineering). Recognized for her outstanding academic achievements and potential, Kelly has been awarded the esteemed President\'s Graduate Fellowship. Kelly\'s research endeavors revolve around exploring innovative uses for condensate collected from condensate recovery systems in Air Handling Units (AHU) to optimise building efficiency. With a strong passion for energy efficiency, she aims to contribute to the development of sustainable practices that enhance building performance and reduce environmental impact. In addition to her interest in energy efficiency, Kelly is deeply fascinated by the intersection of building finance and technology. She is particularly keen on leveraging Building Information Modelling (BIM) to analyze life cycle costs associated with building projects. By integrating financial considerations into the design and construction phases, Kelly envisions a future where buildings are not only energy-efficient but also economically sustainable. Kelly\'s long-term aspiration is to become a leading researcher and advocate in the field of sustainable building practices. She is determined to bridge the gap between academia and industry by translating research findings into practical solutions. By addressing the complex challenges of energy efficiency, building finance, and life cycle costs, Kelly aims to promote sustainable development and facilitate the creation of environmentally conscious built environments.',
        Education: [
            'PhD, National University of Singapore (NUS), Built Environment (current)',
            'BSc (<i>Highest Distinction</i>), National University of Singapore (NUS), Project and Facilities Management (2023)'
        ],
        Awards: [
            'NUS President\'s Graduate Fellowship, National University of Singapore (2023 - current)',
            'Outstanding Case Submission of the NUS-CHS Case Competition, National University of Singapore (2021)'
        ],
        Featured_Publications: [],
        Contacts: [
            { href: "tel:+6598356852", icon: faPhone, text: "+65 9835 6852" },
            { href: "mailto:kelly_loh_li_ting@u.nus.edu", icon: faEnvelope, text: "kelly_loh_li_ting@u.nus.edu" },
        ],
        Links: [
            { href: KellyCV, icon: faUser, text: 'CV' },
            { href: 'https://www.linkedin.com/in/kelly-loh-65a5971bb/', icon: faLinkedin, text: 'LinkedIn' },
        ],
        Interests: [
            'Building Energy Efficiency',
            'Building Greenery',
            'Building Finance',
            'Building Information Modelling'
        ],
    },
    {
        ProfileName: 'Ilyas',
        ProfileLink: "/profile/Ilyas",
        ProfilePic: IlyasPic,
        Name: 'Ilyas Dawoodjee',
        Position: 'MSc Student',
        Position2: 'University of Manitoba (Canada)',
        Biography: 'Ilyas Dawoodjee is currently a MSc Mechanical Engineering student at University of Manitoba where he researches in the Intelligent Digital Manufacturing Laboratory (IDML). From April 2022 to December 2023, he served as a Research Engineer in the Building Robotics Lab. His area of research involved the detection of physiological measurements through machine vision. Some of his previous projects include object detection, data classification, image segmentation, and image classification. He is well-versed in multiple aspects of engineering ranging from CAD/CAM, SPICE simulations, sensors & actuators, control systems, microcontrollers, and PLC, with hands-on experience in them. However, his main passion is robotics integrated with machine vision and machine learning. He is an avid programmer who spends most of his free time coding and is always eager to learn new programming techniques and technologies. Outside of work, he likes to play games and is a fan of movies and TV series. He is a huge fan of educational YouTubers such as Veritasium, StuffMadeHere, 3Blue1Brown, VSauce, C.G.P. Grey, Minute Physics, and more.',
        Education: [
            'MSc, University of Manitoba, Mechanical Engineering (current)',
            'BEng (<i>First Class Honours w/ Distinction</i>), Asia Pacific University (APU), Mechatronics Engineering (2022)'
        ],
        Awards: [
            'International Graduate Student Entrance Scholarship (IGSES), University of Manitoba (current)',
            'AI4S Program Inception Recipient, Asia Pacific University (2022)',
            'Valedictorian, Asia Pacific University (2022)',
            'Outstanding Achievement Award, Asia Pacific University (2022)'
        ],
        Featured_Publications: [],
        Contacts: [
            /*{ href: "tel:+6586869527", icon: faPhone, text: "+65 8686 9527" },*/
            { href: "mailto:dawoodji@myumanitoba.ca", icon: faEnvelope, text: "dawoodji@myumanitoba.ca" },
        ],
        Links: [
            { href: IlyasCV, icon: faUser, text: 'CV' },
            { href: 'https://scholar.google.com/citations?user=FlonsoAAAAAJ&hl=en&oi=ao', icon: faGoogle, text: 'Google Scholar' },
            { href: 'https://www.linkedin.com/in/ilyas-dawoodjee-858011195/', icon: faLinkedin, text: 'LinkedIn' },
            { href: 'https://github.com/blank-ed', icon: faGithub, text: 'GitHub' },
        ],
        Interests: [
            'Machine Vision',
            'Robotics',
            'Deep Learning/Machine Learning',
            'Automation',
            'Digital Signal Processing'
        ],
    },
    {
        ProfileName: 'Stella',
        ProfileLink: "/profile/Stella",
        ProfilePic: StellaPic,
        Name: 'HU Xinhao',
        Position: 'Visiting PhD Candidate',
        Position2: 'Hunan University (China)',
        Biography: 'HU Xinhao is a fourth-year PhD candidate from the Building Environment and Energy Application Department at Hunan University, P. R. China, and is a visiting student in Assistant Professor Ghahramani\'s group in the Department of the Built Environment at the National University of Singapore. Her research focuses on thermal comfort and building energy efficiency, and her current research project is on the comfort characterising of indoor occupants with personal comfort systems under solar radiation.',
        Education: [
            'PhD, Hunan University (HNU), Civil Engineering (current)',
            'MEng, Nanjing Normal University, Heating, Gas Supply, Ventilating and Air Conditioning Engineering (2020)',
            'BEng, Nanjing Normal University, Mechanical Engineering & Business English (2017)'
        ],
        Awards: [
            'Excellent Master\'s Thesis, Nanjing Normal University (2021)',
            'Second Place, Youth Excellent Paper of Jiangsu Refrigeration Society (2018)',
            'Third Place, 2018 World HVAC Student Technology Competition (2018)',
            'First-Class Scholarship, Nanjing Normal University (2017 - 2019)'
        ],
        Featured_Publications: [
            (
                <>
                    <b>Hu, X.</b>, Zhang, Z., Yao, Y. and Wang, Q., 2018. <a href="https://www.sciencedirect.com/science/article/abs/pii/S1359431118300796" ><b>Non-azeotropic refrigerant charge optimization for cold storage unit based on year-round performance evaluation</b></a>. <i>Applied Thermal Engineering, 139</i>, 395-401.  
                </>
            ),
            (
                <>
                    <b>Hu, X.</b>, Zhang, Z. and Cai, D., 2020. <a href="https://www.mdpi.com/1996-1073/13/6/1436" ><b>A Mathematical Tightening of Instantaneous Indoor and Outdoor Dry-Bulb and Wet-Bulb Temperature Tolerances[J]</b></a>. <i>Energies, 13(6)</i>, 1436.
                </>
            ),
        ],
        Contacts: [
            { href: "tel:+6588648925", icon: faPhone, text: "+65 8864 8925" },
            { href: "tel:+8615605188905", icon: faPhone, text: "+86 156 0518 8905" },
            { href: "mailto:xinhaohu@outlook.com", icon: faEnvelope, text: "xinhaohu@outlook.com" },
            { href: "mailto:e1115313@u.nus.edu", icon: faEnvelope, text: "e1115313@u.nus.edu" },
        ],
        Links: [
            { href: StellaCV, icon: faUser, text: 'CV' }
        ],
        Interests: [
            'Indoor Thermal Comfort',
            'Indoor Environment Quality',
            'Building Energy Conservation'
        ],
    },
    {
        ProfileName: 'Xiaosong',
        ProfileLink: "/profile/Xiaosong",
        ProfilePic: XiaosongPic,
        Name: 'SU Xiaosong',
        Position: 'Visiting PhD Candidate',
        Position2: 'Hunan University (China)',
        Biography: 'Song is a final-year visiting PhD student at NUS, coming from Hunan University in China. His research focuses on building energy efficiency with advanced technology and innovative building envelope, such as building-integrated photovoltaics, light-transmitting concrete, and radiant cooling systems. In addition, he is curious about data science and other new technology and tries to integrate them with his research.',
        Education: [
            'PhD, Hunan University (HNU), Heating, Ventilation and Air-Conditioning (HVAC) (current)',
            'BEng, Hunan University (HNU), Building Environment and Energy Engineering (2018)'
        ],
        Awards: [
            'China National Scholarship for Graduate Students, Ministry of Education of the People\'s Republic of China (2018, 2022)',
            'Presidential Scholarship for Doctoral Students, Hunan University (2021)',
            'First-Class Graduate Student Scholarship, Hunan University (2019 - 2022)',
            'Excellent Graduate Students of Hunan University, Hunan University (2019 - 2022)',
            'Top Ten Graduate Students in College of Civil Engineering (academic performance and research achievements), Hunan University (2022)'
        ],
        Featured_Publications: [
            (
                <>
                    <b>Su, X.</b>, Zhang, L., Liu, Z., Luo, Y., Liang, P. and Lian, J., 2022. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0959652622021886" ><b>An optical and thermal analysis of translucent concrete considering its dynamic transmittance</b></a>. <i>Journal of Cleaner Production, 364</i>, 132588.
                </>
            ),
            (
                <>
                    <b>Su, X.</b>, Zhang, L., Luo, Y., Liu, Z., Yang, H. and Wang, X., 2021. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0196890421011018" ><b>Conceptualization and preliminary analysis of a novel reversible photovoltaic window</b></a>. <i>Energy Conversion and Management, 250</i>, 114925.
                </>
            ),  
        ],
        Contacts: [
            { href: "mailto:e1115332@u.nus.edu", icon: faEnvelope, text: "e1115332@u.nus.edu" },
        ],
        Links: [
            { href: XiaosongCV, icon: faUser, text: 'CV' },
            { href: 'https://www.scopus.com/authid/detail.uri?authorId=57202978629', icon: faS, text: 'Scopus' },
        ],
        Interests: [
            'Building Energy Efficiency',
            'Energy-Efficient Building Envelope',
            'Building-Integrated Photovoltaics',
            'Radiant Cooling Technology in Buildings'
        ],
    },
    {
        ProfileName: 'Pegah',
        ProfileLink: "/profile/Pegah",
        ProfilePic: PegahPic,
        Name: 'Pegah Eshraghi',
        Position: 'Visiting PhD Candidate',
        Position2: 'Shahid Beheshti University (Iran)',
        Biography: 'Pegah Eshraghi is a fourth-year PhD candidate of Architecture (with Energy background) at Shahid Beheshti University, Tehran, Iran. She is an enthusiastic student in building energy modelling and the environmental effects of buildings on different scales. Pegah is also currently a research assistant at NUS (National University of Singapore), College of Design & Engineering, Department of the Built Environment. With a strong passion for energy conservation, Pegah\'s focus is to create a framework at the urban block scale with the help of machine learning and various energy and environmental metrics in order to achieve the best morphology and density distribution. In addition to her interest in energy efficiency, Pegah is deeply fascinated by the developing frameworks based on sustainable guidelines helping architects and urban planners easily evaluate their alternatives at the very early stages of design, and provide services such as designing, consultation, optimisation, giving international certificates and energy labels for energy, daylighting, thermal comfort, indoor environmental quality, etc. She believes using these frameworks will help people to make decisions faster and more conveniently to live in an eco-friendly environment.',
        Education: [
            'PhD, Shahid Beheshti University (SBU), Buildings (current)',
            'MArch, Shahid Beheshti University (SBU), Building Engineering (2020)',
            'BArch (<i>First Class Honours</i>), Ferdowsi University of Mashhad (FUM), Architecture (2018)'
        ],
        Awards: [],
        Featured_Publications: [
            (
                <>
                    Sharif, S.A., Hammad, A. and <b>Eshraghi, P.</b>, 2021. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0378778820304904" ><b>Generation of whole building renovation scenarios using variational autoencoders</b></a>. <i>Energy and Buildings, 230</i>, 110520.
                </>
            ),
            (
                <>
                    Ahmadi Soleimani, S.M., <b>Eshraghi, P.</b>, Mirdamadi, M. and Zamardian, Z., 2022. <a href="https://soffeh.sbu.ac.ir/article_102765.html" ><b>Optimizing energy consumption of educational buildings, a case study: Shahid Beheshti University</b></a>. <i>Safa, 32(3)</i>, 49-65. [Persian]
                </>
            ),
        ],
        Contacts: [
            { href: "tel:+6581597168", icon: faPhone, text: "+65 8159 7168" },
            { href: "mailto:pegah.es@nus.edu.sg", icon: faEnvelope, text: "pegah.es@nus.edu.sg" },
        ],
        Links: [
            { href: PegahCV, icon: faUser, text: 'CV' },
            { href: 'https://www.researchgate.net/profile/Pegah-Eshraghi/research', icon: faResearchgate, text: 'ResearchGate' },
            { href: 'https://www.linkedin.com/in/pegah-eshraghi-194228185/', icon: faLinkedin, text: 'LinkedIn' },
        ],
        Interests: [
            'Building Energy Efficiency',
            'Machine Learning',
            'Urban Building Energy Modelling',
            'Indoor Environmental Quality',
            'Thermal Comfort'
        ],
    },
    {
        ProfileName: 'Pierre',
        ProfileLink: "/profile/Pierre",
        ProfilePic: PierrePic,
        Name: 'Pierre-Louis David',
        Position: 'Visiting MSc Student',
        Position2: 'ETH Zürich (Switzerland)',
        Biography: 'Pierre-Louis David is honoured to be a Master\'s candidate from ETH Zürich, specialising in Mechanical Engineering with a significant emphasis on Computer Science. Currently, he is in the midst of completing his thesis at the Building Robotics Lab in the Department of the Built Environment at the National University of Singapore, with a concentrated effort on optimising virtual power plants and pioneering methods to forecast energy prices using ML techniques. In his previous role at the esteemed Paul Scherrer Institut, he had the privilege to work with computer vision in the innovative Center for Proton Therapy. The objective was to refine segmentation techniques for patients afflicted with eye tumors, enhancing the efficacy of proton therapy and subsequently, improving patient recovery outcomes. Beyond his academic and professional pursuits, he takes a keen interest in marathon running, and values the moments he spends chatting with friends and colleagues.',
        Education: [
            'MSc, Eidgenössische Technische Hochschule (ETH Zürich), Mechanical Engineering and Computer Science (current)',
            'BSc, École Polytechnique Fédérale de Lausanne (EPFL), Mechanical Engineering (2021)'
        ],
        Awards: [],
        Featured_Publications: [],
        Contacts: [
            { href: "tel:+33(0)778434608", icon: faPhone, text: "+33 (0) 7 78 43 46 08" },
            { href: "mailto:pierre.louis.david@u.nus.edu", icon: faEnvelope, text: "pierre.louis.david@u.nus.edu" },
            { href: "mailto:pidavid@student.ethz.ch", icon: faEnvelope, text: "pidavid@student.ethz.ch" },
        ],
        Links: [
            { href: PierreCV, icon: faUser, text: 'CV' },
            { href: 'https://www.linkedin.com/in/pierre-louis-david', icon: faLinkedin, text: 'LinkedIn' }
        ],
        Interests: [
            'Machine Learning',
            'Optimisation',
            'Computer Vision',
            'Energy'
        ],
    },
    {
        ProfileName: 'Guillaume',
        ProfileLink: "/profile/Guillaume",
        ProfilePic: GuillaumePic,
        Name: 'Guillaume Lecronier',
        Position: 'Visiting MSc Student',
        Position2: 'ETH Zürich (Switzerland)',
        Biography: 'Guillaume Lecronier is a master student at ETH Zürich (Swiss Federal Institute of Technology) in Mechanical Engineering and Robotics. Originally from France, he\'s visiting the lab in order to conduct his master thesis. His research focuses on indoor environment monitoring and involves the use of bluetooth low energy (BLE) technology in the scope of indoor positioning systems using a digital twin interface. Guillaume has a strong interest in IoT applications and is keen on working with sensors and integrating them into electronic prototyping setups, especially with platforms like Raspberry Pis. He enjoys the process of collecting valuable and meaningful data from these for innovative projects. In his free time, Guillaume enjoys running and fitness as well as travelling.',
        Education: [
            'MSc, Eidgenössische Technische Hochschule (ETH Zürich), Mechanical Engineering (current)',
            'BSc, École Polytechnique Fédérale de Lausanne (EPFL), Mechanical Engineering (2021)'
        ],
        Awards: [],
        Featured_Publications: [],
        Contacts: [
            { href: "tel:+6589185944", icon: faPhone, text: "+65 8918 5944" },
            { href: "tel:+33761091396", icon: faPhone, text: "+33 (0) 7 61 09 13 96" },
            { href: "mailto:glecronier@u.nus.edu", icon: faEnvelope, text: "glecronier@u.nus.edu" },
            { href: "mailto:glecronier@me.com", icon: faEnvelope, text: "glecronier@me.com" },
        ],
        Links: [
            { href: GuillaumeCV, icon: faUser, text: 'CV' },
            { href: 'https://www.linkedin.com/in/guillaume-lecronier-990b67197/', icon: faLinkedin, text: 'LinkedIn' }
        ],
        Interests: [
            'Robotics',
            'Embedded Systems',
            'IoT',
            'Sensor Data Analysis',
            'Machine Learning'
        ],
    },
    {
        ProfileName: 'Michelle',
        ProfileLink: "/profile/Michelle",
        ProfilePic: MichellePic,
        Name: 'QI Xuanning',
        Position: 'PhD Candidate',
        Position2: 'Harbin Insitute of Technology (China)',
        Biography: 'QI Xuanning is currently pursuing a doctoral degree in architecture at the Harbin Institute of Technology, and was a visiting PhD candidate at the National University of Singapore from August 2022 to August 2023. She is also a student member of the Architectural Society of China. In her academic career, she has published five papers in academic conferences and journals, and has contributed to the compilation of ‘Unified Standard for Civil Building Design Illustrations’ (20J813). In addition, she has been granted three invention patents and one utility model patent. QI Xuanning has also participated in the design of over ten architectural projects and was recognized with the third-place prize in the architectural survey and design competition in Heilongjiang Province in 2022. Her research interests include computational design, daylight design, occupant behaviour, and visual cognition. In her free time, QI Xuanning enjoys exploring new cities and experiencing different cultures. She also likes to engage in outdoor activities, such as hiking and cycling, which inspire her to think creatively about the relationship between architecture and the natural environment.',
        Education: [
            'PhD, Harbin Institute of Technology, Architecture Design and Theory (current)',
            'BArch, Central South University, Architecture Design and Theory (2018)'
        ],
        Awards: [
            'Second Place - Computational Design 2019, Architectural Society of China Computational Design Academic Committee (2019)',
            'Third Place - Five East Asian Universities Urban Architecture Studio (2019)',
            'Second Place - The First China Artic Wood Structure Design Competition (2019)',
            'First Place - Basic scholarship for outstanding master students, Harbin Institute of Technology (2018 - 2019)',
            'Second Place - Special scholarship for outstanding master students, Harbin Institute of Technology (2018)',
        ],
        Featured_Publications: [
            (
                <>
                    Sun, C., <b>Qi, X.</b> and Han, Y., 2021. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0038092X21002012" ><b>Seasonal characteristics of CIE standard sky types in northeast China</b></a>. <i>Solar Energy, 220</i>, 152-162.
                </>
            ),
            (
                <>
                    Sun, C., Han, Y., <b>Qi, X.</b>, Yang, Y., Dong, Q., Huang, X., Jia, Y., and Huang, Q., 2019. <a href="https://kns.cnki.net/kcms2/article/abstract?v=kxaUMs6x7-4I2jr5WTdXti3zQ9F92xu0gvt3ehWH641nXIm3xPXxt0GgxIkyBOp9sifFXSY8TBfc2pPK_g4G8hk_kvOHtCd-&uniplatform=NZKPT" ><b>An Immersive Simulation Method of Building Indoor Glare Based on Local Sky Model</b></a>. Heilongjiang Province, CN201811307655.8 [P]
                </>
            ),
        ],
        Contacts: [
            { href: "mailto:r.talami@nus.edu.sg", icon: faEnvelope, text: "michelle@hit.edu.cn" },
        ],
        Links: [
            /*{ href: MichelleCV, icon: faUser, text: 'CV' },*/
            { href: 'https://www.researchgate.net/profile/Xuanning-Qi', icon: faResearchgate, text: 'ResearchGate' }
        ],
        Interests: [
            'Computational Design',
            'Daylight Design',
            'Occupant Behaviour',
            'Visual Cognition'
        ],
    },
    {
        ProfileName: 'Prof',
        ProfileLink: "/team",
        ProfilePic: ProfPic,
        Name: 'Ali Ghahramani',
        Position: 'Assistant Professor (PYP)',
        Links: [
            { href: ProfCV, icon: faUser, text: 'CV' },
            { href: 'https://scholar.google.com/citations?user=9UACV-AAAAAJ&hl=en&oi=ao', icon: faGoogle, text: 'Google Scholar' },
            { href: 'https://www.researchgate.net/profile/Ali-Ghahramani-4', icon: faResearchgate, text: 'ResearchGate' },
            { href: 'https://www.linkedin.com/in/alighahramani/', icon: faLinkedin, text: 'LinkedIn' },
            { href: 'https://orcid.org/0000-0003-2043-7261', icon: faOrcid, text: 'ORCID' }
        ],
    },
];

export default profiles;