
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // MAIN NAVIGATION DROPDOWNS
    // =====================================

    const dropdowns = document.querySelectorAll(".nav-dropdown");

    dropdowns.forEach(dropdown => {

        const button = dropdown.querySelector(".dropdown-toggle");

        button.addEventListener("click", function (event) {

            event.stopPropagation();

            dropdowns.forEach(other => {

                if (other !== dropdown) {
                    other.classList.remove("open");

                    other.querySelectorAll(".about-group")
                        .forEach(group => group.classList.remove("open"));
                }

            });

            dropdown.classList.toggle("open");

        });

    });


    // =====================================
    // ALL ABOUT PETS SUBMENUS
    // =====================================

    const aboutGroups = document.querySelectorAll(".about-group");

    aboutGroups.forEach(group => {

        const button = group.querySelector(".about-group-toggle");

        if (!button) return;

        button.addEventListener("click", function (event) {

            event.stopPropagation();

            aboutGroups.forEach(other => {
                if (other !== group) {
                    other.classList.remove("open");
                }
            });

            group.classList.toggle("open");

        });

    });


    // =====================================
    // CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
    // =====================================

    document.addEventListener("click", function (event) {

        if (!event.target.closest(".nav-dropdown")) {

            dropdowns.forEach(dropdown => {

                dropdown.classList.remove("open");

                dropdown.querySelectorAll(".about-group")
                    .forEach(group => group.classList.remove("open"));

            });

        }

    });


    // =====================================
    // CLOSE DROPDOWNS WITH ESCAPE
    // =====================================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            dropdowns.forEach(dropdown => {

                dropdown.classList.remove("open");

                dropdown.querySelectorAll(".about-group")
                    .forEach(group => group.classList.remove("open"));

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

});
