// ========================================
// CLASS 9-10 QUIZ
// ========================================

let currentQuestion = 0;
let selectedAnswers = [];
let userAnswers = [];
let scores = {
    technology: 0,
    science: 0,
    business: 0,
    humanities: 0,
    creative: 0
};


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
// SHOW QUESTION
// ========================================

function showQuestion() {

    const question =
        schoolQuestions[currentQuestion];

    selectedAnswers = [];

    nextButton.disabled = true;

    questionText.textContent =
        question.question;

    questionNumber.textContent =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        schoolQuestions.length;

    const progress =
        ((currentQuestion + 1) /
        schoolQuestions.length) * 100;

    progressPercentage.textContent =
        Math.round(progress) + "%";

    progressFill.style.width =
        progress + "%";

    answerContainer.innerHTML = "";


    // ========================================
    // CREATE OPTIONS
    // ========================================

    question.answers.forEach(function(answer) {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "answer-option";

        button.textContent =
            answer.text;


        button.addEventListener("click", function() {

            // SINGLE SELECT
            if (!question.multiple) {

                selectedAnswers = [answer];

                document
                    .querySelectorAll(".answer-option")
                    .forEach(function(btn) {

                        btn.classList.remove("selected");

                    });

                button.classList.add("selected");
            }


            // MULTIPLE SELECT
            else {

                const index =
                    selectedAnswers.indexOf(answer);

                if (index !== -1) {

                    selectedAnswers.splice(index, 1);

                    button.classList.remove("selected");

                } else {

                    selectedAnswers.push(answer);

                    button.classList.add("selected");

                }
            }


            nextButton.disabled =
                selectedAnswers.length === 0;

        });


        answerContainer.appendChild(button);

    });

}


// ========================================
// ADD SCORES
// ========================================

function addScores(answer) {

    for (let trait in answer.traits) {

        if (scores[trait] !== undefined) {

            scores[trait] +=
                answer.traits[trait];

        }

    }

}


// ========================================
// NEXT BUTTON
// ========================================

nextButton.addEventListener("click", function() {

    if (selectedAnswers.length === 0) {
        return;
    }


    // Save answer text
    userAnswers.push(
        selectedAnswers.map(function(answer) {
            return answer.text;
        })
    );


    // Add scores for selected answers
    selectedAnswers.forEach(function(answer) {

        addScores(answer);

    });


    currentQuestion++;


    // More questions
    if (currentQuestion < schoolQuestions.length) {

        showQuestion();

    }

    // Quiz finished
    else {

        finishQuiz();

    }

});


// ========================================
// FINISH QUIZ
// ========================================

function finishQuiz() {

    // Find strongest direction

    let strongestDirection =
        "technology";

    let highestScore =
        scores.technology;


    for (let direction in scores) {

        if (scores[direction] > highestScore) {

            highestScore =
                scores[direction];

            strongestDirection =
                direction;

        }

    }


    // Save results

    localStorage.setItem(
        "schoolScores",
        JSON.stringify(scores)
    );


    localStorage.setItem(
        "schoolAnswers",
        JSON.stringify(userAnswers)
    );


    localStorage.setItem(
        "schoolStrongestDirection",
        strongestDirection
    );


    // Go to result page

    window.location.href =
        "school-result.html";

}


// ========================================
// START QUIZ
// ========================================

showQuestion();