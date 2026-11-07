// ========================================
// CAREER PLANNER - CAREER EXPLORER
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const careerGrid =
        document.getElementById("careerGrid");

    const categoryContainer =
        document.getElementById("categoryContainer");

    const searchInput =
        document.getElementById("careerSearch");

    const resultsTitle =
        document.getElementById("resultsTitle");

    const careerCount =
        document.getElementById("careerCount");

    const noResults =
        document.getElementById("noResults");


    // ------------------------------------
    // SAFETY CHECK
    // ------------------------------------

    if (
        !careerGrid ||
        !categoryContainer ||
        !searchInput
    ) {
        console.error(
            "Career Explorer elements not found."
        );

        return;
    }


    if (
        typeof careersData === "undefined"
    ) {
        console.error(
            "careersData was not loaded."
        );

        return;
    }


    // ------------------------------------
    // STATE
    // ------------------------------------

    let selectedCategory = "All";

    let searchTerm = "";


    // ------------------------------------
    // CREATE CATEGORIES
    // ------------------------------------

    const categories = [
        "All",
        ...new Set(
            careersData.map(
                career => career.category
            )
        )
    ];


    categories.forEach(
        function (category) {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "category-button";

            if (category === "All") {

                button.classList.add(
                    "active"
                );

            }

            button.textContent =
                category;


            button.addEventListener(
                "click",
                function () {

                    selectedCategory =
                        category;


                    document
                        .querySelectorAll(
                            ".category-button"
                        )
                        .forEach(
                            function (item) {

                                item.classList.remove(
                                    "active"
                                );

                            }
                        );


                    button.classList.add(
                        "active"
                    );


                    updateResults();

                }
            );


            categoryContainer.appendChild(
                button
            );

        }
    );


    // ------------------------------------
    // SEARCH
    // ------------------------------------

    searchInput.addEventListener(
        "input",
        function () {

            searchTerm =
                searchInput.value
                    .trim()
                    .toLowerCase();


            updateResults();

        }
    );


    // ------------------------------------
    // FILTER CAREERS
    // ------------------------------------

    function getFilteredCareers() {

        return careersData.filter(
            function (career) {

                const matchesCategory =
                    selectedCategory === "All" ||
                    career.category ===
                    selectedCategory;


                const searchableText = (
                    career.name +
                    " " +
                    career.category +
                    " " +
                    career.description
                ).toLowerCase();


                const matchesSearch =
                    searchTerm === "" ||
                    searchableText.includes(
                        searchTerm
                    );


                return (
                    matchesCategory &&
                    matchesSearch
                );

            }
        );

    }


    // ------------------------------------
    // DISPLAY CAREERS
    // ------------------------------------

    function updateResults() {

        const filteredCareers =
            getFilteredCareers();


        careerGrid.innerHTML = "";


        // -------------------------------
        // RESULT TITLE
        // -------------------------------

        if (selectedCategory === "All") {

            if (searchTerm !== "") {

                resultsTitle.textContent =
                    "Search Results";

            } else {

                resultsTitle.textContent =
                    "All Careers";

            }

        } else {

            resultsTitle.textContent =
                selectedCategory;

        }


        // -------------------------------
        // COUNT
        // -------------------------------

        careerCount.textContent =
            filteredCareers.length +
            (
                filteredCareers.length === 1
                    ? " career"
                    : " careers"
            );


        // -------------------------------
        // NO RESULTS
        // -------------------------------

        if (
            filteredCareers.length === 0
        ) {

            noResults.style.display =
                "block";

            return;

        }


        noResults.style.display =
            "none";


        // -------------------------------
        // CREATE CARDS
        // -------------------------------

        filteredCareers.forEach(
            function (career, index) {

                const card =
                    document.createElement("article");


                card.className =
                    "career-card";


                card.style.animationDelay =
                    (index * 0.04) + "s";


                card.innerHTML = `

                    <div class="career-card-icon">
                        ${career.icon}
                    </div>

                    <p class="career-card-category">
                        ${career.category}
                    </p>

                    <h3>
                        ${career.name}
                    </h3>

                    <p>
                        ${career.description}
                    </p>

                    <div class="career-card-button">

                        <a
                            href="career-details.html?id=${encodeURIComponent(career.id)}">

                            View Career

                            <span>→</span>

                        </a>

                    </div>

                `;


                careerGrid.appendChild(
                    card
                );

            }
        );

    }


    // ------------------------------------
    // INITIAL DISPLAY
    // ------------------------------------

    updateResults();

});