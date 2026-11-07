// ========================================
// CAREER PLANNER - CAREER DETAILS
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Career Details JS loaded");

    // ------------------------------------
    // GET CAREER ID FROM URL
    // ------------------------------------

    const params = new URLSearchParams(
        window.location.search
    );

    const careerId = params.get("id");

    console.log("Career ID:", careerId);


    // ------------------------------------
    // CHECK CAREER DATABASE
    // ------------------------------------

    if (!window.careersData) {

        console.error(
            "ERROR: careersData was not loaded."
        );

        showError(
            "Career database could not be loaded."
        );

        return;
    }


    console.log(
        "Career database loaded:",
        window.careersData
    );


    // ------------------------------------
    // CHECK ID
    // ------------------------------------

    if (!careerId) {

        console.error(
            "ERROR: No career ID found in URL."
        );

        showError(
            "No career was selected."
        );

        return;
    }


    // ------------------------------------
    // FIND CAREER
    // ------------------------------------

    const career =
        window.careersData.find(
            function (item) {

                return String(item.id) ===
                       String(careerId);

            }
        );


    console.log(
        "Selected career:",
        career
    );


    // ------------------------------------
    // CAREER NOT FOUND
    // ------------------------------------

    if (!career) {

        console.error(
            "Career not found:",
            careerId
        );

        showError(
            "The selected career could not be found."
        );

        return;
    }


    // ------------------------------------
    // DISPLAY CAREER
    // ------------------------------------

    displayCareer(career);

});


// ========================================
// DISPLAY CAREER
// ========================================

