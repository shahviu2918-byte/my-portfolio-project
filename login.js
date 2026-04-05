// login.js

// ----- Typing Animation -----
const text = "Welcome to BuildFolio"; // Text to type
const typingElement = document.getElementById("typing");
const cursor = document.querySelector(".cursor");

let index = 0;

function type() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 150); // typing speed
    } else {
        blinkCursor(); // start cursor blinking after typing finishes
    }
}

function blinkCursor() {
    setInterval(() => {
        cursor.style.visibility = cursor.style.visibility === "visible" ? "hidden" : "visible";
    }, 500);
}

window.addEventListener("DOMContentLoaded", type); // ensures DOM is loaded

// ----- Toggle password visibility -----
function togglePassword() {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

// ----- Handle Login -----
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = this.username.value.trim();
    const password = this.password.value.trim();
    const user = BuildFolioDatabase.findUser(username, password);

    if(user) {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // redirect after login
    } else {
        alert("Invalid username or password!");
    }
});

// ----- Handle Sign Up click -----
const signUpSpan = document.querySelector("p span");
signUpSpan.style.cursor = "pointer";

signUpSpan.addEventListener("click", function() {
    const username = prompt("Enter new username:");
    if(!username) return alert("Username is required!");

    const password = prompt("Enter new password:");
    if(!password) return alert("Password is required!");

    const users = BuildFolioDatabase.getUsers();

    if(users.find(u => u.username === username)) {
        return alert("Username already exists!");
    }

    BuildFolioDatabase.addUser({ username, password });
    alert("Sign Up successful! You can now login.");
});