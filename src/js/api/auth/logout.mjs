import { remove } from "../../storage/index.mjs";

export function logout() {
  remove("token");
  remove("profile");
  window.location.href = "/Treasures/login/index.html";
}