function displayCareer(career) {

    document.title =
        career.name +
        " - Career Planner";


    setText(
        "careerCategory",
        career.category.toUpperCase()
    );


    setText(
        "careerName",
        career.name
    );


    setText(
        "careerDescription",
        career.description
    );


    setText(
        "careerIcon",
        career.icon || "✦"
    );


    // ------------------------------------
    // CATEGORY PROFILE
    // ------------------------------------

    const profile =
        getCareerProfile(
            career.category
        );


    setText(
        "workStyle",
        profile.workStyle
    );


    setText(
        "workStyleText",
        profile.workStyleText
    );


    setText(
        "coreSkills",
        profile.coreSkills
    );


    setText(
        "coreSkillsText",
        profile.coreSkillsText
    );


    setText(
        "opportunity",
        profile.opportunity
    );


    setText(
        "opportunityText",
        profile.opportunityText
    );


    setText(
        "roleExplanation",
        profile.roleExplanation
    );


    // ------------------------------------
    // RESPONSIBILITIES
    // ------------------------------------

    renderResponsibilities(
        profile.responsibilities
    );


    // ------------------------------------
    // SKILLS
    // ------------------------------------

    renderSkills(
        profile.skills
    );


    // ------------------------------------
    // PATH BUTTON
    // ------------------------------------

    const pathButton =
        document.getElementById(
            "pathButton"
        );


    if (pathButton) {

        pathButton.addEventListener(
            "click",
            function () {

                const path =
                    document.getElementById(
                        "careerPath"
                    );

                if (path) {

                    path.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }

}


// ========================================
// SET TEXT
// ========================================

function setText(id, value) {

    const element =
        document.getElementById(id);

    if (element) {

        element.textContent =
            value ?? "";

    }

}


// ========================================
// RESPONSIBILITIES
// ========================================

function renderResponsibilities(
    responsibilities
) {

    const container =
        document.getElementById(
            "responsibilities"
        );


    if (!container) return;


    container.innerHTML = "";


    responsibilities.forEach(
        function (item, index) {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "responsibility-card";


            const number =
                String(index + 1)
                    .padStart(2, "0");


            card.innerHTML = `

                <div class="responsibility-number">
                    ${number}
                </div>

                <h3>
                    ${item.title}
                </h3>

                <p>
                    ${item.description}
                </p>

            `;


            container.appendChild(card);

        }
    );

}


// ========================================
// SKILLS
// ========================================

function renderSkills(skills) {

    const container =
        document.getElementById(
            "skillsContainer"
        );


    if (!container) return;


    container.innerHTML = "";


    skills.forEach(
        function (skill) {

            const pill =
                document.createElement(
                    "span"
                );


            pill.className =
                "skill-pill";


            pill.textContent =
                skill;


            container.appendChild(
                pill
            );

        }
    );

}


// ========================================
// CAREER PROFILES
// ========================================

function getCareerProfile(category) {

    const profiles = {

        "Technology": {

            workStyle: "Build & solve",

            workStyleText:
                "Work with technology, systems and problems that require structured thinking.",

            coreSkills:
                "Logic + technology",

            coreSkillsText:
                "Programming, problem-solving, analytical thinking and continuous learning are valuable.",

            opportunity:
                "Many specialisations",

            opportunityText:
                "Technology can lead into software, AI, cloud, cybersecurity, data and product roles.",

            roleExplanation:
                "Technology careers involve turning problems into practical digital or technical solutions.",

            responsibilities: [

                {
                    title: "Solve problems",

                    description:
                        "Break complex problems into smaller steps and develop practical solutions."
                },

                {
                    title: "Build solutions",

                    description:
                        "Create, improve or maintain digital products, systems or technical solutions."
                },

                {
                    title: "Keep learning",

                    description:
                        "Technology changes quickly, so professionals continuously develop new skills."
                }

            ],

            skills: [
                "Problem Solving",
                "Logical Thinking",
                "Programming",
                "Data Analysis",
                "Communication",
                "Teamwork",
                "Adaptability"
            ]

        },


        "Data & Analytics": {

            workStyle: "Analyse & discover",

            workStyleText:
                "Turn information into insights that can guide decisions and strategy.",

            coreSkills:
                "Data + reasoning",

            coreSkillsText:
                "Statistics, analytical thinking, data tools and communication are important.",

            opportunity:
                "Growing across industries",

            opportunityText:
                "Data skills can be applied in technology, finance, healthcare, marketing and business.",

            roleExplanation:
                "Data careers focus on understanding information and using evidence to answer questions and identify patterns.",

            responsibilities: [

                {
                    title: "Analyse information",

                    description:
                        "Work with datasets and information to identify useful patterns."
                },

                {
                    title: "Find insights",

                    description:
                        "Turn analysis into conclusions that people and organisations can act on."
                },

                {
                    title: "Communicate findings",

                    description:
                        "Explain results clearly using reports, dashboards and presentations."
                }

            ],

            skills: [
                "Statistics",
                "Excel",
                "SQL",
                "Data Visualisation",
                "Critical Thinking",
                "Research",
                "Communication"
            ]

        },


        "Engineering": {

            workStyle: "Design & build",

            workStyleText:
                "Apply technical knowledge to create reliable systems, products and solutions.",

            coreSkills:
                "Technical thinking",

            coreSkillsText:
                "Engineering fundamentals, problem-solving, design and practical thinking are important.",

            opportunity:
                "Technical + leadership",

            opportunityText:
                "Engineering can develop toward specialised technical roles, project leadership or management.",

            roleExplanation:
                "Engineering careers combine technical knowledge with practical problem-solving.",

            responsibilities: [

                {
                    title: "Design solutions",

                    description:
                        "Use technical knowledge to design practical systems or products."
                },

                {
                    title: "Test & improve",

                    description:
                        "Evaluate solutions, identify problems and improve performance."
                },

                {
                    title: "Work with teams",

                    description:
                        "Collaborate with engineers, managers and other professionals."
                }

            ],

            skills: [
                "Technical Knowledge",
                "Problem Solving",
                "Design",
                "Mathematics",
                "Project Management",
                "Teamwork",
                "Attention to Detail"
            ]

        },


        "Finance": {

            workStyle: "Analyse & decide",

            workStyleText:
                "Work with numbers, financial information and decisions that affect organisations.",

            coreSkills:
                "Numbers + judgement",

            coreSkillsText:
                "Financial analysis, mathematics, research and communication are useful foundations.",

            opportunity:
                "Multiple finance paths",

            opportunityText:
                "Explore banking, investment, accounting, risk, consulting and corporate finance.",

            roleExplanation:
                "Finance careers involve understanding money, markets, businesses and financial decisions.",

            responsibilities: [

                {
                    title: "Analyse numbers",

                    description:
                        "Review financial information and identify important trends."
                },

                {
                    title: "Research decisions",

                    description:
                        "Study companies, markets and financial conditions."
                },

                {
                    title: "Support strategy",

                    description:
                        "Use financial information to help organisations make better decisions."
                }

            ],

            skills: [
                "Financial Analysis",
                "Excel",
                "Accounting",
                "Research",
                "Numerical Reasoning",
                "Communication",
                "Attention to Detail"
            ]

        }

    };


    // ------------------------------------
    // DEFAULT PROFILE
    // ------------------------------------

    const defaultProfile = {

        workStyle:
            "Learn & contribute",

        workStyleText:
            "Build relevant expertise and apply it to meaningful problems.",

        coreSkills:
            "Problem solving",

        coreSkillsText:
            "Communication, analytical thinking and adaptability are useful across careers.",

        opportunity:
            "Multiple pathways",

        opportunityText:
            "Explore different roles and specialisations as your experience grows.",

        roleExplanation:
            "This career combines specialised knowledge with practical problem-solving and continuous learning.",

        responsibilities: [

            {
                title: "Apply knowledge",

                description:
                    "Use your education and skills to solve real-world problems."
            },

            {
                title: "Build experience",

                description:
                    "Develop practical experience through projects, internships or work."
            },

            {
                title: "Keep growing",

                description:
                    "Continue learning and develop deeper expertise over time."
            }

        ],

        skills: [
            "Communication",
            "Problem Solving",
            "Critical Thinking",
            "Teamwork",
            "Adaptability"
        ]

    };


    return profiles[category] ||
           defaultProfile;

}


// ========================================
// ERROR SCREEN
// ========================================

function showError(message) {

    const hero =
        document.getElementById(
            "careerHero"
        );


    if (!hero) return;


    hero.innerHTML = `

        <div class="career-hero-content">

            <div class="career-category">
                CAREER PLANNER
            </div>

            <h1>
                Something went wrong.
            </h1>

            <p class="career-description">
                ${message}
            </p>

            <a
                href="career-explorer.html"
                class="primary-button">

                ← Back to Careers

            </a>

        </div>

    `;

}