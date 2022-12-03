import { getProfile } from "../../api/profiles/index.mjs";

export function templateProfilePageInfo(profileData) {
  console.log(profileData);

  const section = document.createElement("div");
  section.classList.add("profile");
  section.innerHTML = 
  `<div class="profileAvatar">${profileData.avatar}</div>
  <div class="profileDetails">
  <p>Name: ${profileData.name}</p>
  <p>Email: ${profileData.email}</p>
  <p>Credits: ${profileData.credits}</p>
  </div>`;

  return section;
}

export function renderProfilePageInfo(profileData, parent) {
  parent.append(templateProfilePageInfo(profileData));
}

export async function profileTemplate() {
  const profile = await getProfile();

  const container = document.querySelector(".profileInfo");
  renderProfilePageInfo(profile, container);
}
