import { AUCTION_URL } from "../constants.mjs";
import { load } from "../../storage/index.mjs";
import { getToken } from "../auth/getToken.mjs";

const action = "/listings";

// get all listings by the gem tag

export async function getListings() {

  const response = await fetch(`${AUCTION_URL}${action}?_tag=gem`, {
headers: {
        "Content-Type": "application/json"
      },
  });

  if (response.ok) {
    return await response.json();
  } 
    throw new Error(response.statusText);

}

// Get single listing

export async function getListing(id = window.location.search) { 
  
  const response = await fetch(`${AUCTION_URL}${action}/${id}`, {
    headers: {
            "Content-Type": "application/json"
          },
      });

      if (!id) {
        console.log("Get requires an id.")
      }
  return await response.json();
  
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
  
