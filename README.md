# TechVision

TechVision is a digital platform focused on developing innovative technology solutions to help businesses and communities grow in the digital era. This project showcases the company's portfolio of services, technologies, projects, testimonials, and achievements with a modern look based on Next.js, Tailwind CSS, and interactive animations.

## Main Features

- **Interactive Landing Page**: Hero section with animation and highlights.
- **About Us**: Company information, vision, mission, and development timeline.
- **Technology**: Showcase of technology stacks used (cloud, backend, frontend, devops, etc).
- **Achievements & Certificates**: Parallax gallery for awards and certifications.
- **Projects**: Carousel showcase of featured projects.
- **Testimonials**: Infinite moving cards for client testimonials.
- **Services**: Main services grid with detail modal.
- **FAQ**: List of frequently asked questions with open/close animation.
- **Contact**: List of social channels and business contacts.
- **Navigation**: Floating navbar for section navigation.
- **Animation**: GSAP, Framer Motion, and custom animations for transitions and interactive effects.

## Technologies Used

- **Next.js** (React 18)
- **TypeScript**
- **Tailwind CSS** & custom Tailwind config
- **Framer Motion** & GSAP for animations
- **Radix UI** & Tabler Icons
- **Zustand** for state management
- **Styled Components**
- **Mini SVG Data URI** (for SVG backgrounds)
- **PostCSS**
- **Devicon** (for technology stack icons)
- **Others**: clsx, tailwind-merge, sharp, etc.

## Directory Structure

- `/app` — Main pages and global styles.
- `/components` — UI components, section templates, animations, and utilities.
- `/public/assets` — Images, logos, dummy certificates/projects.
- `/store` — State management (Zustand).
- `/hooks` — Custom React hooks.
- `/lib` — Utility functions.
- `tailwind.config.ts` — Custom Tailwind configuration.
- `postcss.config.mjs` — PostCSS configuration.

## Installation & Development

1. **Clone the repository**

   ```bash
   git clone <repo-url>
   cd zulporto
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Access the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deploy

- **Build for production**
  ```bash
  npm run build
  ```
- **Start production server**
  ```bash
  npm start
  ```

## Customization

- **Tailwind Configuration**: Edit `tailwind.config.ts` to add colors, fonts, animations, etc.
- **Assets**: Replace images/logos in `/public/assets`.
- **Content**: Edit data in template files under `/components/template/`.

## Contact

For questions or support, please contact [suryazulfikar22@gmail.com].
