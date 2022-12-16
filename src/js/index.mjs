import * as handlers from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";

const path = location.pathname;

if (path === "/index.html") {
  templates.limitedTemplate();
  handlers.searchListener();
  handlers.logoutListener();
  templates.loggedInName();
} else if (path === "/Treasures/listings/index.html") {
  templates.allListingsTemplate();
  handlers.logoutListener();
  templates.loggedInName();
} else if (path === "/Treasures/listings/listing/index.html") {
  templates.singleListingTemplate();
  templates.biddersTemplate();
  handlers.logoutListener();
  templates.loggedInName();
} else if (path === "/Treasures/listings/listing/bid/index.html") {
  handlers.biddingFormListener();
  templates.loggedInName();
  handlers.logoutListener();
} else if (path === "/Treasures/login/index.html") {
  handlers.setLoginFormListener();
} else if (path === "/Treasures/register/index.html") {
  handlers.setRegisterFormListener();
} else if (path === "/Treasures/profile/index.html") {
  templates.profileTemplate();
  templates.profileListingsTemplate();
  handlers.logoutListener();
  templates.loggedInName();
} else if (path === "/Treasures/profile/create/index.html") {
  handlers.createListingListener();
  templates.loggedInName();
} else if (path === "/Treasures/profile/edit.html") {
  templates.loggedInName();
  handlers.logoutListener();
  handlers.editAvatar();
} else if (path === "/Treasures/user/index.html") {
  templates.userTemplate();
  templates.userListingsTemplate();
  templates.loggedInName();
}
