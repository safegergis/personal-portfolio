# Safe Gergis Portfolio

This is a personal portfolio website built with Nuxt 3, showcasing my skills, projects, and photography.

## Features

- Modern, responsive design with Tailwind CSS
- Dynamic image gallery using Cloudinary
- Skills showcase with filterable categories
- Contact form functionality
- SEO optimized with meta tags

## Prerequisites

- Node.js (v16 or later recommended)
- PNPM, NPM, Yarn, or Bun

## Setup

### Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Using npm
npm install

# Using yarn
yarn install

# Using bun
bun install
```

### API Keys Configuration

This project requires the following API keys:

#### 1. Cloudinary (Required for Image Gallery)

The project uses Cloudinary for image hosting and management. To set this up:

1. Create a free account on [Cloudinary](https://cloudinary.com/users/register/free)
2. Navigate to your Cloudinary dashboard
3. Create a `.env` file in the root directory with the following variables:

```
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
```

4. Update the `nuxt.config.ts` file with your Cloudinary cloud name if different:

```typescript
image: {
  cloudinary: {
    baseURL: "https://res.cloudinary.com/your_cloud_name/image/upload/",
  },
},
```

5. For the Cloudinary API configuration, update your API key in `server/api/images.ts`:

```typescript
cloudinary.config({
  cloud_name: "your_cloud_name",
  api_key: "your_api_key",
  api_secret: env.cloudinarySecret,
});
```

#### 2. Vercel Analytics (Optional)

The project is configured to use Vercel Analytics:

1. No specific API key is required as it's automatically configured when deploying to Vercel
2. If you don't want to use Vercel Analytics, you can remove the plugin by:
   - Removing `"~/plugins/analytics.client.ts"` from the plugins array in `nuxt.config.ts`
   - Deleting the `plugins/analytics.client.ts` file

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# Using pnpm
pnpm run dev

# Using npm
npm run dev

# Using yarn
yarn dev

# Using bun
bun run dev
```

## Production

Build the application for production:

```bash
# Using pnpm
pnpm run build

# Using npm
npm run build

# Using yarn
yarn build

# Using bun
bun run build
```

Locally preview production build:

```bash
# Using pnpm
pnpm run preview

# Using npm
npm run preview

# Using yarn
yarn preview

# Using bun
bun run preview
```
