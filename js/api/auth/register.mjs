import { AUCTION_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = `${AUCTION_URL}${action}`;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  if(response.ok) {
    return await response.json();
  }
  throw new Error(response.statusText);
}
