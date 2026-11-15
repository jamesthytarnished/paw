
document.addEventListener("DOMContentLoaded", function () {

    // DROPDOWN MENUS
    const dropdowns = document.querySelectorAll(".nav-dropdown");

    dropdowns.forEach(dropdown => {

        const button = dropdown.querySelector(".dropdown-toggle");

        button.addEventListener("click", function (event) {

            event.stopPropagation();

            dropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove("open");
                }
            });

            dropdown.classList.toggle("open");
        });

    });

    // CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
    document.addEventListener("click", function (event) {

        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("open");
            }
        });

    });

    // CLOSE DROPDOWNS WITH ESCAPE
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove("open");
            });
        }

    });


    // CLOSE PROMO BANNER
    const closePromo = document.getElementById("closePromo");
    const promoBanner = document.querySelector(".promo-banner");

    closePromo.addEventListener("click", function () {
        promoBanner.style.display = "none";
    });


    // SHARE ARTICLE
    const shareBtn = document.getElementById("shareBtn");

    shareBtn.addEventListener("click", async function () {

        const shareData = {
            title: document.title,
            text: "Check out this pet adoption article!",
            url: window.location.href
        };

        try {

            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                alert("Article link copied!");
            }

        } catch (error) {
            console.log("Sharing cancelled or unavailable.");
        }

    });


    // SHELTER SEARCH
    const shelterForm = document.getElementById("shelterForm");

    shelterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const location = document.getElementById("location").value.trim();
        const shelterName = document.getElementById("shelterName").value.trim();

        if (!location && !shelterName) {
            alert("Please enter a location or shelter name.");
            return;
        }

        alert("Shelter search feature will be connected soon!");

    });

});
