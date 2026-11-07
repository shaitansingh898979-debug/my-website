// ========================================
// CLASS 11–12 QUIZ ENGINE
// ========================================


// ========================================
// QUIZ VARIABLES
// ========================================

let currentQuestion = 0;

let selectedAnswers = [];

let userAnswers = [];

let traitScores = {};


// ========================================
// HTML ELEMENTS
// ========================================

const questionText =
    document.getElementById("questionText");

const answerContainer =
    document.getElementById("answerContainer");

const nextButton =
    document.getElementById("nextButton");

const questionNumber =
    document.getElementById("questionNumber");

const progressPercentage =
    document.getElementById("progressPercentage");

const progressFill =
    document.getElementById("progressFill");


// ========================================
// CHECK QUESTION DATA
// ========================================

console.log(
    "Higher School Questions:",
    higherQuestionData
);


if (
    !higherQuestionData ||
    higherQuestionData.length === 0
) {

    alert(
        "Higher School questions could not be loaded."
    );

}


// ========================================
// SHOW QUESTION
// ========================================

function showQuestion() {

    const currentData =
        higherQuestionData[currentQuestion];


    if (!currentData) {

        finishQuiz();

        return;

    }


    // Reset selected answers

    selectedAnswers = [];


    // Disable Next

    nextButton.disabled = true;


    // ====================================
    // QUESTION TEXT
    // ====================================

    questionText.textContent =
        currentData.question;


    // ====================================
    // QUESTION NUMBER
    // ====================================

    questionNumber.textContent =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        higherQuestionData.length;


    // ====================================
    // PROGRESS
    // ====================================

    const progress =
        ((currentQuestion + 1) /
        higherQuestionData.length) * 100;


    progressPercentage.textContent =
        Math.round(progress) + "%";


    progressFill.style.width =
        progress + "%";


    // ====================================
    // CLEAR OLD OPTIONS
    // ====================================

    answerContainer.innerHTML = "";


    // ====================================
    // CREATE OPTIONS
    // ====================================

    currentData.answers.forEach(
        function(answer) {

            const button =
                document.createElement("button");


            button.type = "button";


            button.className =
                "answer-option";


            button.textContent =
                answer.text;


            // =================================
            // OPTION CLICK
            // =================================

            button.addEventListener(
                "click",
                function() {


                    // =================================
                    // SINGLE ANSWER
                    // =================================

                    if (!currentData.multiple) {

                        selectedAnswers =
                            [answer];


                        const allButtons =
                            answerContainer
                                .querySelectorAll(
                                    ".answer-option"
                                );


                        allButtons.forEach(
                            function(btn) {

                                btn.classList.remove(
                                    "selected"
                                );

                            }
                        );


                        button.classList.add(
                            "selected"
                        );

                    }


                    // =================================
                    // MULTIPLE ANSWERS
                    // =================================

                    else {

                        const existingIndex =
                            selectedAnswers.indexOf(
                                answer
                            );


                        if (
                            existingIndex !== -1
                        ) {

                            selectedAnswers.splice(
                                existingIndex,
                                1
                            );


                            button.classList.remove(
                                "selected"
                            );

                        }

                        else {

                            selectedAnswers.push(
                                answer
                            );


                            button.classList.add(
                                "selected"
                            );

                        }

                    }


                    // =================================
                    // ENABLE / DISABLE NEXT
                    // =================================

                    nextButton.disabled =
                        selectedAnswers.length === 0;

                }
            );


            answerContainer.appendChild(
                button
            );

        }
    );

}


// ========================================
// ADD TRAIT SCORES
// ========================================

function addTraitScores(traits) {

    if (!traits) {
        return;
    }


    for (
        let trait in traits
    ) {

        if (
            !traitScores[trait]
        ) {

            traitScores[trait] = 0;

        }


        traitScores[trait] +=
            traits[trait];

    }

}


// ========================================
// NEXT BUTTON
// ========================================

nextButton.addEventListener(
    "click",
    function() {


        // Safety check

        if (
            selectedAnswers.length === 0
        ) {

            return;

        }


        // =================================
        // SAVE ANSWERS
        // =================================

        userAnswers.push(

            selectedAnswers.map(
                function(answer) {

                    return answer.text;

                }
            )

        );


        // =================================
        // ADD ALL SELECTED TRAITS
        // =================================

        selectedAnswers.forEach(
            function(answer) {

                addTraitScores(
                    answer.traits
                );

            }
        );


        // =================================
        // NEXT QUESTION
        // =================================

        currentQuestion++;


        if (
            currentQuestion <
            higherQuestionData.length
        ) {

            showQuestion();

        }

        else {

            finishQuiz();

        }

    }
);


// ========================================
// CALCULATE CAREER SCORES
// ========================================

function calculateCareerScores() {

    const careerRules = {

        technology: {
            name:
                "Technology & Engineering"
        },

        healthcare: {
            name:
                "Healthcare & Medicine"
        },

        business: {
            name:
                "Business & Finance"
        },

        law: {
            name:
                "Law & Public Services"
        },

        creative: {
            name:
                "Creative & Design"
        }

    };


    const results = {};


    results.technology =
        (traitScores.technology || 0) * 3 +
        (traitScores.analytical || 0) * 2;


    results.healthcare =
        (traitScores.healthcare || 0) * 3 +
        (traitScores.scientific || 0) * 2;


    results.business =
        (traitScores.business || 0) * 3 +
        (traitScores.mathematical || 0) * 2 +
        (traitScores.leadership || 0);


    results.law =
        (traitScores.law || 0) * 3 +
        (traitScores.social || 0) * 2 +
        (traitScores.communication || 0);


    results.creative =
        (traitScores.creative || 0) * 3 +
        (traitScores.communication || 0) * 2;


    return {
        scores: results,
        rules: careerRules
    };

}


// ========================================
// FINISH QUIZ
// ========================================

function finishQuiz() {


    // =================================
    // CALCULATE CAREER SCORES
    // =================================

    const careerData =
        calculateCareerScores();


    const careerScores =
        careerData.scores;


    const careerRules =
        careerData.rules;


    // =================================
    // FIND STRONGEST CAREER
    // =================================

    const sortedCareers =
        Object.keys(careerScores)
            .sort(
                function(a, b) {

                    return (
                        careerScores[b] -
                        careerScores[a]
                    );

                }
            );


    const strongestCareer =
        sortedCareers[0];


    // =================================
    // SAVE EVERYTHING
    // =================================

    localStorage.setItem(
        "higherQuizAnswers",
        JSON.stringify(userAnswers)
    );


    localStorage.setItem(
        "higherTraitScores",
        JSON.stringify(traitScores)
    );


    localStorage.setItem(
        "higherCareerScores",
        JSON.stringify(careerScores)
    );


    localStorage.setItem(
        "higherStrongestCareer",
        strongestCareer
    );


    localStorage.setItem(
        "higherCareerRules",
        JSON.stringify(careerRules)
    );


    // =================================
    // DEBUG
    // =================================

    console.log(
        "Higher School Trait Scores:",
        traitScores
    );


    console.log(
        "Higher School Career Scores:",
        careerScores
    );


    console.log(
        "Strongest Career:",
        strongestCareer
    );


    // =================================
    // GO TO RESULT
    // =================================

    window.location.href =
        "higher-result.html";

}


// ========================================
// START QUIZ
// ========================================

if (
    higherQuestionData &&
    higherQuestionData.length > 0
) {

    showQuestion();

}