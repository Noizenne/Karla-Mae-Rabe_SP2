import { getListing } from "../../api/listings/index.mjs";

export function templateListing(listingData) {

    console.log(listingData)

    const section = document.createElement("div");
    section.classList.add("listing");
    section.classList.add("m-2");
    section.innerHTML = 
     `
     <div class="d-flex justify-content-center">${listingData.title}</div>
      <div class="d-flex justify-content-center small">${listingData.endsAt}</div>
    `;
      
    if(listingData.media) {
  
      const img = document.createElement("img");
      img.src = listingData.media;
      img.alt = `Image is from ${listingData.title}`;
      section.append(img);  
  
    } 
    return section;   
  }
  
  export function renderListings(listingData, parent) {
    parent.append(templateListing(listingData));
  }


  export async function singleListingTemplate() {
    
    const listings = await getListing();
    const container = document.querySelector(".singleListing");
    renderListings(listings, container);
  }