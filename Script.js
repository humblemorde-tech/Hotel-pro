// HOTELPRO - script.js

document.addEventListener("DOMContentLoaded", () => {

    console.log("HOTELPRO Loaded Successfully");

    // ==========================
    // Navigation Active Link
    // ==========================
    const links = document.querySelectorAll(".sidebar a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // ==========================
    // Dashboard Statistics
    // ==========================
    const stats = {
        rooms: 128,
        guests: 74,
        reservations: 41,
        staff: 25
    };

    if(document.getElementById("roomsCount"))
        document.getElementById("roomsCount").textContent = stats.rooms;

    if(document.getElementById("guestsCount"))
        document.getElementById("guestsCount").textContent = stats.guests;

    if(document.getElementById("reservationsCount"))
        document.getElementById("reservationsCount").textContent = stats.reservations;

    if(document.getElementById("staffCount"))
        document.getElementById("staffCount").textContent = stats.staff;

    // ==========================
    // Notification
    // ==========================
    const notifyBtn = document.getElementById("notifyBtn");

    if (notifyBtn) {
        notifyBtn.addEventListener("click", () => {
            alert("Notification sent successfully.");
        });
    }

    // ==========================
    // Search
    // ==========================
    const search = document.getElementById("search");

    if (search) {
        search.addEventListener("keyup", function () {
            console.log("Searching:", this.value);
        });
    }

    // ==========================
    // Logout
    // ==========================
    const logout = document.getElementById("logout");

    if (logout) {
        logout.addEventListener("click", () => {

            const confirmLogout = confirm("Are you sure you want to logout?");

            if (confirmLogout) {
                window.location.href = "login.html";
            }

        });
    }

    // ==========================
    // Welcome Message
    // ==========================
    const user = "Admin";

    if(document.getElementById("welcomeUser")){
        document.getElementById("welcomeUser").innerHTML =
        "Welcome back, <strong>" + user + "</strong>";
    }

    // ==========================
    // Current Date
    // ==========================
    const today = document.getElementById("today");

    if(today){
        const now = new Date();
        today.textContent = now.toDateString();
    }

});
