import { register } from "../../api/auth/register.mjs";
/* import { load } from "../../storage/index.mjs" */

export function setRegisterFormListener() {
  const form = document.querySelector(".register-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    localStorage.setItem(form.username, JSON.stringify(profile));
    console.log("Registered");

    console.log(profile);
    register(profile);
  });
}
