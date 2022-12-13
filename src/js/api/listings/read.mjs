import { AUCTION_URL } from "../constants.mjs";
import { load } from "../../storage/index.mjs";

const action = "/listings";
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
// get listings by the gem tag and limit it by 8

export async function getListingsLimited() {

  const response = await fetch(`${AUCTION_URL}${action}?_tag=gem&limit=8`, {
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
  const response = await fetch(`${AUCTION_URL}${action}/${id}?_seller=true&_bids=true`, {
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
  

  
export async function getListingsFromUser(name) {

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
