
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // MAIN NAVIGATION DROPDOWNS
    // =====================================

    const dropdowns = document.querySelectorAll(".nav-dropdown");

    dropdowns.forEach(dropdown => {

        const toggle = dropdown.querySelector(".dropdown-toggle");

        if (!toggle) return;

        toggle.addEventListener("click", function (event) {

            event.stopPropagation();

            const isAlreadyOpen = dropdown.classList.contains("open");

            // Close all dropdowns first
            dropdowns.forEach(other => {

                other.classList.remove("open");

                other.querySelectorAll(".about-group").forEach(group => {
                    group.classList.remove("open");

                    const nestedToggle = group.querySelector(".about-group-toggle");

                    if (nestedToggle) {
                        nestedToggle.setAttribute("aria-expanded", "false");
                    }
                });

                const otherToggle = other.querySelector(".dropdown-toggle");

                if (otherToggle) {
                    otherToggle.setAttribute("aria-expanded", "false");
                }

            });

            // Open selected dropdown
            if (!isAlreadyOpen) {

                dropdown.classList.add("open");

                toggle.setAttribute("aria-expanded", "true");

            }

        });

    });


    // =====================================
    // NESTED ABOUT PETS SUBMENUS
    // =====================================

    document.querySelectorAll(".about-group-toggle").forEach(toggle => {

        toggle.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const group = toggle.closest(".about-group");
            const parentMenu = toggle.closest(".about-menu");

            if (!group || !parentMenu) return;

            const isAlreadyOpen = group.classList.contains("open");

            // Close other nested groups
            parentMenu.querySelectorAll(".about-group").forEach(other => {

                other.classList.remove("open");

                const otherToggle = other.querySelector(".about-group-toggle");

                if (otherToggle) {
                    otherToggle.setAttribute("aria-expanded", "false");
                }

            });

            // Open selected group
            if (!isAlreadyOpen) {

                group.classList.add("open");

                toggle.setAttribute("aria-expanded", "true");

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

                    const nestedToggle = group.querySelector(".about-group-toggle");

                    if (nestedToggle) {
                        nestedToggle.setAttribute("aria-expanded", "false");
                    }

                });

                const toggle = dropdown.querySelector(".dropdown-toggle");

                if (toggle) {
                    toggle.setAttribute("aria-expanded", "false");
                }

            });

        }

    });


    // =====================================
    // CLOSE DROPDOWNS WITH ESCAPE KEY
    // =====================================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            dropdowns.forEach(dropdown => {

                dropdown.classList.remove("open");

                dropdown.querySelectorAll(".about-group").forEach(group => {

                    group.classList.remove("open");

                    const nestedToggle = group.querySelector(".about-group-toggle");

                    if (nestedToggle) {
                        nestedToggle.setAttribute("aria-expanded", "false");
                    }

                });

                const toggle = dropdown.querySelector(".dropdown-toggle");

                if (toggle) {
                    toggle.setAttribute("aria-expanded", "false");
                }

            });

        }

    });


    // =====================================
    // SHELTER SEARCH
    // =====================================

    const searchForm = document.getElementById("shelterSearchForm");
    const searchMessage = document.getElementById("searchMessage");

    if (searchForm && searchMessage) {

        searchForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const location = document.getElementById("location").value.trim();

            const shelterName = document.getElementById("shelterName").value.trim();

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
    // SCROLL REVEAL ANIMATION
    // =====================================

    const revealElements = document.querySelectorAll(
        ".intro-box, .mission-card, .section-heading"
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
