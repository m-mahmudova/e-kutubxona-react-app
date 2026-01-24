interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const form = document.getElementById("registerForm") as HTMLFormElement;

const firstName = document.getElementById("firstName") as HTMLInputElement;
const lastName = document.getElementById("lastName") as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;

form.addEventListener("submit", function (e: Event) {
  e.preventDefault();

  const user: User = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value
  };

  console.log("User:", user);
  alert("Ro‘yxatdan o‘tdingiz!");
});
