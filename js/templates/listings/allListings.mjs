import { getListings } from "../../api/listings/index.mjs"

export function templateListings(listingsData) {
  console.log(listingsData);

  const section = document.createElement("div");
  section.classList.add("listings");
  section.innerHTML = 
  `<h2>Listings</h2>
  <div>${listingsData.listings}</div>
  `;

  console.log(section);
  return section;
}

export function renderListings(allListingsData, parent) {
  parent.append(...allListingsData(templateListings));
}

export async function allListingsTemplate() {
  const listings = await getListings();
  const container = document.querySelector(".listings");
  renderListings(listings, container);
}