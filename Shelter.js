
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // LUCIDE ICONS
    // =====================================

    if (window.lucide) {
        lucide.createIcons();
    }


    // =====================================
    // NAVIGATION DROPDOWNS
    // =====================================

    const dropdowns = document.querySelectorAll(".nav-dropdown");

    dropdowns.forEach(dropdown => {

        const button = dropdown.querySelector(".dropdown-toggle");

        if (!button) return;

        button.addEventListener("click", function (event) {

            event.stopPropagation();

            const isAlreadyOpen = dropdown.classList.contains("open");

            dropdowns.forEach(other => {
                other.classList.remove("open");

                other.querySelectorAll(".about-group").forEach(group => {
                    group.classList.remove("open");
                });
            });

            if (!isAlreadyOpen) {
                dropdown.classList.add("open");
            }

        });

    });


    // =====================================
    // ALL ABOUT PETS SUBMENUS
    // =====================================

    document.querySelectorAll(".about-group-toggle").forEach(button => {

        button.addEventListener("click", function (event) {

            event.stopPropagation();

            const group = button.closest(".about-group");
            const menu = button.closest(".about-menu");

            const isAlreadyOpen = group.classList.contains("open");

            menu.querySelectorAll(".about-group").forEach(other => {
                other.classList.remove("open");
            });

            if (!isAlreadyOpen) {
                group.classList.add("open");
            }

        });

    });


    // =====================================
    // CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
    // =====================================

    document.addEventListener("click", function (event) {

        if (!event.target.closest(".nav-dropdown")) {

            dropdowns.forEach(dropdown => {

                dropdown.classList.remove("open");

                dropdown.querySelectorAll(".about-group").forEach(group => {
                    group.classList.remove("open");
                });

            });

        }

    });


    // =====================================
    // ESCAPE KEY
    // =====================================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            dropdowns.forEach(dropdown => {

                dropdown.classList.remove("open");

                dropdown.querySelectorAll(".about-group").forEach(group => {
                    group.classList.remove("open");
                });

            });

        }

    });


    // =====================================
    // CLOSE PROMOTIONAL BANNER
    // =====================================

    const closePromo = document.getElementById("closePromo");
    const promoBanner = document.getElementById("promoBanner");

    if (closePromo && promoBanner) {

        closePromo.addEventListener("click", function () {
            promoBanner.style.display = "none";
        });

    }


    // =====================================
    // SHELTER SEARCH DEMO
    // =====================================

    const searchForm = document.getElementById("shelterSearchForm");
    const searchMessage = document.getElementById("searchMessage");

    if (searchForm && searchMessage) {

        searchForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const location = document.getElementById("location").value.trim();
            const keyword = document.getElementById("keyword").value.trim();

            if (!location) {
                searchMessage.textContent = "Please enter your location.";
                return;
            }

            searchMessage.textContent =
                "Your search for " +
                (keyword ? keyword + " near " : "animal shelters near ") +
                location +
                " has been submitted. Connect a shelter database to display actual results.";

        });

    }


    // =====================================
    // SCROLL REVEAL ANIMATIONS
    // =====================================

    const revealElements = document.querySelectorAll(
        ".intro-box, .resource-section, .resource-card, .match-card, .shelter-search"
    );

    if ("IntersectionObserver" in window) {

        revealElements.forEach(element => {
            element.classList.add("reveal");
        });

        const observer = new IntersectionObserver(function (entries, observer) {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.12
        });

        revealElements.forEach((element, index) => {

            element.style.transitionDelay = (index % 3) * 0.1 + "s";

            observer.observe(element);

        });

    }

});
