import { getListingsFromProfile } from "../../../api/listings/index.mjs"

export function templateProfileListings(profileData) {
  console.log(profileData);

  const section = document.createElement("div");
  section.classList.add("listings");
  section.innerHTML = 
  `<div>${profileData.listings}</div>
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

//Komme tilbake til denne etter å ha lagd en bid, kanskje det kommer ut tomt array pga det