import { AUCTION_URL } from "../constants.mjs";
import { load, save } from "../../storage/index.mjs";
import { getToken } from "../auth/getToken.mjs";

const token = load("token");
const action = "/listings";
const method = "post";


// Create listing 

export async function createListing(listingData) {
    const CREATE_POST_URL = `${AUCTION_URL}${action}`;

    const response = await getToken(CREATE_POST_URL, {
        method,
        body: JSON.stringify(listingData)
    });

    return await response.json();
}

  // Bid on entry

  export async function postBid(id, amount) { 
    const response = await fetch(`${AUCTION_URL}${action}/${id}/bids`, {
      headers: {
        method,
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            amount: amount
        })
    });

    const {user} = await response.json();

    if(response.ok) {
        save("profile", user)
        return await response.json();
    }
    throw new Error(response)
  }