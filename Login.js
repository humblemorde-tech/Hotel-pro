// login.js

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Admin credentials
        const adminEmail = "admin@hotelpro.com";
        const adminPassword = "P@ssw0rd";

        if (email === adminEmail && password === adminPassword) {

            // Save login session
            localStorage.setItem("hotelAdminLoggedIn", "true");
            localStorage.setItem("hotelAdminName", "Administrator");

            alert("Login successful!");

            // Redirect to dashboard
            window.location.href = "index.html";

        } else {
            alert("Invalid email or password.");
        }
    });
});
