import ProfPic from './prof_pic.jpg'
import ProfCV from './prof_CV.pdf'

import RiccardoPic from './Riccardo/image.jpg'
import RiccardoCV from './Riccardo/CV.pdf'

import HengPic from './Heng/image.jpg'
import HengCV from './Heng/CV.pdf'

import KeshavPic from './Keshav/image.jpeg'
import KeshavCV from './Keshav/CV.pdf'

import KaiPic from './Kai/image.jpg'
import KaiCV from './Kai/CV.pdf'

import IqbalPic from './Iqbal/image.jpg'
import IqbalCV from './Iqbal/CV.pdf'

import ConnorPic from './Connor/image.jpg'
import ConnorCV from './Connor/CV.pdf'

import KellyPic from './Kelly/image.jpg'
import KellyCV from './Kelly/CV.pdf'

import RezkyPic from './Rezky/image.jpeg'
import RezkyCV from './Rezky/CV.pdf'

import JonathanPic from './Jonathan/image.jpg'
import JonathanCV from './Jonathan/CV.pdf'

import HuanxiangPic from '/Users/connoraucremanne/Documents/Website_2.0/brlab/src/components/Website Individual Information/Untitled.jpeg'
import HuanxiangCV from './Huanxiang/CV.pdf'

//import China2 from './China2/image.jpeg'
//import China2CV from './China2/CV.pdf'

import XiaorongPic from './Xiaorong/image.jpeg'
import XiaorongCV from './Xiaorong/CV.pdf'

import PegahPic from './Pegah/image.jpg'
import PegahCV from './Pegah/CV.pdf'

import GuillaumePic from './Guillaume/image.jpg'
import GuillaumeCV from './Guillaume/CV.pdf'

import PierrePic from './Pierre-Louis/image.jpg'
import PierreCV from './Pierre-Louis/CV.pdf'

import XiaosongPic from './Xiaosong/image.jpg'
import XiaosongCV from './Xiaosong/CV.pdf'

import StellaPic from './Stella/image.jpg'
import StellaCV from './Stella/CV.pdf'

import IlyasPic from './Ilyas/image.jpg'
import IlyasCV from './Ilyas/CV.pdf'

import MichellePic from './Michelle/image.jpg'
import MichelleCV from './Michelle/CV.pdf'

import { faPhone, faEnvelope, faUser, faTemperatureHalf, faPerson, faS, faImage } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedin, faResearchgate, faOrcid, faGit, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'

