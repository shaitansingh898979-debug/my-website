// ========================================
// COLLEGE CAREER QUESTIONS
// ========================================

const collegeQuestions = [

    // ====================================
    // QUESTION 1
    // ====================================

    {
        question:
            "What are you currently studying?",

        multiple: false,

        answers: [

            {
                text:
                    "Computer Science / IT / Computer Applications",

                traits: {
                    technology: 5,
                    analytical: 2
                }
            },

            {
                text:
                    "Engineering / Technical Degree",

                traits: {
                    engineering: 5,
                    technical: 3,
                    analytical: 2
                }
            },

            {
                text:
                    "Science / Mathematics",

                traits: {
                    scientific: 4,
                    research: 3,
                    analytical: 2
                }
            },

            {
                text:
                    "Commerce / Accounting / Finance",

                traits: {
                    finance: 5,
                    mathematical: 3,
                    business: 2
                }
            },

            {
                text:
                    "Business / Management",

                traits: {
                    business: 5,
                    leadership: 3,
                    communication: 2
                }
            },

            {
                text:
                    "Arts / Humanities / Social Sciences",

                traits: {
                    social: 4,
                    communication: 3,
                    research: 2
                }
            },

            {
                text:
                    "Law",

                traits: {
                    law: 5,
                    analytical: 2,
                    communication: 2
                }
            },

            {
                text:
                    "Healthcare / Pharmacy / Life Sciences",

                traits: {
                    healthcare: 5,
                    scientific: 3
                }
            },

            {
                text:
                    "Design / Media / Communication",

                traits: {
                    creative: 4,
                    media: 4,
                    communication: 2
                }
            },

            {
                text:
                    "Education / Teaching",

                traits: {
                    education: 5,
                    communication: 3,
                    social: 2
                }
            }

        ]
    },


    // ====================================
    // QUESTION 2
    // ====================================

    {
        question:
            "Which skills are you strongest in?",

        multiple: true,

        answers: [

            {
                text:
                    "Problem solving and logical thinking",

                traits: {
                    analytical: 3,
                    problemSolving: 3
                }
            },

            {
                text:
                    "Programming and technical skills",

                traits: {
                    technology: 4,
                    technical: 3
                }
            },

            {
                text:
                    "Numbers and financial analysis",

                traits: {
                    finance: 4,
                    mathematical: 3
                }
            },

            {
                text:
                    "Communication and presentation",

                traits: {
                    communication: 4
                }
            },

            {
                text:
                    "Leadership and decision making",

                traits: {
                    leadership: 4,
                    business: 2
                }
            },

            {
                text:
                    "Research and analysis",

                traits: {
                    research: 4,
                    analytical: 2
                }
            },

            {
                text:
                    "Writing and storytelling",

                traits: {
                    media: 4,
                    communication: 2
                }
            },

            {
                text:
                    "Design and visual thinking",

                traits: {
                    creative: 4
                }
            },

            {
                text:
                    "Teaching and explaining concepts",

                traits: {
                    education: 4,
                    communication: 2
                }
            }

        ]
    },


    // ====================================
    // QUESTION 3
    // ====================================

    {
        question:
            "What kind of work would you enjoy after graduation?",

        multiple: false,

        answers: [

            {
                text:
                    "Building software, systems or technology",

                traits: {
                    technology: 5,
                    technical: 2
                }
            },

            {
                text:
                    "Analysing data and solving complex problems",

                traits: {
                    data: 5,
                    analytical: 3
                }
            },

            {
                text:
                    "Managing teams, projects or businesses",

                traits: {
                    business: 4,
                    leadership: 4
                }
            },

            {
                text:
                    "Finance, investment or accounting",

                traits: {
                    finance: 5,
                    mathematical: 2
                }
            },

            {
                text:
                    "Research and developing new knowledge",

                traits: {
                    research: 5,
                    scientific: 3
                }
            },

            {
                text:
                    "Law, policy or public administration",

                traits: {
                    law: 5,
                    publicService: 3
                }
            },

            {
                text:
                    "Healthcare and patient-related work",

                traits: {
                    healthcare: 5
                }
            },

            {
                text:
                    "Marketing, media or communication",

                traits: {
                    media: 4,
                    communication: 4
                }
            },

            {
                text:
                    "Teaching, training or mentoring",

                traits: {
                    education: 5,
                    communication: 2
                }
            },

            {
                text:
                    "Design and creative production",

                traits: {
                    creative: 5
                }
            }

        ]
    },


    // ====================================
    // QUESTION 4
    // ====================================

    {
        question:
            "What is your main career goal?",

        multiple: false,

        answers: [

            {
                text:
                    "Become a technology specialist",

                traits: {
                    technology: 5,
                    technical: 2
                }
            },

            {
                text:
                    "Become a data or analytical specialist",

                traits: {
                    data: 5,
                    analytical: 3
                }
            },

            {
                text:
                    "Move into management",

                traits: {
                    business: 4,
                    leadership: 4
                }
            },

            {
                text:
                    "Build a career in finance",

                traits: {
                    finance: 5
                }
            },

            {
                text:
                    "Start my own business",

                traits: {
                    entrepreneurship: 5,
                    business: 3
                }
            },

            {
                text:
                    "Pursue research or higher studies",

                traits: {
                    research: 5,
                    scientific: 2
                }
            },

            {
                text:
                    "Work in government or public service",

                traits: {
                    publicService: 5,
                    social: 2
                }
            },

            {
                text:
                    "Build a creative or media career",

                traits: {
                    creative: 3,
                    media: 4
                }
            }

        ]
    },


    // ====================================
    // QUESTION 5
    // ====================================

    {
        question:
            "Which work environment sounds best to you?",

        multiple: false,

        answers: [

            {
                text:
                    "Technology company or startup",

                traits: {
                    technology: 4,
                    entrepreneurship: 2
                }
            },

            {
                text:
                    "Corporate office",

                traits: {
                    business: 4
                }
            },

            {
                text:
                    "Bank, finance company or consulting firm",

                traits: {
                    finance: 4,
                    business: 2
                }
            },

            {
                text:
                    "Laboratory or research organisation",

                traits: {
                    research: 5,
                    scientific: 2
                }
            },

            {
                text:
                    "Government or public organisation",

                traits: {
                    publicService: 5,
                    social: 2
                }
            },

            {
                text:
                    "Hospital or healthcare organisation",

                traits: {
                    healthcare: 5
                }
            },

            {
                text:
                    "School, university or training organisation",

                traits: {
                    education: 5
                }
            },

            {
                text:
                    "Media, studio or creative company",

                traits: {
                    media: 4,
                    creative: 3
                }
            }

        ]
    },


    // ====================================
    // QUESTION 6
    // ====================================

    {
        question:
            "What would you most like to develop next?",

        multiple: true,

        answers: [

            {
                text:
                    "Advanced technical skills",

                traits: {
                    technology: 3,
                    technical: 3
                }
            },

            {
                text:
                    "Data and analytical skills",

                traits: {
                    data: 4,
                    analytical: 3
                }
            },

            {
                text:
                    "Leadership and management",

                traits: {
                    leadership: 4,
                    business: 3
                }
            },

            {
                text:
                    "Financial expertise",

                traits: {
                    finance: 4,
                    mathematical: 2
                }
            },

            {
                text:
                    "Research skills",

                traits: {
                    research: 4,
                    scientific: 2
                }
            },

            {
                text:
                    "Communication skills",

                traits: {
                    communication: 4
                }
            },

            {
                text:
                    "Creative and design skills",

                traits: {
                    creative: 4,
                    media: 2
                }
            },

            {
                text:
                    "Teaching and mentoring skills",

                traits: {
                    education: 4,
                    communication: 2
                }
            }

        ]
    }

];