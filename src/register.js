var form = document.getElementById("registerForm");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var user = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
    };
    console.log("User:", user);
    alert("Ro‘yxatdan o‘tdingiz!");
});
