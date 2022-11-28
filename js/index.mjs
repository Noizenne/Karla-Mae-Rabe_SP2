import * as handlers from "./handlers/index.mjs"

const path = location.pathname;


if (path === "/src/login/index.html") {
    handlers.setLoginFormListener();
} else if(path === "/src/register/index.html"){
    handlers.setRegisterFormListener();
}
