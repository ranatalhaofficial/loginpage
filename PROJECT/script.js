
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check credentials
    if (username === "admin" && password === "admin") {
        document.getElementById("loginForm").style.display = "none"; // Hide login form
        document.getElementById("dashboard").style.display = "block"; // Show dashboard
    } else {
        alert("Invalid username or password");
        document.getElementById("username").value = ""; // Clear username
        document.getElementById("password").value = ""; // Clear password
        document.getElementById("username").focus(); // Focus on username input
    }
}

function logout() {
    document.getElementById("dashboard").style.display = "none"; // Hide dashboard
    document.getElementById("loginForm").style.display = "block"; // Show login form again
    document.getElementById("username").value = ""; // Clear username
    document.getElementById("password").value = ""; // Clear password
}