import { v2 as cloudinary } from "cloudinary";
const env = useRuntimeConfig();
cloudinary.config({
  cloud_name: "safegergisportfolio",
  api_key: "711217468236935",
  api_secret: env.cloudinarySecret,
});

interface CloudinaryResource {
  public_id: string;
  tags: string[];
}

interface ImageObject {
  id: string;
  tags: string[];
}

interface Endpoint {
  images: ImageObject[];
}

export default defineEventHandler(async (event): Promise<Endpoint> => {
  try {
    const result = await cloudinary.api.resources({
      max_results: 50,
      tags: true,
    });
    const imageObjects = result.resources.map(
      (resource: CloudinaryResource) => ({
        id: resource.public_id,
        tags: resource.tags,
      })
    );
    return { images: imageObjects };
  } catch (error) {
    console.error("Error fetching public IDs:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch images from Cloudinary",
    });
  }
});
