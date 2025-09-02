# Source Directory Guide

## Structure Overview
```
src/
└── app/               # Next.js App Router
    ├── components/    # Reusable UI components
    ├── api/          # API routes
    ├── pages/        # Route pages (about-us, contact-us, etc.)
    ├── types/        # TypeScript type definitions
    ├── utils/        # App-specific utilities
    └── ...           # Other app routes
```

## Component Architecture

### Core Components (`src/app/components/`)
- **Header.tsx**: Navigation with responsive design
- **Footer.tsx**: Site footer with links and info
- **Button.tsx**: Reusable button component with variants
- **Heading.tsx**: Typography component for headings
- **Loader.tsx**: Loading states and skeletons

### Page Components
- **Banner.tsx**: Hero section component
- **Features.tsx**: Feature showcase with animations
- **Testimonials.tsx**: Customer testimonials slider
- **FAQs.tsx**: Frequently asked questions
- **Download.tsx**: App download section

### Utility Components
- **SwiperSlider.tsx**: Swiper.js integration wrapper
- **ProgressiveImage.tsx**: Optimized image loading
- **Breadcrumb.tsx**: Navigation breadcrumbs

## Development Patterns

### Styling
- Use Tailwind utility classes
- Custom CSS in `globals.css` for complex animations
- Responsive design with mobile-first approach
- Custom gradient and shadow utilities

### TypeScript
- Define interfaces in `types/` directory
- Use strict typing for props and state
- Export types for reusability

### Animation
- GSAP for complex animations
- CSS animations for simple effects
- Swiper for carousels and sliders

## API Routes (`src/app/api/`)
- **send-email.ts**: Contact form email handler using Nodemailer

## Guidelines
- Component names use PascalCase
- File organization by feature/function
- Maintain responsive design patterns
- Follow existing animation and styling patterns
- Use TypeScript for all new components