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

    if(response.ok) {
      console.log("Post success.")
    }

    return await response.json();
}

  // Bid on entry
  
  export async function postBid(id, amount) {
    const CREATE_BID_URL = `${AUCTION_URL}${action}/${id}/bids`;
  
    const response = await getToken(CREATE_BID_URL, {
      method,
      body: JSON.stringify({ amount: amount }),
    });
  
    if (response.ok) {
      console.log("Success");

      location.href = `/Treasures/listings/listing/index.html?id=${id}`
      return await response.json();
    }
  
    throw new Error(response);
  }

  // Find out how to update new credits in localstorage

  