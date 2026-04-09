// ---------------------------
// LOGIN & LOGOUT
// ---------------------------
function login() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const errorDiv = document.getElementById("error");
    if (user === "admin" && pass === "1234") {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("dashboardPage").classList.remove("hidden");
        document.getElementById("userName").textContent = user;
        showDashboardOptions();
    } else {
        errorDiv.textContent = "Invalid username or password!";
    }
}

function logout() {
    document.getElementById("loginPage").classList.remove("hidden");
    document.getElementById("dashboardPage").classList.add("hidden");
    // Hide Manual / AI sections when logging out
    if (typeof hideManual === "function") hideManual();
    if (typeof hideAI === "function") hideAI();
}

// ---------------------------
// DASHBOARD OPTIONS SWITCH
// ---------------------------
function showDashboardOptions() {
    const manualSection = document.getElementById("manualSection");
    const aiSection = document.getElementById("aiSection");

    if (manualSection) manualSection.style.display = "none";
    if (aiSection) aiSection.style.display = "none";

    const optionsDiv = document.getElementById("dashboardOptions");
    if (optionsDiv) optionsDiv.style.display = "flex";
}

function openManualPortfolio() {
    const optionsDiv = document.getElementById("dashboardOptions");
    const manualSection = document.getElementById("manualSection");
    const aiSection = document.getElementById("aiSection");

    if (optionsDiv) optionsDiv.style.display = "none";
    if (manualSection) manualSection.style.display = "block";
    if (aiSection) aiSection.style.display = "none";

    if (typeof initManual === "function") initManual(); // call your manual JS
}

function openAIWizard() {
    const optionsDiv = document.getElementById("dashboardOptions");
    const manualSection = document.getElementById("manualSection");
    const aiSection = document.getElementById("aiSection");

    if (optionsDiv) optionsDiv.style.display = "none";
    if (manualSection) manualSection.style.display = "none";
    if (aiSection) aiSection.style.display = "block";

    if (typeof initAI === "function") initAI(); // call your AI JS
}