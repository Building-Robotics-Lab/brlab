const ThesesData = [
    {
        year: "2022",
        publications: [
            {
                title: "The sequential design optimization of building performance",
                university: "Loughborough University",
                authors: [
                    { name: "Riccardo Talami", link: "https://building-robotics-lab.github.io/brlab/#/individual_profile/Riccardo" }
                ],
                minRead: "",
                profiles: ["Riccardo" ],
                links: [
                    { type: "DOI", url: "https://repository.lboro.ac.uk/articles/thesis/The_sequential_design_optimization_of_building_performance/21547701" },
                    { type: "PDF", url: "https://repository.lboro.ac.uk/ndownloader/files/38195763/1" }
                ],
                keywords: [
                    "Building performance",
                    "Design optimization",
                    "Building performance simulation (BPS)",
                    "Sequential approach",
                    "Computational approach",
                    "Genetic algorithm heuristic",
                    "Robustness analysis",
                    "Multi-objective optimization"
                ],
                abstract: "Computational methods of design optimization offer great potential in solving the challenges posed by the design of high-performing buildings. However, numerical optimization in building design industry is not sufficiently exploited and has not yet emerged as part of the design process. This reveals the need to develop optimization methods to support the identification of well performing designs while overcoming the long computational time of performance evaluation due to the multi-dimensionality of real-world problems. In response, this thesis aims to evaluate a sequential approach in the multi-objective design optimization of building geometry, fabric, HVAC system and its controls.\n An algorithm based on individual optimization steps conducted in sequence while concurrently considering building design elements is developed to ensure a low computational burden and a whole-building holistic approach. Three metrics are developed to evaluate the sequential design optimization: the performance of the sequential search, the reliability (robustness) to variations of the same problem formulation with respect to uncertain boundary conditions (weather and internal loads) and scale (four scales with increasing number of solutions), and the efficiency of the search as compared performance with a NSGA-II algorithm. Six criteria pertaining to three categories are applied to the three metrics for the evaluation: search effectiveness in finding solutions with respect to the search and global optima, computational performance of the search with respect to the computational load and computational savings compared to a full factorial search, and solution optimality with respect to the objective and variable space. 24 different configurations of the search derived from 4 initial starting points, 3 categories of grouping of the building design elements and 2 runs of the algorithm are investigated.\n The results are presented for the landscape of configurations of the sequential search and benchmarked against the global set of optimal solutions derived from a full factorial search. The obtained results displayed different magnitudes of performance, reliability, and efficiency depending on the configurations of the search. Therefore, according to the purpose of the optimization, different configurations of the sequential search could be preferred for different stages of the building design process. Among them, the iterative run of the search in a 2-stage sequential process mapping the architectural and engineering disciplines (field grouped) configured as (building geometry + fabric) and (HVAC system + controls) matched the results obtained from a full factorial search in terms of effectiveness in finding solutions and solution optimality, with a computational saving of function evaluations of 91.2% compared to the full factorial. Additionally, the sequential search proved to be reliable to variations with respect to uncertain boundary conditions and scale of the problem formulation. Finally, for an equal number of function evaluations, the sequential search outperformed the NSGA-II in terms of effectiveness in finding solutions and solution optimality."
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
                    { name: "Ali Ghahramani", link: "https://building-robotics-lab.github.io/brlab/#/our_team#prof_profile" }
                ],
                minRead: "",
                profiles: ["Prof" ],
                links: [
                    { type: "DOI", url: "https://www.proquest.com/docview/2399991121?pq-origsite=gscholar&fromopenview=true" },
                ],
                keywords: [],
                abstract: ""
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