import { load } from "../../storage/index.mjs";
import { AUCTION_URL } from "../constants.mjs";
import { getToken } from "../auth/getToken.mjs";

export async function getProfiles() {
  const response = await fetch(`${AUCTION_URL}/profiles`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

export async function getProfile(name = load("profile").name) {
  
  const token = load("token");

  const response = await fetch(`${AUCTION_URL}/profiles/${name}?_listings=true`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!name) {
    throw new Error(response.statusText);
  }

  return await response.json();
}
