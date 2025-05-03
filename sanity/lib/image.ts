import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { dataset, projectId } from '../env';

// Create the Sanity client (used only for image URL building here)
const client = createClient({
  projectId,
  dataset,
  useCdn: true, // Enable for faster response, disable if fresh content is needed
  apiVersion: '2023-10-01', // adjust if needed
});

// Initialize the image URL builder with client
const builder = imageUrlBuilder(client);

// Export helper to generate image URLs
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
