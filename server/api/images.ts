import { v2 as cloudinary } from "cloudinary";

const env = useRuntimeConfig();
cloudinary.config({
  cloud_name: "safegergisportfolio",
  api_key: "711217468236935",
  api_secret: env.cloudinarySecret,
});
const images = cloudinary.api.resources().then((result) => result);

export default defineEventHandler(async (event) => {
  return images;
});
