import { v2 as cloudinary } from "cloudinary";
const env = useRuntimeConfig();
cloudinary.config({
  cloud_name: "safegergisportfolio",
  api_key: "711217468236935",
  api_secret: env.cloudinarySecret,
});

interface cloudinaryResource {
  public_id: string;
}

let publicIds: string[] = [];
cloudinary.api
  .resources({ max_results: 50 })
  .then((jsonData) => {
    publicIds = jsonData.resources.map(
      (resource: cloudinaryResource) => resource.public_id
    );
  })
  .catch((error) => {
    console.error("Error fetching public IDs:", error);
  });

interface endpoint {
  images: string[];
}
export default defineEventHandler(async (event): Promise<endpoint> => {
  return {
    images: publicIds,
  };
});