const profiles = [
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
    {
        ProfileName: 'Riccardo',
        ProfileLink: "/profile/Riccardo",
        ProfilePic: RiccardoPic,
        Name: 'Riccardo Talami, PhD',
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
                    <b>Talami, R.</b>, Dawoodjee, I. and Ghahramani, A., 2023. <Link to="/publication/quantifying_energy_savings" ><b>Quantifying energy savings from optimal selection of HVAC temperature setpoints and setbacks across diverse occupancy rates and patterns</b></Link>. <i>Buildings, 13</i>(12), 2998.
                </>
            ),
            (
                <>
                    <b>Talami, R.</b>, Dawoodjee, I. and Ghahramani, A., 2023. <Link to="/publication/demystifying_energy_savings" ><b>Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability</b></Link>. <i>Energy and Built Environment, 5</i>(6), 878-888.
                </>
            ),
            (
                <>
                    <b>Talami, R.</b> and  Jakubiec, J.A., 2020. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0378778819333614" ><b>Early-design sensitivity of radiant cooled office buildings in the tropics for building performance</b></a>. <i>Energy and Buildings, 223</i>, 110177.
                </>
            )
        ],
        Contacts: [
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
        ProfileName: 'Heng',
        ProfileLink: "/profile/Heng",
        ProfilePic: HengPic,
        Name: 'Du Heng, PhD',
        Position: 'Research Fellow',
        Biography: 'Du Heng, PhD, is a Research Fellow in the Department of the Built Environment, National University of Singapore (NUS). He received in PhD in Architecture from Shanghai Jiao Tong University (SJTU) in 2023. His previous research has focused on methods for designing thermal environments and evaluating human thermal comfort. In particular, he has re-evaluated traditional thermal comfort models such as predictive mean vote (PMV) and standard effective temperature (SET). He has extended to exploring the impact of various contextual factors (e.g. season, climate zone, building type, HVAC mode, circadian rhythm) and individual factors (e.g. gender and age) on thermal comfort. He has investigated the application of statistical methods to indoor environmental quality (IEQ) research, such as methods for determining appropriate sample sizes and statistical methods at different research aims. He has attempted to establish data-driven thermal comfort models. Looking ahead, Du Heng is committed to dedicating his efforts to exploring innovative methods that contribute to improving human well-being and promoting environmental sustainability. His passion extends to interdisciplinary research collaborations where he seeks to bring together diverse perspectives for impactful outcomes. In addition to his academic research, Du Heng is a certified local master of the Xiangqi (Chinese Chess) Association and has achieved many championships and outstanding rankings at the university and open levels. He also enjoys playing ultimate frisbee and has been selected as a practice player for the SJTU Frisbee Team.',
        Education: [
            'PhD, Shanghai Jiao Tong University (SJTU), Architecture/Building Technology (2023)',
            'MEng, Hunan University, Heating, Ventilation, and Air-Conditioning (HVAC) (2019)',
            'BEng, Xiangtan University, Building Environment and Equipment Engineering (2015)'
        ],
        Awards: [
            'Outstanding Graduate of Shanghai, Shanghai Municipal Commission of Education (2023)',
            'Best Paper Award, Healthy Buildings 2023 Asia and Pacific Rim (2023)',
            'China National Scholarship for Graduate Students, Ministry of Education of the People\'s Republic of China (2022)',
            'Outstanding Scholarship of Shanghai Jiao Tong University, Shanghai Jiao Tong University (2021)',
        ],
        Featured_Publications: [
            (
                <>
                    <b>Du, H.</b>, Lian, Z., Lai, D., Duanmu, L., Zhai, Y., Cao, B., Zhang, Y., Zhou, X., Wang, Z., Zhang, X. and Hou, Z., 2022. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0378778819333614" ><b>Evaluation of the accuracy of PMV and its several revised models using the Chinese thermal comfort Database</b></a>. <i>Energy and Buildings, 271</i>, 112334.
                </>
            ),
            (
                <>
                    <b>Du, H.</b>, Lian, Z., Lai, D., Duanmu, L., Zhai, Y., Cao, B., Zhang, Y., Zhou, X., Wang, Z., Zhang, X. and Hou, Z., 2022. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0360132321010751" ><b>Comparison of thermal comfort between radiant and convective systems using field test data from the Chinese Thermal Comfort Database</b></a>. <i>Building and Environment, 209</i>, 108685.
                </>
            ),
            (
                <>
                    <b>Du, H.</b>, Lian, Z., Lai, D., Liu, W., Duanmu, L., Zhai, Y., Cao, B., Zhang, Y., Zhou, X., Wang, Z. and Zhang, X., 2021. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0378778821002048" ><b>Method of determining acceptable air temperature thresholds in Chinese HVAC buildings based on a data-driven model</b></a>. <i>Energy and Buildings, 241</i>, 110920.
                </>
            ),
            (
                <>
                    <b>Du, H.</b>, Lian, Z., Lan, L. and Lai, D., 2023. <a href="https://link.springer.com/article/10.1007/s12273-022-0970-4" ><b>Application of statistical analysis of sample size: How many occupant responses are required for an indoor environmental quality (IEQ) field study</b></a>. <i>Building Simulation, 16</i>(4), 577-588.
                </>
            ),
            (
                <>
                    <b>Du, H.</b>, Zhao, Z., Lyu, J., Li, J., Li, X., Yang, Y., Lan, L. and Lian, Z., 2023. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0378778823005753" ><b>Gender differences in thermal comfort under coupled environmental factors</b></a>. <i>Energy and Buildings, 295</i>, 113345.
                </>
            )
        ],
        Contacts: [
            { href: "mailto:duheng@nus.edu.sg", icon: faEnvelope, text: "duheng@nus.edu.sg" }
        ],
        Links: [
            { href: HengCV, icon: faUser, text: 'CV' },
            { href: 'https://scholar.google.com/citations?user=JZtMKNAAAAAJ&hl=en', icon: faGoogle, text: 'Google Scholar' },
            { href: 'https://www.researchgate.net/profile/Heng-Du-11', icon: faResearchgate, text: 'ResearchGate' },
            { href: 'https://www.scopus.com/authid/detail.uri?authorId=57219307089', icon: faS, text: 'Scopus' },
            { href: 'https://www.linkedin.com/in/heng-du-148802285/', icon: faLinkedin, text: 'LinkedIn' },
            { href: 'https://orcid.org/0000-0002-7519-5629', icon: faOrcid, text: 'ORCID' },
        ],
        Interests: [
            'Thermal Comfort',
            'Human Well-Being',
            'Environmental Sustainability',
            'Smart Buildings',
            'Data-Driven Models'
        ],
    },
    {
        ProfileName: 'Keshav',
        ProfileLink: "/profile/Keshav",
        ProfilePic: KeshavPic,
        Name: 'Keshav Kausik, PhD',
        Position: 'Research Fellow',
        Biography: 'Keshav Kaushik, PhD is a Research Fellow in the Department of the Built Environment at the National University of Singapore. His research focuses on using computer science to make sustainable and efficient built environments. He has experience in real-world system deployments for energy-efficient building systems. In his free time, he enjoys going on long walks.',
        Education: [
            'PhD, Birla Institute of Technology and Science (BITS), Pilani, Computer Science & Information Systems (2023)',
            'BTech, Guru Gobind Singh Indraprastha University (GGSIPU), Computer Science & Engineering (2018)',
            'Diploma, Chhotu Ram Rural Institute Of Technology (CRRIT), Electronics Engineering (2015)'
        ],
        Awards: [
            'Research Explorer Ruhr, Ruhr University Alliance (2023)',
            'SIGMobile Community Grant, ACM SigMobile (2023)',
            'Travel Grant, IEEE COMSNETS (2023)',
            '2nd Position in 5 Minutes Innovation Challenge, International Conference on Secure Knowledge Management (2019)',
        ],
        Featured_Publications: [
            (
                <>
                    <b>Kaushik, K.</b> and Naik, V., 2023, November. <a href="https://dl.acm.org/doi/10.1145/3600100.3623721" ><b>An Energy Consumption Dataset for Ductless-split Cooling Systems to Train Large Models</b></a>. In <i>Proceedings of the 10th ACM International Conference on Systems for Energy-Efficient Buildings, Cities, and Transportation</i>, 216-219.
                </>
            ),
            (
                <>
                    <b>Kaushik, K.</b> and Naik, V., 2023, October. <a href="https://www.computer.org/csdl/proceedings-article/e-science/2023/10254663/1QJgeSdKabe" ><b>OCSRL: An Model-Based Reinforcement Learning Approach to Optimize Energy Consumption of Cooling Systems</b></a>. In <i>2023 IEEE 19th International Conference on e-Science</i>, 1-10.
                </>
            ),
            (
                <>
                    <b>Kaushik, K.</b> and Naik, V., 2023, December. <a href="https://link.springer.com/chapter/10.1007/978-3-031-48649-4_8" ><b>A Real-Time Non-Invasive Anomaly Detection Technique for Cooling Systems</b></a>. In <i>Energy Informatics Academy Conference</i>, 135-151.
                </>
            ),
        ],
        Contacts: [
            { href: "mailto:keshav@nus.edu.sg", icon: faEnvelope, text: "keshav@nus.edu.sg" }
        ],
        Links: [
            { href: KeshavCV, icon: faUser, text: 'CV' },
            { href: 'https://scholar.google.co.in/citations?user=68iHdyoAAAAJ&hl=en', icon: faGoogle, text: 'Google Scholar' },
            { href: 'https://www.researchgate.net/profile/Keshav-Kaushik-5', icon: faResearchgate, text: 'ResearchGate' },
            { href: 'https://www.linkedin.com/in/keshav-kaushik/', icon: faLinkedin, text: 'LinkedIn' },
            { href: 'https://orcid.org/0000-0003-1329-3677', icon: faOrcid, text: 'ORCID' },
        ],
        Interests: [
            'IoT for Building Systems',
            'Sustainable Buildings',
            'AI-Enabled Building Management',
            'Optimal Control'
        ],
    },
    {
        ProfileName: 'Kai',
        ProfileLink: "/profile/Kai",
        ProfilePic: KaiPic,
        Name: 'Chen Kai',
        Position: 'PhD Student',
        Biography: 'Chen Kai is a third-year PhD candidate at the National University of Singapore - Department of the Built Environment and is currently engaged in research that focuses on thermal comfort modelling, long-term thermal comfort prediction, and energy conservation in HVAC systems. He firmly believes that accurately addressing occupants\' comfort is vital for optimising energy consumption and enhancing human well-being. In addition to his research on these topics, Kai has conducted research on biomass heating for domestic and commercial buildings in the UK, performed analysis on building systems\' components, and gained experience in energy simulation and optimisation.',
        Education: [
            'PhD, National University of Singapore (NUS), Built Environment (Current)',
            'MSc (<i>Merit</i>), University College London (UCL), Smart Buildings and Digital Engineering (2021)',
            'BEng (<i>Honours</i>), University of Nottingham, Architectural Environment Engineering (2020)'
        ],
        Awards: [],
        Featured_Publications: [
            (
                <>
                    <b>Chen, K.</b> and Ghahramani, A., 2023. <Link to="/publication/comfortgpt:_a_transformer-based" ><b>ComfortGPT: a transformer-based architecture for predicting preferred temperature setpoints leveraging big data</b></Link>. <i>Building and Environment</i>, <i>248</i>, 111085.    
                </>
            ),
            (
                <>
                    <b>Chen, K.</b>, Xu, Q., Leow, B. and Ghahramani, A., 2022. <Link to="/publication/personal_thermal_comfort" ><b>Personal thermal comfort models based on physiological measurements–A design of experiments based review</b></Link>. <i>Building and Environment</i>, <i>228</i>, 109919.    
                </>
            )
           
        ],
        Contacts: [
            { href: "mailto:e0918494@u.nus.edu", icon: faEnvelope, text: "e0918494@u.nus.edu" }
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
            'PhD, National University of Singapore (NUS), Built Environment (Current)',
            'BSc (<i>Highest Distinction</i>), National University of Singapore (NUS), Project & Facilities Management (2021)',
            'Diploma (<i>Merit</i>), Temasek Polytechnic, Integrated Facility Management (2016)'
        ],
        Awards: [
            'NUS President\'s Graduate Fellowship, National University of Singapore (2022 - Present)',
            'iBuildSG Industry Sponsorship, Building and Construction Authority (2018 - Present)',
            'Dean\'s List, National University of Singapore (2019, 2020, 2021)',
            'Best BIMx Award, Graphisoft (2020)',
            'Director\'s List, Temasek Polytechnic (2014, 2015)'
        ],
        Featured_Publications: [
            (
                <>
                    <b>Shah, I.</b>, Su, X., Talami, R. and Ghahramani, A., 2024. <Link to="/publication/enhancing_building_envelopes:" ><b>Enhancing Building Envelopes: Parametric Analysis of Shading Systems for Opaque Facades and Their Comparison with Cool Paints</b></Link>. <i>Energy and Built Environment</i>.
                </>
            ),
            (
                <>
                    <b>Shah, I.</b>, Lau, S.K., Sekaran, V., and Ghahramani, A., 2023. <Link to="/publication/porous_plant_form-induced" ><b>Porous plant form-induced amplification of evapotranspiration for enhanced cooling in vertical greenery systems</b></Link>. <i>Building and Environment, 245</i>, 110904.
                </>
            ),
            (
                <>
                    <b>Shah, I.</b>, Soh, B., Lim, C., Lau, S. K., and Ghahramani, A., 2023. <Link to="/publication/thermal_transfer_and" ><b>Thermal transfer and temperature reductions from shading systems on opaque facades: Quantifying the impacts of influential factors</b></Link>. <i>Energy and Buildings, 278</i>, 112604.      
                </>
            ),
        ],
        Contacts: [
            { href: "mailto:iqbal_shah@u.nus.edu", icon: faEnvelope, text: "iqbal_shah@u.nus.edu" }
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
        Biography: 'Connor Aucremanne is a second-year PhD student at the National University of Singapore (NUS) studying in the College of Design & Engineering\'s Department of the Built Environment. His primary research concerns the democratisation of virtual power plants for optimal monetisation and grid flexibility, as well as secondary projects revolving around digital twin development, resilient cooling, and decarbonisation. In the past, he also conducted valuable research during his time at the Pacific Northwest National Laboratory (PNNL), UCL, UF Center for Undergraduate Research, and Bob Graham Center for Public Service regarding net-zero energy and zero-carbon residential buildings, residential indoor soundscape perpcetion, Floridian residential rooftop solar PV, and Floridian climate change policy and public health. Through his passion, determination, and collaboration for his studies, Connor strives to answer the questions that no one has even thought of to ask. Outside of academia, he enjoys curating Spotify playlists of all genres (except country), rock climbing, collecting coffee table books, and appreciating (most) forms of expression throughout the arts.',
        Education: [
            'PhD, National University of Singapore (NUS), Built Environment (Current)',
            'MSc, University College London (UCL), Built Environment: Environmental Design and Engineering (2023)',
            'BSc (<i>summa cum laude</i>), University of Florida (UF), Sustainability and the Built Environment (w/ minors in Economics; Agricultural and Natural Resource Ethics & Policy) (2021)'
        ],
        Awards: [
            'NUS Research Scholarship (Ring Fence Award), National University of Singapore (2023 - Present)',
            'Bright Futures Academic Scholarship, University of Florida (2017 - 2021)',
            'Dean\'s List, University of Florida (2020, 2021)',
            'University Scholars Program Scholarship, University of Florida (2020 - 2021)',
            'President\'s Honor Roll, University of Florida (2019)'
        ],
        Featured_Publications: [],
        Contacts: [
            { href: "mailto:aucremanne@u.nus.edu", icon: faEnvelope, text: "aucremanne@u.nus.edu" }
        ],
        Links: [
            { href: ConnorCV, icon: faUser, text: 'CV' },
            { href: 'https://scholar.google.com/citations?user=jjEr918AAAAJ&hl=en&oi=ao', icon: faGoogle, text: 'Google Scholar' },
            { href: 'https://www.linkedin.com/in/connor-aucremanne', icon: faLinkedin, text: 'LinkedIn' },
            { href: 'https://orcid.org/0009-0006-7468-788X', icon: faOrcid, text: 'ORCID' }
        ],
        Interests: [
            'Smart Buildings',
            'Building-Occupant Network Dynamics',
            'Virtual Power Plants',
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
            'PhD, National University of Singapore (NUS), Built Environment (Current)',
            'BSc (<i>Highest Distinction</i>), National University of Singapore (NUS), Project and Facilities Management (2023)'
        ],
        Awards: [
            'NUS President\'s Graduate Fellowship, National University of Singapore (2023 - Present)',
            'Outstanding Case Submission of the NUS-CHS Case Competition, National University of Singapore (2021)'
        ],
        Featured_Publications: [],
        Contacts: [
            { href: "mailto:kelly_loh_li_ting@u.nus.edu", icon: faEnvelope, text: "kelly_loh_li_ting@u.nus.edu" }
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
        ProfileName: 'Rezky',
        ProfileLink: "/profile/Rezky",
        ProfilePic: RezkyPic,
        Name: 'Rezky Nanda',
        Position: 'Research Associate',
        Biography: 'Rezky Nanda is a Research Associate in the Department of the Built Environment, National University of Singapore (NUS). His research focuses on the utilization of artificial intelligence to manage building energy systems, seeking the optimal balance between energy efficiency and occupant comfort. Previously, Rezky worked as an ESD Engineer at AfogreenBuild Pte Ltd, a green building consultant company. During his tenure at AfogreenBuild Pte Ltd, he assisted in several green building certification projects, such as GreenMark and LEED. Outside of work and research, Rezky is an avid reader. At the moment, he likes reading novels by Haruki Murakami, a renowned Japanese writer. Rezky is also fond of classical music and occasionally plays violin. His favourite composers are J.S. Bach and G.F. Händel.',
        Education: [
            //'PhD, National University of Singapore (NUS), Built Environment (Current)',
            'MSc (<i>cum laude</i>), Institut Teknologi Bandung, Engineering Physics (2022)',
            'BSc (<i>cum laude</i>), Institut Teknologi Bandung, Engineering Physics (2021)'
        ],
        Awards: [
            'Dean Award: Highest GPA in Master\’s Program of Engineering Physics, Institut Teknologi Bandung (2022)',
            'Ganesha Talent Assistantship Master Program Scholarship Awardee, Institut Teknologi Bandung (2021)',
            '2nd Place in International Design Competition: Applied Engineering Challenge, American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE) (2020)'
        ],
        Featured_Publications: [  
                <>
                    Leksono, E., Mandhany, A., Haq, I.N., Pradipta, J., Handre, P., Utama, K., Iskandar, R.F. and <b>Nanda, R.M.</b>, 2023. <a href="https://doi.org/10.5614/j.eng.technol.sci.2023.55.2.1" ><b>Development of Non-Intrusive Load Monitoring of Electricity Load Classification with Low-Frequency Sampling Based on Support Vector Machine</b></a>. <i>Journal of Engineering & Technological Sciences, 55</i>(2).
                </>
        ],
        Contacts: [
            { href: "mailto:rezkymn@u.nus.edu", icon: faEnvelope, text: "rezkymn@u.nus.edu" }
        ],
        Links: [
            { href: RezkyCV, icon: faUser, text: 'CV' },
            { href: 'https://scholar.google.com/citations?hl=en&user=vUi_UGwAAAAJ', icon: faGoogle, text: 'Google Scholar' },
            { href: 'https://www.researchgate.net/profile/Rezky-Nanda-2', icon: faResearchgate, text: 'ResearchGate' },
            { href: 'https://www.linkedin.com/in/rezkymn28/', icon: faLinkedin, text: 'LinkedIn' },
            { href: 'https://orcid.org/0000-0002-1366-4397', icon: faOrcid, text: 'ORCID' }
        ],
        Interests: [
            'Smart Buildings',
            'Thermal Comfort',
            'Building Energy Efficiency',
            'AI for Energy'
        ],
    },
    {
        ProfileName: 'Huanxiang',
        ProfileLink: "/profile/Huanxiang",
        ProfilePic: HuanxiangPic,
        Name: 'Huanxiang Gao',
        Position: 'Research Associate',
        Biography: 'Gao Huanxiang is a Research Assosiate at the National University of Singapore - Department of the Built Environment and is currently engaged in research that focuses on applying computer vision to improve thermal comfort and energy conservation in HVAC systems. He is engaged in exploring novel computer vision algorithms that can effectively and non-invasively capture features of occupants and analyze their thermal requirements. Out of the office, he likes playing badminton.',
        Education: [
            /*'PhD, National University of Singapore (NUS), Built Environment (Current)',*/
            'MEng, Harbin Institute of Technology, Civil and Environmental Engineering (2024)',
            'BEng, Nanchang University, Civil Engineering (2021)'
        ],
        Awards: [
            'First Prize of University Scholarship, Harbin Institute of Technology (2021 - 2023)',
            'First Prize of University Scholarship, Nanchang University (2017 - 2021)'
        ],
        Featured_Publications: [
            (
                <>
                    <b>Gao, H.</b>, Hu, G., Zhang, D., Jiang, W., Tse, K.T., Kwok, K.C.S. and Kareem, A., 2024. <a href="https://doi.org/10.1111/mice.13147" ><b>Urban wind field prediction based on sparse sensors and physics-informed graph-assisted auto-encoder</b></a>. <i>Computer‐Aided Civil and Infrastructure Engineering</i>.
                </>
            ),
            (
                <>
                    <b>Gao, H.</b>, Hu, G., Zhang, D., Jiang, W., Ren, H. and Chen, W., 2024. <a href="https://doi.org/10.1016/j.apenergy.2023.122099" ><b>Prediction of wind fields in mountains at multiple elevations using deep learning models</b></a>. <i>Applied Energy, 353</i>, 122099.
                </>
            ),
            (
                <>
                    <b>Gao, H.</b>, Liu, J., Lin, P., Li, C., Xiao, Y. and Hu, G., 2022. <a href="https://doi.org/10.1016/j.buildenv.2022.109745" ><b>Pedestrian level wind flow field of elevated tall buildings with dense tandem arrangement</b></a>. <i>Building and Environment, 226</i>, 109745.      
                </>
            ),
            (
                <>
                    <b>Gao, H.</b>, Liu, J., Lin, P., Hu, G., Patruno, L., Xiao, Y., Tse, K.T. and Kwok, K.C.S., 2023. <a href="https://doi.org/10.1016/j.buildenv.2023.110803" ><b>An optimal sensor placement scheme for wind flow and pressure field monitoring</b></a>. <i>Building and Environment, 244</i>, 110803.      
                </>
            )
        ],
        Contacts: [
            { href: "mailto:h.x.gao@nus.edu.sg", icon: faEnvelope, text: "h.x.gao@nus.edu.sg" }
        ],
        Links: [
            { href: HuanxiangCV, icon: faUser, text: 'CV' },
            { href: 'https://scholar.google.com/citations?user=bUKuJ5sAAAAJ&hl=zh-CN', icon: faGoogle, text: 'Google Scholar' },
            { href: 'https://www.researchgate.net/profile/Huanxiang-Gao', icon: faResearchgate, text: 'ResearchGate' },
        ],
        Interests: [
            'Computer Vision',
            'Thermal Comfort',
            'Energy Conservation'
        ],
    },
    {
        ProfileName: 'Jonathan',
        ProfileLink: "/profile/Jonathan",
        ProfilePic: JonathanPic,
        Name: 'Jonathan Poon',
        Position: 'Research Assistant',
        Biography: 'Jonathan Poon is a Research Assistant in the Department of the Built Environment at the National University of Singapore (NUS). His research focuses on building performance simulation and energy efficiency. Jonathan is engaged in exploring the feasibility of generating energy reference models that accurately represent buildings in high-density tropical climate cities. Out of the office, Jonathan is usually found volunteering in his church on the weekends or occasionally playing console games. His recent favourite is The Legend of Zelda: Tears of the Kingdom.',
        Education: [
            /*'PhD, National University of Singapore (NUS), Built Environment (Current)',*/
            'BSc (<i>Highest Distinction</i>), National University of Singapore (NUS), Project and Facilities Management (w/ minor in Infrastructure & Finance Management) (2024)',
            'Diploma (<i>Merit</i>), Temasek Polytechnic, Aerospace Engineering'
        ],
        Awards: [
            'Dean\'s List, National University of Singapore (AY23/24 S1, AY22/23 S2)',
            'CCA Merit (Leadership), Temasek Polytechnic (2016, 2017, 2018)',
            'Director\'s List Award, Temasek Polytechnic (2017)'
        ],
        Featured_Publications: [],
        Contacts: [
            { href: "mailto:jpwj@nus.edu.sg", icon: faEnvelope, text: "jpwj@nus.edu.sg" }
        ],
        Links: [
            { href: JonathanCV, icon: faUser, text: 'CV' },
            { href: 'https://www.linkedin.com/in/jonathanpwj/', icon: faLinkedin, text: 'LinkedIn' },
        ],
        Interests: [
            'Building Performance Simulation',
            'Building Energy Efficiency',
            'Building Envelope Materials'
        ],
    },
    /*{
        ProfileName: 'China2',
        ProfileLink: "/profile/China2",
        ProfilePic: China2Pic,
        Name: 'China2',
        Position: 'PhD Student',
        Biography: '',
        Education: [
            'PhD, National University of Singapore (NUS), Built Environment (Current)',
            ''
        ],
        Awards: [],
        Featured_Publications: [],
        Contacts: [
            { href: "mailto:@u.nus.edu", icon: faEnvelope, text: "@u.nus.edu" }
        ],
        Links: [
            { href: China1CV, icon: faUser, text: 'CV' },
            { href: 'https://www.linkedin.com/in/China2/', icon: faLinkedin, text: 'LinkedIn' },
        ],
        Interests: [
            '',
            '',
            '',
            '',
            ''
        ],
    },*/
    {
        ProfileName: 'Xiaorong',
        ProfileLink: "/profile/Xiaorong",
        ProfilePic: XiaorongPic,
        Name: 'Wang Xiaorong',
        Position: 'Visiting PhD Candidate',
        Position2: 'China University of Geosciences (China)',
        Biography: 'Xiaorong Wang is a third-year PhD candidate in Surveying and Mapping Science and Technology, School of Geography and Information Engineering, China University of Geosciences (CUG). Her research interest is nature-based solutions for transition and practice of multi-scale urban green infrastructure governance. She is currently studying in the Building Robotics Lab as a visiting PhD candidate in the Department of the Built Environment, College of Design & Engineering, National University of Singapore (NUS). She has unique insights in answering the questions of how to achieve multi-objective, multi-criterion urban green infrastructure planning; how to incorporate humanism and environmental resilience into the assessment system of ecosystem services; and how to plan urban green infrastructure based on ecosystem services in a multi-dimensional perspective. In the past, she has been involved in various projects, such as geopark planning, ecological restoration planning, and resilient territorial spatial planning. She is now ready to get involved in lab projects as well, and she thinks this will be of great help to her research. Outside of her studies, Xiaorong Wang likes to be close to nature, such as hiking, and she has already learned about places in Singapore suitable for such.',
        Education: [
            'PhD, China University of Geosciences (CUG), Surveying and Mapping Science and Technology (Current)',
            'MSc, China University of Geosciences (CUG), Geography (2019)',
            'BSc, China University of Geosciences (CUG), Geography (2016)'
        ],
        Awards: [
            'First-class Scholarship for Graduate Students, China University of Geosciences (2022)',
            'Outstanding Graduate Student, China University of Geosciences (2021)',
            '2nd Prize of Scientific Paper Presentation, China University of Geosciences (2019)',
            'China National Scholarship for Graduate Students, Ministry of Education of the People\'s Republic of China (2019)',
        ],
        Featured_Publications: [],
        Contacts: [
            { href: "mailto:wang.xiaorong@u.nus.edu", icon: faEnvelope, text: "wang.xiaorong@u.nus.edu" }
        ],
        Links: [
            { href: XiaorongCV, icon: faUser, text: 'CV' },
        ],
        Interests: [
            'Urban Green Infrastructure Planning',
            'Nature-Based Land Planning Solutions',
            'Building Energy Efficiency',
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
            'PhD, Shahid Beheshti University (SBU), Buildings (Current)',
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
                    Ahmadi Soleimani, S.M., <b>Eshraghi, P.</b>, Mirdamadi, M. and Zamardian, Z., 2022. <a href="https://soffeh.sbu.ac.ir/article_102765.html" ><b>Optimizing energy consumption of educational buildings, a case study: Shahid Beheshti University</b></a>. <i>Safa, 32</i>(3), 49-65. [Persian]
                </>
            ),
        ],
        Contacts: [
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
        ProfileName: 'Guillaume',
        ProfileLink: "/profile/Guillaume",
        ProfilePic: GuillaumePic,
        Name: 'Guillaume Lecronier',
        Position: 'Visiting MSc Student',
        Position2: 'ETH Zürich (Switzerland)',
        Biography: 'Guillaume Lecronier is a master student at ETH Zürich (Swiss Federal Institute of Technology) in Mechanical Engineering and Robotics. Originally from France, he\'s visiting the lab in order to conduct his master thesis. His research focuses on indoor environment monitoring and involves the use of bluetooth low energy (BLE) technology in the scope of indoor positioning systems using a digital twin interface. Guillaume has a strong interest in IoT applications and is keen on working with sensors and integrating them into electronic prototyping setups, especially with platforms like Raspberry Pis. He enjoys the process of collecting valuable and meaningful data from these for innovative projects. In his free time, Guillaume enjoys running and fitness as well as travelling.',
        Education: [
            'MSc, Eidgenössische Technische Hochschule (ETH Zürich), Mechanical Engineering (2024)',
            'BSc, École Polytechnique Fédérale de Lausanne (EPFL), Mechanical Engineering (2021)'
        ],
        Awards: [],
        Featured_Publications: [],
        Contacts: [
            { href: "mailto:glecronier@me.com", icon: faEnvelope, text: "glecronier@me.com" }
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
        ProfileName: 'Pierre',
        ProfileLink: "/profile/Pierre",
        ProfilePic: PierrePic,
        Name: 'Pierre-Louis David',
        Position: 'Visiting MSc Student',
        Position2: 'ETH Zürich (Switzerland)',
        Biography: 'Pierre-Louis David is honoured to be a Master\'s candidate from ETH Zürich, specialising in Mechanical Engineering with a significant emphasis on Computer Science. Currently, he is in the midst of completing his thesis at the Building Robotics Lab in the Department of the Built Environment at the National University of Singapore, with a concentrated effort on optimising virtual power plants and pioneering methods to forecast energy prices using ML techniques. In his previous role at the esteemed Paul Scherrer Institut, he had the privilege to work with computer vision in the innovative Center for Proton Therapy. The objective was to refine segmentation techniques for patients afflicted with eye tumors, enhancing the efficacy of proton therapy and subsequently, improving patient recovery outcomes. Beyond his academic and professional pursuits, he takes a keen interest in marathon running, and values the moments he spends chatting with friends and colleagues.',
        Education: [
            'MSc, Eidgenössische Technische Hochschule (ETH Zürich), Mechanical Engineering and Computer Science (2024)',
            'BSc, École Polytechnique Fédérale de Lausanne (EPFL), Mechanical Engineering (2021)'
        ],
        Awards: [],
        Featured_Publications: [],
        Contacts: [
            { href: "mailto:pidavid@student.ethz.ch", icon: faEnvelope, text: "pidavid@student.ethz.ch" }
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
        ProfileName: 'Xiaosong',
        ProfileLink: "/profile/Xiaosong",
        ProfilePic: XiaosongPic,
        Name: 'Su Xiaosong',
        Position: 'Visiting PhD Candidate',
        Position2: 'Hunan University (China)',
        Biography: 'Song is a final-year visiting PhD student at NUS, coming from Hunan University in China. His research focuses on building energy efficiency with advanced technology and innovative building envelope, such as building-integrated photovoltaics, light-transmitting concrete, and radiant cooling systems. In addition, he is curious about data science and other new technology and tries to integrate them with his research.',
        Education: [
            'PhD, Hunan University (HNU), Heating, Ventilation and Air-Conditioning (HVAC) (Current)',
            'BEng, Hunan University (HNU), Building Environment and Energy Engineering (2018)'
        ],
        Awards: [
            'China National Scholarship for Graduate Students, Ministry of Education of the People\'s Republic of China (2018 - Present)',
            'Presidential Scholarship for Doctoral Students, Hunan University (2021)',
            'First-Class Graduate Student Scholarship, Hunan University (2019, 2020, 2021, 2022)',
            'Excellent Graduate Students of Hunan University, Hunan University (2019, 2020, 2021, 2022)',
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
        ProfileName: 'Stella',
        ProfileLink: "/profile/Stella",
        ProfilePic: StellaPic,
        Name: 'Hu Xinhao',
        Position: 'PhD Candidate',
        Position2: 'Hunan University (China)',
        Biography: 'Hu Xinhao is a fourth-year PhD candidate from the Building Environment and Energy Application Department at Hunan University, P. R. China, and was a visiting student in Assistant Professor Ghahramani\'s group in the Department of the Built Environment at the National University of Singapore from January 2023 to January 2024. Her research focuses on thermal comfort and building energy efficiency, and her current research project is on the comfort characterising of indoor occupants with personal comfort systems under solar radiation.',
        Education: [
            'PhD, Hunan University (HNU), Civil Engineering (Current)',
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
                    <b>Hu, X.</b>, Zhang, Z. and Cai, D., 2020. <a href="https://www.mdpi.com/1996-1073/13/6/1436" ><b>A Mathematical Tightening of Instantaneous Indoor and Outdoor Dry-Bulb and Wet-Bulb Temperature Tolerances[J]</b></a>. <i>Energies, 13</i>(6), 1436.
                </>
            ),
        ],
        Contacts: [
            { href: "mailto:xinhaohu@outlook.com", icon: faEnvelope, text: "xinhaohu@outlook.com" }
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
        ProfileName: 'Ilyas',
        ProfileLink: "/profile/Ilyas",
        ProfilePic: IlyasPic,
        Name: 'Ilyas Dawoodjee',
        Position: 'MSc Student',
        Position2: 'University of Manitoba (Canada)',
        Biography: 'Ilyas Dawoodjee is currently a MSc Mechanical Engineering student at University of Manitoba where he researches in the Intelligent Digital Manufacturing Laboratory (IDML). From April 2022 to December 2023, he served as a Research Engineer in the Building Robotics Lab. His area of research involved the detection of physiological measurements through machine vision. Some of his previous projects include object detection, data classification, image segmentation, and image classification. He is well-versed in multiple aspects of engineering ranging from CAD/CAM, SPICE simulations, sensors & actuators, control systems, microcontrollers, and PLC, with hands-on experience in them. However, his main passion is robotics integrated with machine vision and machine learning. He is an avid programmer who spends most of his free time coding and is always eager to learn new programming techniques and technologies. Outside of work, he likes to play games and is a fan of movies and TV series. He is a huge fan of educational YouTubers such as Veritasium, StuffMadeHere, 3Blue1Brown, VSauce, C.G.P. Grey, Minute Physics, and more.',
        Education: [
            'MSc, University of Manitoba, Mechanical Engineering (Current)',
            'BEng (<i>First Class Honours w/ Distinction</i>), Asia Pacific University (APU), Mechatronics Engineering (2022)'
        ],
        Awards: [
            'Graduate Fellowship, University of Manitoba (2024 - Present)',
            'International Graduate Student Entrance Scholarship (IGSES), University of Manitoba (2024 - Present)',
            'AI4S Program Inception Recipient, Asia Pacific University (2022)',
            'Valedictorian, Asia Pacific University (2022)',
            'Outstanding Achievement Award, Asia Pacific University (2022)'
        ],
        Featured_Publications: [],
        Contacts: [
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
        ProfileName: 'Michelle',
        ProfileLink: "/profile/Michelle",
        ProfilePic: MichellePic,
        Name: 'Qi Xuanning',
        Position: 'PhD Candidate',
        Position2: 'Harbin Insitute of Technology (China)',
        Biography: 'Qi Xuanning is currently pursuing a doctoral degree in architecture at the Harbin Institute of Technology, and was a visiting PhD candidate at the National University of Singapore from August 2022 to August 2023. She is also a student member of the Architectural Society of China. In her academic career, she has published five papers in academic conferences and journals, and has contributed to the compilation of ‘Unified Standard for Civil Building Design Illustrations’ (20J813). In addition, she has been granted three invention patents and one utility model patent. QI Xuanning has also participated in the design of over ten architectural projects and was recognized with the third-place prize in the architectural survey and design competition in Heilongjiang Province in 2022. Her research interests include computational design, daylight design, occupant behaviour, and visual cognition. In her free time, QI Xuanning enjoys exploring new cities and experiencing different cultures. She also likes to engage in outdoor activities, such as hiking and cycling, which inspire her to think creatively about the relationship between architecture and the natural environment.',
        Education: [
            'PhD, Harbin Institute of Technology, Architecture Design and Theory (Current)',
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
            { href: "mailto:michelle@hit.edu.cn", icon: faEnvelope, text: "michelle@hit.edu.cn" },
        ],
        Links: [
            { href: MichelleCV, icon: faUser, text: 'CV' },
            { href: 'https://www.researchgate.net/profile/Xuanning-Qi', icon: faResearchgate, text: 'ResearchGate' }
        ],
        Interests: [
            'Computational Design',
            'Daylight Design',
            'Occupant Behaviour',
            'Visual Cognition'
        ],
    },
];

export default profiles;