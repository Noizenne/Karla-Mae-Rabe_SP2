import * as register from "../auth/register.mjs";

export function setRegisterFormListener() {
  const form = document.querySelector(".register-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const username = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const profile = {
        username: username,
        email: email,
        password: password,
      };

      const json = JSON.stringify(profile);
      localStorage.setItem(username, json);
      console.log("Registered");

      register(profile);
    });
  }
}
