import { AUCTION_URL } from "../constants.mjs";
import { load } from "../../storage/index.mjs";

export async function getListingsFromProfile(name = load("profile").name) {
    console.log(name);
    const token = load("token");
  
    const response = await fetch(`${AUCTION_URL}/profiles/${name}/listings`, {
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
  
