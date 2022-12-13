import { getListingsFromUser } from "../../api/listings/index.mjs"

const container = document.querySelector(".userListings");

const parameterString = window.location.search;
const searchParams = new URLSearchParams(parameterString);
const name = searchParams.get("name");


export function templateUserListings(listingData) {

  listingData.forEach(listings => {
    const section = document.createElement("div");
    section.classList.add("listing");
    section.classList.add("m-2")

    section.innerHTML = `<a href="/Treasures/listings/listing/index.html?id=${listings.id}">
    <div class="d-flex justify-content-center">${listings.title}</div>
     <div class="d-flex justify-content-center small">${listings.endsAt}</div></a>
     <div class="d-flex justify-content-center"><img src="${listings.media}"</img></div>
    `;
  
    container.appendChild(section)

  }); 
  
}

export function renderUserListings(listingData, parent) {
  parent.append(templateUserListings(listingData));
}

export async function userListingsTemplate() {
  
  const profile = await getListingsFromUser(name);

  const container = document.querySelector(".userListings");
  renderUserListings(profile, container);
}
