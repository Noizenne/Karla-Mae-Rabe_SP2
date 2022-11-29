import { getProfile } from "../../api/profiles/read.mjs";


export async function templateProfilePageInfo(profileData) {

console.log(profileData)

const section = document.createElement("div");
section.classList.add("profile");
section.innerHTML = `${profileData.avatar}${profileData.name}${profileData.email}`;

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
