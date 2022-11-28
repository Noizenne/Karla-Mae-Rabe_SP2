import { AUCTION_URL } from "../constants.mjs";

import * as storage from "../../storage/index.mjs"

const action = "/auth/login";
const method = "post";

export async function login(profile) {
    const loginURL = `${AUCTION_URL}${action}`;
    const body = JSON.stringify(profile);
  
    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body,
    });
  
    if(response.ok) {
        const profile = await response.json();
        storage.save("token", profile.accessToken);
        storage.save("profile", profile)
        return profile;
    }

    throw new Error(response.statusText);
  }
  