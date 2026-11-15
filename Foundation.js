
document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       MAIN DROPDOWN MENUS
    ===================================== */

    const dropdowns = document.querySelectorAll(".nav-dropdown");

    dropdowns.forEach(function (dropdown) {

        const button = dropdown.querySelector(":scope > .dropdown-toggle");

        if (!button) return;

        button.addEventListener("click", function (event) {
            event.stopPropagation();

            const isAlreadyOpen = dropdown.classList.contains("open");

            // Close all other dropdowns
            dropdowns.forEach(function (otherDropdown) {
                otherDropdown.classList.remove("open");

                const otherButton = otherDropdown.querySelector(":scope > .dropdown-toggle");

                if (otherButton) {
                    otherButton.setAttribute("aria-expanded", "false");
                }

                otherDropdown.querySelectorAll(".about-group").forEach(function (group) {
                    group.classList.remove("open");

                    const groupButton = group.querySelector(".about-group-toggle");

                    if (groupButton) {
                        groupButton.setAttribute("aria-expanded", "false");
                    }
                });
            });

            // Open selected dropdown if it was previously closed
            if (!isAlreadyOpen) {
                dropdown.classList.add("open");
                button.setAttribute("aria-expanded", "true");
            }
        });
    });


    /* =====================================
       ALL ABOUT PETS SUBMENUS
    ===================================== */

    const aboutGroups = document.querySelectorAll(".about-group");

    aboutGroups.forEach(function (group) {

        const groupButton = group.querySelector(".about-group-toggle");

        if (!groupButton) return;

        groupButton.addEventListener("click", function (event) {
            event.stopPropagation();

            const isAlreadyOpen = group.classList.contains("open");

            // Close other submenu groups
            aboutGroups.forEach(function (otherGroup) {
                otherGroup.classList.remove("open");

                const otherButton = otherGroup.querySelector(".about-group-toggle");

                if (otherButton) {
                    otherButton.setAttribute("aria-expanded", "false");
                }
            });

            // Open selected submenu
            if (!isAlreadyOpen) {
                group.classList.add("open");
                groupButton.setAttribute("aria-expanded", "true");
            }
        });
    });


    /* =====================================
       CLOSE MENUS WHEN CLICKING OUTSIDE
    ===================================== */

    document.addEventListener("click", function (event) {

        if (!event.target.closest(".nav-dropdown")) {

            dropdowns.forEach(function (dropdown) {
                dropdown.classList.remove("open");

                const button = dropdown.querySelector(":scope > .dropdown-toggle");

                if (button) {
                    button.setAttribute("aria-expanded", "false");
                }
            });

            aboutGroups.forEach(function (group) {
                group.classList.remove("open");

                const button = group.querySelector(".about-group-toggle");

                if (button) {
                    button.setAttribute("aria-expanded", "false");
                }
            });
        }
    });


    /* =====================================
       CLOSE MENUS WITH ESCAPE KEY
    ===================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            dropdowns.forEach(function (dropdown) {
                dropdown.classList.remove("open");

                const button = dropdown.querySelector(":scope > .dropdown-toggle");

                if (button) {
                    button.setAttribute("aria-expanded", "false");
                }
            });

            aboutGroups.forEach(function (group) {
                group.classList.remove("open");

                const button = group.querySelector(".about-group-toggle");

                if (button) {
                    button.setAttribute("aria-expanded", "false");
                }
            });
        }
    });


    /* =====================================
       SCROLL REVEAL ANIMATIONS
    ===================================== */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.12
        });

        revealElements.forEach(function (element, index) {
            element.style.transitionDelay = (index % 4) * 0.1 + "s";
            observer.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("show");
        });

    }

});
