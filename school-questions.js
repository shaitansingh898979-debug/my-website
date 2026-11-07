// ========================================
// CAREER PLANNER - CLASS 9-10 QUESTIONS
// ========================================

const schoolQuestions = [

    {
        question: "Which subjects do you enjoy the most?",
        multiple: true,

        answers: [
            {
                text: "Mathematics and problem solving",
                traits: {
                    technology: 2,
                    science: 1
                }
            },
            {
                text: "Science and experiments",
                traits: {
                    science: 3
                }
            },
            {
                text: "Business, money and numbers",
                traits: {
                    business: 3
                }
            },
            {
                text: "History, society and people",
                traits: {
                    humanities: 3
                }
            },
            {
                text: "Art, design and creativity",
                traits: {
                    creative: 3
                }
            }
        ]
    },


    {
        question: "What kind of activities do you enjoy?",
        multiple: true,

        answers: [
            {
                text: "Building or fixing things",
                traits: {
                    technology: 3,
                    science: 1
                }
            },
            {
                text: "Helping or teaching others",
                traits: {
                    humanities: 3
                }
            },
            {
                text: "Organising or leading people",
                traits: {
                    business: 3
                }
            },
            {
                text: "Creating drawings, videos or designs",
                traits: {
                    creative: 3
                }
            },
            {
                text: "Doing experiments or finding answers",
                traits: {
                    science: 3
                }
            }
        ]
    },


    {
        question: "What type of problem would you enjoy solving?",
        multiple: false,

        answers: [
            {
                text: "Technical or computer problems",
                traits: {
                    technology: 3
                }
            },
            {
                text: "Health and science problems",
                traits: {
                    science: 3
                }
            },
            {
                text: "Business or money problems",
                traits: {
                    business: 3
                }
            },
            {
                text: "Problems faced by people and society",
                traits: {
                    humanities: 3
                }
            },
            {
                text: "Creative problems",
                traits: {
                    creative: 3
                }
            }
        ]
    },


    {
        question: "What kind of work sounds interesting to you?",
        multiple: false,

        answers: [
            {
                text: "Working with computers and technology",
                traits: {
                    technology: 3
                }
            },
            {
                text: "Working in science or healthcare",
                traits: {
                    science: 3
                }
            },
            {
                text: "Running or managing a business",
                traits: {
                    business: 3
                }
            },
            {
                text: "Working with people and society",
                traits: {
                    humanities: 3
                }
            },
            {
                text: "Creative and design work",
                traits: {
                    creative: 3
                }
            }
        ]
    },


    {
        question: "Which strength describes you best?",
        multiple: false,

        answers: [
            {
                text: "Logical thinking",
                traits: {
                    technology: 2,
                    science: 1
                }
            },
            {
                text: "Curiosity and experimentation",
                traits: {
                    science: 3
                }
            },
            {
                text: "Leadership and decision-making",
                traits: {
                    business: 3
                }
            },
            {
                text: "Understanding people",
                traits: {
                    humanities: 3
                }
            },
            {
                text: "Creativity",
                traits: {
                    creative: 3
                }
            }
        ]
    }

];


// ========================================
// CAREER DIRECTION INFORMATION
// ========================================

const schoolCareerDirections = {

    technology: {
        name: "Technology & Engineering",
        icon: "💻",
        description:
            "You seem to enjoy logical thinking, problem solving and technology. You may enjoy exploring areas such as computer science, engineering and technology.",
        subjects:
            "Mathematics, Computer Science and Physics"
    },

    science: {
        name: "Science & Healthcare",
        icon: "🔬",
        description:
            "You show curiosity about science, experiments and understanding how things work. You may enjoy exploring science, medicine, healthcare and research.",
        subjects:
            "Physics, Chemistry, Biology and Mathematics"
    },

    business: {
        name: "Business & Commerce",
        icon: "💼",
        description:
            "Your answers suggest an interest in business, numbers, leadership and decision-making. You may enjoy exploring commerce, finance, management and entrepreneurship.",
        subjects:
            "Accountancy, Business Studies, Economics and Mathematics"
    },

    humanities: {
        name: "Humanities & Social Sciences",
        icon: "🌍",
        description:
            "You appear interested in people, society, communication and understanding the world around you. Humanities can lead toward areas such as law, psychology, education, public service and social sciences.",
        subjects:
            "History, Political Science, Psychology, Sociology and Economics"
    },

    creative: {
        name: "Creative & Design",
        icon: "🎨",
        description:
            "You show strong creative interests and enjoy expressing ideas. You may enjoy exploring design, media, animation, architecture and other creative fields.",
        subjects:
            "Fine Arts, Design, Media and related creative subjects"
    }

};