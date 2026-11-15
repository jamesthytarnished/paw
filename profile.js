
document.addEventListener("DOMContentLoaded", function () {

    // GET PROFILE ELEMENTS
    const displayName = document.getElementById("displayName");
    const displayEmail = document.getElementById("displayEmail");

    const infoName = document.getElementById("infoName");
    const infoEmail = document.getElementById("infoEmail");
    const infoPhone = document.getElementById("infoPhone");
    const infoLocation = document.getElementById("infoLocation");

    const profileImage = document.getElementById("profileImage");

    // LOAD SAVED PROFILE
    function loadProfile() {
        const name = localStorage.getItem("userName") || "Your Name";
        const email = localStorage.getItem("userEmail") || "your@email.com";
        const phone = localStorage.getItem("userPhone") || "Not provided";
        const location = localStorage.getItem("userLocation") || "Not provided";
        const image = localStorage.getItem("userImage");

        displayName.textContent = name;
        displayEmail.textContent = email;

        infoName.textContent = name;
        infoEmail.textContent = email;
        infoPhone.textContent = phone;
        infoLocation.textContent = location;

        if (image) {
            profileImage.src = image;
        }

        document.getElementById("editName").value =
            name === "Your Name" ? "" : name;

        document.getElementById("editEmail").value =
            email === "your@email.com" ? "" : email;

        document.getElementById("editPhone").value =
            phone === "Not provided" ? "" : phone;

        document.getElementById("editLocation").value =
            location === "Not provided" ? "" : location;

        document.getElementById("editImage").value = image || "";
    }

    loadProfile();


    // OPEN EDIT PROFILE MODAL
    const modal = document.getElementById("editModal");

    function openModal() {
        modal.classList.add("show");
    }

    function closeModal() {
        modal.classList.remove("show");
    }

    document.getElementById("editProfileBtn")
        .addEventListener("click", openModal);

    document.getElementById("editInfoBtn")
        .addEventListener("click", openModal);

    document.getElementById("settingsEditBtn")
        .addEventListener("click", openModal);

    document.getElementById("closeModal")
        .addEventListener("click", closeModal);

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });


    // SAVE PROFILE INFORMATION
    document.getElementById("profileForm")
        .addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("editName").value.trim();
            const email = document.getElementById("editEmail").value.trim();
            const phone = document.getElementById("editPhone").value.trim();
            const location = document.getElementById("editLocation").value.trim();
            const image = document.getElementById("editImage").value.trim();

            if (!name || !email) {
                alert("Please enter your name and email.");
                return;
            }

            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPhone", phone);
            localStorage.setItem("userLocation", location);

            if (image) {
                localStorage.setItem("userImage", image);
            } else {
                localStorage.removeItem("userImage");
            }

            loadProfile();
            closeModal();

            alert("Your profile has been updated!");
        });


    // FAVORITES AND APPLICATION COUNTS
    const favorites = JSON.parse(
        localStorage.getItem("favorites") || "[]"
    );

    const applications = JSON.parse(
        localStorage.getItem("applications") || "[]"
    );

    document.getElementById("favoriteCount").textContent =
        favorites.length;

    document.getElementById("applicationCount").textContent =
        applications.length;


    // LOG OUT
    document.getElementById("logoutBtn")
        .addEventListener("click", function (event) {

            event.preventDefault();

            const confirmLogout = confirm(
                "Are you sure you want to log out?"
            );

            if (confirmLogout) {
                localStorage.removeItem("isLoggedIn");
                window.location.href = "signin.html";
            }
        });

});
