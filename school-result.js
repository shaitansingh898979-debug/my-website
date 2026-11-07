// ========================================
// CLASS 9-10 RESULT
// ========================================


// Get saved scores

const scores =
    JSON.parse(
        localStorage.getItem("schoolScores")
    ) || {};


// Get strongest direction

let strongestDirection =
    localStorage.getItem(
        "schoolStrongestDirection"
    );


// Safety fallback

if (
    !strongestDirection ||
    !schoolCareerDirections[strongestDirection]
) {

    strongestDirection =
        Object.keys(scores)
            .sort(function(a, b) {

                return scores[b] - scores[a];

            })[0] || "technology";

}


// Get strongest data

const strongest =
    schoolCareerDirections[
        strongestDirection
    ];


// ========================================
// SCORE CALCULATION
// ========================================

const scoreValues =
    Object.values(scores);

const highestPossible =
    Math.max(...scoreValues, 1);

const strongestScore =
    scores[strongestDirection] || 0;


// Make percentage relative to highest result

const matchPercentage =
    Math.round(
        (strongestScore /
        highestPossible) * 100
    );


// ========================================
// MAIN RESULT
// ========================================

document.getElementById(
    "matchIcon"
).textContent =
    strongest.icon;


document.getElementById(
    "strongMatchName"
).textContent =
    strongest.name;


document.getElementById(
    "strongMatchDescription"
).textContent =
    strongest.description;


document.getElementById(
    "strongScore"
).textContent =
    matchPercentage + "%";


// ========================================
// PERSONALITY DATA
// ========================================

const personalityData = [

    {
        icon: "🧠",

        title: "Logical Thinker",

        text:
            "You may enjoy understanding how things work and finding practical solutions."
    },

    {
        icon: "🔎",

        title: "Curious Explorer",

        text:
            "Your answers suggest that learning, discovering and asking questions may interest you."
    },

    {
        icon: "🚀",

        title: "Future Focused",

        text:
            "You are beginning to identify areas that could shape your future study choices."
    }

];


const strengthGrid =
    document.getElementById(
        "strengthGrid"
    );


personalityData.forEach(function(item) {

    const card =
        document.createElement("div");

    card.className =
        "personality-card";

    card.innerHTML = `

        <div class="personality-icon">
            ${item.icon}
        </div>

        <h3>
            ${item.title}
        </h3>

        <p>
            ${item.text}
        </p>

    `;

    strengthGrid.appendChild(card);

});


// ========================================
// TOP DIRECTIONS
// ========================================

const directionGrid =
    document.getElementById(
        "directionGrid"
    );


const sortedDirections =
    Object.keys(scores)
        .sort(function(a, b) {

            return scores[b] - scores[a];

        })
        .slice(0, 3);


sortedDirections.forEach(function(direction) {

    const data =
        schoolCareerDirections[direction];

    if (!data) {
        return;
    }


    const rawScore =
        scores[direction] || 0;


    const percentage =
        Math.round(
            (rawScore /
            highestPossible) * 100
        );


    const card =
        document.createElement("div");

    card.className =
        "direction-card";


    card.innerHTML = `

        <div class="direction-icon">
            ${data.icon}
        </div>

        <div class="direction-info">

            <h3>
                ${data.name}
            </h3>

            <p>
                ${data.description}
            </p>

        </div>

        <div class="direction-score">

            ${percentage}%

            <div class="score-bar">

                <div
                    class="score-bar-fill"
                    style="width:${percentage}%">
                </div>

            </div>

        </div>

    `;


    directionGrid.appendChild(card);

});


// ========================================
// SUBJECT / STREAM GUIDANCE
// ========================================

document.getElementById(
    "subjectsText"
).textContent =
    strongest.subjects;


// ========================================
// EXPLORE BUTTON
// ========================================

document.getElementById(
    "exploreButton"
).addEventListener(
    "click",
    function() {

        alert(
            "Career exploration will be added next!"
        );

    }
);