import { getListingsFromProfile } from "../../api/listings/index.mjs"

const container = document.querySelector(".profileListings")

export function templateProfileListings(listingData) {
  console.log(listingData);

  listingData.forEach(listings => {
    const section = document.createElement("div");
    section.classList.add("listing");
    section.classList.add("m-2")

    section.innerHTML = `<a href="/Treasures/listings/listing/index.html?id=${listings.id}">
    <div class="d-flex justify-content-center">${listings.title}</div>
     <div class="d-flex justify-content-center small">${listings.endsAt}</div></a>
     <div class="d-flex justify-content-center"><img src="${listings.media}"</img></div>`
  
    container.appendChild(section)

  }); 
  
}

export function renderProfileListings(listingData, parent) {
  parent.append(templateProfileListings(listingData));
}

export async function profileListingsTemplate() {
  
  const profile = await getListingsFromProfile();

  const container = document.querySelector(".profileListings");
  renderProfileListings(profile, container);
}
