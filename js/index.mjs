import * as handlers from "./handlers/index.mjs"
import * as templates from "./templates/profile/index.mjs"


const path = location.pathname;


if (path === "/src/login/index.html") {
    handlers.setLoginFormListener();
} else if(path === "/src/register/index.html"){
    handlers.setRegisterFormListener();
}  else if(path === "/src/profile/index.html") {
    templates.profileTemplate();
} 


