# زاهي للخياطة الرجالية الفاخرة - Next.js Website

This is the Next.js version of the Zahi Thobe Tailoring website. The website has been converted from a static HTML/CSS/JS site to a modern Next.js application with component-based architecture and optimized SEO.

## Features

- **Component-Based Architecture**: The website is built using reusable React components
- **Responsive Design**: Fully responsive design using Tailwind CSS
- **RTL Support**: Full right-to-left support for Arabic language
- **SEO Optimized**: Includes metadata, structured data, sitemap, and robots.txt
- **Performance Optimized**: Uses Next.js Image component and other optimizations
- **Smooth Animations**: Maintains the original animations using React hooks

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React Hooks
- Font Awesome

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

Then, you can start the production server:

```bash
npm run start
# or
yarn start
```

## Project Structure

- `src/app`: Next.js app router pages
- `src/components`: React components
  - `layout`: Layout components (Header, Footer)
  - `home`: Home page section components
  - `shared`: Shared components used across multiple sections
  - `ui`: UI components (buttons, cards, etc.)
- `src/data`: Data files (testimonials, etc.)
- `src/styles`: Global styles
- `public`: Static assets (images, favicon, etc.)

## SEO Features

- Meta tags for title, description, and keywords
- Structured data (JSON-LD) for rich search results
- Sitemap.xml for search engine crawling
- Robots.txt for search engine directives
- Optimized image loading with Next.js Image component
