// ========================================
// CLASS 11–12 RESULT ENGINE
// ========================================


// ========================================
// GET SAVED DATA
// ========================================

const careerScores =
    JSON.parse(
        localStorage.getItem(
            "higherCareerScores"
        )
    ) || {};

const strongestCareer =
    localStorage.getItem(
        "higherStrongestCareer"
    );


// ========================================
// CAREER INFORMATION
// ========================================

const careerInfo = {

    technology: {
        name: "Technology & Engineering",

        icon: "💻",

        description:
            "You seem to enjoy logical thinking, technology and solving structured problems. Technology and engineering could be interesting areas to explore.",

        study:
            "Computer Science, Information Technology, Engineering, Artificial Intelligence, Data Science and related fields.",

        careers:
            "Software Developer, AI Engineer, Data Scientist, Cybersecurity Specialist, Software Engineer"
    },


    healthcare: {
        name: "Healthcare & Medicine",

        icon: "🩺",

        description:
            "Your answers show an interest in health, science and understanding people. Healthcare and medicine may be worth exploring.",

        study:
            "Medicine, Biology, Biotechnology, Pharmacy, Nursing, Physiotherapy and other health-related fields.",

        careers:
            "Doctor, Pharmacist, Physiotherapist, Biotechnologist, Medical Researcher"
    },


    business: {
        name: "Business & Finance",

        icon: "📈",

        description:
            "You appear interested in business, numbers, decision-making and how organisations work.",

        study:
            "Commerce, Economics, Finance, Business Administration, Management and Entrepreneurship.",

        careers:
            "Business Analyst, Financial Analyst, Entrepreneur, Investment Professional, Management Professional"
    },


    law: {
        name: "Law & Public Services",

        icon: "⚖️",

        description:
            "Your answers suggest an interest in society, communication, public affairs and understanding how systems work.",

        study:
            "Law, Political Science, Public Administration, International Relations and related social science fields.",

        careers:
            "Lawyer, Legal Advisor, Civil Services Professional, Policy Analyst, Public Administration Professional"
    },


    creative: {
        name: "Creative & Design",

        icon: "🎨",

        description:
            "Creativity, original thinking and communication appear to be important parts of your interests.",

        study:
            "Design, Fine Arts, Animation, Film, Communication, Visual Communication and related creative fields.",

        careers:
            "UI/UX Designer, Graphic Designer, Animator, Content Creator, Art Director"
    }

};


// ========================================
// FALLBACK
// ========================================

let selectedCareer =
    strongestCareer;


if (
    !selectedCareer ||
    !careerInfo[selectedCareer]
) {

    selectedCareer =
        Object.keys(careerScores)
            .sort(function(a, b) {

                return (
                    careerScores[b] -
                    careerScores[a]
                );

            })[0];

}


if (
    !selectedCareer ||
    !careerInfo[selectedCareer]
) {

    selectedCareer =
        "technology";

}


// ========================================
// SELECTED CAREER
// ========================================

const mainCareer =
    careerInfo[selectedCareer];


// ========================================
// FIND MAX SCORE
// ========================================

const scoreList =
    Object.values(careerScores);


const maxScore =
    Math.max(
        ...scoreList,
        1
    );


// ========================================
// STRONGEST MATCH PERCENTAGE
// ========================================

const mainScore =
    careerScores[selectedCareer] || 0;


const mainPercentage =
    Math.round(
        (
            mainScore /
            maxScore
        ) * 100
    );


// ========================================
// HERO
// ========================================

document.getElementById(
    "heroCareerName"
).textContent =
    mainCareer.name;


// ========================================
// MAIN MATCH
// ========================================

document.getElementById(
    "strongCareerName"
).textContent =
    mainCareer.name;


document.getElementById(
    "strongCareerDescription"
).textContent =
    mainCareer.description;


document.getElementById(
    "strongCareerScore"
).textContent =
    mainPercentage + "%";


// ========================================
// STRENGTH CARDS
// ========================================

const strengthGrid =
    document.getElementById(
        "strengthGrid"
    );


const strengths = [

    {
        icon: "🧠",

        title: "Problem Solving",

        text:
            "You show an interest in understanding problems and finding possible solutions."
    },

    {
        icon: "🔎",

        title: "Curiosity",

        text:
            "Your choices suggest that learning and exploring new ideas may motivate you."
    },

    {
        icon: "🚀",

        title: "Future Focus",

        text:
            "You are beginning to identify areas that could become part of your future academic and career journey."
    }

];


strengths.forEach(function(strength) {

    const card =
        document.createElement(
            "div"
        );


    card.className =
        "strength-card";


    card.innerHTML = `

        <div class="strength-icon">
            ${strength.icon}
        </div>

        <h3>
            ${strength.title}
        </h3>

        <p>
            ${strength.text}
        </p>

    `;


    strengthGrid.appendChild(
        card
    );

});


// ========================================
// CAREER CARDS
// ========================================

const careerGrid =
    document.getElementById(
        "careerGrid"
    );


// Get top careers

const topCareers =
    Object.keys(careerScores)
        .sort(function(a, b) {

            return (
                careerScores[b] -
                careerScores[a]
            );

        })
        .slice(0, 4);


topCareers.forEach(function(careerKey) {

    const career =
        careerInfo[careerKey];


    if (!career) {
        return;
    }


    const card =
        document.createElement(
            "div"
        );


    card.className =
        "career-card";


    card.innerHTML = `

        <div class="career-card-top">

            <div class="career-icon">
                ${career.icon}
            </div>

            <h3>
                ${career.name}
            </h3>

        </div>

        <p>
            ${career.careers}
        </p>

    `;


    careerGrid.appendChild(
        card
    );

});


// ========================================
// ACADEMIC DIRECTION
// ========================================

document.getElementById(
    "studyText"
).textContent =
    mainCareer.study;


// ========================================
// EXPLORE BUTTON
// ========================================

document.getElementById(
    "exploreButton"
).addEventListener(
    "click",
    function() {

        alert(
            "Career exploration will be added in the next phase."
        );

    }
);


// ========================================
// DEBUG
// ========================================

console.log(
    "Higher Career Scores:",
    careerScores
);

console.log(
    "Selected Career:",
    selectedCareer
);

console.log(
    "Main Percentage:",
    mainPercentage
);