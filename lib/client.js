import { createClient } from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_API_VERSION, // use current UTC date - see "specifying API version"!
    useCdn: true,
    token: process.env.TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);