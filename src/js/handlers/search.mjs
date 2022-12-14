import { getListings } from "../api/listings/read.mjs";


export async function searchListener() {

    try {
        const searchInput = document.querySelector("#searchInput");
        const searchForm = document.querySelector("#search");
        const listingsContainer = document.querySelector(".searchResult");

        searchForm.addEventListener("keyup", async (event) => {
            event.preventDefault();

            const listings = await getListings();
            console.log(listings)
            
            const filteredListings = listings.filter((listing) => {
                const title = listing.title.toLowerCase();

                const searchValue = searchInput.value.toLowerCase();
                console.log(searchValue)

                if(title.includes(searchValue)) {
                    listingsContainer.innerHTML = `<a href="/Treasures/listings/listing/index.html?id=${listing.id}">
                    <div class="d-flex justify-content-center">${listing.title}</div>
                     <div class="d-flex justify-content-center small">${listing.endsAt}</div></a>`;
                    return true;
                }
            });

            if(filteredListings === 0) {
                listingsContainer.innerHTML = `<p>No matches</p>`
            }

            getListings(filteredListings, listingsContainer)
        } )
    } catch(error) {
console.log("Error")
    }
}