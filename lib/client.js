import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
    projectId: "p2k47ujv",
    dataset: "production",
    apiVersion: '2023-06-27', // use current UTC date - see "specifying API version"!
    useCdn: true,
    token: 
    "skgTspfe7Oh5qhOzUjT5yNT9XtGIBZ8IjyP8BcGFhFzRrDSzATJXp7ADegT0qUXc03oddrfErgwbIwdg149EoZflFPRBSsrBkZOAfFGRVRk0GHyInEL7t3mTtlbGCS34QPmjyViQoi2AGQJOzhRePdGPcKTDHefKW1FlkbHfQG0eRoOwYybA"
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);