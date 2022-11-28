import { AUCTION_URL } from "../constants.mjs";

export async function getProfiles() {
    const response = await fetch(`${AUCTION_URL}/profiles`, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      if( response.ok) {
        return await response.json();
      }

       throw new Error(response.statusText);
}

export async function getProfile(name) {
    const response = await fetch(`${AUCTION_URL}/profiles/${name}`, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      if( response.ok) {
        return await response.json();
      }

       throw new Error(response.statusText);
}
