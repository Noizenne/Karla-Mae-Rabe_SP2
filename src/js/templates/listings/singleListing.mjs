import { getListing } from "../../api/listings/index.mjs";

const parameterString = window.location.search;
const searchParams = new URLSearchParams(parameterString);
const id = searchParams.get("id");


export function templateListing(listingData) {

    console.log(listingData)

    const section = document.createElement("div");
    section.classList.add("single");
    section.classList.add("m-2");
    section.innerHTML = 
     `<div class="d-flex justify-content-center row">
     <h1 class="title d-flex justify-content-center m-2">${listingData.title}</h1>
      <div class="d-flex justify-content-center"><img src="${listingData.media}"</img></div>
      <div class="d-flex justify-content-center"><button class="btn m-2" onclick="location.href='/Treasures/listings/listing/bid/index.html?id=${listingData.id}'">Make a bid</button></div>
      </div>
      <div class="d-flex justify-content-center m-auto row" style="height: 100px">
      <div class="d-flex justify-content-center">Ends at: ${listingData.endsAt}</div>
      <div class="d-flex justify-content-center">Bids: ${listingData._count.bids}</div>
      <div class="d-flex justify-content-center">Description:</div>
      <div class="d-flex justify-content-center">${listingData.description}</div>
      <div class="d-flex justify-content-center">Seller: &nbsp; <a href="/Treasures/profile/index.html?name=${listingData.seller.name}">${listingData.seller.name}</a></div>
      </div>`;

    return section;   
  }
  
  export function renderListings(listingData, parent) {
    parent.append(templateListing(listingData));
  }


  export async function singleListingTemplate() {

    const listings = await getListing(id);
    const container = document.querySelector(".singleListing");
    renderListings(listings, container);
  }