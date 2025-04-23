// // script.js

// // Dummy Data for Login
// const users = [
//     { email: "testuser@example.com", password: "test123" },
//     { email: "demo@example.com", password: "demo123" }
// ];

// // Handle Registration
// function handleRegister() {
//     const username = document.getElementById("register-username").value;
//     const password = document.getElementById("register-password").value;

//     // Add the new user to the dummy users array
//     users.push({ username, password });
//     alert(`User registered successfully: ${username}`);
//     document.getElementById("registerForm").reset();
// }

// // Handle Login
// function handleLogin() {
//     const username = document.getElementById("login-username").value;
//     const password = document.getElementById("login-password").value;

//     // Check if the user exists in the dummy users array
//     const user = users.find(
//         (user) => user.username === username && user.password === password
//     );

//     if (user) {
//         alert(`Successfully logged in as ${username}`);
//         window.location.href = "finalpage.html"; // Redirect to the final page
//     } else {
//         alert("Invalid username or password. Please try again.");
//     }
// }
// script.js

// Dummy Data for Login (including email and password)
// const users = [
//     { email: "testuser@example.com", password: "test123" },
//     { email: "demo@example.com", password: "demo123" }
// ];

// // Handle Login
// function handleLogin() {
//     const email = document.getElementById("login-email").value;
//     const password = document.getElementById("login-password").value;

//     // Check if the user exists in the dummy users array
//     const user = users.find(
//         (user) => user.email === email && user.password === password
//     );

//     if (user) {
//         alert(`Successfully logged in as ${email}`);
//         window.location.href = "finalpage.html"; // Redirect to the final page
//     } else {
//         alert("Invalid email or password. Please try again.");
//     }
// }

// script.js

// Dummy Data for Login
const users = [
    { email: "testuser@example.com", password: "test123" }
];

// Handle Registration
function handleRegister() {
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    // Add the new user to the dummy users array
    users.push({ email, password });
    alert(`User registered successfully: ${email}`);
    document.getElementById("registerForm").reset();
}

// Handle Login
function handleLogin() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Check if the user exists in the dummy users array
    const user = users.find(
        (user) => user.email === email && user.password === password
    );

    if (user) {
        alert(`Successfully logged in as ${email}`);
        window.location.href = "finalpage.html"; // Redirect to the final page
    } else {
        alert("Invalid email or password. Please try again or register.");
        window.location.href = "#registerForm"; // Redirect to the registration form
    }
}
