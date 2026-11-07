// ========================================
// COLLEGE RESULT - STANDALONE
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ------------------------------------
    // GET SAVED QUIZ SCORES
    // ------------------------------------

    const savedScores =
        localStorage.getItem("collegeTraitScores");


    if (!savedScores) {

        showNoResult();

        return;
    }


    let traitScores = {};

    try {

        traitScores =
            JSON.parse(savedScores);

    } catch (error) {

        console.error(
            "Could not read college scores.",
            error
        );

        showNoResult();

        return;
    }


    console.log(
        "College trait scores:",
        traitScores
    );


    // ------------------------------------
    // CAREER DATABASE
    // ------------------------------------

    const careers = {

        technology: {

            name: "Technology & Software",

            icon: "⌘",

            description:
                "Your profile shows strong technical and problem-solving abilities. A technology-focused career could allow you to turn your existing education into practical digital skills.",

            careers: [
                "Software Developer",
                "Web Developer",
                "Cloud Engineer",
                "Cybersecurity Analyst",
                "AI / Machine Learning Associate",
                "Technical Consultant"
            ],

            skills: [
                "Programming",
                "Data Structures",
                "Cloud Technologies",
                "Problem Solving",
                "AI Tools",
                "Technical Communication"
            ]

        },


        data: {

            name: "Data & Analytics",

            icon: "◈",

            description:
                "You show a strong combination of analytical thinking, problem solving and interest in data. Analytics can help you apply your existing academic background to evidence-based decision making.",

            careers: [
                "Data Analyst",
                "Business Analyst",
                "Data Scientist",
                "Product Analyst",
                "BI Analyst",
                "Research Analyst"
            ],

            skills: [
                "Excel",
                "SQL",
                "Statistics",
                "Python",
                "Data Visualization",
                "Analytical Thinking"
            ]

        },


        engineering: {

            name: "Engineering & Technical",

            icon: "⚙",

            description:
                "Your technical and analytical strengths suggest that you may enjoy solving practical problems and developing specialised expertise.",

            careers: [
                "Design Engineer",
                "Systems Engineer",
                "Project Engineer",
                "Automation Engineer",
                "Technical Consultant",
                "Product Engineer"
            ],

            skills: [
                "Technical Tools",
                "CAD / Engineering Software",
                "Problem Solving",
                "Project Management",
                "Communication",
                "Industry Knowledge"
            ]

        },


        finance: {

            name: "Finance & Financial Analysis",

            icon: "₹",

            description:
                "Your profile shows strong numerical and financial interests. You could combine your degree with finance, accounting, investment or analytical skills.",

            careers: [
                "Financial Analyst",
                "Investment Analyst",
                "Accountant",
                "Risk Analyst",
                "Credit Analyst",
                "Financial Consultant"
            ],

            skills: [
                "Financial Modelling",
                "Excel",
                "Accounting",
                "Financial Analysis",
                "Communication",
                "Business Knowledge"
            ]

        },


        business: {

            name: "Business & Management",

            icon: "◆",

            description:
                "Your leadership, communication and decision-making strengths point toward careers where you can manage people, projects and business problems.",

            careers: [
                "Business Analyst",
                "Management Trainee",
                "Operations Manager",
                "Project Manager",
                "Strategy Associate",
                "Management Consultant"
            ],

            skills: [
                "Leadership",
                "Project Management",
                "Business Analysis",
                "Communication",
                "Decision Making",
                "Presentation Skills"
            ]

        },


        entrepreneurship: {

            name: "Entrepreneurship & Startups",

            icon: "↗",

            description:
                "Your answers suggest an interest in independence, leadership and creating something of your own. Entrepreneurship can combine your existing degree with business and problem-solving skills.",

            careers: [
                "Startup Founder",
                "Business Development Associate",
                "Product Founder",
                "Entrepreneur",
                "Growth Associate",
                "Innovation Consultant"
            ],

            skills: [
                "Business Strategy",
                "Marketing",
                "Sales",
                "Financial Basics",
                "Networking",
                "Problem Solving"
            ]

        },


        research: {

            name: "Research & Higher Studies",

            icon: "⌕",

            description:
                "Your curiosity, analytical thinking and interest in learning suggest that research or higher studies could be a strong way to develop specialised expertise.",

            careers: [
                "Research Assistant",
                "Research Associate",
                "Academic Researcher",
                "Laboratory Researcher",
                "Policy Researcher",
                "Research Consultant"
            ],

            skills: [
                "Research Methods",
                "Academic Writing",
                "Data Analysis",
                "Critical Thinking",
                "Literature Review",
                "Presentation"
            ]

        },


        law: {

            name: "Law, Policy & Compliance",

            icon: "§",

            description:
                "Your analytical and communication strengths can support careers involving law, policy, compliance, regulation and public decision-making.",

            careers: [
                "Legal Associate",
                "Corporate Legal Analyst",
                "Compliance Analyst",
                "Policy Analyst",
                "Legal Researcher",
                "Contract Specialist"
            ],

            skills: [
                "Legal Research",
                "Writing",
                "Communication",
                "Critical Thinking",
                "Policy Analysis",
                "Negotiation"
            ]

        },


        healthcare: {

            name: "Healthcare & Life Sciences",

            icon: "+",

            description:
                "Your interest in healthcare and scientific areas suggests that specialised professional roles within healthcare and life sciences may suit you.",

            careers: [
                "Healthcare Analyst",
                "Clinical Research Associate",
                "Pharma Associate",
                "Healthcare Consultant",
                "Medical Research Assistant",
                "Health Data Analyst"
            ],

            skills: [
                "Research",
                "Data Analysis",
                "Scientific Communication",
                "Healthcare Knowledge",
                "Documentation",
                "Problem Solving"
            ]

        },


        education: {

            name: "Education & Training",

            icon: "◇",

            description:
                "Your communication and teaching-oriented strengths suggest that education, training, mentoring and academic careers may be worth exploring.",

            careers: [
                "Teacher",
                "Academic Coordinator",
                "Learning Designer",
                "Corporate Trainer",
                "Education Consultant",
                "Instructional Designer"
            ],

            skills: [
                "Communication",
                "Teaching",
                "Presentation",
                "Content Creation",
                "Mentoring",
                "Digital Learning"
            ]

        },


        media: {

            name: "Media & Communication",

            icon: "◉",

            description:
                "Your communication and media interests can translate into careers involving content, marketing, digital media and professional communication.",

            careers: [
                "Content Strategist",
                "Digital Marketing Associate",
                "Social Media Manager",
                "PR Associate",
                "Communications Specialist",
                "Content Writer"
            ],

            skills: [
                "Writing",
                "Digital Marketing",
                "Content Strategy",
                "Public Speaking",
                "Social Media",
                "Brand Communication"
            ]

        },


        creative: {

            name: "Design & Creative Careers",

            icon: "✦",

            description:
                "Your creative strengths can become a professional advantage when combined with practical design, digital and industry-specific skills.",

            careers: [
                "UI / UX Designer",
                "Graphic Designer",
                "Product Designer",
                "Visual Designer",
                "Creative Strategist",
                "Brand Designer"
            ],

            skills: [
                "UI / UX",
                "Design Tools",
                "Visual Communication",
                "Portfolio Building",
                "Design Thinking",
                "Creative Strategy"
            ]

        },


        publicService: {

            name: "Public Service & Policy",

            icon: "◎",

            description:
                "Your interest in society and public service suggests that government, policy, administration and development-oriented careers could be meaningful directions.",

            careers: [
                "Policy Analyst",
                "Public Administration Associate",
                "Government Program Associate",
                "Development Consultant",
                "Public Affairs Associate",
                "Research Associate"
            ],

            skills: [
                "Policy Research",
                "Communication",
                "Data Analysis",
                "Public Administration",
                "Report Writing",
                "Critical Thinking"
            ]

        }

    };


    // ------------------------------------
    // CALCULATE CAREER SCORES
    // ------------------------------------

    const careerScores = {};


    Object.keys(careers).forEach(
        function (careerKey) {

            careerScores[careerKey] = 0;

        }
    );


    /*
     * Direct trait matching.
     * A career can receive points from
     * several related traits.
     */

    const careerTraits = {

        technology: [
            "technology",
            "technical",
            "problemSolving",
            "analytical"
        ],

        data: [
            "data",
            "analytical",
            "problemSolving",
            "mathematical",
            "research"
        ],

        engineering: [
            "engineering",
            "technical",
            "analytical",
            "problemSolving"
        ],

        finance: [
            "finance",
            "mathematical",
            "analytical",
            "business"
        ],

        business: [
            "business",
            "leadership",
            "communication"
        ],

        entrepreneurship: [
            "entrepreneurship",
            "business",
            "leadership",
            "communication"
        ],

        research: [
            "research",
            "scientific",
            "analytical"
        ],

        law: [
            "law",
            "communication",
            "analytical",
            "social"
        ],

        healthcare: [
            "healthcare",
            "scientific",
            "research"
        ],

        education: [
            "education",
            "communication",
            "social"
        ],

        media: [
            "media",
            "communication",
            "creative"
        ],

        creative: [
            "creative",
            "media"
        ],

        publicService: [
            "publicService",
            "social",
            "communication",
            "research"
        ]

    };


    Object.keys(careerTraits).forEach(
        function (careerKey) {

            const traits =
                careerTraits[careerKey];


            traits.forEach(
                function (trait) {

                    if (
                        traitScores[trait]
                    ) {

                        careerScores[careerKey] +=
                            traitScores[trait];

                    }

                }
            );

        }
    );


    // ------------------------------------
    // SORT RESULTS
    // ------------------------------------

    const sortedCareers =
        Object.entries(careerScores)
            .sort(
                function (a, b) {
                    return b[1] - a[1];
                }
            );


    const bestCareerKey =
        sortedCareers[0][0];


    const bestScore =
        sortedCareers[0][1];


    const bestCareer =
        careers[bestCareerKey];


    // ------------------------------------
    // MATCH PERCENTAGE
    // ------------------------------------

    const highestScore =
        Math.max(
            ...Object.values(careerScores)
        );


    let percentage = 0;


    if (highestScore > 0) {

        percentage =
            Math.round(
                (bestScore / highestScore) * 100
            );

    }


    // ------------------------------------
    // DISPLAY MAIN RESULT
    // ------------------------------------

    const careerIcon =
        document.getElementById(
            "careerIcon"
        );


    const careerName =
        document.getElementById(
            "bestCareerName"
        );


    const careerDescription =
        document.getElementById(
            "bestCareerDescription"
        );


    const careerPercentage =
        document.getElementById(
            "bestCareerPercentage"
        );


    const matchBarFill =
        document.getElementById(
            "matchBarFill"
        );


    if (careerIcon) {

        careerIcon.textContent =
            bestCareer.icon;

    }


    if (careerName) {

        careerName.textContent =
            bestCareer.name;

    }


    if (careerDescription) {

        careerDescription.textContent =
            bestCareer.description;

    }


    if (careerPercentage) {

        careerPercentage.textContent =
            percentage + "%";

    }


    if (matchBarFill) {

        setTimeout(
            function () {

                matchBarFill.style.width =
                    percentage + "%";

            },
            200
        );

    }


    // ------------------------------------
    // WHY THIS CAREER
    // ------------------------------------

    const whyText =
        document.getElementById(
            "whyCareerText"
        );


    if (whyText) {

        whyText.textContent =
            createWhyText(
                bestCareerKey,
                traitScores
            );

    }


    // ------------------------------------
    // CAREER PATHS
    // ------------------------------------

    const careerPathContainer =
        document.getElementById(
            "careerPathContainer"
        );


    if (careerPathContainer) {

        careerPathContainer.innerHTML = "";


        bestCareer.careers.forEach(
            function (career, index) {

                const card =
                    document.createElement("div");


                card.className =
                    "career-path-card";


                card.innerHTML = `

                    <span>
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>
                        ${career}
                    </h3>

                `;


                careerPathContainer.appendChild(
                    card
                );

            }
        );

    }


    // ------------------------------------
    // SKILLS
    // ------------------------------------

    const skillsContainer =
        document.getElementById(
            "skillsContainer"
        );


    if (skillsContainer) {

        skillsContainer.innerHTML = "";


        bestCareer.skills.forEach(
            function (skill) {

                const card =
                    document.createElement("div");


                card.className =
                    "skill-card";


                card.textContent =
                    skill;


                skillsContainer.appendChild(
                    card
                );

            }
        );

    }


    // ------------------------------------
    // OTHER CAREER DIRECTIONS
    // ------------------------------------

    const otherCareerContainer =
        document.getElementById(
            "otherCareerContainer"
        );


    if (otherCareerContainer) {

        otherCareerContainer.innerHTML = "";


        sortedCareers
            .slice(1, 5)
            .forEach(
                function (item) {

                    const key =
                        item[0];

                    const score =
                        item[1];

                    const career =
                        careers[key];


                    if (!career) {
                        return;
                    }


                    let otherPercentage = 0;


                    if (highestScore > 0) {

                        otherPercentage =
                            Math.round(
                                (score /
                                highestScore) * 100
                            );

                    }


                    const card =
                        document.createElement("div");


                    card.className =
                        "other-career-card";


                    card.innerHTML = `

                        <div class="other-career-info">

                            <div class="other-career-icon">
                                ${career.icon}
                            </div>

                            <div>

                                <h3>
                                    ${career.name}
                                </h3>

                                <p>
                                    ${career.description}
                                </p>

                            </div>

                        </div>

                        <div class="other-score">
                            ${otherPercentage}%
                        </div>

                    `;


                    otherCareerContainer.appendChild(
                        card
                    );

                }
            );

    }


    // ------------------------------------
    // EXPLORE BUTTON
    // ------------------------------------

    const exploreButton =
        document.getElementById(
            "exploreCareersButton"
        );


    if (exploreButton) {

        exploreButton.addEventListener(
            "click",
            function () {

                /*
                 * Change this later when
                 * your careers page is ready.
                 */

                window.location.href =
                    "index.html";

            }
        );

    }

});


