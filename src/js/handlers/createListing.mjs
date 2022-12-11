import { createListing } from "../api/listings/post.mjs";

export function createListingListener() {
    const form = document.querySelector("#createListing-form");

    if(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());

            if(!post.media.length) {
                delete post.media;
            } 

            createListing(post);
        })
    }
}