import { AUCTION_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = `${AUCTION_URL}${action}`;
  console.log(registerURL);
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  if (response.ok) {
    alert("You can now login.")
    location.href = "/Treasures/login/index.html";
    return await response.json();
  }
  throw new Error(response.statusText);
}
