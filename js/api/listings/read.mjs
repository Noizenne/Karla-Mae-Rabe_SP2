import { AUCTION_URL } from "../constants.mjs";
import { load } from "../../storage/index.mjs";

const action = "/listings";

// get all listings
export async function getListings() {

  const url = `${AUCTION_URL}${action}`;
  console.log(url)
  const response = await fetch(`${AUCTION_URL}${action}`, {

  });

  if (response.ok) {
    return await response.json();
  } 
    throw new Error(response.statusText);

}


//get listings from a specific user

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
  
