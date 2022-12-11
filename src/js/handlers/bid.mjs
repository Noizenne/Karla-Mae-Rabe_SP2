import { postBid } from "../api/listings/post.mjs";
import { load } from "../storage/index.mjs";

export function biddingFormListener(id, amount) {
  const biddingForm = document.querySelector(".bid-form");
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const bidId = params.get("id");

  
  if(biddingForm) {
    biddingForm.addEventListener("submit", (event) => {
      e.preventDefault();

      const bid = event.target.amount.value;

      postBid(bidId, Number(bid));
      window.location.reload();
    })
  }
}


// Doesnt Work