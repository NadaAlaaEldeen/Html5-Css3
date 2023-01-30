let user = document.querySelector("#welcome-user");
let email = document.querySelector("#welcome-email");

user.textContent = localStorage.getItem("username");
email.textContent = localStorage.getItem("userEmail");
