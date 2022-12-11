import { load } from "../../storage/index.mjs"
import { getProfile } from "../../api/profiles/index.mjs"

export async function loggedInName() {

    const loggedIn = load("profile");
    console.log(loggedIn)

    if(loggedIn) {
        const navLoggedIn = document.querySelector(".logged-in");
        const navNotLoggedIn = document.querySelector(".not-logged-in");

        navLoggedIn.classList.add("d-flex");
        navLoggedIn.classList.remove("d-none");

        navNotLoggedIn.classList.add("d-none");
        navNotLoggedIn.classList.remove("d-flex");
    }
}
