import { v2 as cloudinary } from "cloudinary";
const env = useRuntimeConfig();
cloudinary.config({
  cloud_name: "safegergisportfolio",
  api_key: "711217468236935",
  api_secret: env.cloudinarySecret,
});

interface CloudinaryResource {
  public_id: string;
}

interface Endpoint {
  images: string[];
}

export default defineEventHandler(async (event): Promise<Endpoint> => {
  try {
    const result = await cloudinary.api.resources({ max_results: 50 });
    const publicIds = result.resources.map(
      (resource: CloudinaryResource) => resource.public_id
    );
    return { images: publicIds };
  } catch (error) {
    console.error("Error fetching public IDs:", error);
    return { images: [] };
  }
});
