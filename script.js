document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username && password) {
        alert("Registration successful!");
    } else {
        alert("Please fill out all fields.");
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let loginUsername = document.getElementById("loginUsername").value;
    let loginPassword = document.getElementById("loginPassword").value;

    if(loginUsername && loginPassword) {
        alert("Login successful!");
    } else {
        alert("Please fill out all fields.");
    }
});
