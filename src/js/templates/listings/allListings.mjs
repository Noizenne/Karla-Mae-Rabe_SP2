import { getListings } from "../../api/listings/index.mjs"

export function templateListings(listingsData) {

  const section = document.createElement("div");
  section.classList.add("listing");
  section.classList.add("m-2");
  section.innerHTML = 
   `<a href="/Treasures/listings/listing/index.html?id=${listingsData.id}">
   <div class="d-flex justify-content-center">${listingsData.title}</div>
    <div class="d-flex justify-content-center small">${listingsData.endsAt}</div></a>
  `;
    
  if(listingsData.media) {

    const img = document.createElement("img");
    img.src = listingsData.media;
    img.alt = `Image is from ${listingsData.title}`;
    section.append(img);  

  } 
  return section;   
}

export function renderListings(listingsData, parent) {
  parent.append(...listingsData.map(templateListings));
}
export async function allListingsTemplate() {
  const listings = await getListings();
  const container = document.querySelector(".listings");
  renderListings(listings, container);
}