import { register } from "../../api/auth/register.mjs";


export function setRegisterFormListener() {
  const form = document.querySelector(".register-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    console.log(profile);

    localStorage.setItem(profile.username, JSON.stringify(profile));
    console.log("Registered");

    register(profile);
  });
}
