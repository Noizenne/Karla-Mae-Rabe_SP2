import { login } from "../../api/auth/login.mjs"

export function setLoginFormListener() {
  const form = document.querySelector(".login-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const profile = localStorage.getItem(email);

      const data = JSON.parse(profile);
      console.log(data);
      
      if(profile == null | profile != data.email ) {
        console.log("Wrong email");
      } else if(email == data.email && password == data.password){
        console.log("You are logged in")
      } else {
        console.log("Wrong password")
      }

      login(profile);
    });
  }
}

