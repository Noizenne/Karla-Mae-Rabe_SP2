import { AUCTION_URL } from "../constants.mjs";
import { load, save } from "../../storage/index.mjs";
import { getToken } from "../auth/getToken.mjs";
import { loggedInName } from "../../templates/index.mjs";

const token = load("token");
const action = "/listings";
const method = "post";

// Create listing

export async function createListing(listingData) {
  const CREATE_POST_URL = `${AUCTION_URL}${action}`;

  const response = await getToken(CREATE_POST_URL, {
    method,
    body: JSON.stringify(listingData),
  });

  if (response.ok) {
    console.log("Post success.");
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

  const bidError = document.querySelector(".bidError");

  if (response.ok) {
    console.log("Success");
    await loggedInName();
    history.back();
    return await response.json();
  } else {
    bidError.innerHTML = "You must login to place a bid.";
  }

  throw new Error(response);
}
