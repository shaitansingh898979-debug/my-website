// ========================================
// COLLEGE QUIZ - STANDALONE
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ------------------------------------
    // CHECK QUESTION DATA
    // ------------------------------------

    if (
        typeof collegeQuestions === "undefined" ||
        collegeQuestions.length === 0
    ) {
        console.error("College questions not loaded.");
        return;
    }


    // ------------------------------------
    // QUIZ VARIABLES
    // ------------------------------------

    let currentQuestion = 0;

    let traitScores = {};

    let selectedAnswers = [];


    const totalQuestions =
        collegeQuestions.length;


    // ------------------------------------
    // HTML ELEMENTS
    // ------------------------------------

    const questionText =
        document.getElementById("questionText");

    const answerContainer =
        document.getElementById("answerContainer");

    const nextButton =
        document.getElementById("nextButton");

    const questionNumber =
        document.getElementById("questionNumber");

    const questionNumberSmall =
        document.getElementById("questionNumberSmall");

    const progressPercentage =
        document.getElementById("progressPercentage");

    const progressFill =
        document.getElementById("progressFill");


    // ------------------------------------
    // SHOW QUESTION
    // ------------------------------------

    function showQuestion() {

        const question =
            collegeQuestions[currentQuestion];


        selectedAnswers = [];


        answerContainer.innerHTML = "";


        nextButton.disabled = true;


        // Question text

        questionText.textContent =
            question.question;


        // Question number

        const number =
            currentQuestion + 1;


        questionNumber.textContent =
            `Question ${number} of ${totalQuestions}`;


        questionNumberSmall.textContent =
            String(number).padStart(2, "0");


        // Progress

        const percentage =
            Math.round(
                (number / totalQuestions) * 100
            );


        progressPercentage.textContent =
            percentage + "%";


        progressFill.style.width =
            percentage + "%";


        // --------------------------------
        // CREATE OPTIONS
        // --------------------------------

        question.answers.forEach(
            function (answer, index) {

                const option =
                    document.createElement("button");


                option.type = "button";


                option.className =
                    "answer-option";


                option.innerHTML = `

                    <span class="option-number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <span class="option-text">
                        ${answer.text}
                    </span>

                    <span class="option-check">
                        ✓
                    </span>

                `;


                option.addEventListener(
                    "click",
                    function () {

                        selectAnswer(
                            option,
                            answer,
                            question.multiple
                        );

                    }
                );


                answerContainer.appendChild(
                    option
                );

            }
        );

    }


    // ------------------------------------
    // SELECT ANSWER
    // ------------------------------------

    function selectAnswer(
        option,
        answer,
        multiple
    ) {

        if (multiple) {

            const existingIndex =
                selectedAnswers.indexOf(answer);


            if (existingIndex === -1) {

                selectedAnswers.push(answer);

                option.classList.add(
                    "selected"
                );

            } else {

                selectedAnswers.splice(
                    existingIndex,
                    1
                );

                option.classList.remove(
                    "selected"
                );

            }

        } else {

            const allOptions =
                answerContainer.querySelectorAll(
                    ".answer-option"
                );


            allOptions.forEach(
                function (item) {

                    item.classList.remove(
                        "selected"
                    );

                }
            );


            option.classList.add(
                "selected"
            );


            selectedAnswers = [
                answer
            ];

        }


        nextButton.disabled =
            selectedAnswers.length === 0;

    }


    // ------------------------------------
    // ADD TRAITS
    // ------------------------------------

    function addTraits(answer) {

        if (!answer.traits) {
            return;
        }


        for (
            const trait in answer.traits
        ) {

            if (
                !traitScores[trait]
            ) {

                traitScores[trait] = 0;

            }


            traitScores[trait] +=
                answer.traits[trait];

        }

    }


    // ------------------------------------
    // NEXT BUTTON
    // ------------------------------------

    nextButton.addEventListener(
        "click",
        function () {

            if (
                selectedAnswers.length === 0
            ) {
                return;
            }


            // Add selected answers
            selectedAnswers.forEach(
                function (answer) {

                    addTraits(answer);

                }
            );


            console.log(
                "College scores:",
                traitScores
            );


            // --------------------------------
            // NEXT QUESTION
            // --------------------------------

            if (
                currentQuestion <
                totalQuestions - 1
            ) {

                currentQuestion++;

                showQuestion();

            } else {

                finishCollegeQuiz();

            }

        }
    );


    // ------------------------------------
    // FINISH QUIZ
    // ------------------------------------

    function finishCollegeQuiz() {

        console.log(
            "FINAL COLLEGE SCORES:",
            traitScores
        );


        // Save scores

        localStorage.setItem(
            "collegeTraitScores",
            JSON.stringify(traitScores)
        );


        // Save completion

        localStorage.setItem(
            "collegeQuizCompleted",
            "true"
        );


        // Move to result page

        window.location.href =
            "college-result.html";

    }


    // ------------------------------------
    // START QUIZ
    // ------------------------------------

    showQuestion();

});