// ========================================
// WHY TEXT
// ========================================

function createWhyText(
    careerKey,
    scores
) {

    const messages = {

        technology:
            "Your answers show strong technical and analytical interests. Since you are already in college, technology can be a practical way to turn your existing education into specialised professional skills.",

        data:
            "Your answers show a strong combination of analytical thinking, problem solving and interest in evidence-based decisions. Data-focused careers can help you use these strengths professionally.",

        engineering:
            "Your technical and analytical strengths suggest that you may enjoy solving practical problems and building specialised expertise.",

        finance:
            "Your numerical and analytical interests make finance a direction worth exploring. You can combine your academic background with financial analysis and business skills.",

        business:
            "Your profile shows leadership, communication and decision-making strengths. These are valuable foundations for management, consulting, operations and business careers.",

        entrepreneurship:
            "Your answers suggest that you enjoy independence, leadership and creating opportunities. Entrepreneurship can allow you to combine your degree with business and problem-solving skills.",

        research:
            "Your curiosity and analytical thinking suggest that research or higher studies could help you build deep expertise in an area you enjoy.",

        law:
            "Your analytical and communication strengths can translate well into law, compliance, policy and related professional careers.",

        healthcare:
            "Your answers show a strong connection with healthcare and scientific areas. Specialised knowledge and practical experience can help you build a professional healthcare path.",

        education:
            "Your communication and teaching strengths suggest that education, training and mentoring could be meaningful professional directions.",

        media:
            "Your communication and media interests can translate into careers involving content, marketing, digital communication and public-facing roles.",

        creative:
            "Your creative strengths can become a professional advantage when combined with practical design skills, digital tools and a strong portfolio.",

        publicService:
            "Your interest in society and public service suggests that government, policy, administration and development-oriented careers may be worth exploring."

    };


    return (
        messages[careerKey] ||
        "Your answers reveal a combination of strengths that can be developed into several professional directions."
    );

}


// ========================================
// NO RESULT HANDLER
// ========================================

function showNoResult() {

    const careerName =
        document.getElementById(
            "bestCareerName"
        );


    const careerDescription =
        document.getElementById(
            "bestCareerDescription"
        );


    const whyText =
        document.getElementById(
            "whyCareerText"
        );


    if (careerName) {

        careerName.textContent =
            "No quiz result found";

    }


    if (careerDescription) {

        careerDescription.textContent =
            "Please complete the College Career Quiz before viewing your result.";

    }


    if (whyText) {

        whyText.textContent =
            "Your career profile will appear here after completing the quiz.";

    }

}