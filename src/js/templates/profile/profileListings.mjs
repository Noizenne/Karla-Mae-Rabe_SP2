import { getListingsFromProfile } from "../../api/listings/index.mjs"

export function templateProfileListings(profileData) {
  console.log(profileData);

  const section = document.createElement("div");
  section.classList.add("listings");
  section.innerHTML = 
  `<h2>Listings</h2>
  <div>${profileData.listings}</div>
  `;

  console.log(section);
  return section;
}

export function renderProfileListings(profileData, parent) {
  parent.append(templateProfileListings(profileData));
}

export async function listingsTemplate() {
  const profile = await getListingsFromProfile();

  const container = document.querySelector(".profileListings");
  renderProfileListings(profile, container);
}
