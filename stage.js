// ========================================
// CAREER PLANNER - STAGE SELECTION
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const stageButtons =
        document.querySelectorAll(".stage-button");

    console.log(
        "Stage buttons found:",
        stageButtons.length
    );


    stageButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const selectedStage =
                    button.getAttribute("data-stage");

                console.log(
                    "Selected stage:",
                    selectedStage
                );


                // =================================
                // CHECK STAGE
                // =================================

                if (!selectedStage) {

                    alert(
                        "Stage value is missing."
                    );

                    return;

                }


                // =================================
                // SAVE STAGE
                // =================================

                localStorage.setItem(
                    "studentStage",
                    selectedStage
                );


                console.log(
                    "Saved stage:",
                    localStorage.getItem(
                        "studentStage"
                    )
                );


                // =================================
                // SEND STUDENT TO CORRECT QUIZ
                // =================================

                if (
                    selectedStage === "school"
                ) {

                    window.location.href =
                        "school-quiz.html";

                }

                else if (
                    selectedStage === "higher-school"
                ) {

                    window.location.href =
                        "higher-quiz.html";

                }

                else if (
                    selectedStage === "college"
                ) {

                    window.location.href =
                        "college-quiz.html";

                }

                else {

                    alert(
                        "This stage is not available yet."
                    );

                }

            }
        );

    });

});