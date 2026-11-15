
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // MAIN NAVIGATION DROPDOWNS
    // =====================================

    const dropdowns = document.querySelectorAll(".nav-dropdown");

    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {

            dropdown.classList.remove("open");

            const mainButton = dropdown.querySelector(".dropdown-toggle");

            if (mainButton) {
                mainButton.setAttribute("aria-expanded", "false");
            }

            dropdown.querySelectorAll(".about-group").forEach(group => {

                group.classList.remove("open");

                const subButton = group.querySelector(".about-group-toggle");

                if (subButton) {
                    subButton.setAttribute("aria-expanded", "false");
                }

            });

        });
    }


    dropdowns.forEach(dropdown => {

        const button = dropdown.querySelector(".dropdown-toggle");

        if (!button) return;

        button.addEventListener("click", function (event) {

            event.stopPropagation();

            const isAlreadyOpen = dropdown.classList.contains("open");

            closeAllDropdowns();

            if (!isAlreadyOpen) {
                dropdown.classList.add("open");
                button.setAttribute("aria-expanded", "true");
            }

        });

    });


    // =====================================
    // ALL ABOUT PETS SUBMENUS
    // =====================================

    document.querySelectorAll(".about-group").forEach(group => {

        const button = group.querySelector(".about-group-toggle");

        if (!button) return;

        button.addEventListener("click", function (event) {

            event.stopPropagation();

            const parent = group.closest(".about-menu");

            if (!parent) return;

            const isAlreadyOpen = group.classList.contains("open");

            parent.querySelectorAll(".about-group").forEach(other => {

                other.classList.remove("open");

                const otherButton = other.querySelector(".about-group-toggle");

                if (otherButton) {
                    otherButton.setAttribute("aria-expanded", "false");
                }

            });

            if (!isAlreadyOpen) {
                group.classList.add("open");
                button.setAttribute("aria-expanded", "true");
            }

        });

    });


    // =====================================
    // CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
    // =====================================

    document.addEventListener("click", function (event) {

        if (!event.target.closest(".nav-dropdown")) {
            closeAllDropdowns();
        }

    });


    // =====================================
    // CLOSE DROPDOWNS WITH ESCAPE
    // =====================================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeAllDropdowns();
        }

    });


    // =====================================
    // SHELTER SEARCH DEMO
    // =====================================

    const searchForm = document.getElementById("shelterSearchForm");
    const searchMessage = document.getElementById("searchMessage");

    if (searchForm && searchMessage) {

        searchForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const locationInput = document.getElementById("location");
            const shelterInput = document.getElementById("shelterName");

            const location = locationInput ? locationInput.value.trim() : "";
            const shelterName = shelterInput ? shelterInput.value.trim() : "";

            if (!location) {
                searchMessage.textContent = "Please enter a location.";
                return;
            }

            searchMessage.textContent =
                "Search submitted for " + location +
                (shelterName ? " — " + shelterName : "") +
                ". Connect a shelter database to display real results.";

        });

    }


    // =====================================
    // SCROLL REVEAL ANIMATIONS
    // =====================================

    const revealElements = document.querySelectorAll(
        ".intro-box, .article-section, .article-card"
    );

    if ("IntersectionObserver" in window) {

        revealElements.forEach(element => {
            element.classList.add("reveal");
        });

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.12
        });

        revealElements.forEach(element => {
            observer.observe(element);
        });

    }

});
